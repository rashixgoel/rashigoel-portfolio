export default function SkillChip({ label, mono = false }: { label: string; mono?: boolean }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs rounded-full bg-teal-50 text-teal-700 border border-teal-100 ${
        mono ? "font-mono" : ""
      }`}
    >
      {label}
    </span>
  );
}
