"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/learning", label: "Learning" },
  { href: "/blog", label: "Blog" },
  { href: "/interviews", label: "Interviews" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        background: "#F8F3EC",
        borderBottom: "2px solid #1A1A1A",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
            fontSize: "15px",
            color: "#1A1A1A",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          RASHI GOEL
        </Link>

        {/* Desktop */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    color: isActive ? "#1A1A1A" : "#9A8E7E",
                    textDecoration: "none",
                    borderBottom: isActive ? "1.5px solid #B5540B" : "none",
                    paddingBottom: "2px",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#1A1A1A", background: "none", border: "none", cursor: "pointer" }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #D8D0C4",
            background: "#F8F3EC",
          }}
        >
          <ul
            style={{
              maxWidth: "1024px",
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              listStyle: "none",
            }}
          >
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: isActive ? "#B5540B" : "#9A8E7E",
                      textDecoration: "none",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
