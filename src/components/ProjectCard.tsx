import Link from "next/link";
import OutlineTag from "@/components/OutlineTag";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  status?: "Live" | "In Progress" | "Planned";
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  status,
  featured,
}: ProjectCardProps) {
  const statusBadge: Record<string, { bg: string; color: string }> = {
    Live: { bg: "#1A1A1A", color: "#F8F3EC" },
    "In Progress": { bg: "#F0E6D8", color: "#B5540B" },
    Planned: { bg: "#EDE5D8", color: "#9A8E7E" },
  };

  const badge = status ? statusBadge[status] : null;

  return (
    <div
      style={{
        border: featured ? "1.5px solid #1A1A1A" : "1px solid #D8D0C4",
        padding: "20px",
        background: "#F8F3EC",
        opacity: status === "Planned" ? 0.9 : 1,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "10px",
          gap: "12px",
        }}
      >
        <Link
          href={href}
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "16px",
            fontWeight: 700,
            color: "#1A1A1A",
            textDecoration: "none",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Link>
        {badge && status && (
          <span
            style={{
              background: badge.bg,
              color: badge.color,
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "9px",
              padding: "4px 10px",
              flexShrink: 0,
              lineHeight: 1.4,
            }}
          >
            {status}
          </span>
        )}
      </div>
      <p
        style={{
          fontSize: "13px",
          color: "#6B5E50",
          lineHeight: 1.6,
          marginBottom: "12px",
        }}
      >
        {description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
        {tags.map((tag) => (
          <OutlineTag key={tag} text={tag} />
        ))}
      </div>
      <Link
        href={href}
        style={{
          fontSize: "10px",
          color: "#B5540B",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          textDecoration: "none",
          display: "block",
        }}
      >
        Read Case Study →
      </Link>
    </div>
  );
}
