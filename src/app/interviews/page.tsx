import type { Metadata } from "next";
import Link from "next/link";
import EyebrowLabel from "@/components/EyebrowLabel";
import GhostNumber from "@/components/GhostNumber";
import InterviewCard from "@/components/InterviewCard";
import { getInterviews, getRichText } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const metadata: Metadata = {
  title: "Rashi Goel — In the Field",
  description:
    "Conversations with clinicians, informaticists, builders, and leaders shaping the future of healthcare.",
};

export default async function InterviewsPage() {
  let interviews: PageObjectResponse[] = [];
  try {
    const results = await getInterviews();
    interviews = results as PageObjectResponse[];
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
        <GhostNumber number="06" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <EyebrowLabel text="In the Field" />
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 900,
              color: "#1A1A1A",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              maxWidth: "500px",
            }}
          >
            The people{" "}
            <span style={{ color: "#B5540B" }}>building healthcare.</span>
          </h1>
          <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.7, maxWidth: "420px", marginBottom: "8px" }}>
            Conversations with clinicians, informaticists, builders, and leaders — in Canada and
            beyond. Their roles, their paths, and what the work actually looks like.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "10px",
              color: "#9A8E7E",
            }}
          >
            New interview every two weeks
          </p>
        </div>
      </section>

      <div style={{ padding: "32px 0" }}>
        {interviews.length === 0 ? (
          <div style={{ padding: "40px 0" }}>
            <p
              style={{
                color: "#9A8E7E",
                fontStyle: "italic",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              First interview coming soon.
            </p>
            <p style={{ color: "#9A8E7E", fontSize: "13px", marginBottom: "16px" }}>
              Know someone doing important work in healthcare? Nominate them.
            </p>
            <Link
              href="mailto:hello@rashigoel.io?subject=Interview nomination"
              style={{
                border: "1.5px solid #1A1A1A",
                color: "#1A1A1A",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "8px 16px",
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              Nominate someone →
            </Link>
          </div>
        ) : (
          <div>
            {interviews.map((interview, i) => {
              const props = interview.properties as any;
              return (
                <InterviewCard
                  key={interview.id}
                  guestName={getRichText(props["Guest Name"])}
                  guestRole={getRichText(props["Guest Role"])}
                  guestOrganization={getRichText(props["Guest Organization"])}
                  pullQuote={getRichText(props["Pull Quote"])}
                  date={props["Date"]?.date?.start || ""}
                  slug={getRichText(props["Slug"])}
                  episodeNumber={i + 1}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
