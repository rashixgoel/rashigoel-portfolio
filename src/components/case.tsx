import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow, Eyebrow, Tags } from "@/components/ui";

export function CaseHero({
  eyebrow,
  title,
  sub,
  children,
  meta,
  tags,
  links,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  children?: ReactNode;
  meta: { k: string; v: string }[];
  tags?: string[];
  /** External links. `aria` gives assistive tech the project-specific meaning. */
  links?: { label: string; href: string; aria: string }[];
}) {
  return (
    <section className="case-hero on-dark">
      <div className="wrap">
        <Link href="/#work" className="case-crumb">
          <span aria-hidden="true">←</span> Work
        </Link>

        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="h1" style={{ marginTop: "16px" }}>
          {title}
        </h1>
        <p className="case-sub">{sub}</p>

        <div className="measure">{children}</div>

        {links && links.length > 0 && (
          <div className="hero-btns btn-row-stack">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.aria} (opens in a new tab)`}
                className={i === 0 ? "btn btn-primary" : "btn btn-ghost"}
              >
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}

        {tags && (
          <div style={{ marginTop: "32px" }}>
            <Tags items={tags} dark />
          </div>
        )}

        <div className="case-meta">
          {meta.map((m) => (
            <div key={m.k} className="case-meta-i">
              <p className="case-meta-k">{m.k}</p>
              <p className="case-meta-v">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseSection({
  num,
  title,
  id,
  tone = "ivory",
  children,
}: {
  num?: string;
  title?: string;
  id?: string;
  tone?: "ivory" | "white";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`case-sec ${tone === "white" ? "bg-white" : "bg-ivory"}`}>
      <div className="wrap">
        {num && <p className="snum">{num}</p>}
        {title && <h2 className="h2 case-h measure">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function CaseNext({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="bg-white rule-top">
      <div className="wrap case-next">
        <Link href={href} className="btn btn-primary">
          Next project — {label} <Arrow />
        </Link>
        <Link href="/#work" className="alink">
          Back to work
        </Link>
      </div>
    </div>
  );
}

export function Limitations({ items }: { items: string[] }) {
  return (
    <div className="card" style={{ borderLeft: "3px solid var(--coral)" }}>
      <p className="cap-h" style={{ color: "var(--coral-ink)" }}>
        Limitations
      </p>
      <ul className="blist">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
