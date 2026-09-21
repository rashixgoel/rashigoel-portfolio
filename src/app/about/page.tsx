import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Arrow, BList, Eyebrow, Pull, Tags } from "@/components/ui";

export const metadata: Metadata = {
  title: "About — Rashi Goel",
  description:
    "I became interested in healthcare technology by working inside the workflow. Health Information Management student at Douglas College, working across clinical systems, interoperability, automation and health data.",
  openGraph: {
    title: "About — Rashi Goel",
    description:
      "I became interested in healthcare technology by working inside the workflow.",
  },
};

const timeline = [
  ["2023", "Started Bachelor of Science in Health Information Management"],
  ["2024", "Began peer tutoring at Douglas College"],
  ["2025", "Joined Columbia Integrated Health Centre"],
  ["2026", "Built CareSignal"],
  ["2026", "Built FaxBridge"],
  ["2026", "Earned ECBA"],
  ["2026", "Joined BCHIMSS communications team"],
  ["2026", "Built ClinicFlow"],
  ["2027", "Expected BSc HIM graduation"],
];

const interests = [
  "Clinical systems",
  "Healthcare automation",
  "Interoperability",
  "Health data",
  "Process improvement",
  "AI-enabled workflows",
  "Technology consulting",
  "Healthcare communications",
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
                I became interested in technology by working inside the workflow.
              </h1>
              <p className="lede measure">
                Health Information Management student at Douglas College, working across clinical
                systems, interoperability, automation and health data — from inside healthcare
                operations.
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

      {/* ── Story ── */}
      <section className="section bg-white">
        <div className="wrap-narrow">
          <Reveal>
            <p className="body">
              I work as an administrative assistant in a multidisciplinary healthcare clinic.
            </p>
            <p className="body">
              A normal day can involve appointment scheduling, documentation, insurance claims,
              patient questions, practitioner follow-up and information moving between several
              different places.
            </p>
            <p className="body">
              That experience changed the way I look at healthcare technology.
            </p>
            <p className="body">
              I began noticing the invisible work required to keep a workflow moving.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ marginBlock: "40px" }}>
              <BList
                items={[
                  "A document arrives, but its information still needs to be entered somewhere else.",
                  "An email reaches the clinic, but someone has to read it before knowing where it belongs.",
                  "The information required to make a decision may already exist, but someone still has to find it.",
                ]}
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="body">I became interested in the space between those steps.</p>
            <p className="body">
              That led me to Health Information Management at Douglas College and eventually into
              interoperability, workflow analysis, clinical systems, automation and healthcare
              data.
            </p>
            <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
              I learn best by building around problems I understand.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ marginBlock: "40px" }}>
              <BList
                items={[
                  "FaxBridge began with a question about faxed clinical information.",
                  "CareSignal began with a question about care gaps buried inside patient data.",
                  "ClinicFlow began after I read about a real inbox problem and wondered whether I could automate part of it, even though I had never used Power Automate before.",
                ]}
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="body">Each project taught me something different.</p>
            <p className="body">But they all began the same way:</p>

            <div style={{ marginTop: "32px" }}>
              <Pull>
                Why does this workflow work like this?
                <br />
                And could it work better?
              </Pull>
            </div>
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
            <Eyebrow>What I&rsquo;m interested in</Eyebrow>
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
                  <span className="mono" style={{ color: "var(--blue)" }}>
                    GPA
                  </span>
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
                    <div key={name} style={{ borderLeft: "2px solid var(--blue)", paddingLeft: "16px" }}>
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
