"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav on-dark">
      <nav className="nav-inner wrap" aria-label="Main">
        <Link href="/" className="nav-brand">
          RASHI GOEL
        </Link>

        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className={`nav-link${pathname === href ? " is-active" : ""}`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/experience" className="nav-cta">
              Resume <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`bar${open ? " a" : ""}`} />
          <span className={`bar${open ? " b" : ""}`} />
        </button>
      </nav>

      <div id="mobile-menu" className={`nav-drawer${open ? " is-open" : ""}`} hidden={!open}>
        <ul className="wrap">
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className="nav-drawer-link">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/experience" className="nav-drawer-link accent-link">
              Resume <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
