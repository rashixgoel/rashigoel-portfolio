import Link from "next/link";

interface InterviewCardProps {
  guestName: string;
  guestRole: string;
  guestOrganization: string;
  pullQuote: string;
  date: string;
  slug: string;
  episodeNumber?: number;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function InterviewCard({
  guestName,
  guestRole,
  guestOrganization,
  pullQuote,
  date,
  slug,
  episodeNumber,
}: InterviewCardProps) {
  return (
    <div
      style={{
        border: "1px solid #D8D0C4",
        padding: "16px",
        marginBottom: "10px",
        background: "#F8F3EC",
      }}
    >
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            background: "#1A1A1A",
            color: "#F8F3EC",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "11px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {getInitials(guestName || "??")}
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#1A1A1A",
              margin: "0 0 2px 0",
              lineHeight: 1.3,
            }}
          >
            {guestName}
          </p>
          <p
            style={{
              fontSize: "10px",
              color: "#9A8E7E",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {guestRole}
            {guestOrganization ? ` · ${guestOrganization}` : ""}
          </p>
        </div>
      </div>

      {pullQuote && (
        <blockquote
          style={{
            borderLeft: "2.5px solid #B5540B",
            paddingLeft: "10px",
            margin: "12px 0",
            fontStyle: "italic",
            fontSize: "12px",
            color: "#6B5E50",
            lineHeight: 1.6,
          }}
        >
          &ldquo;{pullQuote}&rdquo;
        </blockquote>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "9px",
            color: "#B5540B",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {episodeNumber ? `Episode ${String(episodeNumber).padStart(2, "0")}` : date}
        </span>
        <Link
          href={`/interviews/${slug}`}
          style={{
            color: "#B5540B",
            fontSize: "10px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Read →
        </Link>
      </div>
    </div>
  );
}
