import type { Metadata } from "next";
import { CaseHero, CaseNext, CaseSection, Limitations } from "@/components/case";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import { shots } from "@/lib/shots";
import { projectLinks } from "@/lib/projects";
import { BList, Callout, Flow, FlowBranch, Pull } from "@/components/ui";

export const metadata: Metadata = {
  title: "FaxBridge — AI-Assisted Clinical Document Intake | Rashi Goel",
  description:
    "An independent prototype exploring how information inside faxed clinical PDFs could be extracted, structured as FHIR resources and verified by a human before reaching a patient record.",
  openGraph: {
    title: "FaxBridge — A fax can arrive digitally and still leave its information trapped.",
    description:
      "An AI-assisted clinical document intake prototype built around patient-matching safety and human verification.",
  },
};

export default function FaxBridgePage() {
  return (
    <>
      <CaseHero
        eyebrow="Interoperability · Document Workflow"
        title="FaxBridge"
        sub="A fax can arrive digitally and still leave its information trapped."
        tags={[
          "FHIR R4",
          "AI-assisted extraction",
          "Human verification",
          "Patient matching",
          "Clinical workflow",
        ]}
        links={[
          {
            label: "View live app",
            href: projectLinks.faxbridge.liveApp,
            aria: "View the FaxBridge live prototype",
          },
          {
            label: "View case study",
            href: projectLinks.faxbridge.caseStudy,
            aria: "View the FaxBridge case study on LinkedIn",
          },
        ]}
        meta={[
          { k: "Project", v: "Independent prototype" },
          { k: "Focus", v: "Document intake & interoperability" },
          { k: "Standard", v: "FHIR R4" },
          { k: "Data", v: "Synthetic / demo only" },
        ]}
      >
        <p className="lede">
          FaxBridge is an AI-assisted clinical document intake prototype that explores how
          information inside faxed PDFs could be extracted, structured as FHIR resources and
          reviewed before reaching a patient record.
        </p>
      </CaseHero>

      {/* 01 The problem */}
      <CaseSection
        num="01 — The problem"
        title="Healthcare still depends heavily on faxed clinical information."
        tone="white"
      >
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">Receiving a PDF electronically solves transmission.</p>
              <p className="body">
                It does not make the information inside that PDF structured, searchable or
                interoperable.
              </p>
              <p className="body">
                Every step below still depends on a person reading the document and re-entering
                what it contains.
              </p>
            </div>

            <div>
              <Flow
                steps={[
                  { t: "Fax / PDF" },
                  { t: "Human reads" },
                  { t: "Human identifies patient" },
                  { t: "Human enters information" },
                  { t: "Document filed" },
                ]}
              />
            </div>
          </div>

          <div style={{ marginTop: "48px" }}>
            <Pull>
              Could more of that work become structured without allowing AI-generated information
              to enter the record unchecked?
            </Pull>
          </div>
        </Reveal>
      </CaseSection>

      {/* 02 The workflow */}
      <CaseSection num="02 — The workflow" title="What FaxBridge does.">
        <Reveal>
          <div className="split split-top">
            <div>
              <Flow
                steps={[
                  { t: "PDF received" },
                  { t: "Document classification" },
                  { t: "Patient information extraction" },
                  { t: "Patient matching", tone: "coral" },
                  { t: "FHIR resource generation" },
                  { t: "Human verification", tone: "accent" },
                  { t: "Approved information ready for downstream use" },
                ]}
              />
            </div>

            <div className="measure">
              <p className="body">
                Each step is a place the prototype can stop. Classification and extraction run on
                their own; patient matching and verification are the two points where the system
                is designed to hand back to a person.
              </p>
              <p className="body">
                The two screenshots below show those two safeguards: first whether the patient can
                be identified at all, then whether the extracted values can be trusted.
              </p>
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* 03 Patient identity */}
      <CaseSection
        num="03 — Patient identity"
        title="The system needs to be able to say: “I don’t know.”"
        tone="white"
      >
        <Reveal>
          <p className="body measure" style={{ marginBottom: "32px" }}>
            Patient matching is one of the highest-risk steps in any document intake workflow. An
            incorrect match attaches clinical information to the wrong patient record.
          </p>

          <FlowBranch
            items={[
              { t: "Clear match", s: "Proceed to review", tone: "accent" },
              { t: "Ambiguous match", s: "Surface candidate records for human selection" },
              { t: "No match", s: "Hold for review and flag possible misdirected document", tone: "coral" },
            ]}
          />

          <p
            className="body measure"
            style={{ marginBlock: "32px", color: "var(--ink)", fontWeight: 600 }}
          >
            FaxBridge does not automatically create a patient record when identity is uncertain.
            That is deliberate.
          </p>

          <Shot
            shot={shots.faxbridgeNoMatch}
            sizes="(max-width: 1000px) 100vw, 1140px"
            frame="faxbridge.vercel.app"
          />
        </Reveal>
      </CaseSection>

      {/* 04 Human review */}
      <CaseSection
        num="04 — Human review"
        title="Extraction and verification are different jobs."
      >
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">
                The prototype keeps the original source document visible while presenting
                extracted information for review.
              </p>
              <p className="body">
                The goal is to let someone verify ordinary clinical fields against their source
                without requiring them to read raw FHIR resources.
              </p>

              <div style={{ marginTop: "28px" }}>
                <Callout>
                  The machine can speak FHIR.
                  <br />
                  The reviewer should not have to.
                </Callout>
              </div>
            </div>

            <div>
              <Shot
                shot={shots.faxbridgeVerification}
                sizes="(max-width: 1000px) 100vw, 46vw"
                frame="faxbridge.vercel.app"
              />
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* 05 Consequence */}
      <CaseSection num="05 — Consequence matters" title="Confidence alone is not enough." tone="white">
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">
                A system may be equally confident about two extracted values that carry very
                different consequences.
              </p>
              <p className="body">
                A phone number and a medication dosage should not automatically be treated as
                equally safe.
              </p>
              <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                High-consequence information needs stronger verification.
              </p>
            </div>

            <div className="card">
              <p className="cap-h">Requires stronger verification</p>
              <BList
                items={[
                  "Medication / dosage",
                  "Allergies",
                  "Abnormal findings",
                  "Patient identity",
                  "Information affecting treatment",
                ]}
              />
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* 06 What I learned */}
      <CaseSection num="06 — What I learned">
        <Reveal>
          <Pull>
            The difficult part was not getting information out of the document. It was deciding
            when the system should refuse to act.
          </Pull>

          <div className="measure" style={{ marginTop: "40px" }}>
            <p className="body">FaxBridge started as a FHIR problem.</p>
            <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
              It became a trust problem.
            </p>
            <ul className="blist" style={{ marginBlock: "20px" }}>
              <li>What should the software automate?</li>
              <li>What should it escalate?</li>
              <li>How should uncertainty be represented?</li>
              <li>
                And how can a reviewer always trace structured information back to its source?
              </li>
            </ul>
          </div>

          <div style={{ marginTop: "40px", maxWidth: "760px" }}>
            <Limitations
              items={[
                "Independent prototype",
                "Uses synthetic / demo information",
                "Not connected to live clinical systems",
                "Not clinically validated",
                "FHIR generation does not equal universal EMR integration",
                "Requires privacy, security and workflow validation before any real clinical deployment",
              ]}
            />
          </div>
        </Reveal>
      </CaseSection>

      <CaseNext href="/work/caresignal" label="CareSignal" />
    </>
  );
}
