import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import EyebrowLabel from "@/components/EyebrowLabel";
import GhostNumber from "@/components/GhostNumber";
import { LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Rashi Goel — Contact",
  description:
    "Open to conversations about health informatics, digital health, and what it takes to build systems that make care better.",
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 24px" }}>
      {/* Hero */}
      <section
        style={{
          padding: "48px 0 40px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #D8D0C4",
        }}
      >
        <GhostNumber number="07" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <EyebrowLabel text="Get in Touch" />
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 900,
              color: "#1A1A1A",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Let&apos;s talk{" "}
            <span style={{ color: "#B5540B" }}>healthcare.</span>
          </h1>
          <p style={{ fontSize: "13px", color: "#6B5E50", lineHeight: 1.7, maxWidth: "440px" }}>
            Open to conversations about health informatics, digital health, healthcare technology,
            and what it takes to build systems that make care better. Always happy to connect with
            people doing this work.
          </p>
        </div>
      </section>

      <div style={{ padding: "32px 0", maxWidth: "360px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          {[
            {
              icon: <LinkedInIcon size={20} />,
              label: "LinkedIn",
              value: "/in/rashigoel",
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
                border: "1px solid #D8D0C4",
                padding: "20px",
                textAlign: "center",
                textDecoration: "none",
                display: "block",
                background: "#F8F3EC",
              }}
            >
              <div
                style={{
                  color: "#B5540B",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "8px",
                }}
              >
                {icon}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "9px",
                  color: "#9A8E7E",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "4px",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "11px",
                  color: "#1A1A1A",
                  fontWeight: 700,
                }}
              >
                {value}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
