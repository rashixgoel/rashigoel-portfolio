import type { Metadata } from "next";
import { CaseHero, CaseNext, CaseSection, Limitations } from "@/components/case";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import { shots } from "@/lib/shots";
import { projectLinks } from "@/lib/projects";
import { Callout, Flow, Pull, Tags } from "@/components/ui";

export const metadata: Metadata = {
  title: "CareSignal — FHIR Clinical Decision Support Prototype | Rashi Goel",
  description:
    "A FHIR-based clinical decision-support prototype applying nine deterministic rules across four chronic conditions to surface and prioritize potential care gaps.",
  openGraph: {
    title: "CareSignal — The information may already be in the chart.",
    description:
      "A FHIR-based clinical decision-support prototype that separates deterministic clinical rules from AI summarization.",
  },
};

const conditions = [
  ["Type 2 diabetes", "Recurring measurement and monitoring requirements"],
  ["Hypertension", "Blood pressure follow-up and review intervals"],
  ["Chronic kidney disease", "Function monitoring and staging review"],
  ["Dyslipidemia", "Lipid monitoring and medication review"],
];

const levels = [
  ["01", "Population", "See the overall pattern across the panel."],
  ["02", "Prioritize", "Identify which patients require attention first."],
  ["03", "Understand", "Review the underlying data and care gaps for one patient."],
];

const resources = [
  "Observation",
  "Condition",
  "Medication",
  "Procedure",
  "Task",
  "ServiceRequest",
  "Appointment",
];

const priorities: [string, string][] = [
  ["Critical", "var(--coral-ink)"],
  ["High", "#A85A1B"],
  ["Medium", "var(--blue)"],
  ["Low", "var(--grey)"],
];

