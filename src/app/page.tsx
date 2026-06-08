import Link from "next/link";
import EyebrowLabel from "@/components/EyebrowLabel";
import GhostNumber from "@/components/GhostNumber";
import InterviewCard from "@/components/InterviewCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import OutlineTag from "@/components/OutlineTag";
import { getInterviews, getRichText } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function Home() {
  let interviews: PageObjectResponse[] = [];
  try {
    const results = await getInterviews();
    interviews = (results as PageObjectResponse[]).slice(0, 2);
  } catch {
    // empty state handled below
  }

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "#F8F3EC",
          padding: "48px 24px 40px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #D8D0C4",
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        <GhostNumber number="01" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <EyebrowLabel text="Health Informatics · Digital Health · Interoperability" />
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 44px)",
              fontWeight: 900,
              color: "#1A1A1A",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              maxWidth: "520px",
            }}
          >
            I want to make healthcare{" "}
            <span style={{ color: "#B5540B" }}>work better</span>
            {" "}for the people who need it and the people who deliver it.
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "#6B5E50",
              lineHeight: 1.7,
              maxWidth: "420px",
              marginBottom: "24px",
            }}
          >
            A healthcare student obsessed with the intersection of clinical knowledge and
            technology — and what becomes possible when the two meet.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
            <Link
              href="/projects"
              style={{
                background: "#1A1A1A",
                color: "#F8F3EC",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "10px 20px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View Projects →
            </Link>
            <Link
              href="/about"
              style={{
                border: "1.5px solid #1A1A1A",
                color: "#1A1A1A",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "10px 20px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              My Story
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "0",
              flexWrap: "wrap",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "10px",
              color: "#9A8E7E",
            }}
          >
            {["Surrey, BC", "HIM '27", "Health Informatics", "Digital Health"].map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && (
                  <span style={{ color: "#C8BFB0", margin: "0 10px" }}>/</span>
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section
        style={{
          padding: "32px 24px",
          borderBottom: "1px solid #D8D0C4",
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <EyebrowLabel text="Featured Work" />
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "48px",
                color: "#EDE5D8",
                lineHeight: 1,
                fontWeight: 900,
              }}
            >
              01
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#1A1A1A",
              }}
            >
              Care Gap Dashboard
            </h2>
          </div>
        </div>

        <div
          style={{
            border: "1.5px solid #1A1A1A",
            padding: "20px",
            background: "#F8F3EC",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "10px",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "#1A1A1A",
              }}
            >
              Care Gap Dashboard
            </span>
            <span
              style={{
                background: "#1A1A1A",
                color: "#F8F3EC",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "9px",
                padding: "4px 10px",
              }}
            >
              Medblocks FHIR Challenge
            </span>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "#6B5E50",
              lineHeight: 1.6,
              marginBottom: "12px",
            }}
          >
            A clinician-facing FHIR R4 application that surfaces chronic disease
            monitoring gaps for primary care physicians. Eight clinical rules across
            four conditions, AI-generated clinical briefs via Azure OpenAI GPT-4o.
          </p>

          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
            {["FHIR R4", "React", "Azure OpenAI", "Tailwind", "Bun"].map((tag) => (
              <OutlineTag key={tag} text={tag} />
            ))}
          </div>

          <Link
            href="/projects"
            style={{
              fontSize: "10px",
              color: "#B5540B",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textDecoration: "none",
              display: "block",
            }}
          >
            Read Case Study →
          </Link>
        </div>
      </section>

      {/* In the Field */}
      <section
        style={{
          padding: "32px 24px",
          borderBottom: "1px solid #D8D0C4",
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        <EyebrowLabel text="In the Field" />
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "48px",
              color: "#EDE5D8",
              lineHeight: 1,
              fontWeight: 900,
            }}
          >
            02
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#1A1A1A",
              maxWidth: "400px",
              lineHeight: 1.3,
            }}
          >
            Conversations with people building healthcare.
          </h2>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "#6B5E50",
            marginBottom: "20px",
          }}
        >
          New interview every two weeks.
        </p>

        {interviews.length > 0 ? (
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
        ) : (
          <p
            style={{
              textAlign: "center",
              color: "#9A8E7E",
              fontStyle: "italic",
              fontSize: "13px",
              padding: "24px 0",
            }}
          >
            First interview coming soon.
          </p>
        )}
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
}
