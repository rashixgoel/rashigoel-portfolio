"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/projects";

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 15V5a2 2 0 0 1 2-2h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12.5 9.5 18 20 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API needs a secure context; fall back for http / older browsers.
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "0";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

/**
 * The address is a plain mailto anchor with no click handling, so the browser
 * handles it natively. The copy button is the fallback for people with no
 * default mail client configured.
 */
export default function EmailLink({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  async function handleCopy() {
    const ok = await copyToClipboard(CONTACT_EMAIL);
    if (!ok) return;
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className={`email-line ${className}`.trim()}>
      <a
        href={CONTACT_MAILTO}
        className="email-addr"
        aria-label={`Email Rashi Goel at ${CONTACT_EMAIL}`}
      >
        {CONTACT_EMAIL}
      </a>

      <button
        type="button"
        className="email-copy"
        onClick={handleCopy}
        aria-label={`Copy email address ${CONTACT_EMAIL} to clipboard`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>

      <span className={`email-status${copied ? " is-on" : ""}`} role="status" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </span>
  );
}
