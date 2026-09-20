"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "var(--ink)",
              letterSpacing: "0.04em",
              display: "block",
              marginBottom: "4px",
            }}
          >
            RASHI GOEL
          </span>
          <span
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "11px",
              color: "var(--muted)",
            }}
          >
            rashigoel.io
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link
            href="https://www.linkedin.com/in/-rashi-goel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "var(--muted)", transition: "color 0.15s" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).closest("a")!.style.color = "var(--teal)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).closest("a")!.style.color = "var(--muted)"; }}
          >
            <LinkedInIcon size={16} />
          </Link>
          <Link
            href="mailto:hello@rashigoel.io"
            aria-label="Email"
            style={{ color: "var(--muted)", transition: "color 0.15s" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).closest("a")!.style.color = "var(--teal)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).closest("a")!.style.color = "var(--muted)"; }}
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
