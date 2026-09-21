import Link from "next/link";
import EmailLink from "@/components/EmailLink";
import { LinkedInIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="foot on-dark">
      <div className="wrap foot-inner">
        <div>
          <p className="foot-brand">RASHI GOEL</p>
          <p className="mono">Health Information Management · Vancouver, BC</p>
        </div>

        <nav className="foot-links" aria-label="Footer">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="foot-social">
          <a
            href="https://www.linkedin.com/in/-rashi-goel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon size={17} />
          </a>
          <EmailLink className="mono" />
        </div>
      </div>

      <div className="wrap foot-base">
        <p className="mono">© {new Date().getFullYear()} Rashi Goel</p>
        <p className="mono">rashigoel.io</p>
      </div>
    </footer>
  );
}
