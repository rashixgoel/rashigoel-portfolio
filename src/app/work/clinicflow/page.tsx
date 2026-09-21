import type { Metadata } from "next";
import { CaseHero, CaseNext, CaseSection } from "@/components/case";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import { shots } from "@/lib/shots";
import { Callout, Flow, Note, Pull } from "@/components/ui";

export const metadata: Metadata = {
  title: "ClinicFlow — Inbox Automation Prototype | Rashi Goel",
  description:
    "An indPower Automate inbox triage with seven routing categories, Excel logging, Teams cancellation alerts, and testing across 21 realistic emails.",
  openGraph: {
    title: "ClinicFlow — What if incoming emails could find the right place on their own?",
    description:
      "An independent inbox automation prototype built with Power Automate, Outlook, Excel Online and Microsoft Teams.",
  },
};

const categories = [
  "Cancellations",
  "Bookings",
  "Referrals & Waitlist",
  "Prescriptions & Medication",
  "Third-Party Claims",
  "Private Pay & Fees",
  "General",
];

const testCases = [
  {
    id: "Case 01",
    message: "Prescription coverage question",
    route: "Prescriptions & Medication",
    reveal: "Medication terminology can obscure the real billing intent.",
  },
  {
    id: "Case 02",
    message: "Group booking asking whether a referral is required",
    route: "Referrals & Waitlist",
    reveal: "A later keyword can override the email’s primary request.",
  },
  {
    id: "Case 03",
    message: "Follow-up after a vacation",
    route: "Third-Party Claims",
    reveal: "The string “vac” matched inside the word “vacation.”",
  },
];

const insights = [
  {
    n: "01",
    h: "A successful run does not mean a correct result.",
    p: "An invisible tab character once caused a routing problem even though Power Automate reported the flow as successful. Inspecting the underlying value exposed the issue.",
  },
  {
    n: "02",
    h: "Consistency is part of reliability.",
    p: "Small differences in category names affected downstream routing. That made consistent naming and checking the actual destination as important as getting the logic to execute.",
  },
  {
    n: "03",
    h: "Workflow context matters more than automation for its own sake.",
    p: "The cancellation alert came from asking what reception staff would need to act on, not simply where an email should be filed.",
  },
];

const improvements = [
  ["Refine the rules", "Use more precise matching and prevent partial-word errors."],
  [
    "Review ambiguity",
    "Identify messages matching competing categories and send uncertain classifications for review.",
  ],
  [
    "Evaluate AI selectively",
    "Test intent-based classification for ambiguous emails rather than replacing simple deterministic rules everywhere.",
  ],
  [
    "Measure actual value",
    "Compare expected and actual routes, record staff corrections and measure time saved during an approved pilot.",
  ],
];

