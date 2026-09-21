"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Shot as ShotData } from "@/lib/shots";

export default function Shot({
  shot,
  sizes = "(max-width: 1000px) 100vw, 60vw",
  priority = false,
  caption,
  frame,
}: {
  shot: ShotData;
  sizes?: string;
  priority?: boolean;
  /** Override the registry caption; pass null to render none. */
  caption?: string | null;
  /** Show a browser chrome bar with this URL. */
  frame?: string;
}) {
  const [open, setOpen] = useState(false);
  const [actual, setActual] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const cap = caption === undefined ? shot.caption : caption;

  const close = useCallback(() => {
    setOpen(false);
    setActual(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const media = (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={shot.w}
      height={shot.h}
      sizes={sizes}
      priority={priority}
      quality={90}
    />
  );

  return (
    <>
      <figure className="shot">
        <button
          ref={triggerRef}
          type="button"
          className="shot-btn"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge image: ${shot.alt}`}
        >
          {frame ? (
            <span className="frame-bar" aria-hidden="true">
              <span className="frame-dot" />
              <span className="frame-dot" />
              <span className="frame-dot" />
              <span className="frame-url">{frame}</span>
            </span>
          ) : null}
          {media}
          <span className="shot-zoom" aria-hidden="true">
            Enlarge
          </span>
        </button>
        {cap ? <figcaption className="shot-cap">{cap}</figcaption> : null}
      </figure>

      {/* Portalled to body: ancestors with overflow:hidden or a transform
          would otherwise break the fixed-position overlay. */}
      {open &&
        createPortal(
          <div
            className="lb"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged screenshot"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="lb-bar">
              <p className="lb-t">{cap ?? shot.alt.slice(0, 90)}</p>
              <div className="lb-actions">
                <button
                  type="button"
                  className="lb-btn"
                  onClick={() => setActual((v) => !v)}
                >
                  {actual ? "Fit to screen" : "Actual size"}
                </button>
                <button ref={closeRef} type="button" className="lb-btn" onClick={close}>
                  Close
                </button>
              </div>
            </div>
            <div className={`lb-scroll${actual ? "" : " is-fit"}`}>
              {/* Unoptimized so the full-resolution file is available for inspection. */}
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.w}
                height={shot.h}
                unoptimized
                className={`lb-img${actual ? " is-actual" : " is-fit"}`}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
