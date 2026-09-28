import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Arrow, BList, Eyebrow, Pull, Tags } from "@/components/ui";

export const metadata: Metadata = {
  title: "About | Rashi Goel",
  description:
    "Rashi Goel is a Health Information Management student exploring clinical systems, interoperability, health data, responsible AI, and healthcare technology.",
  openGraph: {
    title: "About | Rashi Goel",
    description:
      "Rashi Goel is a Health Information Management student exploring clinical systems, interoperability, health data, responsible AI, and healthcare technology.",
  },
};

const timeline = [
  ["2023", "Started Bachelor of Science in Health Information Management, Douglas College"],
  ["2024", "Began peer tutoring at Douglas College"],
  ["2025", "Joined Columbia Integrated Health Centre"],
  ["2026", "Built CareSignal"],
  ["2026", "Built FaxBridge"],
  ["2026", "Earned ECBA"],
  ["2026", "Joined BCHIMSS communications team"],
  ["2026", "Built ClinicFlow"],
  ["2027", "Expected BSc Health Information Management graduation"],
];

const interests = [
  "Clinical Systems",
  "Interoperability & Integration",
  "Health Data & Analytics",
  "AI & Automation",
  "Healthcare Technology Consulting",
  "Systems & Process Improvement",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="case-hero on-dark">
        <div className="wrap">
          <div className="split split-side">
            <div>
              <Eyebrow>About</Eyebrow>
              <h1 className="h1" style={{ marginBlock: "18px 24px" }}>
                I became interested in healthcare technology by working inside healthcare.
              </h1>
              <p className="lede measure">
                Health Information Management student at Douglas College, working across clinical
                systems, interoperability, health data, AI, automation, and systems analysis.
              </p>
            </div>

            <div className="portrait">
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
              <span className="portrait-tag t2">Vancouver, BC</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story: the operational starting point ── */}
      <section className="section bg-white">
        <div className="wrap-narrow">
          <Reveal>
            <p className="body">I started on the operational side.</p>
            <p className="body">
              Working in a multidisciplinary clinic gave me a close view of the information
              surrounding patient care: appointments, documentation, insurance, referrals, patient
              questions, practitioner follow-up, and all the small exceptions that do not fit
              neatly into a standard process.
            </p>
            <p className="body">
              The more of that work I saw, the more interested I became in the systems underneath
              it.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ marginBlock: "36px" }}>
              <BList
                items={[
                  "A document can arrive electronically and still require someone to interpret and re-enter its information.",
                  "A patient chart can contain the information needed for follow-up while still making it difficult to see what requires attention.",
                  "Two systems can each contain useful information without being able to exchange it meaningfully.",
                  "And automation can save time while still creating new problems if the rules, exceptions, or consequences are not understood.",
                ]}
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="body">
              Those questions led me deeper into Health Information Management.
            </p>
            <p className="body">
              My degree has given me a foundation across health data, clinical classification,
              privacy, information systems, interoperability, analytics, and the realities of
              healthcare information governance.
            </p>
            <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
              But I learn best when I can turn a question into something concrete.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── How each project started ── */}
      <section className="section bg-ivory rule-top">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Where the projects came from</Eyebrow>
            <h2 className="h2" style={{ marginBlock: "18px 44px" }}>
              Each one started as a question.
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid-3">
              {[
                {
                  name: "CareSignal",
                  kind: "a question about clinical decision support",
                  q: "Could structured patient data be evaluated systematically to identify potential care gaps and help clinicians see who may need attention first?",
                  href: "/work/caresignal",
                },
                {
                  name: "FaxBridge",
                  kind: "an interoperability question",
                  q: "What would it take to make the information inside an incoming clinical document usable by another system without allowing uncertain or unverified information to move forward automatically?",
                  href: "/work/faxbridge",
                },
                {
                  name: "ClinicFlow",
                  kind: "an operations problem",
                  q: "Could routine inbox classification be automated while keeping ambiguous messages and scheduling decisions under staff control?",
                  href: "/work/clinicflow",
                },
              ].map((p) => (
                <div key={p.name} className="card">
                  <p
                    className="mono"
                    style={{
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink)",
                      marginBottom: "8px",
                    }}
                  >
                    {p.name}
                  </p>
                  <p className="mono" style={{ marginBottom: "16px" }}>
                    began with {p.kind}
                  </p>
                  <p className="body" style={{ fontSize: "15px", marginBottom: "20px" }}>
                    {p.q}
                  </p>
                  <Link href={p.href} className="alink">
                    View project <Arrow />
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The harder questions ── */}
      <section className="section bg-white rule-top">
        <div className="wrap-narrow">
          <Reveal>
            <p className="body">
              The technologies are different, but the projects have pushed me toward the same
              areas: clinical systems, interoperability, health data, AI, automation, and systems
              analysis.
            </p>
            <p className="body">
              I am especially interested in the point where technical capability meets healthcare
              reality.
            </p>

            <div style={{ marginBlock: "36px" }}>
              <Pull>
                It is easy to ask whether a technology can do something. I am increasingly
                interested in whether it should.
              </Pull>
            </div>

            <p className="body">The harder questions are the ones that follow:</p>
            <div style={{ marginBlock: "20px 36px" }}>
              <BList
                items={[
                  "What information does it depend on?",
                  "How will another system interpret the output?",
                  "What happens when the input is incomplete?",
                  "How can someone verify what happened?",
                  "Where does human judgment still matter?",
                ]}
              />
            </div>

            <p className="body">That is the kind of work I want to keep getting better at.</p>
            <p className="body">
              The common thread is not one tool, one workflow, or one job title. I am interested
              in how healthcare information systems can be designed, connected, analyzed, and
              improved so that the information people need becomes easier to use.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section bg-ivory rule-top">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Path so far</Eyebrow>
            <h2 className="h2" style={{ marginBlock: "18px 44px" }}>
              How I got here.
            </h2>

            <div className="tl">
              {timeline.map(([year, event], i) => (
                <div
                  key={`${year}-${event}`}
                  className={`tl-item${i === timeline.length - 2 ? " is-now" : ""}`}
                >
                  <p className="tl-y">{year}</p>
                  <p style={{ fontSize: "16px", fontWeight: 600 }}>{event}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Interests ── */}
      <section className="section bg-white rule-top">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Areas I&rsquo;m interested in</Eyebrow>
            <div style={{ marginTop: "24px" }}>
              <Tags items={interests} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Education + credentials ── */}
      <section className="section bg-ivory rule-top">
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

                <div style={{ marginTop: "36px", display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  <Link href="/experience" className="alink">
                    Full experience <Arrow />
                  </Link>
                  <Link href="/contact" className="alink">
                    Get in touch <Arrow />
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
