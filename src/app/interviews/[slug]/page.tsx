import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getInterviewBySlug, getPageContent, getRichText } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Metadata } from "next";
import OutlineTag from "@/components/OutlineTag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const interview = (await getInterviewBySlug(slug)) as PageObjectResponse | null;
    if (!interview) return { title: "Interview not found" };
    const props = interview.properties as any;
    return {
      title: `${getRichText(props["Guest Name"])} — In the Field | Rashi Goel`,
      description: getRichText(props["Pull Quote"]),
    };
  } catch {
    return { title: "Interview not found" };
  }
}

export default async function InterviewPage({ params }: Props) {
  const { slug } = await params;
  let interview: PageObjectResponse | null = null;
  let content = "";

  try {
    interview = (await getInterviewBySlug(slug)) as PageObjectResponse | null;
    if (interview) {
      const md = await getPageContent(interview.id);
      content = typeof md === "string" ? md : (md as any).parent || "";
    }
  } catch {
    // fall through to notFound
  }

  if (!interview) notFound();

  const props = (interview as PageObjectResponse).properties as any;
  const guestName = getRichText(props["Guest Name"]);
  const guestRole = getRichText(props["Guest Role"]);
  const guestOrg = getRichText(props["Guest Organization"]);
  const pullQuote = getRichText(props["Pull Quote"]);
  const date = props["Date"]?.date?.start || "";
  const tags: string[] = props["Tags"]?.multi_select?.map((t: any) => t.name) || [];

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "32px 24px 64px" }}>
      <Link
        href="/interviews"
        style={{
          fontSize: "11px",
          color: "#B5540B",
          textDecoration: "none",
          display: "block",
          marginBottom: "28px",
          fontWeight: 600,
        }}
      >
        ← Back to Interviews
      </Link>

      <header style={{ marginBottom: "24px" }}>
        {date && (
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
        )}
        <h1
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "28px",
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.2,
            marginBottom: "6px",
          }}
        >
          {guestName}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "12px",
            color: "#9A8E7E",
            marginBottom: "20px",
          }}
        >
          {guestRole}
          {guestOrg ? ` · ${guestOrg}` : ""}
        </p>

        {pullQuote && (
          <div
            style={{
              background: "#F0E6D8",
              borderLeft: "3px solid #B5540B",
              padding: "16px 20px",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "15px",
                color: "#6B5E50",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              &ldquo;{pullQuote}&rdquo;
            </p>
          </div>
        )}

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
