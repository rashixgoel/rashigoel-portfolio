import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import EmailLink from "@/components/EmailLink";
import { shots } from "@/lib/shots";
import { projectLinks, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/projects";
import { Arrow, BList, Eyebrow, Tags } from "@/components/ui";

export const metadata: Metadata = {
  title: "Rashi Goel | Health Information Management & Healthcare Technology",
  description:
    "Portfolio of Rashi Goel, a Health Information Management student working across clinical systems, interoperability, health data, AI, automation, and healthcare technology.",
  openGraph: {
    title: "Rashi Goel | Health Information Management & Healthcare Technology",
    description:
      "Portfolio of Rashi Goel, a Health Information Management student working across clinical systems, interoperability, health data, AI, automation, and healthcare technology.",
  },
};

/* ── The three questions the projects keep returning to ── */
const themes = [
  {
    n: "01",
    label: "Information",
    question: "How does health information move between systems?",
    body: "Healthcare information can exist and still be difficult to use. Different formats, disconnected systems, unstructured documents, and inconsistent data can all affect what happens next.",
    areas: [
      "FHIR",
      "Interoperability",
      "Structured data",
      "Clinical documents",
      "Data quality",
      "Health information standards",
    ],
    chain: ["Document", "Structured data", "System", "Clinical use"],
  },
  {
    n: "02",
    label: "Decisions",
    question: "How do we surface the right information at the right time?",
    body: "Healthcare systems contain enormous amounts of information. The challenge is often not whether the data exists, but whether the right person can identify what requires attention.",
    areas: [
      "Clinical decision support",
      "Prioritization",
      "Health data",
      "Analytics",
      "Clinical rules",
      "Human judgment",
    ],
    chain: ["Population", "Prioritize", "Patient", "Action"],
  },
  {
    n: "03",
    label: "Automation",
    question: "What should technology handle, and where should people stay in control?",
    body: "Automation is most useful when it removes repetitive work without hiding uncertainty or taking judgment away from the people responsible for the decision.",
    areas: [
      "AI",
      "Power Automate",
      "Human-in-the-loop design",
      "Testing",
      "Exception handling",
      "Privacy",
    ],
    split: [
      { t: "Automate", s: "where rules are clear" },
      { t: "Review", s: "where uncertainty matters" },
    ],
  },
];

/* ── Selected work: three comparable demonstrations ── */
const projects = [
  {
    slug: "caresignal",
    num: "01",
    name: "CareSignal",
    kicker: "Clinical Systems · FHIR · Decision Support",
    title: "From patient data to prioritized care gaps.",
    body: "CareSignal is a FHIR-based clinical decision-support prototype that applies deterministic clinical rules to structured patient data, prioritizes potential chronic-disease care gaps, and uses AI to make complex chart information easier to review.",
    highlight: "AI summarizes. Rules decide.",
    tags: [
      "FHIR R4",
      "Clinical Decision Support",
      "Clinical Rules",
      "Azure OpenAI",
      "Health Data",
    ],
    links: projectLinks.caresignal,
    shot: shots.caresignalPopulation,
  },
  {
    slug: "faxbridge",
    num: "02",
    name: "FaxBridge",
    kicker: "Interoperability · AI · Human Review",
    title: "Turning clinical documents into structured, reviewable information.",
    body: "FaxBridge explores how information inside incoming clinical documents can be extracted, structured as FHIR resources, and prepared for downstream systems while keeping patient matching and clinical verification under human review.",
    highlight: "The system needs to be able to say: “I don’t know.”",
    tags: [
      "FHIR R4",
      "Interoperability",
      "AI Extraction",
      "Patient Matching",
      "Human-in-the-Loop",
    ],
    links: projectLinks.faxbridge,
    shot: shots.faxbridgeNoMatch,
  },
  {
    slug: "clinicflow",
    num: "03",
    name: "ClinicFlow",
    kicker: "Automation · Microsoft 365 · Operations",
    title: "What if incoming emails could find the right place on their own?",
    body: "A Power Automate inbox workflow that routes clinic emails, logs classifications, flags cancellations, and was tested with 21 realistic scenarios.",
    highlight: null,
    tags: ["Power Automate", "Microsoft 365", "Testing", "Workflow Design", "Human Review"],
    links: projectLinks.clinicflow,
    shot: shots.clinicflowSwitch,
  },
];

const thinking = [
  [
    "01",
    "Understand the context",
    "What problem are we actually trying to solve? Before choosing a tool, understand the people, information, constraints, and environment around the problem.",
  ],
  [
    "02",
    "Define the logic",
    "What information, rules, people, and systems are involved? Make the assumptions explicit before automating them.",
  ],
  [
    "03",
    "Build something testable",
    "Move from an idea to something concrete enough to evaluate.",
  ],
  [
    "04",
    "Test the edges",
    "Where does the assumption break? Look for exceptions, ambiguous cases, incorrect classifications, and situations where the system should stop rather than guess.",
  ],
  ["05", "Refine", "Use failures, evidence, and feedback to improve the design."],
];

const capabilities = [
  {
    k: "Clinical Systems & Interoperability",
    copy: "Understanding how health information is represented, exchanged, and used across clinical systems.",
    items: [
      "FHIR R4",
      "HL7 v2",
      "SNOMED CT",
      "ICD-10-CA",
      "CCI",
      "Clinical decision support",
      "Health information standards",
      "EHR / EMR workflows",
    ],
  },
  {
    k: "Data & Analysis",
    copy: "Turning healthcare information into something that can be examined, interpreted, and acted on.",
    items: [
      "Excel",
      "Power BI",
      "Tableau",
      "SQL",
      "Python",
      "Data quality",
      "Health-data analysis",
      "Validation",
    ],
  },
  {
    k: "AI & Automation",
    copy: "Exploring where automation can reduce repetitive work while preserving traceability, review, and judgment.",
    items: [
      "Azure OpenAI",
      "Power Automate",
      "Microsoft 365",
      "Claude",
      "ChatGPT",
      "Microsoft Copilot",
      "Human-in-the-loop design",
      "Testing",
    ],
  },
  {
    k: "Analysis & Communication",
    copy: "Making complex problems understandable enough to design, discuss, and improve.",
    items: [
      "Requirements analysis",
      "Process mapping",
      "Systems analysis",
      "Documentation",
      "Stakeholder communication",
      "Healthcare communications",
      "Mailchimp",
      "Digital content",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ 01 · HERO ═══ */}
      <section className="hero on-dark">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Eyebrow>
                Health Information · Clinical Systems · Interoperability · AI
              </Eyebrow>
              <h1 className="h1 hero-h1">
                Better healthcare depends on better{" "}
                <span className="coral">information systems.</span>
              </h1>
              <p className="lede measure">
                I&rsquo;m Rashi Goel, a Health Information Management student working across
                clinical systems, interoperability, health data, and responsible AI. I build
                projects that explore how healthcare information can move more effectively,
                surface what matters, and support better decisions.
              </p>
              <div className="hero-btns btn-row-stack">
                <Link href="/#work" className="btn btn-primary">
                  View my work
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  My story
                </Link>
              </div>
            </div>

            <div className="portrait">
              <span className="portrait-tag t1">Vancouver, BC</span>
              <div className="portrait-img">
                <Image
                  src="/rashi.jpeg"
                  alt="Rashi Goel"
                  width={1829}
                  height={2430}
                  priority
                  sizes="(max-width: 1000px) 320px, 380px"
                />
              </div>
              <span className="portrait-tag t2">Graduating 2027</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 02 · WHAT I WORK ON ═══ */}
      <section className="section bg-ivory">
        <div className="wrap">
          <Reveal>
            <Eyebrow>What I work on</Eyebrow>
            <h2 className="h2 measure" style={{ marginBlock: "18px 20px" }}>
              The problems I keep coming back to.
            </h2>
            <p className="lede measure" style={{ marginBottom: "56px" }}>
              My projects approach healthcare technology from different directions, but they keep
              bringing me back to the same questions.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {themes.map((t) => (
              <Reveal key={t.n}>
                <article className="theme">
                  <div className="theme-body">
                    <p className="snum">
                      {t.n} / {t.label}
                    </p>
                    <h3 className="h3" style={{ marginBottom: "14px" }}>
                      {t.question}
                    </h3>
                    <p className="body">{t.body}</p>
                    <div style={{ marginTop: "22px" }}>
                      <Tags items={t.areas} />
                    </div>
                  </div>

                  <div className="theme-visual">
                    {t.chain ? (
                      <div className="chain chain-sm">
                        {t.chain.map((step, i) => (
                          <Fragment key={step}>
                            <div
                              className={`chain-item${
                                i === t.chain.length - 1 ? " is-last" : ""
                              }`}
                            >
                              {step}
                            </div>
                            {i < t.chain.length - 1 && (
                              <div className="chain-arrow" aria-hidden="true">
                                →
                              </div>
                            )}
                          </Fragment>
                        ))}
                      </div>
                    ) : (
                      <div className="grid-2" style={{ gap: "12px" }}>
                        {t.split?.map((s, i) => (
                          <div
                            key={s.t}
                            className={`flow-node${i === 0 ? " is-accent" : " is-coral"}`}
                          >
                            <p className="flow-t">{s.t}</p>
                            <p className="flow-s">{s.s}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="lede measure" style={{ marginTop: "44px" }}>
              Those questions are what connect the projects below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 03 · SELECTED WORK ═══ */}
      <section id="work" className="section bg-white rule-top">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="h2" style={{ marginBlock: "18px 14px" }}>
              Three projects. Three different parts of the problem.
            </h2>
            <p className="lede measure" style={{ marginBottom: "48px" }}>
              Clinical decision support, interoperability, and operational automation — built,
              tested, and documented.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {projects.map((p, i) => (
              <Reveal key={p.slug}>
                <article className={`pcard${i % 2 === 1 ? " is-reversed" : ""}`}>
                  <div className="pcard-body">
                    <p className="snum">
                      {p.num} / {p.kicker}
                    </p>
                    <p
                      className="mono"
                      style={{
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink)",
                        fontWeight: 500,
                        marginBottom: "12px",
                      }}
                    >
                      {p.name}
                    </p>
                    <h3 className="h3" style={{ marginBottom: "16px" }}>
                      {p.title}
                    </h3>
                    <p className="body">{p.body}</p>

                    {p.highlight && (
                      <p
                        style={{
                          marginTop: "18px",
                          paddingLeft: "16px",
                          borderLeft: "2px solid var(--coral)",
                          fontSize: "15px",
                          fontWeight: 600,
                          lineHeight: 1.5,
                        }}
                      >
                        {p.highlight}
                      </p>
                    )}

                    <div style={{ marginBlock: "24px 26px" }}>
                      <Tags items={p.tags} />
                    </div>

                    <div className="cta-row">
                      <Link href={p.links.internal} className="alink">
                        Explore project <Arrow />
                      </Link>
                      {(p.links.liveApp || p.links.caseStudy) && (
                        <span className="xlinks">
                          {p.links.liveApp && (
                            <a
                              href={p.links.liveApp}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View the ${p.name} live app (opens in a new tab)`}
                            >
                              Live app <span aria-hidden="true">↗</span>
                            </a>
                          )}
                          {p.links.caseStudy && (
                            <a
                              href={p.links.caseStudy}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View the ${p.name} case study (opens in a new tab)`}
                            >
                              Case study <span aria-hidden="true">↗</span>
                            </a>
                          )}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pcard-media">
                    <Shot
                      shot={p.shot}
                      sizes="(max-width: 1000px) 100vw, 50vw"
                      caption={null}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 04 · HOW I THINK ═══ */}
      <section className="section bg-ivory">
        <div className="wrap">
          <div className="split split-top">
            <Reveal>
              <div className="sticky-meta">
                <Eyebrow>How I think</Eyebrow>
                <h2 className="h2" style={{ marginTop: "18px" }}>
                  I care as much about the assumptions around a system as the technology inside
                  it.
                </h2>
              </div>
            </Reveal>

            <Reveal>
              <div>
                {thinking.map(([n, title, body]) => (
                  <div key={n} className="step">
                    <span className="step-n">{n}</span>
                    <div>
                      <h3 className="h4" style={{ marginBottom: "7px" }}>
                        {title}
                      </h3>
                      <p className="body" style={{ fontSize: "15px" }}>
                        {body}
                      </p>
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: "36px" }}>
                  <p className="body">
                    ClinicFlow taught me that a technically successful automation can still
                    produce the wrong result.
                  </p>
                  <p className="body">
                    FaxBridge made me think much more carefully about uncertainty, identity, and
                    verification.
                  </p>
                  <p className="body">
                    CareSignal reinforced the importance of separating deterministic clinical
                    logic from generative AI.
                  </p>
                  <p className="body">The technologies are different. The habit is the same:</p>
                  <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                    make the assumptions visible, test them, and improve the system where they
                    fail.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 05 · EXPERIENCE ═══ */}
      <section className="section bg-white rule-top">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Experience</Eyebrow>
            <h2 className="h2" style={{ marginBlock: "18px 48px" }}>
              Experience that keeps the technology grounded.
            </h2>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <article className="card">
                <div className="split split-top" style={{ gap: "40px" }}>
                  <div>
                    <h3 className="h3" style={{ marginBottom: "6px" }}>
                      Administrative Assistant
                    </h3>
                    <p className="mono" style={{ marginBottom: "4px" }}>
                      Columbia Integrated Health Centre
                    </p>
                    <p className="mono">New Westminster, BC · June 2025 — Present</p>
                  </div>
                  <div>
                    <p className="body" style={{ marginBottom: "18px" }}>
                      Working inside a multidisciplinary clinic gives me direct exposure to the
                      operational side of healthcare: scheduling, patient communication,
                      documentation, insurance, information handoffs, and the exceptions that
                      systems do not always handle neatly.
                    </p>
                    <BList
                      items={[
                        "150+ weekly appointments",
                        "40+ third-party claims daily",
                        "Jane App EMR",
                        "Clinical documentation",
                        "Patient communication",
                        "Privacy",
                      ]}
                    />
                  </div>
                </div>
              </article>

              <article className="card">
                <div className="split split-top" style={{ gap: "40px" }}>
                  <div>
                    <h3 className="h3" style={{ marginBottom: "6px" }}>
                      Communications Volunteer
                    </h3>
                    <p className="mono" style={{ marginBottom: "4px" }}>
                      BCHIMSS — British Columbia Chapter of HIMSS
                    </p>
                    <p className="mono">August 2026 — Present</p>
                  </div>
                  <div>
                    <p className="body">
                      I contribute to communications for BC&rsquo;s digital-health community
                      through LinkedIn content, newsletters, email campaigns, event
                      communications, and collaboration with chapter leadership.
                    </p>
                  </div>
                </div>
              </article>

              <article className="card">
                <div className="split split-top" style={{ gap: "40px" }}>
                  <div>
                    <h3 className="h4" style={{ marginBottom: "6px" }}>
                      Peer Tutor
                    </h3>
                    <p className="mono">Douglas College · 2024 — 2026</p>
                  </div>
                  <div>
                    <p className="body">
                      Supporting students across quantitative and healthcare-related coursework.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div style={{ marginTop: "32px" }}>
              <Link href="/experience" className="alink">
                See full experience <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 06 · CAPABILITIES ═══ */}
      <section className="section bg-ivory">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="h2" style={{ marginBlock: "18px 44px" }}>
              The areas I&rsquo;m building depth in.
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid-2" style={{ gap: "20px" }}>
              {capabilities.map((c) => (
                <div key={c.k} className="card">
                  <p className="cap-h">{c.k}</p>
                  <p className="body" style={{ fontSize: "15px", marginBottom: "20px" }}>
                    {c.copy}
                  </p>
                  <Tags items={c.items} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 07 · MY STORY ═══ */}
      <section className="section bg-white rule-top">
        <div className="wrap">
          <Reveal>
            <div className="split split-side">
              <div>
                <div className="portrait" style={{ maxWidth: "300px", marginInline: "0" }}>
                  <div className="portrait-img" style={{ borderColor: "var(--border)" }}>
                    <Image
                      src="/rashi.jpeg"
                      alt="Rashi Goel"
                      width={1829}
                      height={2430}
                      sizes="(max-width: 1000px) 260px, 300px"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Eyebrow>My story</Eyebrow>
                <h2 className="h2" style={{ marginBlock: "18px 24px" }}>
                  I became interested in healthcare technology by working inside healthcare.
                </h2>
                <p className="body">
                  My interest in technology did not begin with a particular programming language
                  or platform. It began with seeing how healthcare actually works behind the
                  scenes.
                </p>
                <p className="body">
                  Scheduling patients. Resolving documentation gaps. Processing claims. Answering
                  questions. Finding information. Moving it between people and systems.
                </p>
                <p className="body">
                  That experience made me curious about the infrastructure underneath the work.
                </p>
                <ul className="blist" style={{ marginBlock: "18px" }}>
                  <li>How is health information represented?</li>
                  <li>Why can one system understand something another cannot?</li>
                  <li>How should software deal with uncertainty?</li>
                  <li>
                    What belongs in a rule, what belongs in an AI model, and what still needs a
                    person?
                  </li>
                </ul>
                <p className="body">
                  Those questions eventually became the projects throughout this portfolio.
                </p>
                <div style={{ marginTop: "26px" }}>
                  <Link href="/about" className="alink">
                    Read my story <Arrow />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 08 · EDUCATION + CREDENTIALS ═══ */}
      <section className="section bg-ivory">
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
                  Douglas College · 2023 — 2027
                </p>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "baseline",
                    gap: "10px",
                    background: "var(--blue-soft)",
                    border: "1px solid #C9D6FF",
                    borderRadius: "var(--r-sm)",
                    padding: "10px 18px",
                    marginBottom: "26px",
                  }}
                >
                  <span className="mono" style={{ color: "var(--blue)" }}>
                    GPA
                  </span>
                  <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                    4.05
                  </span>
                </div>

                <p className="cap-h">Selected recognition</p>
                <BList
                  items={[
                    "Student Award for Educational Excellence",
                    "International Returning Scholarship",
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 09 · CONTACT ═══ */}
      <section id="contact" className="section bg-dark on-dark">
        <div className="wrap">
          <Reveal>
            <div className="measure">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="h2" style={{ marginBlock: "18px 24px" }}>
                Interested in the systems behind healthcare?
              </h2>
              <p className="lede">
                I&rsquo;m building toward opportunities across clinical systems,
                interoperability, health data, AI-enabled healthcare, automation, and technology
                consulting.
              </p>
              <p className="lede" style={{ marginTop: "16px" }}>
                If you&rsquo;re working on problems in that space, I&rsquo;d be glad to connect.
              </p>

              <div className="hero-btns btn-row-stack">
                <a
                  href={CONTACT_MAILTO}
                  className="btn btn-primary"
                  aria-label={`Email Rashi Goel at ${CONTACT_EMAIL}`}
                >
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/-rashi-goel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div style={{ marginTop: "24px", fontSize: "14px" }}>
                <EmailLink />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
