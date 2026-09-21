import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import { shots } from "@/lib/shots";
import { projectLinks, CONTACT_MAILTO } from "@/lib/projects";
import { Arrow, BList, Eyebrow, Metrics, Tags } from "@/components/ui";

export const metadata: Metadata = {
  title: "Rashi Goel — Health Information Management, Systems & Automation",
  description:
    "Health Information Management student with hands-on clinical operations experience. I look for where time and information get lost in healthcare workflows, then build systems, data and automation around them.",
  openGraph: {
    title: "Rashi Goel — Health Information Management, Systems & Automation",
    description:
      "Health Information Management student with hands-on clinical operations experience, building around real healthcare workflow problems.",
  },
};

const chain = [
  "Information arrives",
  "Someone interprets it",
  "Someone moves it",
  "Someone checks it",
  "Someone acts",
];

const projects = [
  {
    slug: "faxbridge",
    num: "02",
    name: "FaxBridge",
    kicker: "Clinical Document Workflow",
    title: "A fax can be digital and still leave its data trapped.",
    body: "FaxBridge explores how information inside incoming clinical documents could be extracted, structured as FHIR resources and reviewed safely before reaching the patient record.",
    highlight:
      "The system is designed to stop when patient identity is uncertain rather than guessing.",
    tags: ["FHIR R4", "AI Extraction", "Patient Matching", "Human Review"],
    cta: "Explore project",
    links: projectLinks.faxbridge,
    shot: shots.faxbridgeNoMatch,
  },
  {
    slug: "caresignal",
    num: "03",
    name: "CareSignal",
    kicker: "Clinical Decision Support",
    title:
      "The information may already be in the chart. The challenge is knowing what needs attention.",
    body: "CareSignal applies nine deterministic clinical rules across diabetes, hypertension, chronic kidney disease and dyslipidemia to identify and prioritize potential care gaps.",
    highlight: "AI summarizes the chart. Rules determine the alerts.",
    tags: ["FHIR R4", "Clinical Rules", "Azure OpenAI", "Decision Support"],
    cta: "Explore project",
    links: projectLinks.caresignal,
    shot: shots.caresignalPopulation,
  },
];

const process = [
  ["01", "Understand", "What is actually happening in the workflow?"],
  [
    "02",
    "Find the friction",
    "Where are people repeating work, searching for information or compensating for the system?",
  ],
  ["03", "Build", "Create something concrete enough to test."],
  ["04", "Break it", "Test edge cases, exceptions and incorrect assumptions."],
  ["05", "Improve", "Use what failed to refine the workflow."],
];

