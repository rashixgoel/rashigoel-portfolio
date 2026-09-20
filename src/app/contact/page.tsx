import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — Rashi Goel",
  description:
    "Open to conversations about health informatics, digital health, and what it takes to build systems that make care better.",
  openGraph: {
    title: "Contact — Rashi Goel",
    description:
      "Open to conversations about health informatics, digital health, and what it takes to build systems that make care better.",
  },
};

export default function ContactPage() {
  return (
    <div style={{ background: "var(--canvas)" }}>
      {/* ── Hero ── */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "64px 32px 56px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "11px",
            color: "var(--teal)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Contact
          </p>
          <h1 style={{
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "var(--ink)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            maxWidth: "600px",
          }}>
            Let&apos;s talk <span style={{ color: "var(--teal)" }}>healthcare.</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "480px" }}>
            Open to conversations about health informatics, digital health, healthcare technology,
            and what it takes to build systems that make care better.
            Always happy to connect with people doing this work.
          </p>
        </div>
      </section>

      {/* ── Links ── */}
      <section style={{ padding: "56px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", maxWidth: "400px" }}>
            {[
              {
                icon: <LinkedInIcon size={20} />,
                label: "LinkedIn",
                value: "/in/-rashi-goel",
                href: "https://www.linkedin.com/in/-rashi-goel/",
              },
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "hello@rashigoel.io",
                href: "mailto:hello@rashigoel.io",
              },
            ].map(({ icon, label, value, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  flex: "1 1 160px",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  padding: "24px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "block",
                  background: "var(--surface)",
                  transition: "border-color 0.15s",
                }}
              >
                <div style={{ color: "var(--teal)", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                  {icon}
                </div>
                <p style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "4px",
                }}>
                  {label}
                </p>
                <p style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "11px",
                  color: "var(--ink)",
                  fontWeight: 700,
                }}>
                  {value}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
