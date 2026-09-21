import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Arrow, BList, Eyebrow, Tags } from "@/components/ui";
import { CONTACT_MAILTO } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Experience — Rashi Goel",
  description:
    "Clinical operations experience at a multidisciplinary health centre, healthcare communications with BCHIMSS, and a capability map spanning automation, health data, process and privacy.",
  openGraph: {
    title: "Experience — Rashi Goel",
    description:
      "Clinical operations, healthcare communications, and a capability map across automation, health data and process.",
  },
};

const roles = [
  {
    title: "Administrative Assistant",
    org: "Columbia Integrated Health Centre",
    place: "New Westminster, BC",
    period: "June 2025 — Present",
    bullets: [
      "Manage scheduling, intake and patient records for 150+ weekly appointments in Jane App EMR while responding to patient inquiries about appointments, insurance coverage and claims across phone, email and in-person channels.",
      "Process 40+ third-party insurance claims daily, reconciling payments and resolving discrepancies by validating patient information and clinical documentation across Jane App and insurer portals.",
      "Coordinate with practitioners and administrative staff to resolve documentation gaps, streamline information handoffs and maintain accurate, confidential patient records.",
    ],
    skills: [
      "Clinical Operations",
      "Jane App",
      "Claims",
      "Patient Communication",
      "Documentation",
      "Privacy",
    ],
  },
  {
    title: "Communications Volunteer",
    org: "BCHIMSS — British Columbia Chapter of HIMSS",
    place: null,
    period: "August 2026 — Present",
    bullets: [
      "Create LinkedIn posts and newsletter content with board members, highlighting chapter initiatives, member achievements and professional events for BC’s digital health community.",
      "Build and test Mailchimp email campaigns with written content, visuals and registration links, and develop event recaps using photos, video clips and key takeaways.",
    ],
    skills: [
      "Healthcare Communications",
      "Mailchimp",
      "LinkedIn",
      "Content",
      "Event Communications",
    ],
  },
  {
    title: "Peer Tutor",
    org: "Douglas College",
    place: null,
    period: "2024 — 2026",
    bullets: [
      "Support students across quantitative and healthcare-related coursework while translating complex concepts into clear explanations.",
    ],
    skills: [],
  },
];

const capabilities = [
  {
    k: "Automation & Microsoft 365",
    items: ["Power Automate", "Outlook", "Excel Online", "Microsoft Teams", "SharePoint"],
  },
  {
    k: "AI",
    items: ["Azure OpenAI", "ChatGPT", "Claude", "Claude Code", "Microsoft Copilot"],
  },
  {
    k: "Process & Systems",
    items: [
      "Workflow analysis",
      "Process mapping",
      "Requirements analysis",
      "Testing and validation",
      "Process documentation",
      "Stakeholder engagement",
    ],
  },
  {
    k: "Data",
    items: ["Advanced Excel", "Power BI", "Tableau", "SQL", "Python"],
  },
  {
    k: "Healthcare Operations",
    items: [
      "Jane App",
      "Oscar Pro",
      "Scheduling",
      "Patient intake",
      "Third-party billing",
      "Claims reconciliation",
    ],
  },
  {
    k: "Health Data",
    items: ["FHIR R4", "HL7 v2", "SNOMED CT", "ICD-10-CA", "CCI"],
  },
  {
    k: "Communication",
    items: ["Canva", "Mailchimp", "LinkedIn content", "Newsletters", "Email campaigns"],
  },
  {
    k: "Privacy",
    items: ["PIPA", "FOIPPA", "PIPEDA"],
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="case-hero on-dark">
        <div className="wrap">
          <Eyebrow>Experience</Eyebrow>
          <h1 className="h1" style={{ marginBlock: "18px 24px", maxWidth: "16ch" }}>
            I build from real healthcare context.
          </h1>
          <p className="lede measure">
            Clinical operations inside a multidisciplinary clinic, healthcare communications for
            BC&rsquo;s digital health community, and the systems work that grew out of both.
          </p>

          <div className="hero-btns btn-row-stack">
            <a href={CONTACT_MAILTO} className="btn btn-primary">
              Email me
            </a>
            <Link href="/#work" className="btn btn-ghost">
              See the work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Roles ── */}
      <section className="section bg-white">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {roles.map((role) => (
              <Reveal key={role.title}>
                <article className="card">
                  <div className="split split-top" style={{ gap: "40px" }}>
                    <div className="sticky-meta">
                      <h2 className="h3" style={{ marginBottom: "8px" }}>
                        {role.title}
                      </h2>
                      <p className="mono" style={{ marginBottom: "4px" }}>
                        {role.org}
                      </p>
                      {role.place && (
                        <p className="mono" style={{ marginBottom: "4px" }}>
                          {role.place}
                        </p>
                      )}
                      <p className="mono" style={{ color: "var(--blue)" }}>
                        {role.period}
                      </p>
                    </div>

                    <div>
                      <BList items={role.bullets} />
                      {role.skills.length > 0 && (
                        <div style={{ marginTop: "24px" }}>
                          <Tags items={role.skills} />
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capability map ── */}
      <section className="section bg-ivory rule-top">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="h2" style={{ marginBlock: "18px 12px" }}>
              What I work with.
            </h2>
            <p className="lede measure" style={{ marginBottom: "44px" }}>
              Grouped by what the work actually is, rather than listed as a wall of badges.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid-2" style={{ gap: "32px" }}>
              {capabilities.map((c) => (
                <div key={c.k}>
                  <p className="cap-h">{c.k}</p>
                  <Tags items={c.items} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="section bg-white rule-top">
        <div className="wrap">
          <Reveal>
            <div className="split split-top">
              <div>
                <p className="cap-h">Education</p>
                <h2 className="h3" style={{ marginBottom: "4px" }}>
                  Bachelor of Science
                  <br />
                  Health Information Management
                </h2>
                <p className="mono" style={{ marginBottom: "20px" }}>
                  Douglas College · 2023 — 2027 · GPA 4.05
                </p>
                <BList
                  items={[
                    "Student Award for Educational Excellence",
                    "International Returning Scholarship",
                    "Student Leader Award Nominee",
                  ]}
                />
              </div>

              <div>
                <p className="cap-h">Credentials</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    ["Entry Certificate in Business Analysis (ECBA)", "IIBA · 2026"],
                    ["SNOMED CT Foundation", "SNOMED International · 2026"],
                    ["FOIPPA Foundations", "BC Ministry of Citizens’ Services · 2025"],
                  ].map(([name, org]) => (
                    <div
                      key={name}
                      style={{ borderLeft: "2px solid var(--blue)", paddingLeft: "16px" }}
                    >
                      <p style={{ fontSize: "15px", fontWeight: 600 }}>{name}</p>
                      <p className="mono">{org}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "32px" }}>
                  <Link href="/#work" className="alink">
                    See the work <Arrow />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