export default function HomePage() {
  return (
    <>
      {/* ═══ 01 · HERO ═══ */}
      <section className="hero on-dark">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Eyebrow>Health Information Management · Systems · Automation</Eyebrow>
              <h1 className="h1 hero-h1">
                Healthcare has enough hard problems.
                <br />
                <span className="coral">Repetitive work</span> shouldn&rsquo;t be one of them.
              </h1>
              <p className="lede measure">
                I&rsquo;m Rashi Goel, a Health Information Management student with hands-on
                clinical operations experience. I look for where time and information get lost
                in healthcare workflows, then explore how better systems, data and automation
                can help.
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

      {/* ═══ 02 · THE THREAD ═══ */}
      <section className="section bg-ivory">
        <div className="wrap">
          <Reveal>
            <Eyebrow>What I keep noticing</Eyebrow>
            <h2 className="h2 measure" style={{ marginBlock: "18px 28px" }}>
              A lot of healthcare work happens between the systems.
            </h2>
            <div className="measure">
              <p className="body">
                An appointment is booked in one place. A document arrives somewhere else. A claim
                needs information from both. An email needs to reach the right person. A clinician
                needs to find the important detail inside an already crowded chart.
              </p>
              <p className="body">
                Working inside a multidisciplinary clinic made those handoffs visible to me.
              </p>
              <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                That is what I keep building around.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="chain" style={{ marginBlock: "48px" }}>
              {chain.map((step, i) => (
                <Fragment key={step}>
                  <div className={`chain-item${i === chain.length - 1 ? " is-last" : ""}`}>
                    {step}
                  </div>
                  {i < chain.length - 1 && (
                    <div className="chain-arrow" aria-hidden="true">
                      →
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            <p className="lede measure">
              My projects explore where technology can help — and where people still need to
              remain in the loop.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 03 · FEATURED PROJECT ═══ */}
      <section id="work" className="section bg-white rule-top">
        <div className="wrap">
          <Reveal>
            <p className="snum">01 / Featured project</p>
            <div className="feature">
              <div className="feature-head">
                <div className="split split-top" style={{ gap: "48px" }}>
                  <div>
                    <p
                      className="mono"
                      style={{ letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "10px" }}
                    >
                      ClinicFlow
                    </p>
                    <h2 className="h2" style={{ marginBottom: "22px" }}>
                      What if incoming emails could find the right place on their own?
                    </h2>
                    <p className="body">
                      CHANGEpain&rsquo;s co-op posting described staff spending 2&ndash;3 hours each
                      day manually sorting emails.
                    </p>
                    <p className="body">
                      I work in a busy multidisciplinary clinic, so I understood exactly what could
                      be hiding inside those hours.
                    </p>
                    <p className="body">
                      Over one weekend, I learned Power Automate and built a working prototype
                      around the problem.
                    </p>
                  </div>

                  <div>
                    <Shot
                      shot={shots.clinicflowSwitch}
                      sizes="(max-width: 1000px) 100vw, 50vw"
                      caption={null}
                    />
                  </div>
                </div>

                <div style={{ marginTop: "36px" }}>
                  <Metrics
                    items={[
                      { n: "7", l: "Outlook routing categories" },
                      { n: "21", l: "fictional test emails" },
                      { n: "21", l: "classification records logged" },
                      { n: "3", l: "cancellation alerts generated" },
                    ]}
                  />
                </div>
              </div>

              <div className="feature-body">
                <p className="cap-h">How it works</p>
                <div className="flow" style={{ marginBottom: "22px" }}>
                  <div className="flow-node">
                    <p className="flow-t">Incoming email</p>
                  </div>
                  <div className="flow-arrow" aria-hidden="true">↓</div>
                  <div className="flow-node is-accent">
                    <p className="flow-t">Classify</p>
                  </div>
                  <div className="flow-arrow" aria-hidden="true">↓</div>
                </div>

                <div className="feature-outs">
                  <div className="out">
                    <p className="out-k">Outlook</p>
                    <p className="body" style={{ fontSize: "14px" }}>Route message</p>
                  </div>
                  <div className="out">
                    <p className="out-k">Excel</p>
                    <p className="body" style={{ fontSize: "14px" }}>Log classification</p>
                  </div>
                  <div className="out">
                    <p className="out-k">Teams</p>
                    <p className="body" style={{ fontSize: "14px" }}>Flag cancellations</p>
                  </div>
                </div>

                <div style={{ marginTop: "32px" }}>
                  <Tags
                    items={[
                      "Power Automate",
                      "Outlook",
                      "Excel",
                      "Microsoft Teams",
                      "Workflow Design",
                    ]}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "28px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginBlock: "28px 24px",
                  }}
                >
                  <Link href="/work/clinicflow" className="btn btn-primary">
                    Explore the case study <Arrow />
                  </Link>
                  <Link href="/work/clinicflow#how-it-works" className="alink">
                    View flow details <Arrow />
                  </Link>
                </div>

                <p className="note">
                  Independent prototype inspired by CHANGEpain&rsquo;s co-op posting. Not
                  affiliated with or commissioned by CHANGEpain. Built and tested using fictional
                  emails.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 04 · OTHER SELECTED WORK ═══ */}
      <section className="section bg-ivory">
        <div className="wrap">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: "14px" }}>
              Different problems.
              <br />
              The same instinct.
            </h2>
            <p className="lede measure" style={{ marginBottom: "48px" }}>
              Understand the workflow first. Then decide what the technology should do.
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
                      <Link href={`/work/${p.slug}`} className="alink">
                        {p.cta} <Arrow />
                      </Link>
                      <span className="xlinks">
                        <a
                          href={p.links.liveApp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View the ${p.name} live app (opens in a new tab)`}
                        >
                          Live app <span aria-hidden="true">↗</span>
                        </a>
                        <a
                          href={p.links.caseStudy}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View the ${p.name} case study (opens in a new tab)`}
                        >
                          Case study <span aria-hidden="true">↗</span>
                        </a>
                      </span>
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

      {/* ═══ 05 · HOW I WORK ═══ */}
      <section className="section bg-white rule-top">
        <div className="wrap">
          <div className="split split-top">
            <Reveal>
              <div className="sticky-meta">
                <Eyebrow>How I work</Eyebrow>
                <h2 className="h2" style={{ marginTop: "18px" }}>
                  My process usually starts before the tool does.
                </h2>
              </div>
            </Reveal>

            <Reveal>
              <div>
                {process.map(([n, title, body]) => (
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
                    ClinicFlow taught me that a Power Automate run can be technically successful
                    and still route an email incorrectly.
                  </p>
                  <p className="body">
                    FaxBridge taught me that the harder question is often not whether AI can
                    extract information, but when the system should refuse to act.
                  </p>
                  <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                    Those are the problems I enjoy working through.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 06 · EXPERIENCE ═══ */}
      <section className="section bg-ivory">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Experience</Eyebrow>
            <h2 className="h2" style={{ marginBlock: "18px 48px" }}>
              I build from real healthcare context.
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
                      I work inside the day-to-day operations of a multidisciplinary clinic,
                      supporting scheduling, intake, documentation, patient communication and
                      insurance workflows for more than 150 appointments each week.
                    </p>
                    <BList
                      items={[
                        "150+ weekly appointments",
                        "40+ third-party insurance claims processed daily",
                        "Jane App EMR",
                        "Patient intake and scheduling",
                        "Claims reconciliation",
                        "Clinical documentation and privacy",
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
                    <p className="body" style={{ marginBottom: "18px" }}>
                      I help communicate digital health initiatives to BC&rsquo;s healthcare
                      technology community through LinkedIn content, newsletters, email campaigns
                      and event communications.
                    </p>
                    <BList
                      items={[
                        "LinkedIn content",
                        "Mailchimp campaigns",
                        "Newsletter content",
                        "Event communications",
                        "Healthcare technology audience",
                      ]}
                    />
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

      {/* ═══ 07 · TWO SIDES ═══ */}
      <section className="section bg-white rule-top">
        <div className="wrap">
          <Reveal>
            <div className="panels">
              <div className="panel">
                <p className="panel-k">Systems</p>
                <h3 className="h3" style={{ marginBottom: "20px" }}>
                  I like understanding how information moves.
                </h3>
                <BList
                  items={[
                    "Workflow analysis",
                    "Automation",
                    "FHIR",
                    "Clinical systems",
                    "Process mapping",
                    "Testing",
                    "Data quality",
                    "Privacy",
                  ]}
                />
              </div>

              <div className="panel is-dark on-dark">
                <p className="panel-k">Communication</p>
                <h3 className="h3" style={{ marginBottom: "20px" }}>
                  I also care about how information reaches people.
                </h3>
                <BList
                  items={[
                    "Healthcare communications",
                    "Writing",
                    "LinkedIn content",
                    "Email campaigns",
                    "Newsletters",
                    "Stakeholder communication",
                    "Visual storytelling",
                  ]}
                />
              </div>
            </div>

            <p
              className="h4"
              style={{ marginTop: "28px", textAlign: "center", color: "var(--grey)" }}
            >
              The work changes.{" "}
              <span style={{ color: "var(--ink)" }}>
                Clear thinking and clear communication matter in both.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 08 · ABOUT PREVIEW ═══ */}
      <section className="section bg-ivory">
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
                  I did not become interested in healthcare technology from the technology side.
                </h2>
                <p className="body">I became interested in it by working inside the workflow.</p>
                <p className="body">
                  Scheduling patients. Resolving documentation gaps. Processing insurance claims.
                  Answering questions. Moving information between people and systems.
                </p>
                <p className="body">
                  The more of that work I saw, the more I started asking why it had to work that
                  way.
                </p>
                <p className="body">
                  That curiosity is what led me deeper into health information management,
                  interoperability, automation and data.
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

      {/* ═══ 09 · EDUCATION + CREDENTIALS ═══ */}
      <section className="section bg-white rule-top">
        <div className="wrap">
          <Reveal>
            <div className="split split-top">
              <div>
                <p className="cap-h">Education</p>
                <h3 className="h3" style={{ marginBottom: "4px" }}>
                  Bachelor of Science
                  <br />
                  Health Information Management
                </h3>
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
                  <span className="mono" style={{ color: "var(--blue)" }}>GPA</span>
                  <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                    4.05
                  </span>
                </div>

                <p className="cap-h">Awards</p>
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
                      style={{
                        borderLeft: "2px solid var(--blue)",
                        paddingLeft: "16px",
                      }}
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

      {/* ═══ 10 · CONTACT ═══ */}
      <section id="contact" className="section bg-dark on-dark">
        <div className="wrap">
          <Reveal>
            <div className="measure">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="h2" style={{ marginBlock: "18px 24px" }}>
                I&rsquo;m interested in the problems hiding inside everyday workflows.
              </h2>
              <p className="lede">
                I&rsquo;m currently building toward opportunities across healthcare technology,
                clinical systems, automation, interoperability, data and technology-enabled
                operations.
              </p>
              <p className="lede" style={{ marginTop: "16px" }}>
                If you are working on one of those problems, I&rsquo;d be glad to connect.
              </p>

              <div className="hero-btns btn-row-stack">
                <a href={CONTACT_MAILTO} className="btn btn-primary">
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
