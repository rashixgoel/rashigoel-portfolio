import type { Metadata } from "next";
import EyebrowLabel from "@/components/EyebrowLabel";
import GhostNumber from "@/components/GhostNumber";
import PostCard from "@/components/PostCard";
import { getBlogPosts, getRichText, getTitle } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const metadata: Metadata = {
  title: "Rashi Goel — Blog",
  description:
    "Deep dives on Canadian health policy, interoperability, and what's actually happening at the intersection of clinical care and health technology.",
};

function estimateReadingTime(text: string): number {
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

export default async function BlogPage() {
  let posts: PageObjectResponse[] = [];
  try {
    const results = await getBlogPosts();
    posts = results as PageObjectResponse[];
  } catch {
    // empty state below
  }

  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 24px" }}>
      {/* Hero */}
      <section
        style={{
          padding: "48px 0 40px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #D8D0C4",
        }}
      >
        <GhostNumber number="05" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <EyebrowLabel text="Writing" />
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 900,
              color: "#1A1A1A",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Field Notes on{" "}
            <span style={{ color: "#B5540B" }}>Digital Health.</span>
          </h1>
          <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.7, maxWidth: "420px" }}>
            Deep dives on Canadian health policy, interoperability, and what&apos;s actually
            happening at the intersection of clinical care and health technology.
          </p>
        </div>
      </section>

      <div style={{ padding: "32px 0" }}>
        {posts.length === 0 ? (
          <div
            style={{
              padding: "40px 0",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#9A8E7E",
                fontStyle: "italic",
                fontSize: "14px",
                marginBottom: "6px",
              }}
            >
              First posts coming soon.
            </p>
            <p style={{ color: "#9A8E7E", fontStyle: "italic", fontSize: "13px" }}>
              Subscribe to Inside HeathTech to be notified.
            </p>
          </div>
        ) : (
          <div>
            {posts.map((post, i) => {
              const props = post.properties as any;
              const excerpt = getRichText(props["Excerpt"]);
              return (
                <PostCard
                  key={post.id}
                  index={i + 1}
                  title={getTitle(props["Title"])}
                  date={props["Date"]?.date?.start || ""}
                  excerpt={excerpt}
                  tags={props["Tags"]?.multi_select?.map((t: any) => t.name) || []}
                  slug={getRichText(props["Slug"])}
                  readingTime={estimateReadingTime(excerpt)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
