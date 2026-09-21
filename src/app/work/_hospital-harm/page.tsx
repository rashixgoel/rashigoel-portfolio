import type { Metadata } from "next";
import { CaseHero, CaseNext, CaseSection, Limitations } from "@/components/case";
import Reveal from "@/components/Reveal";
import { AssetNeeded, BList, Flow, Note, Pull } from "@/components/ui";

export const metadata: Metadata = {
  title: "Equity in Hospital Harm — A CIHI Data Analysis | Rashi Goel",
  description:
    "A secondary analysis of publicly available CIHI Hospital Harm findings examining patient-safety disparities across equity dimensions, the limits of the evidence, and what to investigate before choosing an intervention.",
  openGraph: {
    title: "Equity in Hospital Harm — A difference in the data is a reason to investigate.",
    description:
      "A secondary analysis of publicly available CIHI Hospital Harm findings across equity dimensions.",
  },
};

const approach = [
  ["Define", "Frame hospital harm as both a patient-safety and equity question."],
  ["Analyze", "Examine available CIHI findings across equity dimensions."],
  ["Interpret", "Distinguish observed associations from causal explanations."],
  ["Identify gaps", "Ask what information would materially change the interpretation."],
  ["Engage", "Identify who needs to interpret the results."],
  ["Act", "Translate the evidence into an investigation and improvement plan."],
];

const stakeholders = [
  [
    "Hospital quality & patient-safety teams",
    "Metrics, root-cause evidence, measurable interventions",
  ],
  ["Frontline clinicians", "Workflow context and changes they can act on"],
  ["Patients & communities", "Meaningful participation and clarity on what will change"],
  ["HIM & data-governance teams", "Definitions, data quality, privacy compliance"],
  ["Health authorities & policy leaders", "Consistent measurement that can scale"],
];

const confounders = [
  "clinical complexity",
  "comorbidities",
  "hospital characteristics",
  "referral patterns",
  "access before admission",
  "communication barriers",
  "data quality",
  "other demographic information",
];

