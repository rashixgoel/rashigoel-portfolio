export type Shot = {
  src: string;
  w: number;
  h: number;
  alt: string;
  caption?: string;
};

/**
 * Screenshots of the actual projects. Dimensions are the real pixel sizes so
 * next/image never distorts the aspect ratio.
 */
export const shots = {
  clinicflowFullFlow: {
    src: "/images/clinicflow/clinicflow-full-flow.jpg",
    w: 2932,
    h: 1668,
    alt: "Power Automate flow named Changepain Email Triage: a when-a-new-email-arrives trigger, two initialised variables and a SearchText step, followed by six category conditions — Bookings, Private Pay, Referrals, Third-Party, Prescriptions and Cancellations — then a Switch with seven cases and an Excel add-a-row step at the end.",
    caption:
      "Complete Power Automate flow — incoming mail moves through classification logic before routing, logging and cancellation alerts.",
  },
  clinicflowSwitch: {
    src: "/images/clinicflow/clinicflow-switch-routing.jpg",
    w: 2431,
    h: 1404,
    alt: "Power Automate Switch branching into seven cases that move an email into the Bookings, Cancellations, Referrals and Waitlist, Third Party Claims, Private Pay and Fees, Prescriptions and Medication, or General folder, with an extra Teams Alert action nested under the Cancellations case and an Excel add-a-row step below.",
    caption:
      "One Switch holds every destination, so routing logic stays in a single place that can be inspected and maintained.",
  },
  clinicflowCancellationBranch: {
    src: "/images/clinicflow/clinicflow-cancellation-branch.jpg",
    w: 1311,
    h: 520,
    alt: "Close-up of the Switch routing cases. Case 2 moves the message to the Cancellations folder and then runs a Teams Alert action; the neighbouring Bookings, Referrals and Third Party cases only move the message.",
    caption:
      "Cancellations is the only branch that does something after filing — this is where the alert is added.",
  },
  clinicflowOutlook: {
    src: "/images/clinicflow/clinicflow-outlook-routing.jpg",
    w: 1245,
    h: 1194,
    alt: "Outlook folder list showing Bookings, Cancellations, General, Prescriptions, Private Pay, Referrals and Waitlist, and Third-Party Claims folders with message counts. The Cancellations folder is selected and holds three test emails: Short notice cancel, Reschedule IMS session, and Cannot attend Friday.",
    caption:
      "Messages land in operational folders; anything without a keyword match falls back to General rather than being guessed at.",
  },
  clinicflowExcel: {
    src: "/images/clinicflow/clinicflow-testing-log.jpg",
    w: 2632,
    h: 1316,
    alt: "Excel Online workbook named Changepain Triage Log with Timestamp, Sender, Subject, Category and Source columns and twenty-one logged test emails, each assigned a category such as Cancellations, Bookings, Referrals and Waitlist, Prescriptions and Medication, Third-Party Claims, Private Pay and Fees, or General.",
    caption:
      "Each test email was logged with its assigned category so expected and actual routing could be compared.",
  },
  clinicflowTeams: {
    src: "/images/clinicflow/clinicflow-teams-alerts.jpg",
    w: 1420,
    h: 1296,
    alt: "Microsoft Teams Workflows chat showing three automated alerts, each reading “New cancellation. A slot may be open.” followed by the subject lines Cannot attend Friday, Reschedule IMS session, and Short notice cancel.",
    caption:
      "Sorting a cancellation files it. Alerting on it makes the opening something a person can act on.",
  },

  faxbridgeNoMatch: {
    src: "/images/faxbridge/faxbridge-no-patient-match.jpg",
    w: 2926,
    h: 1662,
    alt: "FaxBridge inbound queue showing six faxes received today, four filed automatically and two needing review. A referral document is open beside an extraction panel reading document type Referral at 100% confidence, and a patient match panel showing “no match” on the clinic roster with a warning that no chart matches the name, date of birth or health number.",
    caption: "Extraction can succeed while patient identity remains unresolved.",
  },
  faxbridgeVerification: {
    src: "/images/faxbridge/faxbridge-human-verification.jpg",
    w: 2928,
    h: 1662,
    alt: "FaxBridge showing a prescription renewal matched to patient Margaret Chen at 97% match confidence, with extracted ordering provider, two medications, last dispensed date and refills remaining, above an amber banner reading “Document filed, data not yet verified” and a “Verify extracted data” button.",
    caption:
      "The document is filed, but the values pulled off the page stay provisional until a person confirms them.",
  },

  caresignalPopulation: {
    src: "/images/caresignal/caresignal-population-dashboard.jpg",
    w: 2916,
    h: 1672,
    alt: "CareSignal Population Dashboard showing 20 patients monitored, 15 with care gaps and 1 critical gap, a gap-severity donut chart breaking down 1 critical, 8 high, 6 medium and 5 with no gaps, and a bar chart of active gaps by clinical rule led by Medication Review.",
    caption:
      "The population view answers what is happening across the panel before anyone opens a chart.",
  },
  caresignalPanel: {
    src: "/images/caresignal/caresignal-patient-panel.png",
    w: 2928,
    h: 1664,
    alt: "CareSignal Patient Panel listing patients by care-gap severity — 1 requiring urgent review, 8 needing attention, 6 routine review and 5 current — with Robert Wei-Ming Chen flagged CRITICAL for severe CKD and several other patients flagged HIGH.",
    caption: "The Patient Panel turns individual care gaps into a prioritised review queue.",
  },
  caresignalDetail: {
    src: "/images/caresignal/caresignal-patient-detail.jpg",
    w: 2928,
    h: 1672,
    alt: "CareSignal patient detail for Robert Wei-Ming Chen showing an AI-generated clinical summary labelled Azure OpenAI GPT-4o, risk factors, and three care gaps led by Severe CKD Stage G4 marked CRITICAL.",
    caption:
      "The individual view answers why this patient is at the top of the list.",
  },
  caresignalAiSummary: {
    src: "/images/caresignal/caresignal-ai-summary.jpg",
    w: 1980,
    h: 420,
    alt: "Close-up of the CareSignal clinical summary card, labelled “Azure OpenAI · gpt-4o · AI generated”, with a footer reading “Generated from chart data on Sep 21, 2026 · Review against source records before clinical use”.",
    caption:
      "The summary is labelled as model-generated and carries its own instruction to check it against the source record.",
  },
} satisfies Record<string, Shot>;
