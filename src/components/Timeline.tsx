const events = [
  {
    year: "2024",
    title: "SNOMED CT Foundation Completed",
    detail: "RF2 release files, concept model, editorial guidance.",
  },
  {
    year: "2025",
    title: "Care Gap Dashboard — Shipped",
    detail: "FHIR R4 clinical decision support. 8 rules, 4 conditions, GPT-4o. Medblocks Challenge.",
  },
  {
    year: "2027",
    title: "HIM Graduation + FHIR Foundational Exam",
    detail: "Entering the field with clinical domain knowledge AND active FHIR development experience.",
  },
  {
    year: "2029+",
    title: "Integration Specialist → Interoperability Lead",
    detail: "Hands-on HL7/FHIR production work at BC health authority or health-tech company.",
  },
  {
    year: "2032+",
    title: "Senior FHIR Architect",
    detail: "The 10-year path. Roadmap exists. Already walking it.",
  },
];

export default function Timeline() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {events.map((event, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: "0" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "11px",
              color: "#B5540B",
              paddingTop: "2px",
              flexShrink: 0,
            }}
          >
            {event.year}
          </span>
          <div
            style={{
              borderLeft: "1.5px solid #D8D0C4",
              paddingLeft: "14px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#1A1A1A",
                margin: "0 0 4px 0",
                lineHeight: 1.4,
              }}
            >
              {event.title}
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#6B5E50",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {event.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
