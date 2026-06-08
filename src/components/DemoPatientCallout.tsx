export default function DemoPatientCallout() {
  return (
    <div
      style={{
        background: "#F0E6D8",
        borderLeft: "3px solid #B5540B",
        padding: "14px 16px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "9px",
          color: "#B5540B",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "8px",
        }}
      >
        Demo Patient
      </p>
      <p
        style={{
          fontStyle: "italic",
          fontSize: "12px",
          color: "#6B5E50",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        Margaret, 68, has diagnosed Type 2 Diabetes and Hypertension. Her labs
        show eGFR 48 for 18 consecutive months (Stage 3 CKD — undiagnosed) and
        LDL 4.2 (hyperlipidemia — undiagnosed). The dashboard surfaces both gaps
        to her physician, catching disease she doesn&apos;t yet know she has.
      </p>
    </div>
  );
}
