"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/about#experience", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href.includes("#")) return false;
    return pathname === href;
  }

  return (
    <header
      style={{
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "14px",
            color: "var(--ink)",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          RASHI GOEL
        </Link>

        {/* Desktop */}
        <ul
          className="hidden md:flex"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: isActive(href) ? "var(--teal)" : "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--ink)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = isActive(href) ? "var(--teal)" : "var(--muted)"; }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--ink)",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "var(--surface)",
          }}
        >
          <ul
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "20px 32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              listStyle: "none",
            }}
          >
            {links.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: isActive(href) ? "var(--teal)" : "var(--ink)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