export default function ClinicFlowPage() {
  return (
    <>
      <CaseHero
        eyebrow="Power Automate · Workflow Automation"
        title="ClinicFlow"
        sub="What if incoming emails could find the right place on their own?"
        tags={["Power Automate", "Outlook", "Excel Online", "Microsoft Teams", "Workflow Design"]}
        meta={[
          { k: "Project", v: "Independent prototype" },
          { k: "Built with", v: "Power Automate · Outlook · Excel · Teams" },
          { k: "Testing", v: "21 fictional emails" },
          { k: "Build", v: "One weekend" },
        ]}
      >
        <p className="lede">
          An independent inbox automation prototype built after reading that CHANGEpain staff
          spent 2&ndash;3 hours each day manually sorting emails.
        </p>
        <div style={{ marginTop: "26px" }}>
          <Note>
            Inspired by CHANGEpain&rsquo;s co-op posting. Not affiliated with or commissioned by
            CHANGEpain. Built and tested using fictional emails in my own Microsoft 365
            environment.
          </Note>
        </div>
      </CaseHero>

      {/* ── 01 The challenge — narrative only ── */}
      <CaseSection
        num="01 — The challenge"
        title="I understood where those hours could disappear."
        tone="white"
      >
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">
                I work as an administrative assistant in a multidisciplinary clinic. Between
                bookings, coverage questions, patient follow-ups and documentation, I know how
                much attention a shared inbox can require.
              </p>
              <p className="body">
                When I read that CHANGEpain staff were spending 2&ndash;3 hours each day manually
                sorting emails, the problem felt immediately familiar.
              </p>
              <p className="body">I had never used Power Automate.</p>
              <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                But now I had a real reason to learn it.
              </p>
            </div>

            <div style={{ alignSelf: "center" }}>
              <Pull>
                How could an incoming email find its way to the right place automatically?
              </Pull>
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 02 Architecture — full-width tall screenshot ── */}
      <CaseSection num="02 — The architecture" title="One flow, end to end.">
        <Reveal>
          <p className="body measure" style={{ marginBottom: "32px" }}>
            A single flow handles everything: the trigger, the text normalization, six category
            checks, the routing Switch and the logging step. It is deliberately linear so the
            order of evaluation is visible.
          </p>
          <Shot shot={shots.clinicflowFullFlow} sizes="(max-width: 1000px) 100vw, 1140px" />
        </Reveal>
      </CaseSection>

      {/* ── 03 Understanding the workflow ── */}
      <CaseSection
        num="03 — Understanding the workflow"
        title="Before building the flow, I needed to understand the inbox."
        tone="white"
      >
        <Reveal>
          <p className="body measure" style={{ marginBottom: "36px" }}>
            I reviewed CHANGEpain&rsquo;s public information to understand its services, intake
            pathways and common types of patient inquiries. That informed seven categories:
          </p>

          <ul className="cats">
            {categories.map((c) => (
              <li key={c} className={c === "Cancellations" ? "cat is-key" : "cat"}>
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </CaseSection>

      {/* ── 04 The decision ── */}
      <CaseSection
        num="04 — The decision that shaped the workflow"
        title="Sorting a cancellation is useful. Making it visible is more useful."
      >
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">The cancellation workflow stood out to me.</p>
              <p className="body">
                A cancellation request can create an opportunity to offer an appointment to another
                patient who may be waiting for care.
              </p>
              <p className="body">
                So I did not want ClinicFlow to simply file cancellations correctly.
              </p>
              <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                I wanted them to become actionable.
              </p>
            </div>

            <div style={{ alignSelf: "center" }}>
              <Callout tone="coral">
                Sort every message.
                <br />
                Actively flag cancellations.
              </Callout>
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 05 How it works ── */}
      <CaseSection
        num="05 — How it works"
        title="From inbox to three outputs."
        id="how-it-works"
        tone="white"
      >
        <Reveal>
          <div className="split split-top" style={{ marginBottom: "48px" }}>
            <div style={{ maxWidth: "420px" }}>
              <Flow
                steps={[
                  { t: "Email arrives" },
                  { t: "Normalize text", s: "Subject and body preview to lowercase" },
                  { t: "Check category rules" },
                  { t: "Assign category", tone: "accent" },
                ]}
              />
            </div>

            <div>
              <p className="cap-h">Then three things happen</p>
              <div className="feature-outs" style={{ gridTemplateColumns: "1fr" }}>
                <div className="out">
                  <p className="out-k">Outlook</p>
                  <p className="body" style={{ fontSize: "14px" }}>
                    Move the email into one of seven folders
                  </p>
                </div>
                <div className="out">
                  <p className="out-k">Excel</p>
                  <p className="body" style={{ fontSize: "14px" }}>
                    Record timestamp, sender, subject, category and source
                  </p>
                </div>
                <div className="out">
                  <p className="out-k" style={{ color: "var(--coral-ink)" }}>
                    Teams
                  </p>
                  <p className="body" style={{ fontSize: "14px" }}>
                    If cancellation → send a staff alert
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Shot shot={shots.clinicflowSwitch} sizes="(max-width: 1000px) 100vw, 1140px" />
        </Reveal>
      </CaseSection>

      {/* ── 06 Outlook routing — split, image right ── */}
      <CaseSection num="06 — Outlook routing" title="Put the message where it belongs.">
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">
                ClinicFlow moves each incoming email into one of seven folders based on its
                category.
              </p>
              <p className="body">
                Messages without a keyword match are routed to General rather than silently
                disappearing or forcing a guess.
              </p>
              <p className="body">
                The folder counts are the quickest way to see that classification actually
                happened — and the Cancellations folder is the one the next section is about.
              </p>
            </div>

            <div>
              <Shot shot={shots.clinicflowOutlook} sizes="(max-width: 1000px) 100vw, 46vw" />
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 07 Teams alerts — split, image left ── */}
      <CaseSection
        num="07 — Making cancellations visible"
        title="Make the important message visible."
        tone="white"
      >
        <Reveal>
          <div className="split split-top">
            <div>
              <Shot shot={shots.clinicflowTeams} sizes="(max-width: 1000px) 100vw, 46vw" />
            </div>

            <div className="measure">
              <p className="body">
                When ClinicFlow identifies a cancellation request, it sends a Teams notification
                containing the sender and subject. The alert says:
              </p>
              <p
                style={{
                  marginBlock: "18px",
                  paddingLeft: "16px",
                  borderLeft: "2px solid var(--coral)",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                &ldquo;New cancellation. A slot may be open.&rdquo;
              </p>
              <p className="body">That wording is intentional.</p>
              <p className="body">
                The automation identifies the request. A staff member still confirms the
                appointment change and decides whether the opening can be offered to another
                patient.
              </p>
            </div>
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 08 Excel tracking — full width ── */}
      <CaseSection num="08 — Excel tracking" title="Make the automation inspectable.">
        <Reveal>
          <p className="body measure" style={{ marginBottom: "32px" }}>
            Every classification is recorded in a central Excel log with the timestamp, sender,
            subject, category and source. The log made it possible to compare expected and actual
            routes — which is how the routing errors further down this page were found at all.
          </p>
          <Shot shot={shots.clinicflowExcel} sizes="(max-width: 1000px) 100vw, 1140px" />
        </Reveal>
      </CaseSection>

      {/* ── 09 Small rule, big effect — detail crop ── */}
      <CaseSection
        num="09 — A small rule with a big effect"
        title="Why cancellations are checked last."
        tone="white"
      >
        <Reveal>
          <div className="split split-top">
            <div className="measure">
              <p className="body">An email can belong to more than one keyword category.</p>
              <p
                style={{
                  marginBlock: "16px",
                  padding: "14px 18px",
                  background: "var(--ivory)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-sm)",
                  fontFamily: "var(--mono)",
                  fontSize: "14px",
                }}
              >
                &ldquo;I need to cancel my appointment.&rdquo;
              </p>
              <p className="body">
                contains language associated with both Bookings and Cancellations.
              </p>
              <p className="body">
                ClinicFlow evaluates categories sequentially, and a later match can replace an
                earlier one.
              </p>
              <p className="body" style={{ color: "var(--ink)", fontWeight: 600 }}>
                I intentionally placed Cancellations last.
              </p>
              <p className="body">
                That means cancellation intent receives priority, the email lands in the correct
                folder, and the Teams alert is triggered.
              </p>
            </div>

            <div>
              <Flow
                steps={[
                  { t: "Booking match" },
                  { t: "Cancellation match" },
                  { t: "Cancellation wins", tone: "coral" },
                  { t: "Route + alert", tone: "accent" },
                ]}
              />
            </div>
          </div>

          <div style={{ marginTop: "44px", maxWidth: "820px" }}>
            <Shot
              shot={shots.clinicflowCancellationBranch}
              sizes="(max-width: 1000px) 100vw, 800px"
            />
          </div>

          <p className="body measure" style={{ marginTop: "32px" }}>
            A single Switch handles the final folder routing, keeping the destination logic in one
            place and making the flow easier to inspect and maintain.
          </p>
        </Reveal>
      </CaseSection>

      {/* ── 10 Testing ── */}
      <CaseSection num="10 — Testing" title="A green check mark was not enough.">
        <Reveal>
          <div className="measure">
            <p className="body">
              I built a second Power Automate flow that generated 21 fictional emails using
              realistic clinic terminology. The test set included terms such as:
            </p>
          </div>

          <div style={{ marginBlock: "24px 36px" }}>
            <ul className="tags">
              {[
                "IMS",
                "kinesiology",
                "ICBC",
                "PRP",
                "referral",
                "prescription",
                "cancellation",
                "private services",
              ].map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-3" style={{ marginBottom: "48px" }}>
            {[
              ["21", "emails processed"],
              ["21", "Excel records"],
              ["3", "cancellation alerts"],
            ].map(([n, l]) => (
              <div key={l} className="card" style={{ textAlign: "center" }}>
                <p className="metric-n">{n}</p>
                <p className="metric-l">{l}</p>
              </div>
            ))}
          </div>

          <p
            className="body measure"
            style={{ marginBottom: "28px", color: "var(--ink)", fontWeight: 600 }}
          >
            It also exposed routing mistakes.
          </p>

          <table className="tbl">
            <thead>
              <tr>
                <th scope="col">Case</th>
                <th scope="col">Message</th>
                <th scope="col">Observed route</th>
                <th scope="col">What it revealed</th>
              </tr>
            </thead>
            <tbody>
              {testCases.map((c) => (
                <tr key={c.id}>
                  <td data-l="Case">{c.id}</td>
                  <td data-l="Message">{c.message}</td>
                  <td data-l="Observed route">{c.route}</td>
                  <td data-l="What it revealed">{c.reveal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </CaseSection>

      {/* ── 11 What failure taught me ── */}
      <CaseSection
        num="11 — What failure taught me"
        title="The useful part of testing was finding where it failed."
        tone="white"
      >
        <Reveal>
          <div className="grid-3">
            {insights.map((i) => (
              <div key={i.n} className="insight">
                <span className="insight-n">{i.n}</span>
                <h3 className="h4" style={{ marginBottom: "12px" }}>
                  {i.h}
                </h3>
                <p className="body" style={{ fontSize: "15px" }}>
                  {i.p}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 12 What I would improve ── */}
      <CaseSection
        num="12 — What I would improve"
        title="The next version would get more selective, not simply more automated."
      >
        <Reveal>
          <div className="grid-2">
            {improvements.map(([h, p]) => (
              <div key={h} className="card">
                <h3 className="h4" style={{ marginBottom: "10px" }}>
                  {h}
                </h3>
                <p className="body" style={{ fontSize: "15px" }}>
                  {p}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "32px" }}>
            <Note>
              Before any real clinical deployment, I would also review permissions, data handling,
              auditability, failure handling and privacy requirements.
            </Note>
          </div>
        </Reveal>
      </CaseSection>

      {/* ── 13 Closing ── */}
      <CaseSection num="13 — Closing" tone="white">
        <Reveal>
          <Pull>
            Over one weekend, I went from opening Power Automate for the first time to building,
            testing and debugging a functioning workflow.
          </Pull>

          <div className="measure" style={{ marginTop: "40px" }}>
            <p className="body">The project reinforced the way I like to work:</p>
            <ul className="blist" style={{ marginBlock: "16px" }}>
              <li>understand the real process,</li>
              <li>build something concrete,</li>
              <li>test it against realistic scenarios,</li>
              <li>and pay close attention to where it falls short.</li>
            </ul>
            <p className="body">
              The next step would not be adding more automation for its own sake.
            </p>
            <p className="body">
              It would be working with the people who manage the inbox every day and improving the
              workflow around what they actually need.
            </p>
          </div>
        </Reveal>
      </CaseSection>

      <CaseNext href="/work/faxbridge" label="FaxBridge" />
    </>
  );
}
