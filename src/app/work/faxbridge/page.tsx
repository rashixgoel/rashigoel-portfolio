import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FaxBridge — Rashi Goel",
  description:
    "FaxBridge is an independent prototype exploring AI-assisted clinical document intake with human verification for ambiguous cases.",
  openGraph: {
    title: "FaxBridge — AI-Assisted Clinical Document Intake",
    description:
      "FaxBridge explores how incoming clinical documents can be extracted, structured, and prepared for downstream systems without treating machine-generated data as automatically trustworthy.",
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

export default function FaxBridgePage() {
  return (
    <div style={{ background: "var(--canvas)" }}>

      {/* ── Hero ── */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "64px 32px 56px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "11px", color: "var(--muted)", marginBottom: "12px" }}>
            <Link href="/#work" style={{ color: "var(--muted)", textDecoration: "none" }}>Work</Link>
            {" "}/{"  "}Workflow Automation · Interoperability
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
            FaxBridge
          </h1>
          <p style={{ fontSize: "20px", color: "var(--teal)", fontWeight: 600, marginBottom: "16px" }}>
            AI-assisted clinical document intake with human verification.
          </p>

          {/* Hook */}
          <div style={{
            borderLeft: "3px solid var(--teal)",
            paddingLeft: "20px",
            marginBottom: "24px",
          }}>
            <p style={{ fontSize: "17px", color: "var(--ink)", fontWeight: 500, lineHeight: 1.5, marginBottom: "4px" }}>
              The fax may have arrived digitally.
            </p>
            <p style={{ fontSize: "17px", color: "var(--ink)", fontWeight: 500, lineHeight: 1.5 }}>
              The data inside it did not.
            </p>
          </div>

          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "640px", marginBottom: "36px" }}>
            FaxBridge explores how information contained in clinical documents can be extracted, structured, and prepared
            for downstream systems without treating machine-generated data as automatically trustworthy.
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
              ["Focus", "Document intake / interoperability / workflow automation"],
              ["Technologies", "FHIR R4 · AI-assisted extraction · Human-in-the-loop"],
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

          {/* 01 The workflow problem */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>01 — The workflow problem</SectionLabel>
            <SectionHeading>Digital does not mean interoperable.</SectionHeading>
            <div className="cs-prose">
              <p>
                A fax received as a PDF is electronic. That is not the same as being interoperable.
                The information inside it—patient identifiers, diagnoses, medications, results, clinical notes—
                exists as image pixels or unstructured text.
              </p>
              <p>
                Another system cannot read that information as structured data. It cannot match it to a patient record automatically.
                It cannot route it, validate it, or incorporate it into a workflow without a person manually re-reading and re-entering it.
              </p>
              <p>
                This is a problem that exists across most clinical document intake workflows today.
              </p>
            </div>
          </div>

          {/* 02 The question */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>02 — The question</SectionLabel>
            <SectionHeading>What would it take to make this information usable—safely?</SectionHeading>
            <div className="cs-prose">
              <p>
                What would it take to make the information inside an inbound clinical document usable by another system,
                without creating new patient-safety or privacy risks in the process?
              </p>
              <p>
                That question is what FaxBridge is built to explore.
              </p>
            </div>
          </div>

          {/* 03 What it does */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>03 — What FaxBridge does</SectionLabel>
            <SectionHeading>Extract, structure, verify, route.</SectionHeading>
            <div className="cs-prose">
              <p>The prototype accepts incoming clinical PDFs and processes them through a verification workflow:</p>
              <ul>
                <li>Accepts clinical PDFs</li>
                <li>Classifies document type</li>
                <li>Extracts patient identifiers and clinical information</li>
                <li>Generates structured FHIR resources from extracted data</li>
                <li>Displays extracted information alongside the original source document</li>
                <li>Surfaces ambiguous or unmatched patient records for human review</li>
                <li>Routes unresolved cases to a review queue rather than auto-committing</li>
                <li>Records human verification and correction decisions</li>
                <li>Exposes a structured FHIR view of the processed record</li>
              </ul>
            </div>
          </div>

          {/* 04 Preserve the source */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>04 — Preserve the source</SectionLabel>
            <SectionHeading>Extracted data is derived. The original document is the evidence.</SectionHeading>
            <div className="cs-prose">
              <p>
                The source document must remain available and visible throughout the verification workflow.
              </p>
              <p>
                Structured extracted information is derived from the source. It should not erase what it came from.
                If the extracted data is wrong, incomplete, or ambiguous, the reviewer needs access to the original
                to correct it. Removing the source document from view would make that impossible.
              </p>
            </div>
          </div>

          {/* 05 Patient matching */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>05 — Patient identity without guessing</SectionLabel>
            <SectionHeading>The system needs to be able to say: &ldquo;I don&apos;t know.&rdquo;</SectionHeading>
            <div className="cs-prose">
              <p>
                Patient matching is one of the highest-risk steps in any document intake workflow.
                An incorrect match attaches clinical information to the wrong patient record.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              overflow: "hidden",
              margin: "20px 0",
            }}>
              {[
                { label: "Clear match", action: "Proceed" },
                { label: "Ambiguous match", action: "Human chooses" },
                { label: "No match", action: "Hold for review" },
              ].map((row) => (
                <div key={row.label} style={{ background: "var(--surface)", padding: "20px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>{row.label}</p>
                  <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--teal)" }}>→ {row.action}</p>
                </div>
              ))}
            </div>

            <div className="cs-prose">
              <p>
                FaxBridge does not automatically create a new patient chart when no match is found.
                An unmatched record goes to a human reviewer.
                Automatically creating a new chart could result in duplicate records
                and fragment a patient&apos;s history across the system.
              </p>
            </div>
          </div>

          {/* 06 Extraction vs verification */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>06 — Extraction vs verification</SectionLabel>
            <SectionHeading>The machine speaks FHIR. The reviewer should not have to.</SectionHeading>
            <div className="cs-prose">
              <p>
                The reviewer interface shows the original document and the extracted fields side by side.
              </p>
              <p>
                Extracted fields are displayed as ordinary values—patient name, date of birth, diagnosis,
                medication, lab result—not as raw FHIR JSON.
                The reviewer compares what the system extracted against what is written in the original document.
              </p>
              <p>
                FHIR is generated in the background.
                The person reviewing the record does not need to understand FHIR to do that job.
              </p>
            </div>

            {/* TODO: screenshot placeholder */}
            <div style={{
              background: "var(--surface)",
              border: "2px dashed var(--border)",
              borderRadius: "6px",
              padding: "48px 32px",
              textAlign: "center",
              margin: "20px 0",
            }}>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>
                TODO: Add screenshot showing side-by-side extraction verification UI
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                Left: Original document · Right: Extracted fields with edit controls
              </p>
            </div>
          </div>

          {/* 07 Confidence + consequence */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>07 — Confidence weighted by consequence</SectionLabel>
            <SectionHeading>A 95% confident phone number is not the same as a 95% confident medication dosage.</SectionHeading>
            <div className="cs-prose">
              <p>
                Model confidence scores alone are not a sufficient basis for deciding what gets auto-committed.
              </p>
              <p>
                The risk of an extraction error depends on what information was extracted, not just how confident
                the model was in extracting it. High-confidence extraction of a wrong medication dosage or an
                incorrect allergy creates a patient-safety problem regardless of the confidence score.
              </p>
              <p>Information requiring human review before commit includes:</p>
              <ul>
                <li>Medication names and dosages</li>
                <li>Allergies and adverse reactions</li>
                <li>Critical or abnormal test results</li>
                <li>Any information that would affect treatment decisions or routing</li>
              </ul>
              <p>
                Low-consequence fields—contact information, appointment dates, document type—can move
                through with less friction.
                The threshold for human review should vary by what is at stake if the extraction is wrong.
              </p>
            </div>
          </div>

          {/* 08 What the project is really about */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>08 — What the project is really about</SectionLabel>
            <SectionHeading>
              The difficult part was not extraction. It was deciding when the system should refuse to act.
            </SectionHeading>
            <div className="cs-prose">
              <p>
                I started FaxBridge expecting the hard part to be converting a document into FHIR.
                The extraction problem is technically interesting, but it is solvable.
              </p>
              <p>
                The harder problem turned out to be trust:
              </p>
              <ul>
                <li>What should the system do automatically</li>
                <li>What should it escalate to a person</li>
                <li>How uncertainty should be represented in the interface</li>
                <li>How the provenance of extracted data should be preserved</li>
                <li>How a reviewer can tell the difference between machine extraction and human verification</li>
              </ul>
              <p>
                Every record in FaxBridge carries a clear status: extracted, pending review, or verified by a named person.
                That distinction is not cosmetic. It matters for how much downstream trust should be placed
                in the information.
              </p>
            </div>
          </div>

          {/* 09 Limitations */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>09 — Limitations</SectionLabel>
            <SectionHeading>What this prototype does not claim.</SectionHeading>
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "24px 28px",
            }}>
              {[
                "An independent prototype — not a production-ready system",
                "Not validated across all clinical document types or image qualities",
                "Generating FHIR resources and writing them into a specific EMR are separate integration problems",
                "Not a demonstration that FaxBridge works with every EMR",
                "Extraction accuracy varies with document format and print quality",
                "Not a substitute for proper patient identity governance policies",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "10px" }}>
                  <span style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-mono), monospace", fontSize: "12px", flexShrink: 0, lineHeight: 1.7 }}>→</span>
                  <span style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 10 What I learned */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>10 — What I learned</SectionLabel>
            <SectionHeading>The hardest problem was trust.</SectionHeading>
            <div className="cs-prose">
              <p>
                I began the project thinking the interesting problem was converting a document into FHIR.
              </p>
              <p>
                The harder problem turned out to be trust: what the software should do, what it should refuse to do,
                and how a person reviewing the record can tell the difference.
              </p>
              <p>
                Every clinical system that introduces automation makes choices—explicitly or implicitly—about
                where the machine&apos;s judgment ends and a human&apos;s begins.
                FaxBridge tries to make those choices explicit and visible, rather than hiding them
                behind a confidence score or a green checkmark.
              </p>
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
          <Link href="/work/hospital-harm" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "18px", fontWeight: 700, color: "var(--teal)", textDecoration: "none" }}>
            Equity in Hospital Harm →
          </Link>
        </div>
      </div>
    </div>
  );
}
