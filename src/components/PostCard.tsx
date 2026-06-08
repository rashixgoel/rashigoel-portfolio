import Link from "next/link";
import OutlineTag from "@/components/OutlineTag";

interface PostCardProps {
  index: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
  readingTime?: number;
}

export default function PostCard({
  index,
  title,
  date,
  excerpt,
  tags,
  slug,
  readingTime,
}: PostCardProps) {
  return (
    <div
      style={{
        borderBottom: "1px solid #D8D0C4",
        padding: "20px 0",
        display: "grid",
        gridTemplateColumns: "52px 1fr",
        gap: "16px",
        alignItems: "start",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "28px",
          color: "#EDE5D8",
          lineHeight: 1,
          paddingTop: "4px",
        }}
      >
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <Link
          href={`/blog/${slug}`}
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "15px",
            fontWeight: 700,
            color: "#1A1A1A",
            textDecoration: "none",
            lineHeight: 1.3,
            display: "block",
            marginBottom: "4px",
          }}
        >
          {title}
        </Link>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "10px",
            color: "#9A8E7E",
            marginBottom: "8px",
          }}
        >
          {date}
          {readingTime ? ` · ${readingTime} min read` : ""}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#6B5E50",
            lineHeight: 1.5,
            marginBottom: "8px",
          }}
        >
          {excerpt}
        </p>
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {tags.map((tag) => (
              <OutlineTag key={tag} text={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
