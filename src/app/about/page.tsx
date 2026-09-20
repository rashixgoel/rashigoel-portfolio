import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Rashi Goel",
  description:
    "Health Information Management student in Greater Vancouver. I work across clinical systems, interoperability, health data, and workflow improvement.",
  openGraph: {
    title: "About — Rashi Goel",
    description:
      "Health Information Management student in Greater Vancouver. I work across clinical systems, interoperability, health data, and workflow improvement.",
  },
};

const areas = [
  "Clinical systems",
  "Interoperability and integration",
  "Data and analytics",
  "Workflow / process improvement",
  "Responsible automation",
  "Technology-enabled operations",
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--canvas)",
          borderBottom: "1px solid var(--border)",
          padding: "64px 32px 56px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "11px",
              color: "var(--teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            About
          </p>
          <h1
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--ink)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "700px",
            }}
          >
            I became interested in technology by working inside the workflow.
          </h1>
        </div>
      </section>

      {/* ── Story ── */}
      <section
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
          padding: "64px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "64px",
            alignItems: "start",
          }}
        >
          <div style={{ maxWidth: "740px" }}>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              I started on the operational side of healthcare, not the technical side.
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              At a multidisciplinary clinic, I help manage the information surrounding more than 150 appointments each week: patient details, documentation, insurance claims, follow-up, and the exceptions that do not fit neatly into the normal process.
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              The work taught me something important. Many frustrating healthcare problems are not caused by a lack of information. The information already exists. It is simply trapped in the wrong format, the wrong system, or the wrong part of the workflow.
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              That made me curious.
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              Why does information have to be re-entered when it already exists somewhere else? Why can a person understand a document immediately while the software receiving it cannot? When can automation remove repetitive work, and when does a person still need to make the decision?
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              I am studying Health Information Management at Douglas College because the discipline sits directly inside those questions.
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              My work now spans health data standards, interoperability, clinical systems, analytics, workflow design, privacy, and responsible automation.
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "32px", fontWeight: 600 }}>
              I learn best by building.
            </p>

            <div
              style={{
                borderLeft: "3px solid var(--teal-soft)",
                paddingLeft: "20px",
                marginBottom: "28px",
                borderLeftColor: "var(--teal)",
              }}
            >
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.85, marginBottom: "14px" }}>
                CareSignal began with a question about whether existing patient data could be used more proactively to identify gaps in chronic-disease care.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.85, marginBottom: "14px" }}>
                FaxBridge began with a question I encountered much closer to the front line: what would it take to make the information inside a fax usable by another system without introducing new patient-safety risks?
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.85 }}>
                My Hospital Harm analysis explores a different side of the same problem: how data can reveal patterns, where interpretation can go too far, and what decision-makers need before turning an observed disparity into action.
              </p>
            </div>

            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              The common thread is not one technology or one job title.
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.9, marginBottom: "20px" }}>
              I like complex environments where people, information, rules, and technology all have to work together.
            </p>
            <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.9, fontWeight: 600 }}>
              That is the kind of work I want to keep getting better at.
            </p>
          </div>

          {/* Photo — narrower on large screens */}
          <div className="hidden lg:block" style={{ width: "220px", flexShrink: 0 }}>
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/rashi.jpeg"
                alt="Rashi Goel"
                width={1829}
                height={2430}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "10px",
                color: "var(--muted)",
                marginTop: "8px",
              }}
            >
              Rashi Goel · Vancouver, BC
            </p>
          </div>
        </div>
      </section>

      {/* ── Areas of Interest ── */}
      <section
        style={{
          background: "var(--canvas)",
          borderBottom: "1px solid var(--border)",
          padding: "56px 32px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "24px",
            }}
          >
            Areas I&apos;m interested in
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {areas.map((area) => (
              <span
                key={area}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "7px 14px",
                  fontSize: "14px",
                  color: "var(--ink)",
                  fontWeight: 500,
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education + Experience ── */}
      <section
        id="experience"
        style={{
          background: "var(--surface)",
          padding: "64px 32px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "11px",
              color: "var(--teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "40px",
            }}
          >
            Background
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Education */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "20px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "12px",
                }}
              >
                Education
              </h3>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--ink)", marginBottom: "4px" }}>
                Bachelor of Science, Health Information Management
              </p>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)", marginBottom: "4px" }}>
                Douglas College
              </p>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)", marginBottom: "8px" }}>
                Expected 2027 · GPA 4.05
              </p>
              <div
                style={{
                  background: "var(--teal-soft)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "10px 14px",
                  marginTop: "12px",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--teal)", marginBottom: "4px" }}>
                  Awards
                </p>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>
                  Student Award for Educational Excellence<br />
                  International Returning Scholarship
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "20px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "12px",
                }}
              >
                Experience
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink)", marginBottom: "2px" }}>
                    Administrative Assistant
                  </p>
                  <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
                    Columbia Integrated Health Centre · 2025–Present
                  </p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {[
                      "Multidisciplinary clinic",
                      "Support information and workflows for 150+ appointments weekly",
                      "Process approximately 40–50 insurance claims daily",
                      "Jane App EMR",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "13px",
                          color: "var(--muted)",
                          lineHeight: 1.6,
                          marginBottom: "3px",
                          paddingLeft: "14px",
                          position: "relative",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "var(--teal)" }}>–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink)", marginBottom: "2px" }}>
                    Communications Volunteer
                  </p>
                  <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)" }}>
                    BCHIMSS / HIMSS British Columbia · 2026–Present
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink)", marginBottom: "2px" }}>
                    Peer Tutor
                  </p>
                  <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)" }}>
                    Douglas College · 2024–2026
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "20px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "12px",
                }}
              >
                Credentials
              </h3>
              {[
                { name: "SNOMED CT Foundation", status: "Completed" },
                { name: "FOIPPA Foundations", status: "Completed" },
                { name: "TCPS 2", status: "Completed" },
                { name: "First Aid", status: "Completed" },
                { name: "ECBA — Entry Certificate in Business Analysis", status: "In progress" },
              ].map((c) => (
                <div
                  key={c.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--border)",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "var(--ink)", fontWeight: 500 }}>
                    {c.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "10px",
                      color: c.status === "In progress" ? "var(--amber)" : "var(--teal)",
                      flexShrink: 0,
                    }}
                  >
                    {c.status}
                  </span>
                </div>
              ))}

              <div style={{ marginTop: "32px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "12px",
                  }}
                >
                  Skills
                </p>
                {[
                  { label: "Health data & standards", items: "FHIR R4, HL7, SNOMED CT, ICD-10-CA, CCI" },
                  { label: "Analytics", items: "Excel, Power BI, Tableau, SQL" },
                  { label: "Systems & workflow", items: "Jane App, requirements analysis, process mapping, documentation" },
                ].map((g) => (
                  <div key={g.label} style={{ marginBottom: "12px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink)", marginBottom: "2px" }}>
                      {g.label}
                    </p>
                    <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--muted)", lineHeight: 1.6 }}>
                      {g.items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--border)" }}>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>
              For a PDF copy of my résumé, reach out directly.
            </p>
            <Link
              href="/contact"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--teal)",
                textDecoration: "none",
              }}
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
