export default function NewsletterSignup() {
  return (
    <section style={{ background: "#1A1A1A", padding: "32px 24px" }}>
      <div style={{ maxWidth: "480px" }}>
        <p
          style={{
            fontSize: "9px",
            color: "#B5540B",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "10px",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          Monthly Newsletter
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#F8F3EC",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          Inside HealthTech
        </h2>
        <p
          style={{
            fontSize: "12px",
            color: "#9A8E7E",
            lineHeight: 1.6,
            marginBottom: "16px",
          }}
        >
          Weekly notes on the governance, AI, policy, and technology reshaping how
          healthcare works.
        </p>

        <a
          href="https://insidehealthtech.beehiiv.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#B5540B",
            color: "#F8F3EC",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            padding: "10px 18px",
            textDecoration: "none",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          Subscribe →
        </a>
      </div>
    </section>
  );
}
