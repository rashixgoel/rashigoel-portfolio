interface SkillItem {
  name: string;
  badge?: string;
}

interface SkillPanelProps {
  title: string;
  skills: SkillItem[];
}

export default function SkillPanel({ title, skills }: SkillPanelProps) {
  return (
    <div>
      <div
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#1A1A1A",
          fontWeight: 600,
          borderBottom: "1.5px solid #1A1A1A",
          paddingBottom: "8px",
          marginBottom: "0",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {title}
      </div>
      {skills.map((skill, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "0.5px solid #E8E0D4",
            padding: "6px 0",
          }}
        >
          <span
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#B5540B",
              flexShrink: 0,
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              color: "#6B5E50",
              flex: 1,
              lineHeight: 1.4,
            }}
          >
            {skill.name}
          </span>
          {skill.badge && (
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "9px",
                color: "#1A1A1A",
                background: "#EDE5D8",
                padding: "1px 5px",
                flexShrink: 0,
              }}
            >
              {skill.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
