"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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

        {status === "success" ? (
          <p style={{ fontSize: "12px", color: "#B5540B", fontWeight: 600 }}>
            You&apos;re subscribed. Talk soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                flex: 1,
                background: "#2A2A2A",
                border: "0.5px solid #3A3A3A",
                color: "#F8F3EC",
                fontSize: "11px",
                padding: "10px 14px",
                outline: "none",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                borderRadius: "2px",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                background: "#B5540B",
                color: "#F8F3EC",
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "10px 18px",
                border: "none",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.7 : 1,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {status === "loading" ? "..." : "Subscribe →"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p style={{ fontSize: "11px", color: "#9A8E7E", marginTop: "8px" }}>
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  );
}
