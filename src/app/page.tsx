import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rashi Goel | Health Informatics, Interoperability & Data",
  description:
    "Portfolio of Rashi Goel, a Health Information Management student in Greater Vancouver working across clinical systems, interoperability, health data, workflow improvement, and responsible automation.",
};

const projects = [
  {
    slug: "caresignal",
    name: "CareSignal",
    category: "Clinical Decision Support · FHIR",
    headline: "Turning FHIR data into prioritized chronic-disease care gaps.",
    description:
      "CareSignal applies deterministic clinical rules to patient data to identify overdue monitoring and potential screening gaps across four chronic conditions. It ranks findings by urgency and uses AI to summarize the chart while keeping the clinical rules responsible for the actual alerts.",
    tags: ["FHIR R4", "Clinical Decision Support", "Rules Engine", "Azure OpenAI", "React"],
    liveUrl: "https://care-gap-dashboard-ycrrjq4u7a-uc.a.run.app",
  },
  {
    slug: "faxbridge",
    name: "FaxBridge",
    category: "Workflow Automation · Interoperability",
    headline: "Making clinical documents computable without automating away human judgment.",
    description:
      "FaxBridge explores how incoming clinical documents can be classified, converted into structured health data, and prepared for downstream systems while keeping ambiguous patient matching and high-consequence clinical information under human review.",
    tags: ["FHIR", "AI-assisted extraction", "Human-in-the-loop", "Patient matching", "Clinical workflow"],
    liveUrl: null,
  },
  {
    slug: "hospital-harm",
    name: "Equity in Hospital Harm",
    category: "Health Data · Strategy",
    headline: "From population-level disparities to better questions about patient safety.",
    description:
      "A secondary analysis of public CIHI Hospital Harm data examining how patient-safety outcomes vary across equity dimensions, what the available data cannot establish, and how healthcare organizations could investigate disparities before choosing interventions.",
    tags: ["CIHI", "Data Analysis", "Health Equity", "Stakeholder Analysis", "Quality Improvement"],
    liveUrl: null,
  },
];

