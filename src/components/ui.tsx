import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Tags({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t} className={dark ? "tag tag-dark" : "tag"}>{t}</li>
      ))}
    </ul>
  );
}

export function Arrow() {
  return <span className="arw" aria-hidden="true">→</span>;
}

export function Metrics({ items }: { items: { n: string; l: string }[] }) {
  return (
    <div className="metrics">
      {items.map((m) => (
        <div key={m.l} className="metric">
          <p className="metric-n">{m.n}</p>
          <p className="metric-l">{m.l}</p>
        </div>
      ))}
    </div>
  );
}

export type FlowStep = { t: string; s?: string; tone?: "accent" | "coral" };

export function Flow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flow">
      {steps.map((step, i) => (
        <div key={step.t}>
          <div
            className={`flow-node${step.tone === "accent" ? " is-accent" : ""}${
              step.tone === "coral" ? " is-coral" : ""
            }`}
          >
            <p className="flow-t">{step.t}</p>
            {step.s && <p className="flow-s">{step.s}</p>}
          </div>
          {i < steps.length - 1 && (
            <div className="flow-arrow" aria-hidden="true">↓</div>
          )}
        </div>
      ))}
    </div>
  );
}

export function FlowBranch({ items }: { items: FlowStep[] }) {
  return (
    <div className="flow-branch">
      {items.map((item) => (
        <div
          key={item.t}
          className={`flow-node${item.tone === "accent" ? " is-accent" : ""}${
            item.tone === "coral" ? " is-coral" : ""
          }`}
        >
          <p className="flow-t">{item.t}</p>
          {item.s && <p className="flow-s">{item.s}</p>}
        </div>
      ))}
    </div>
  );
}

export function Pull({ children }: { children: ReactNode }) {
  return <p className="pull">{children}</p>;
}

export function Callout({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "coral";
}) {
  return (
    <div className={tone === "coral" ? "callout callout-coral" : "callout"}>
      <p className="callout-t">{children}</p>
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="note">{children}</p>;
}

export function BList({ items }: { items: string[] }) {
  return (
    <ul className="blist">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

/**
 * Marks an image the repository does not contain yet. Renders visibly so a
 * missing asset can never be mistaken for real evidence of the work.
 */
export function AssetNeeded({
  title,
  file,
  note,
  kind = "screenshot",
}: {
  title: string;
  file: string;
  note?: string;
  kind?: "screenshot" | "chart";
}) {
  const label = kind === "chart" ? "Chart pending" : "Screenshot needed";
  return (
    <div className="ph" role="img" aria-label={`Placeholder: ${title}. ${label}.`}>
      <span className="ph-badge">{label}</span>
      <p className="ph-t">{title}</p>
      <p className="ph-p">
        Add to <code>public/{file}</code>
        {note ? ` · ${note}` : ""}
      </p>
    </div>
  );
}
