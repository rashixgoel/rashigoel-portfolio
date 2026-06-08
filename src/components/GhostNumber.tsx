export default function GhostNumber({ number }: { number: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "-16px",
        right: "-12px",
        fontFamily: "var(--font-playfair), Georgia, serif",
        fontSize: "120px",
        fontWeight: 900,
        color: "#EDE5D8",
        userSelect: "none",
        lineHeight: 1,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {number}
    </span>
  );
}
