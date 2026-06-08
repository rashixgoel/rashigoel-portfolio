import type { Metadata } from "next";
import EyebrowLabel from "@/components/EyebrowLabel";
import GhostNumber from "@/components/GhostNumber";

export const metadata: Metadata = {
  title: "Rashi Goel — Learning",
  description:
    "A living record of what I am working on, what I have completed, and what I am reading. Updated as I go.",
};

function SectionHeader({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "9px",
          color: "#B5540B",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "8px",
        }}
      >
        {number} / {label}
      </p>
      <h2
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "18px",
          fontWeight: 700,
          color: "#1A1A1A",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function LearningPage() {
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
        <GhostNumber number="04" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <EyebrowLabel text="Learning" />
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
            Studying. Learning. Building.
          </h1>
          <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.7, maxWidth: "420px" }}>
            A living record of what I am working on, what I have completed, and what I am reading.
            Updated as I go.
          </p>
        </div>
      </section>

      <div style={{ padding: "40px 0", display: "flex", flexDirection: "column", gap: "48px" }}>

        {/* Section 1 — Right now */}
        <section>
          <SectionHeader number="01" label="Right now" title="What I am actively working on." />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              {
                label: "Project",
                title: "Care Gap Dashboard",
                description:
                  "Built a FHIR R4 clinical decision support application prototype. Integrated Azure OpenAI for clinical summaries across four chronic conditions.",
                meta: "In progress",
              },
              {
                label: "Certification",
                title: "HL7 FHIR Foundational Implementer Exam",
                description:
                  "Self-studying toward the foundational certification in FHIR implementation. Working through the specification and practice questions independently.",
                meta: "Target: late 2026",
              },
              {
                label: "Certification",
                title: "ECBA — Entry Certificate in Business Analysis",
                description:
                  "Studying for the entry-level business analysis certification from IIBA. Covers requirements management, stakeholder analysis, and structured analytical thinking.",
                meta: "In progress",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  border: "1.5px solid #1A1A1A",
                  padding: "18px",
                  background: "#F8F3EC",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "9px",
                    color: "#B5540B",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "8px",
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#6B5E50",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "10px",
                    color: "#B5540B",
                    marginTop: "10px",
                    marginBottom: 0,
                  }}
                >
                  {card.meta}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 — Completed */}
        <section style={{ borderTop: "1px solid #D8D0C4", paddingTop: "40px" }}>
          <SectionHeader number="02" label="Completed" title="What I have finished." />
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                title: "SNOMED CT E-Learning Foundation Course",
                badge: "Completed",
                badgeStyle: { background: "#E8F0E8", color: "#3A6B3A" },
                source: "SNOMED International · 2026",
                description:
                  "Covered the concept model, RF2 release file formats, editorial guidance, and terminology browsing. Foundational for anyone working with clinical data.",
              },
              {
                title: "Health Information Management — BScHIM",
                badge: "In progress",
                badgeStyle: { background: "#F0E6D8", color: "#B5540B" },
                source: "Douglas College · Graduating 2027",
                description:
                  "Health data governance, clinical coding (ICD-10-CA, ICD-11), Canadian privacy law (PHIPA, PIPEDA), health information systems, and clinical workflow analysis.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  border: "1px solid #D8D0C4",
                  padding: "18px",
                  marginBottom: "10px",
                  background: "#F8F3EC",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "6px",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      fontWeight: 600,
                      padding: "3px 8px",
                      flexShrink: 0,
                      ...item.badgeStyle,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "10px",
                    color: "#9A8E7E",
                    marginBottom: "8px",
                  }}
                >
                  {item.source}
                </p>
                <p style={{ fontSize: "12px", color: "#6B5E50", lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — Reading */}
        <section style={{ borderTop: "1px solid #D8D0C4", paddingTop: "40px" }}>
          <SectionHeader number="03" label="Reading" title="What I am reading." />
          <div>
            {[
              {
                number: "01",
                title: "The Digital Doctor — Robert Wachter",
                take: "A grounded look at what actually happened when hospitals adopted EHRs.",
              },
              {
                number: "02",
                title: "HL7 FHIR R4 Specification",
                take: "Working through the core resources and implementation guides. The primary reference for anyone building on FHIR.",
              },
              {
                number: "03",
                title: "Bill S-5 — Connected Care for Canadians Act",
                take: "The federal legislation shaping digital health in Canada. Important context for anyone working in this space.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.number}
                style={{
                  display: "grid",
                  gridTemplateColumns: "28px 1fr",
                  gap: "16px",
                  alignItems: "start",
                  padding: "14px 0",
                  borderBottom: i < arr.length - 1 ? "0.5px solid #D8D0C4" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "18px",
                    fontWeight: 900,
                    color: "#EDE5D8",
                    lineHeight: 1.2,
                  }}
                >
                  {item.number}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: "12px", color: "#6B5E50", lineHeight: 1.6, margin: 0 }}>
                    {item.take}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