export default function HospitalHarmPage() {
  return (
    <>
      <CaseHero
        eyebrow="Health Data Analysis · Health Equity"
        title="Equity in Hospital Harm"
        sub="A difference in the data is a reason to investigate. Not automatically an explanation."
        tags={["CIHI", "Health Equity", "Patient Safety", "Data Analysis", "Quality Improvement"]}
        meta={[
          { k: "Project", v: "Independent analysis" },
          { k: "Source", v: "Public CIHI Hospital Harm findings" },
          { k: "Method", v: "Secondary analysis" },
          { k: "Focus", v: "Equity-stratified patient safety" },
        ]}
      >
        <p className="lede">
          A secondary analysis of publicly available CIHI Hospital Harm findings.
        </p>
        <div style={{ marginTop: "26px" }}>
          <Note>
            Independent analytical project using public data published by the Canadian Institute
            for Health Information. CIHI did not commission, supervise or endorse this work.
          </Note>
        </div>
      </CaseHero>

      {/* 01 The question */}
      <CaseSection num="01 — The question" title="Averages describe populations." tone="white">
        <Reveal>
          <div className="measure">
            <p className="body">
              Hospital harm is often reported as a single rate. That number is useful for
              benchmarking and trend analysis.
            </p>
            <p className="body">
              It does not tell us whether different patient populations experience care
              differently. An aggregate rate can mask meaningful variation.
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <Pull>
              How can equity-stratified patient-safety data help an organization identify
              meaningful disparities without turning association into unsupported conclusions?
            </Pull>
          </div>
        </Reveal>
      </CaseSection>

      {/* 02 Approach */}
      <CaseSection num="02 — Analytical approach" title="A structured methodology.">
        <Reveal>
          <div>
            {approach.map(([step, desc], i) => (
              <div key={step} className="step">
                <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="h4" style={{ marginBottom: "6px" }}>
                    {step}
                  </h3>
                  <p className="body" style={{ fontSize: "15px" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </CaseSection>

      {/* 03 Findings */}
      <CaseSection num="03 — Findings" title="Patterns that warrant investigation." tone="white">
        <Reveal>
          <p className="body measure" style={{ marginBottom: "36px" }}>
            The visualizations below come from the analysis of publicly available CIHI findings.
            Each shows an association observed in the available data — a signal to investigate,
            not an explanation.
          </p>

          <div className="grid-3">
            <AssetNeeded
              kind="chart"
              title="Harm rate by age group"
              file="work/harm-chart-age.png"
              note="verified CIHI figures only"
            />
            <AssetNeeded
              kind="chart"
              title="Harm rate by income quintile"
              file="work/harm-chart-income.png"
              note="verified CIHI figures only"
            />
            <AssetNeeded
              kind="chart"
              title="Geographic variation"
              file="work/harm-chart-geography.png"
              note="verified CIHI figures only"
            />
          </div>

          <div style={{ marginTop: "32px" }}>
            <Note>
              Charts must be exported from the original analysis. No figures have been generated
              or estimated for this page.
            </Note>
          </div>
        </Reveal>
      </CaseSection>

      {/* 04 Core insight */}
      <CaseSection
        num="04 — Core insight"
        title="The data can tell us where to look. It cannot always tell us why."
      >
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">An observed difference may warrant investigation.</p>
              <p className="body">
                It does not automatically establish that language, income, geography, education or
                another patient characteristic caused the harm.
              </p>
              <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                Any of the following could explain part or all of an observed difference.
              </p>
            </div>

            <div className="card">
              <p className="cap-h">Potential contextual variables</p>
              <BList items={confounders} />
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* 05 Stakeholders */}
      <CaseSection
        num="05 — Stakeholders"
        title="The same finding means different things to different people."
        tone="white"
      >
        <Reveal>
          <table className="tbl">
            <thead>
              <tr>
                <th scope="col">Stakeholder</th>
                <th scope="col">What they need from the analysis</th>
              </tr>
            </thead>
            <tbody>
              {stakeholders.map(([who, need]) => (
                <tr key={who}>
                  <td data-l="Stakeholder">{who}</td>
                  <td data-l="What they need">{need}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </CaseSection>

      {/* 06 Action path */}
      <CaseSection num="06 — Action path" title="Sequence matters more than speed.">
        <Reveal>
          <div className="split split-top">
            <div style={{ maxWidth: "440px" }}>
              <Flow
                steps={[
                  { t: "Find disparity" },
                  { t: "Investigate mechanism", tone: "coral" },
                  { t: "Co-design response" },
                  { t: "Pilot" },
                  { t: "Measure", tone: "accent" },
                  { t: "Scale or revise" },
                ]}
              />
            </div>

            <div className="measure">
              <p className="body">
                Moving directly from &ldquo;we see a disparity&rdquo; to &ldquo;we will implement
                training&rdquo; skips the investigation step that would tell you whether training
                is the right response.
              </p>
              <p className="body">
                The sequence is slower than jumping to an intervention. It is also more likely to
                produce a change that actually narrows the gap.
              </p>
              <p className="body">
                Measurement should track both the overall outcome and the size of the disparity.
                An intervention that improves the average without narrowing the gap has not
                solved the equity problem.
              </p>
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* 07 Closing */}
      <CaseSection num="07 — Closing" tone="white">
        <Reveal>
          <Pull>Good analysis does not turn every difference into a conclusion.</Pull>

          <p className="lede measure" style={{ marginTop: "28px" }}>
            Sometimes its most useful result is identifying the next question that needs to be
            answered.
          </p>

          <div style={{ marginTop: "40px", maxWidth: "760px" }}>
            <Limitations
              items={[
                "Secondary analysis",
                "Aggregate / public data",
                "Association does not establish causality",
                "Relevant variables may not be available",
                "Different analyses may use different time periods or linked datasets",
                "Findings should not automatically be generalized beyond the represented population",
              ]}
            />
          </div>
        </Reveal>
      </CaseSection>

      <CaseNext href="/work/clinicflow" label="ClinicFlow" />
    </>
  );
}
