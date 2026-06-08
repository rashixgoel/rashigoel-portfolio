export default function EyebrowLabel({ text }: { text: string }) {
  return (
    <div className="pi-eyebrow">
      <span className="pi-eyebrow-line" />
      {text}
    </div>
  );
}
