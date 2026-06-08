import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug, getPageContent, getRichText, getTitle } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Metadata } from "next";
import OutlineTag from "@/components/OutlineTag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = (await getBlogPostBySlug(slug)) as PageObjectResponse | null;
    if (!post) return { title: "Post not found" };
    const props = post.properties as any;
    return {
      title: `${getTitle(props["Title"])} — Rashi Goel`,
      description: getRichText(props["Excerpt"]),
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post: PageObjectResponse | null = null;
  let content = "";

  try {
    post = (await getBlogPostBySlug(slug)) as PageObjectResponse | null;
    if (post) {
      const md = await getPageContent(post.id);
      content = typeof md === "string" ? md : (md as any).parent || "";
    }
  } catch {
    // fall through to notFound
  }

  if (!post) notFound();

  const props = (post as PageObjectResponse).properties as any;
  const title = getTitle(props["Title"]);
  const date = props["Date"]?.date?.start || "";
  const tags: string[] = props["Tags"]?.multi_select?.map((t: any) => t.name) || [];

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "32px 24px 64px" }}>
      <Link
        href="/blog"
        style={{
          fontSize: "11px",
          color: "#B5540B",
          textDecoration: "none",
          display: "block",
          marginBottom: "28px",
          fontWeight: 600,
        }}
      >
        ← Back to Writing
      </Link>

      <header style={{ marginBottom: "24px" }}>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "10px",
            color: "#9A8E7E",
            marginBottom: "10px",
          }}
        >
          {date}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "28px",
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          {title}
        </h1>
        {tags.length > 0 && (
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <OutlineTag key={tag} text={tag} />
            ))}
          </div>
        )}
      </header>

      <div style={{ borderTop: "1px solid #D8D0C4", paddingTop: "24px" }} />

      <div className="pi-prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
