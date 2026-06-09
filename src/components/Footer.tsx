import Link from "next/link";
import { Mail } from "lucide-react";
import { YouTubeIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A1A" }}>
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
            fontSize: "12px",
            color: "#F8F3EC",
            letterSpacing: "0.04em",
          }}
        >
          RASHI GOEL
        </span>

        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "10px",
            color: "#6B5E50",
          }}
        >
          rashigoel.io
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <Link
            href="https://www.linkedin.com/in/-rashi-goel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "#9A8E7E" }}
          >
            <LinkedInIcon size={16} />
          </Link>
          <Link
            href="https://youtu.be/YCpgPiaWoBE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            style={{ color: "#9A8E7E" }}
          >
            <YouTubeIcon size={16} />
          </Link>
          <Link
            href="mailto:hello@rashigoel.io"
            aria-label="Email"
            style={{ color: "#9A8E7E" }}
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #2A2A2A",
          padding: "12px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "10px",
            color: "#6B5E50",
            margin: 0,
          }}
        >
          Here to learn, contribute, and grow at the intersection of healthcare and technology.
        </p>
      </div>
    </footer>
  );
}
