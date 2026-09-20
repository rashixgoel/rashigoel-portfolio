import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equity in Hospital Harm — Rashi Goel",
  description:
    "A secondary analysis of public CIHI Hospital Harm data examining patient-safety disparities, what the data cannot explain, and how organizations could move from an observed difference to a responsible improvement strategy.",
  openGraph: {
    title: "Equity in Hospital Harm — A CIHI Data Analysis",
    description:
      "A secondary analysis of public CIHI Hospital Harm data examining where patient-safety disparities appear and how organizations could investigate them responsibly.",
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "var(--font-ibm-mono), monospace",
      fontSize: "11px",
      color: "var(--teal)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: "10px",
    }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-manrope), system-ui, sans-serif",
      fontSize: "clamp(18px, 2.5vw, 24px)",
      fontWeight: 800,
      color: "var(--ink)",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      marginBottom: "20px",
    }}>
      {children}
    </h2>
  );
}

export default function HospitalHarmPage() {
  return (
    <div style={{ background: "var(--canvas)" }}>

      {/* ── Hero ── */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "64px 32px 56px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--muted)", marginBottom: "12px" }}>
            <Link href="/#work" style={{ color: "var(--muted)", textDecoration: "none" }}>Work</Link>
            {" "}/{"  "}Health Data · Strategy
          </p>
          <h1 style={{
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: 800,
            color: "var(--ink)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "10px",
            maxWidth: "800px",
          }}>
            Equity in Hospital Harm
          </h1>
          <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>
            A CIHI Data Analysis
          </p>
          <p style={{ fontSize: "20px", color: "var(--teal)", fontWeight: 600, marginBottom: "16px" }}>
            From population-level disparities to better questions about patient safety.
          </p>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "640px", marginBottom: "36px" }}>
            A secondary analysis of public CIHI Hospital Harm data examining where patient-safety disparities appear,
            what the data cannot explain, and how organizations could move from an observed difference
            to a responsible improvement strategy.
          </p>

          {/* Important attribution note */}
          <div style={{
            background: "var(--canvas)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            padding: "14px 18px",
            marginBottom: "24px",
            maxWidth: "600px",
          }}>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--muted)", lineHeight: 1.6 }}>
              This is an independent analytical case study using public data published by the Canadian Institute for Health Information (CIHI).
              CIHI did not sponsor, commission, supervise, or endorse this work.
            </p>
          </div>

          {/* Metadata strip */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            padding: "20px 0",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}>
            {[
              ["Project type", "Independent analytical case study"],
              ["Source", "Public CIHI Hospital Harm data"],
              ["Focus", "Health equity · Patient safety · Data analysis · Quality improvement"],
              ["Year", "2026"],
            ].map(([label, value]) => (
              <div key={label}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "10px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{label}</p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: "740px", padding: "64px 0" }}>

          {/* 01 The question */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>01 — The question</SectionLabel>
            <SectionHeading>Averages describe populations. They do not reveal whether all patients experience care equally.</SectionHeading>
            <div className="cs-prose">
              <p>
                Hospital harm rates are often reported as single numbers: what percentage of patients experienced
                an adverse event during their admission. That number is useful for benchmarking and trend analysis.
              </p>
              <p>
                It does not tell us whether different patient populations experience care differently.
                An aggregate rate can mask meaningful variation across age groups, income levels, geography,
                or other characteristics.
              </p>
              <p>
                The central question this analysis addresses:
              </p>
            </div>
            <div style={{
              background: "var(--teal-soft)",
              border: "1px solid var(--teal)",
              borderRadius: "6px",
              padding: "24px 28px",
              margin: "20px 0",
            }}>
              <p style={{ fontSize: "16px", color: "var(--ink)", fontWeight: 600, lineHeight: 1.5 }}>
                How can equity-stratified patient-safety data help an organization identify meaningful disparities,
                investigate why they exist, and choose appropriate improvement actions?
              </p>
            </div>
          </div>

          {/* 02 Approach */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>02 — Approach</SectionLabel>
            <SectionHeading>A structured analytical methodology.</SectionHeading>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "6px", overflow: "hidden", margin: "16px 0" }}>
              {[
                ["Define", "Frame hospital harm as both a patient-safety and equity problem"],
                ["Analyze", "Examine available CIHI results across relevant stratifiers"],
                ["Research", "Review supporting literature and CIHI guidance"],
                ["Identify gaps", "Determine what the available variables cannot explain"],
                ["Engage", "Identify who would need to interpret and investigate the findings"],
                ["Recommend", "Translate the analysis into next steps and measures"],
              ].map(([step, desc]) => (
                <div key={step} style={{ background: "var(--surface)", padding: "16px 20px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--teal)", fontWeight: 600, minWidth: "100px", flexShrink: 0 }}>{step}</span>
                  <span style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 03 Findings */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>03 — Findings</SectionLabel>
            <SectionHeading>Patterns that warrant investigation.</SectionHeading>
            <div className="cs-prose">
              <p>
                Analysis of publicly available CIHI Hospital Harm data reveals variation across several stratifiers.
                The patterns described below are associations observed in the available data.
                They are signals to investigate, not explanations.
              </p>
            </div>

            {/* Chart placeholder — CIHI data not in repo */}
            <div style={{
              background: "var(--surface)",
              border: "2px dashed var(--border)",
              borderRadius: "6px",
              padding: "48px 32px",
              textAlign: "center",
              margin: "20px 0",
            }}>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
                TODO: Add chart — Hospital harm rates by age group
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                Source data: CIHI Hospital Harm public data workbook
              </p>
            </div>

            <div style={{
              background: "var(--surface)",
              border: "2px dashed var(--border)",
              borderRadius: "6px",
              padding: "48px 32px",
              textAlign: "center",
              margin: "20px 0",
            }}>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
                TODO: Add chart — Hospital harm rates by neighbourhood income quintile
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                Source data: CIHI Hospital Harm public data workbook
              </p>
            </div>

            <div style={{
              background: "var(--surface)",
              border: "2px dashed var(--border)",
              borderRadius: "6px",
              padding: "48px 32px",
              textAlign: "center",
              margin: "20px 0",
            }}>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
                TODO: Add chart — Geographic variation across provinces/regions
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                Source data: CIHI Hospital Harm public data workbook
              </p>
            </div>

            <div className="cs-prose">
              <p>
                The analysis uses careful language throughout.
                Observed differences are described as &ldquo;associated with&rdquo; or as having a &ldquo;higher or lower rate.&rdquo;
                Causal language is avoided because the available aggregate data does not support causal inference.
              </p>
            </div>
          </div>

          {/* 04 What the data cannot tell us */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>04 — What the data cannot tell us</SectionLabel>
            <SectionHeading>A disparity is a signal. It is not an explanation.</SectionHeading>
            <div className="cs-prose">
              <p>
                Observed differences in patient-safety outcomes across population groups are worth investigating.
                They are not, by themselves, evidence of what caused those differences.
              </p>
              <p>
                Context that is missing from aggregate hospital harm data and that could explain part or all
                of any observed variation includes:
              </p>
              <ul>
                <li>Clinical complexity and comorbidity burden</li>
                <li>Hospital type and volume</li>
                <li>Referral and admission patterns</li>
                <li>Access to care before the admission</li>
                <li>Health literacy and communication factors</li>
                <li>Demographic variables not available in the underlying data linkage</li>
              </ul>
              <p>
                An organization that acts on observed disparities without investigating their mechanism
                may apply the wrong intervention—or design one that addresses a symptom rather than a cause.
              </p>
            </div>
          </div>

          {/* 05 Data gaps */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>05 — Data and measurement gaps</SectionLabel>
            <SectionHeading>Improving equity data collection requires more than adding fields.</SectionHeading>
            <div className="cs-prose">
              <p>
                Some equity-relevant variables—including race, ethnicity, language, and disability status—
                are not consistently available in national patient safety databases.
              </p>
              <p>
                Simply recommending &ldquo;collect more demographic data&rdquo; is not sufficient.
                Any expansion of demographic data collection in healthcare requires:
              </p>
              <ul>
                <li>A clearly defined analytical purpose before collection begins</li>
                <li>Standardized definitions agreed upon across systems</li>
                <li>Privacy and governance frameworks</li>
                <li>Meaningful community engagement with affected populations</li>
                <li>Careful interpretation with safeguards against stereotyping or misuse</li>
              </ul>
              <p>
                Collecting data without those foundations can produce information that is unusable,
                untrustworthy, or actively harmful.
              </p>
            </div>
          </div>

          {/* 06 Stakeholders */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>06 — Stakeholders</SectionLabel>
            <SectionHeading>Different audiences need different information from the same analysis.</SectionHeading>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  group: "Hospital quality / patient safety leaders",
                  need: "Metrics, root-cause evidence, measurable interventions with clear accountability",
                },
                {
                  group: "Frontline clinical teams",
                  need: "Workflow context, practical changes they can act on, feedback loops to see whether changes worked",
                },
                {
                  group: "Patients and affected communities",
                  need: "Meaningful participation, trust in how demographic information is used, clarity on what will change",
                },
                {
                  group: "Health information and data governance teams",
                  need: "Definitions, data quality standards, privacy compliance, integration with reporting systems",
                },
                {
                  group: "Health authorities, policy, and system partners",
                  need: "Consistent measurement approaches that can support scalable quality improvement and system-level policy",
                },
              ].map((s) => (
                <div key={s.group} style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "18px 20px",
                }}>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>{s.group}</p>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}><span style={{ fontWeight: 600, color: "var(--teal)" }}>Need: </span>{s.need}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 07 From finding to action */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>07 — From finding to action</SectionLabel>
            <SectionHeading>A structured sequence matters more than a fast response.</SectionHeading>

            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "28px",
              margin: "16px 0",
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "13px",
              color: "var(--muted)",
              lineHeight: 2.2,
            }}>
              Find disparity<br />
              <span style={{ color: "var(--teal)" }}>↓</span><br />
              Investigate mechanism<br />
              <span style={{ color: "var(--teal)" }}>↓</span><br />
              Co-design intervention<br />
              <span style={{ color: "var(--teal)" }}>↓</span><br />
              Pilot<br />
              <span style={{ color: "var(--teal)" }}>↓</span><br />
              Measure<br />
              <span style={{ color: "var(--teal)" }}>↓</span><br />
              Scale / revise
            </div>

            <div className="cs-prose">
              <p>
                Moving directly from &ldquo;we see a disparity&rdquo; to &ldquo;we will implement training&rdquo; skips
                the investigation step that would tell you whether training is the right response.
                The sequence above is more expensive and slower than jumping to an intervention.
                It is also more likely to produce a change that actually reduces the disparity.
              </p>
            </div>
          </div>

          {/* 08 Recommendations */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>08 — Recommendations</SectionLabel>
            <SectionHeading>Five actionable priorities.</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Stratify patient-safety reporting by relevant equity dimensions where data quality supports it.",
                "Improve demographic and equity data collection only where there is a clear analytical purpose and a governance model in place.",
                "Investigate mechanisms before selecting interventions—an observed disparity does not determine which response is appropriate.",
                "Co-design targeted responses with the stakeholders closest to the problem, including patients and frontline staff.",
                "Measure both overall outcomes and the size of the disparity gap after any intervention. An intervention that improves average outcomes without narrowing the gap has not solved the equity problem.",
              ].map((rec, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "13px", color: "var(--teal)", fontWeight: 700, flexShrink: 0, lineHeight: 1.7 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 09 Implementation roadmap */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>09 — Implementation roadmap</SectionLabel>
            <SectionHeading>Four phases.</SectionHeading>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              overflow: "hidden",
            }}>
              {[
                ["Phase 1", "Diagnose", "Establish baseline metrics, confirm data quality, identify stratification gaps"],
                ["Phase 2", "Investigate", "Root-cause analysis, stakeholder engagement, mechanism identification"],
                ["Phase 3", "Intervene", "Co-design and pilot targeted responses with affected teams and communities"],
                ["Phase 4", "Measure", "Track overall outcomes and disparity gap; iterate or scale based on results"],
              ].map(([phase, label, detail]) => (
                <div key={phase} style={{ background: "var(--surface)", padding: "20px" }}>
                  <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--teal)", marginBottom: "6px" }}>{phase}</p>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>{label}</p>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 10 Limitations */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>10 — Limitations</SectionLabel>
            <SectionHeading>What this analysis cannot claim.</SectionHeading>
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "24px 28px",
            }}>
              {[
                "Secondary analysis of aggregate and public data — not primary patient-level research",
                "Associations observed in the data do not establish causality",
                "Not all potentially relevant patient characteristics are available in the underlying data",
                "Some analyses may use different time periods or data linkage methods that affect comparability",
                "Findings should not be automatically generalized beyond the populations and time periods represented",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "10px" }}>
                  <span style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", flexShrink: 0, lineHeight: 1.7 }}>→</span>
                  <span style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 11 Closing insight */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>11 — Closing insight</SectionLabel>
            <div style={{
              borderLeft: "3px solid var(--teal)",
              paddingLeft: "24px",
            }}>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", lineHeight: 1.5, marginBottom: "12px" }}>
                Good analysis does not turn every difference into a conclusion.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.7 }}>
                Sometimes its most useful result is identifying the next question that an organization needs to investigate.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Back to work ── */}
      <div style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 32px" }}>
          <Link href="/#work" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "14px", fontWeight: 600, color: "var(--teal)", textDecoration: "none" }}>
            ← Back to selected work
          </Link>
        </div>
      </div>
    </div>
  );
}
