import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import EmailLink from "@/components/EmailLink";
import { Eyebrow } from "@/components/ui";
import { LinkedInIcon } from "@/components/icons";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Contact — Rashi Goel",
  description:
    "Open to opportunities across healthcare technology, clinical systems, automation, interoperability, data and technology-enabled operations.",
  openGraph: {
    title: "Contact — Rashi Goel",
    description:
      "Open to opportunities across healthcare technology, clinical systems, automation and health data.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="case-hero on-dark">
        <div className="wrap">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="h1" style={{ marginBlock: "18px 24px", maxWidth: "18ch" }}>
            I&rsquo;m interested in the problems hiding inside everyday workflows.
          </h1>
          <p className="lede measure">
            I&rsquo;m currently building toward opportunities across healthcare technology,
            clinical systems, automation, interoperability, data and technology-enabled
            operations.
          </p>
          <p className="lede measure" style={{ marginTop: "16px" }}>
            If you are working on one of those problems, I&rsquo;d be glad to connect.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <Reveal>
            <div className="grid-2" style={{ maxWidth: "760px" }}>
              {/* A div, not an anchor: the copy button cannot be nested inside
                  a link without the link swallowing its click. */}
              <div className="card card-hover">
                <p className="cap-h">Email</p>
                <div style={{ fontSize: "17px", fontWeight: 700, marginBottom: "2px" }}>
                  <EmailLink />
                </div>
                <a
                  href={CONTACT_MAILTO}
                  className="mono"
                  style={{ color: "var(--blue)", textDecoration: "none" }}
                  aria-label={`Email Rashi Goel at ${CONTACT_EMAIL}`}
                >
                  Send a message →
                </a>
              </div>

              <a
                href="https://www.linkedin.com/in/-rashi-goel/"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover"
                style={{ textDecoration: "none", display: "block" }}
              >
                <p className="cap-h">
                  <span
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                  >
                    <LinkedInIcon size={13} /> LinkedIn
                  </span>
                </p>
                <p style={{ fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>
                  /in/-rashi-goel
                </p>
                <p className="mono" style={{ color: "var(--blue)" }}>
                  Connect ↗
                </p>
              </a>
            </div>

            <div style={{ marginTop: "44px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/#work" className="btn btn-ghost">
                View my work
              </Link>
              <Link href="/experience" className="btn btn-ghost">
                Experience
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
