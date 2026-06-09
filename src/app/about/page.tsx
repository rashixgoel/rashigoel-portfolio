import type { Metadata } from "next";
import Image from "next/image";
import EyebrowLabel from "@/components/EyebrowLabel";
import GhostNumber from "@/components/GhostNumber";

export const metadata: Metadata = {
  title: "Rashi Goel — About",
  description:
    "I sit at the intersection of healthcare and technology — using that position to improve how healthcare is delivered, experienced, and transformed at scale.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 24px" }}>
      {/* Hero */}
      <section
        style={{
          padding: "48px 0 40px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #D8D0C4",
        }}
      >
        <GhostNumber number="02" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <EyebrowLabel text="My Story" />
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 900,
              color: "#1A1A1A",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              maxWidth: "520px",
            }}
          >
            Healthcare gives me{" "}
            <span style={{ color: "#B5540B" }}>meaning.</span>
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "#6B5E50",
              lineHeight: 1.7,
              maxWidth: "460px",
            }}
          >
            I sit at the intersection of healthcare and technology, aiming to use that position
            to improve how healthcare is delivered, experienced, transformed, and scaled.
          </p>
        </div>
      </section>

      {/* Two-column: prose + photo */}
      <section
        style={{
          padding: "48px 0",
          borderBottom: "1px solid #D8D0C4",
          display: "flex",
          gap: "48px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Left — prose (60%) */}
        <div style={{ flex: "3", minWidth: "280px" }}>
          <p style={{ fontSize: "15px", color: "#6B5E50", lineHeight: 1.9, marginBottom: "20px" }}>
            I often get asked: what are you really interested in healthcare? Truly it&apos;s hard to
            say. There is just so much you can do. Healthcare gives me meaning. Knowing that the
            things I do have the potential to transform lives in meaningful ways.
          </p>
          <p style={{ fontSize: "15px", color: "#6B5E50", lineHeight: 1.9, marginBottom: "20px" }}>
            I know this for sure. I aim to sit at the intersection of healthcare and technology,
            and use that position to improve how healthcare is delivered, experienced, and
            transformed at scale.
          </p>
          <p style={{ fontSize: "15px", color: "#6B5E50", lineHeight: 1.9, marginBottom: "20px" }}>
            This industry has some of the most inspiring and extraordinary people in the world.
            I&apos;ve had the absolute privilege of meeting some of them and will meet more. People
            who push limits every day, show up during hard times, act when there is uncertainty.{" "}
            <strong style={{ color: "#1A1A1A", fontSize: "16px", fontWeight: 700 }}>
              Healthcare is truly human.
            </strong>{" "}
            And that&apos;s what makes it special to me.
          </p>
          <p style={{ fontSize: "15px", color: "#6B5E50", lineHeight: 1.9, marginBottom: "20px" }}>
            I am here with a purpose. A purpose to give my heart and soul to this industry. To
            learn, unlearn, re-learn, and challenge myself every day. To show up for people, and
            for the people who take care of people.
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
              fontSize: "17px",
              color: "#1A1A1A",
              lineHeight: 1.5,
              marginBottom: 0,
            }}
          >
            That&apos;s my story. And this page is where you witness it.
          </p>
        </div>

        {/* Right — photo (40%) */}
        <div style={{ flex: "2", minWidth: "220px" }}>
          <div
            style={{
              border: "1px solid #D8D0C4",
              display: "inline-block",
              width: "100%",
              lineHeight: 0,
              marginTop: "-20px",
            }}
          >
            <Image
              src="/rashi.jpeg"
              alt="Rashi Goel"
              width={1829}
              height={2430}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "10px",
              color: "#9A8E7E",
              marginTop: "8px",
            }}
          >
            Rashi Goel · Vancouver, BC
          </p>
        </div>
      </section>

      {/* What drives me — three cards */}
      <section
        style={{
          padding: "48px 0",
          borderBottom: "1px solid #D8D0C4",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "12px",
          }}
        >
          {[
            {
              label: "What I do",
              text: "I work at the intersection of clinical knowledge and health technology, understanding both what the data means clinically and how to make it move between systems.",
            },
            {
              label: "What draws me in",
              text: "Health informatics, interoperability, digital health transformation. The infrastructure that makes modern healthcare possible, and the enormous amount of work still left to do.",
            },
            {
              label: "How I show up",
              text: "With curiosity, consistency, and a willingness to go deep. I am a student who is building, publishing and having meaningful conversations with people shaping this field.",
            },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                border: "1px solid #D8D0C4",
                padding: "20px",
                background: "#F8F3EC",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "#B5540B",
                  textTransform: "uppercase",
                  letterSpacing: 0,
                  marginBottom: "10px",
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6B5E50",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Currently */}
      <section
        style={{
          background: "#F0E6D8",
          borderTop: "1px solid #D8D0C4",
          borderBottom: "1px solid #D8D0C4",
          padding: "24px 0",
          margin: "0 -24px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "9px",
            color: "#B5540B",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "16px",
          }}
        >
          Right now
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {[
            "Completing my Health Information Management degree, graduating 2027",
            "Building projects at the intersection of FHIR interoperability and clinical decision support",
            "Writing weekly about healthcare technology, governance, and digital health in Canada and beyond",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                flex: "1",
                minWidth: "220px",
              }}
            >
              <span style={{ color: "#B5540B", flexShrink: 0, lineHeight: 1.7, fontSize: "12px" }}>
                ·
              </span>
              <p style={{ fontSize: "12px", color: "#6B5E50", lineHeight: 1.7, margin: 0 }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: "48px" }} />
    </div>
  );
}
