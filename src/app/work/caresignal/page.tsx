import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CareSignal — Rashi Goel",
  description:
    "CareSignal is an independent clinical decision-support prototype that applies deterministic rules to FHIR patient data to identify chronic-disease care gaps.",
  openGraph: {
    title: "CareSignal — Clinical Decision Support",
    description:
      "CareSignal applies deterministic clinical rules to FHIR data to identify monitoring and screening gaps across four chronic conditions.",
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

export default function CareSignalPage() {
  return (
    <div style={{ background: "var(--canvas)" }}>

      {/* ── Hero ── */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "64px 32px 56px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--muted)", marginBottom: "12px" }}>
            <Link href="/#work" style={{ color: "var(--muted)", textDecoration: "none" }}>Work</Link>
            {" "}/{"  "}Clinical Decision Support · FHIR
          </p>
          <h1 style={{
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: 800,
            color: "var(--ink)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "16px",
            maxWidth: "800px",
          }}>
            CareSignal
          </h1>
          <p style={{ fontSize: "20px", color: "var(--teal)", fontWeight: 600, marginBottom: "16px" }}>
            Read the chart. Apply the rules. Flag the gaps.
          </p>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "640px", marginBottom: "36px" }}>
            CareSignal is an independent clinical decision-support prototype built around FHIR health data.
            It applies deterministic clinical rules to identify monitoring and screening gaps across type 2 diabetes,
            hypertension, chronic kidney disease, and dyslipidemia. Its AI layer summarizes the chart.
            It does not determine the clinical alerts.
          </p>

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
              ["Project type", "Independent prototype"],
              ["Focus", "Clinical decision support / interoperability"],
              ["Technologies", "FHIR R4 · React · Azure OpenAI GPT-4o"],
              ["Year", "2026"],
            ].map(([label, value]) => (
              <div key={label}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "10px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{label}</p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)" }}>{value}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
            <a href="https://care-gap-dashboard-ycrrjq4u7a-uc.a.run.app" target="_blank" rel="noopener noreferrer"
              style={{ background: "var(--teal)", color: "#fff", fontSize: "13px", fontWeight: 600, padding: "10px 22px", textDecoration: "none", borderRadius: "4px" }}>
              Live prototype ↗
            </a>
            <a href="https://youtu.be/YCpgPiaWoBE" target="_blank" rel="noopener noreferrer"
              style={{ background: "var(--surface)", color: "var(--ink)", fontSize: "13px", fontWeight: 500, padding: "10px 22px", textDecoration: "none", border: "1px solid var(--border)", borderRadius: "4px" }}>
              Watch demo ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: "740px", padding: "64px 0" }}>

          {/* 01 The problem */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>01 — The problem</SectionLabel>
            <SectionHeading>Clinical data exists. It does not automatically become action.</SectionHeading>
            <div className="cs-prose">
              <p>
                A primary care physician manages a patient panel that might include hundreds of people with chronic conditions.
                FHIR-capable systems can hold structured observations, diagnoses, medications, and lab results.
              </p>
              <p>
                But structured data sitting inside a record does not automatically surface when a patient is overdue
                for monitoring. It does not flag that a recent lab value warrants a closer look.
                It does not tell anyone that a care gap opened three months ago.
              </p>
              <p>
                The information is there. The logic is known. What is missing is a layer that applies the logic
                consistently across the panel and surfaces findings before they become problems.
              </p>
            </div>
          </div>

          {/* 02 The idea */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>02 — The idea</SectionLabel>
            <SectionHeading>Turn existing structured data into a monitoring layer.</SectionHeading>
            <div className="cs-prose">
              <p>
                CareSignal turns existing structured patient data into a rules-driven monitoring layer.
                Rather than requiring a clinician to review every chart for overdue monitoring,
                the system applies deterministic rules to the available FHIR data and surfaces gaps ranked by urgency.
              </p>
              <p>
                The clinical rules are separate from the AI layer. The language model summarizes; the rules decide.
              </p>
            </div>
          </div>

          {/* 03 What it does */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>03 — What it does</SectionLabel>
            <SectionHeading>Four conditions. Nine rules. Four urgency levels.</SectionHeading>
            <div className="cs-prose">
              <p>The prototype covers four chronic conditions:</p>
              <ul>
                <li>Type 2 diabetes</li>
                <li>Hypertension</li>
                <li>Chronic kidney disease</li>
                <li>Dyslipidemia</li>
              </ul>
              <p>Nine clinical rules are applied:</p>
              <ul>
                <li>Four monitoring rules for patients with confirmed diagnoses</li>
                <li>Four screening rules that identify potential undiagnosed disease from abnormal lab values</li>
                <li>One medication review rule</li>
              </ul>
              <p>Findings are classified as CRITICAL, HIGH, MEDIUM, or LOW. Three views are available: Patient Panel, Patient Detail, and Population Dashboard.</p>
            </div>
          </div>

          {/* 04 How it works */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>04 — How it works</SectionLabel>
            <SectionHeading>FHIR data → rules engine → prioritized gaps → clinician action.</SectionHeading>
            <div className="cs-prose">
              <p>The data flow is straightforward:</p>
            </div>
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "24px 28px",
              margin: "20px 0",
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "13px",
              color: "var(--muted)",
              lineHeight: 2,
            }}>
              FHIR patient data (observations, conditions, medications)<br />
              <span style={{ color: "var(--teal)" }}>↓</span><br />
              Deterministic rules engine<br />
              <span style={{ color: "var(--teal)" }}>↓</span><br />
              Prioritized care gaps (CRITICAL / HIGH / MEDIUM / LOW)<br />
              <span style={{ color: "var(--teal)" }}>↓</span><br />
              Clinician review and action
            </div>
            <div className="cs-prose">
              <p>
                Clinical guidelines inform the rules. Diabetes Canada CPG, Hypertension Canada guidelines,
                and CTFPHC recommendations are used as references.
                The rules are not generated by AI and do not vary based on model confidence.
              </p>
            </div>
          </div>

          {/* 05 AI callout */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>05 — AI that summarizes, not decides</SectionLabel>
            <SectionHeading>One of the most important decisions in the design.</SectionHeading>

            <div style={{
              background: "var(--teal-soft)",
              border: "1px solid var(--teal)",
              borderRadius: "6px",
              padding: "28px 32px",
              margin: "20px 0 24px",
              textAlign: "center",
            }}>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "22px", fontWeight: 800, color: "var(--teal)", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                AI summarizes.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "22px", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.01em" }}>
                Rules decide.
              </p>
            </div>

            <div className="cs-prose">
              <p>
                Azure OpenAI GPT-4o generates a concise chart summary to help a clinician orient quickly.
                The actual alerts and severity classifications come exclusively from the deterministic rules engine.
              </p>
              <p>
                This distinction matters. An AI-generated summary can be wrong or incomplete.
                An alert generated by the language model would have no traceable basis in the clinical rules.
                The current design keeps those two functions separate by design.
              </p>
              <p>
                AI-generated summaries must be reviewed against the source data before clinical use.
                They are orientation aids, not clinical conclusions.
              </p>
            </div>
          </div>

          {/* 06 FHIR workflow */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>06 — FHIR workflow</SectionLabel>
            <SectionHeading>Actions create FHIR resources.</SectionHeading>
            <div className="cs-prose">
              <p>
                When a clinician acts on a care gap, the prototype creates structured FHIR resources to record that action:
                Task, ServiceRequest, and Appointment resources are used depending on the type of follow-up.
              </p>
              <p>
                This means the action taken on a gap becomes part of the workflow record in a standards-based format,
                rather than a free-text note disconnected from the original alert.
              </p>
              <p>
                The prototype is designed around FHIR R4 resources and standards-based workflows.
                Writing those resources successfully into a specific EMR is a separate integration problem
                not addressed by this prototype.
              </p>
            </div>
          </div>

          {/* 07 What I designed for */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>07 — What I designed for</SectionLabel>
            <SectionHeading>Design principles.</SectionHeading>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              overflow: "hidden",
              margin: "16px 0",
            }}>
              {["Traceability", "Consistency", "Clinical prioritization", "Human review", "Standards-based information exchange"].map((p) => (
                <div key={p} style={{ background: "var(--surface)", padding: "18px 20px" }}>
                  <span style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "14px", fontWeight: 600, color: "var(--ink)" }}>
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 08 Limitations */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>08 — Limitations</SectionLabel>
            <SectionHeading>What this is not.</SectionHeading>
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "24px 28px",
            }}>
              {[
                "An independent prototype, not a production system",
                "Not a clinically validated medical device",
                "Not connected to live patient records",
                "Not a demonstration of universal EHR compatibility",
                "Not a replacement for clinician judgment",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "10px" }}>
                  <span style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", flexShrink: 0, lineHeight: 1.7 }}>→</span>
                  <span style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "14px", fontStyle: "italic" }}>
              Stating limitations clearly is part of responsible prototype documentation.
              It is not a weakness in the work.
            </p>
          </div>

          {/* 09 What I learned */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>09 — What I learned</SectionLabel>
            <SectionHeading>The interesting question is not where to add AI.</SectionHeading>
            <div className="cs-prose">
              <p>
                The interesting part of building a clinical AI tool is not finding more places to apply the model.
                It is deciding what should remain deterministic, what can reasonably be summarized probabilistically,
                and how a user can trace a finding back to the underlying data and rule.
              </p>
              <p>
                Every alert in CareSignal has a traceable basis: the rule that fired, the FHIR observation that triggered it,
                and the guideline reference that defines the threshold.
                The language model is used for readability, not for logic.
              </p>
              <p>
                That boundary—between what the machine should decide and what the machine should only describe—turned out
                to be the most important design decision in the project.
              </p>
            </div>
          </div>

          {/* 10 Sources */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>10 — Sources</SectionLabel>
            <SectionHeading>Clinical references</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Diabetes Canada Clinical Practice Guidelines Expert Committee. Diabetes Canada 2023 Clinical Practice Guidelines.",
                "Nerenberg et al. Hypertension Canada's 2018 Guidelines for Diagnosis, Risk Assessment, Prevention, and Treatment of Hypertension in Adults and Children. Can J Cardiol. 2018.",
                "Canadian Task Force on Preventive Health Care (CTFPHC). Screening recommendations.",
                "HL7 International. FHIR R4 Specification. hl7.org/fhir/R4.",
                "HL7 Da Vinci DEQM Implementation Guide. framework reference for gaps-in-care reporting.",
              ].map((ref, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--teal)", flexShrink: 0, lineHeight: 1.8 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{ref}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Next project ── */}
      <div style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 32px" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--muted)", marginBottom: "8px" }}>
            Next project
          </p>
          <Link href="/work/faxbridge" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "18px", fontWeight: 700, color: "var(--teal)", textDecoration: "none" }}>
            FaxBridge →
          </Link>
        </div>
      </div>
    </div>
  );
}
