import type { Metadata } from "next";
import Link from "next/link";
import EyebrowLabel from "@/components/EyebrowLabel";
import GhostNumber from "@/components/GhostNumber";
import OutlineTag from "@/components/OutlineTag";
import DemoPatientCallout from "@/components/DemoPatientCallout";
import { GitHubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Rashi Goel — Projects",
  description:
    "Projects and case studies at the intersection of healthcare and technology — clinical decision support, interoperability, digital health and more.",
};

export default function ProjectsPage() {
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
        <GhostNumber number="03" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <EyebrowLabel text="Work" />
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
            Projects &{" "}
            <span style={{ color: "#B5540B" }}>Case Studies.</span>
          </h1>
          <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.7, maxWidth: "420px" }}>
            Real FHIR applications built to solve real clinical problems in Canada&apos;s healthcare system.
          </p>
        </div>
      </section>

      <div style={{ padding: "32px 0" }}>
        {/* Care Gap Dashboard — Full case study */}
        <div
          style={{
            border: "1.5px solid #1A1A1A",
            padding: "24px",
            marginBottom: "16px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "8px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: "4px",
                }}
              >
                Care Gap Dashboard
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "11px",
                  color: "#9A8E7E",
                }}
              >
                FHIR-native clinical decision support for primary care
              </p>
            </div>
            <span
              style={{
                background: "#1A1A1A",
                color: "#F8F3EC",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "9px",
                padding: "4px 10px",
                flexShrink: 0,
              }}
            >
              Live
            </span>
          </div>

          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
            {["FHIR R4", "React", "Azure OpenAI GPT-4o", "Tailwind", "Bun", "Vite"].map((tag) => (
              <OutlineTag key={tag} text={tag} />
            ))}
          </div>

          <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
            <Link
              href="https://github.com/rashigoel"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#1A1A1A",
                color: "#F8F3EC",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "8px 16px",
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <GitHubIcon size={13} /> GitHub →
            </Link>
          </div>

          <div style={{ borderTop: "1px solid #D8D0C4", paddingTop: "20px" }}>
            {/* The Problem */}
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#1A1A1A",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                The Problem
              </p>
              <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.7 }}>
                Family physicians in Canada manage panels averaging 1,500 patients. Between 20–40%
                of chronic disease patients miss recommended monitoring intervals — not from lack of
                care, but because no system is actively watching for gaps. The downstream cost:
                preventable hospitalizations at $10,000–$15,000 each. Diabetes alone costs Canadian
                healthcare $30 billion annually.
              </p>
            </div>

            {/* What It Does */}
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#1A1A1A",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                What It Does
              </p>
              <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.7, marginBottom: "10px" }}>
                Four chronic conditions: Type 2 Diabetes, Hypertension, CKD, Hyperlipidemia. Eight
                clinical rules: four monitoring rules for diagnosed patients + four screening rules
                that catch undiagnosed disease from abnormal lab values. CRITICAL / HIGH / MEDIUM /
                LOW triage. Patient Panel, Patient Detail, Population Dashboard views. AI Clinical
                Summary via GPT-4o. Works with any FHIR-compliant EHR.
              </p>
            </div>

            {/* Demo patient */}
            <div style={{ marginBottom: "20px" }}>
              <DemoPatientCallout />
            </div>

            {/* Technical Implementation */}
            <div>
              <p
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#1A1A1A",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Technical Implementation
              </p>

              <div style={{ marginBottom: "12px" }}>
                <p style={{ fontSize: "10px", color: "#9A8E7E", marginBottom: "6px" }}>
                  FHIR Resources Used
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {["Patient", "Observation", "Condition", "MedicationRequest", "FamilyMemberHistory", "Practitioner", "Task", "ServiceRequest", "Appointment"].map(
                    (r) => <OutlineTag key={r} text={r} />
                  )}
                </div>
              </div>

              <div style={{ marginBottom: "12px" }}>
                <p style={{ fontSize: "10px", color: "#9A8E7E", marginBottom: "4px" }}>
                  Clinical Guidelines
                </p>
                <p style={{ fontSize: "12px", color: "#6B5E50" }}>
                  Diabetes Canada CPG 2023 · Hypertension Canada 2023 · CTFPHC
                </p>
              </div>

              <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.7 }}>
                Built with awareness of the HL7 Da Vinci DEQM framework — the industry direction
                for standardized gaps-in-care reporting in production systems. Designed for the
                regulatory environment Bill S-5 (Connected Care for Canadians Act) is creating.
              </p>
            </div>
          </div>
        </div>

        {/* Mirth Connect planned project */}
        <div
          style={{
            border: "1px solid #D8D0C4",
            padding: "20px",
            opacity: 0.9,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "10px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#1A1A1A",
              }}
            >
              Mirth Connect HL7 v2 → FHIR Pipeline
            </h2>
            <span
              style={{
                background: "#F0E6D8",
                color: "#B5540B",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "9px",
                padding: "4px 10px",
                flexShrink: 0,
              }}
            >
              In Progress
            </span>
          </div>
          <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.6, marginBottom: "12px" }}>
            An integration engine pipeline converting HL7 v2 ADT messages to FHIR Patient and
            Encounter resources. Demonstrates message transformation skills required for health
            authority integration roles.
          </p>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {["Mirth Connect", "HL7 v2", "FHIR R4", "ADT Messages"].map((tag) => (
              <OutlineTag key={tag} text={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