export default function CareSignalPage() {
  return (
    <>
      <CaseHero
        eyebrow="Clinical Decision Support · FHIR"
        title="CareSignal"
        sub="The information may already be in the chart. The challenge is knowing what needs attention."
        tags={["FHIR R4", "Clinical Decision Support", "Azure OpenAI", "Rules Engine", "React"]}
        links={[
          {
            label: "View live app",
            href: projectLinks.caresignal.liveApp,
            aria: "View the CareSignal live application",
          },
          {
            label: "View case study",
            href: projectLinks.caresignal.caseStudy,
            aria: "View the CareSignal case study document",
          },
        ]}
        meta={[
          { k: "Project", v: "Independent prototype" },
          { k: "Conditions", v: "Four chronic conditions" },
          { k: "Logic", v: "Nine deterministic rules" },
          { k: "Standard", v: "FHIR R4" },
        ]}
      >
        <p className="lede">
          A FHIR-based clinical decision-support prototype that applies deterministic rules to
          structured patient information and surfaces potential chronic-disease care gaps.
        </p>
      </CaseHero>

      {/* ── Hero visual ── */}
      <section className="case-sec bg-white" style={{ paddingBlock: "56px" }}>
        <div className="wrap">
          <Reveal>
            <Shot
              shot={shots.caresignalDetail}
              sizes="(max-width: 1000px) 100vw, 1140px"
              frame="caresignal.rashigoel.io"
              priority
              caption="A single patient view: an AI-written summary at the top, and beneath it the care gaps that explicit clinical rules produced."
            />
          </Reveal>
        </div>
      </section>

      {/* ── 01 The problem ── */}
      <CaseSection num="01 — The problem" title="The data can already be there and still be hard to see.">
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">
                Chronic-disease management involves many recurring measurements, tests and
                follow-up requirements.
              </p>
              <p className="body">
                The necessary data can already exist in the patient record while an overdue test
                or potential care gap remains difficult to notice inside an information-dense
                chart.
              </p>
            </div>
            <div style={{ alignSelf: "center" }}>
              <Pull>
                Can structured EMR data be evaluated systematically so clinicians can see which
                patients may need attention first?
              </Pull>
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 02 Scope ── */}
      <CaseSection
        num="02 — Scope"
        title="Four conditions. Nine deterministic clinical rules."
        tone="white"
      >
        <Reveal>
          <div className="grid-2">
            {conditions.map(([name, desc]) => (
              <div key={name} className="card">
                <h3 className="h4" style={{ marginBottom: "8px" }}>
                  {name}
                </h3>
                <p className="body" style={{ fontSize: "15px" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p className="body measure" style={{ marginTop: "32px" }}>
            Each rule is explicit and reproducible. Given the same patient data, a rule produces
            the same result every time — which is what makes an alert traceable back to the logic
            that raised it.
          </p>
        </Reveal>
      </CaseSection>

      {/* ── 03 The workflow ── */}
      <CaseSection num="03 — The workflow" title="From FHIR data to a clinician decision.">
        <Reveal>
          <div style={{ maxWidth: "560px" }}>
            <Flow
              steps={[
                { t: "FHIR patient data" },
                { t: "Deterministic rules", tone: "accent" },
                { t: "Care gap" },
                { t: "Priority" },
                { t: "Clinician review", tone: "coral" },
                { t: "Follow-up action" },
              ]}
            />
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 04 Three levels ── */}
      <CaseSection
        num="04 — Three levels"
        title="The product answers three questions in order."
        tone="white"
      >
        <Reveal>
          <div className="grid-3" style={{ marginBottom: "56px" }}>
            {levels.map(([n, t, d]) => (
              <div key={n} className="insight">
                <span className="insight-n">{n}</span>
                <h3 className="h4" style={{ marginBottom: "10px" }}>
                  {t}
                </h3>
                <p className="body" style={{ fontSize: "15px" }}>
                  {d}
                </p>
              </div>
            ))}
          </div>

          <p className="cap-h">01 · Population — what is happening across the panel?</p>
          <Shot
            shot={shots.caresignalPopulation}
            sizes="(max-width: 1000px) 100vw, 1140px"
            frame="caresignal.rashigoel.io"
          />
        </Reveal>
      </CaseSection>

      {/* ── 05 Prioritization ── */}
      <CaseSection num="05 — Prioritization" title="Who should be reviewed first?">
        <Reveal>
          <div className="split split-top" style={{ marginBottom: "44px" }}>
            <div className="measure">
              <p className="body">
                Identified care gaps are assigned a priority level so a clinician can start with
                the patients whose gaps matter most, rather than reading every chart in sequence.
              </p>
              <p className="body">
                CareSignal does not only generate individual alerts — it organizes the whole panel
                by urgency.
              </p>
              <p className="body">
                Priority ordering is a review aid. It does not replace clinical judgment about
                which patient needs attention.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {priorities.map(([label, color]) => (
                <div
                  key={label}
                  style={{
                    padding: "12px 16px",
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    borderLeft: `3px solid ${color}`,
                    borderRadius: "var(--r-sm)",
                  }}
                >
                  <span
                    className="mono"
                    style={{ color, letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="cap-h">02 · Prioritize — which patients need attention?</p>
          <Shot
            shot={shots.caresignalPanel}
            sizes="(max-width: 1000px) 100vw, 1140px"
            frame="caresignal.rashigoel.io"
          />
        </Reveal>
      </CaseSection>

      {/* ── 06 Where AI sits ── */}
      <CaseSection num="06 — Where AI sits" title="The boundary is the design decision." tone="white">
        <Reveal>
          <div className="split split-top" style={{ marginBottom: "44px" }}>
            <div style={{ alignSelf: "center" }}>
              <Callout tone="coral">
                AI summarizes.
                <br />
                Rules decide.
              </Callout>
            </div>

            <div className="measure">
              <p className="body">
                Azure OpenAI GPT-4o generates concise clinical summaries to make the chart easier
                to review.
              </p>
              <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                It does not determine whether a care gap exists.
              </p>
              <p className="body">
                The alerts and priority levels come from deterministic clinical logic based on
                defined rules. The summary is labelled in the interface so a clinician always
                knows which part of the screen a model wrote.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: "980px" }}>
            <Shot shot={shots.caresignalAiSummary} sizes="(max-width: 1000px) 100vw, 960px" />
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 07 FHIR ── */}
      <CaseSection num="07 — FHIR" title="Built around standards-based resources.">
        <Reveal>
          <p className="body measure" style={{ marginBottom: "28px" }}>
            The application is designed around FHIR R4 resources and standards-based workflows.
            Working against defined resource types is what allows the same clinical logic to be
            expressed independently of any one vendor&rsquo;s internal data model.
          </p>

          <Tags items={resources} />

          <p className="body measure" style={{ marginTop: "28px" }}>
            Designing against FHIR R4 is not the same as being integrated with a given EMR.
            Connecting to a real system would require its own authorization, data-mapping and
            validation work.
          </p>
        </Reveal>
      </CaseSection>

      {/* ── 08 What I learned ── */}
      <CaseSection num="08 — What I learned" tone="white">
        <Reveal>
          <Pull>
            The interesting question was not where AI could be added. It was where it should not
            be responsible for the decision.
          </Pull>

          <div className="measure" style={{ marginTop: "40px" }}>
            <p className="body">
              CareSignal made the distinction between deterministic logic and generative AI much
              clearer to me.
            </p>
            <p className="body">A language model can help summarize complex information.</p>
            <p className="body">
              But when an alert needs to be reproducible and traceable, the underlying logic
              should remain explicit.
            </p>
          </div>

          <div style={{ marginTop: "40px", maxWidth: "760px" }}>
            <Limitations
              items={[
                "Independent prototype",
                "Not a medical device",
                "Not clinically validated",
                "Not connected to live patient records",
                "Demonstration data, not real patients",
                "Not a substitute for clinical judgment",
              ]}
            />
          </div>
        </Reveal>
      </CaseSection>

      <CaseNext href="/work/clinicflow" label="ClinicFlow" />
    </>
  );
}