const principles = [
  {
    number: "01",
    heading: "Start with the workflow.",
    body: "Before designing technology, understand what people are actually doing, where information moves, and where exceptions occur.",
  },
  {
    number: "02",
    heading: "Make the information usable.",
    body: "A document being digital does not mean its data is structured, connected, or useful to another system.",
  },
  {
    number: "03",
    heading: "Automate with guardrails.",
    body: "The goal is not to remove humans from every task. It is to automate repetitive work while keeping judgment at the points where mistakes carry real consequences.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--canvas)",
          borderBottom: "1px solid var(--border)",
          padding: "80px 32px 72px",
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
              marginBottom: "24px",
            }}
          >
            Health Information Management · Systems · Data
          </p>
          <h1
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 800,
              color: "var(--ink)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
              maxWidth: "760px",
            }}
          >
            I turn messy healthcare workflows and data into clearer systems.
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: "560px",
              marginBottom: "36px",
            }}
          >
            I&apos;m Rashi Goel, a Health Information Management student in Greater Vancouver.
            I build and analyze at the intersection of clinical workflows, interoperability,
            data, and responsible automation.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            <Link
              href="/#work"
              style={{
                background: "var(--teal)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                padding: "11px 24px",
                textDecoration: "none",
                borderRadius: "4px",
                transition: "background 0.15s",
              }}
            >
              View selected work
            </Link>
            <Link
              href="/about"
              style={{
                background: "var(--surface)",
                color: "var(--ink)",
                fontSize: "13px",
                fontWeight: 500,
                padding: "11px 24px",
                textDecoration: "none",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                transition: "border-color 0.15s",
              }}
            >
              My story
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "0",
              flexWrap: "wrap",
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "11px",
              color: "var(--muted)",
            }}
          >
            {["Douglas College", "BSc Health Information Management", "Greater Vancouver, BC"].map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <span style={{ margin: "0 10px", opacity: 0.4 }}>·</span>}
                {item}
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "11px",
              color: "var(--teal)",
              marginTop: "12px",
              opacity: 0.85,
            }}
          >
            Open to 2027 co-op and internship opportunities.
          </p>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section
        id="work"
        style={{
          background: "var(--surface)",
          padding: "72px 32px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "11px",
                color: "var(--teal)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Selected Work
            </p>
            <h2
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                color: "var(--ink)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: "10px",
              }}
            >
              Three projects. Three different problems.
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "15px" }}>
              Involving information, systems, and decision-making.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {projects.map((project, i) => (
              <div
                key={project.slug}
                style={{
                  background: "var(--canvas)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  padding: "32px",
                  marginBottom: i < projects.length - 1 ? "12px" : 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {project.category}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 700,
                    color: "var(--ink)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    marginBottom: "8px",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--teal)",
                    fontWeight: 600,
                    marginBottom: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  {project.headline}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                    maxWidth: "680px",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link
                    href={`/work/${project.slug}`}
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--teal)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    View case study →
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "var(--muted)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Live prototype ↗
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I Think ── */}
      <section
        style={{
          background: "var(--canvas)",
          padding: "72px 32px",
          borderBottom: "1px solid var(--border)",
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
              marginBottom: "12px",
            }}
          >
            Approach
          </p>
          <h2
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 800,
              color: "var(--ink)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              marginBottom: "48px",
            }}
          >
            How I approach problems
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            {principles.map((p) => (
              <div
                key={p.number}
                style={{
                  background: "var(--surface)",
                  padding: "32px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "11px",
                    color: "var(--teal)",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {p.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.heading}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section
        style={{
          background: "var(--surface)",
          padding: "72px 32px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "64px",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "11px",
                  color: "var(--teal)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                About
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 800,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  marginBottom: "0",
                }}
              >
                The work started with questions.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.85, marginBottom: "16px" }}>
                I started on the operational side of healthcare.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.85, marginBottom: "16px" }}>
                Working in a multidisciplinary clinic exposed me to the invisible work behind patient care: appointments, claims, documents, follow-up, missing information, and the small exceptions that can slow an entire workflow down.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.85, marginBottom: "16px" }}>
                It made me curious about the systems underneath that work. Why does the same information have to be entered more than once? Why can one system understand a clinical value while another only sees a PDF? Where should automation stop and human judgment begin?
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.85, marginBottom: "28px" }}>
                Those questions are what pushed me toward health information management, interoperability, data, and systems work.
              </p>
              <Link
                href="/about"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--teal)",
                  textDecoration: "none",
                }}
              >
                Read my story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials Preview ── */}
      <section
        style={{
          background: "var(--canvas)",
          padding: "72px 32px",
          borderBottom: "1px solid var(--border)",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "40px",
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
                  marginBottom: "16px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "10px",
                }}
              >
                Education
              </h3>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink)", marginBottom: "2px" }}>
                Bachelor of Science, Health Information Management
              </p>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
                Douglas College · Expected 2027
              </p>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--teal)" }}>
                GPA: 4.05
              </p>
              <div style={{ marginTop: "12px" }}>
                <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "2px" }}>
                  Student Award for Educational Excellence
                </p>
                <p style={{ fontSize: "12px", color: "var(--muted)" }}>
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
                  marginBottom: "16px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "10px",
                }}
              >
                Experience
              </h3>
              {[
                {
                  role: "Administrative Assistant",
                  org: "Columbia Integrated Health Centre",
                  period: "2025–Present",
                },
                {
                  role: "Communications Volunteer",
                  org: "BCHIMSS / HIMSS British Columbia",
                  period: "2026–Present",
                },
                {
                  role: "Peer Tutor",
                  org: "Douglas College",
                  period: "2024–2026",
                },
              ].map((item) => (
                <div key={item.role} style={{ marginBottom: "16px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink)", marginBottom: "1px" }}>
                    {item.role}
                  </p>
                  <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)" }}>
                    {item.org} · {item.period}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "10px",
                }}
              >
                Skills
              </h3>
              {[
                {
                  label: "Health data & standards",
                  items: "FHIR R4, HL7, SNOMED CT, ICD-10-CA, CCI",
                },
                {
                  label: "Analytics",
                  items: "Excel, Power BI, Tableau, SQL",
                },
                {
                  label: "Systems & workflow",
                  items: "Jane App, requirements analysis, process mapping, documentation",
                },
              ].map((group) => (
                <div key={group.label} style={{ marginBottom: "14px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--ink)", marginBottom: "3px" }}>
                    {group.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--muted)", lineHeight: 1.6 }}>
                    {group.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section
        style={{
          background: "var(--surface)",
          padding: "72px 32px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "600px" }}>
            <h2
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                color: "var(--ink)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: "16px",
              }}
            >
              Let&apos;s talk about systems that could work better.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "32px" }}>
              I&apos;m interested in opportunities involving health technology, interoperability, data, clinical systems, workflow improvement, and technology-enabled operations.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="mailto:hello@rashigoel.io"
                style={{
                  background: "var(--teal)",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "11px 24px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/-rashi-goel/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--surface)",
                  color: "var(--ink)",
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "11px 24px",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
