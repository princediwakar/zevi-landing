"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { value: "12K+", label: "Active Learners" },
  { value: "50+", label: "PM Frameworks" },
  { value: "94%", label: "Interview Pass Rate" },
];

const OUTLINE_ITEMS = [
  { done: true, text: "Define the retention metric" },
  { done: true, text: "Identify user drop-off points" },
  { done: true, text: "Diagnose root causes" },
  { done: false, text: "Propose solutions & tradeoffs" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: "60px",
        borderBottom: "4px solid #000",
      }}
    >
      {/* Main hero content */}
      <div
        ref={containerRef}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 40px 0",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "40px",
        }}
        className="lg:grid-cols-[1.6fr_1fr]"
      >
        {/* Left — Typography */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "2px",
                background: "#E63323",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#737373",
              }}
            >
              PM INTERVIEW PREP — MOBILE APP
            </span>
          </div>

          {/* Giant Headline */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-2px",
                color: "#000",
              }}
              className="text-[clamp(72px,12vw,160px)]"
            >
              CRACK
              <br />
              THE{" "}
              <span style={{ color: "#E63323" }}>PM</span>
              <br />
              INTERVIEW.
            </h1>
          </div>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "var(--font-ibm-plex)",
              fontSize: "clamp(15px, 1.2vw, 18px)",
              fontWeight: 400,
              lineHeight: 1.65,
              color: "#404040",
              maxWidth: "480px",
            }}
          >
            The only app that analyzes{" "}
            <strong style={{ fontWeight: 700, color: "#000" }}>
              how you apply frameworks
            </strong>
            , not just your answers. Practice with AI coaching. Master patterns.
            Land the offer.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <a
              href="#pricing"
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#fff",
                background: "#000",
                padding: "14px 32px",
                border: "2px solid #000",
                transition: "background 0.15s, border-color 0.15s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E63323";
                (e.currentTarget as HTMLElement).style.borderColor = "#E63323";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#000";
                (e.currentTarget as HTMLElement).style.borderColor = "#000";
              }}
            >
              DOWNLOAD FREE
              <span style={{ fontSize: "14px" }}>↗</span>
            </a>

            <a
              href="#how-it-works"
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#000",
                background: "transparent",
                padding: "14px 32px",
                border: "2px solid #000",
                transition: "background 0.15s, color 0.15s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#000";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
            >
              SEE HOW IT WORKS
              <span style={{ fontSize: "14px" }}>→</span>
            </a>
          </div>

          {/* Store badges */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#A3A3A3",
                display: "flex",
                gap: "16px",
              }}
            >
              <span>▲ APP STORE</span>
              <span style={{ color: "#E5E5E5" }}>|</span>
              <span>▲ GOOGLE PLAY</span>
            </div>
          </div>
        </div>

        {/* Right — App Preview */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "0",
          }}
          className="hidden lg:flex"
        >
          <AppPreview />
        </div>
      </div>

      {/* Stats Strip */}
      <div
        style={{
          borderTop: "4px solid #000",
          marginTop: "48px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "28px 40px",
                borderRight: i < STATS.length - 1 ? "2px solid #000" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                  color: "#000",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#737373",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppPreview() {
  return (
    <div
      style={{
        width: "320px",
        border: "2px solid #000",
        background: "#fff",
        fontFamily: "var(--font-ibm-mono)",
        position: "relative",
        boxShadow: "8px 8px 0 #000",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 800,
            fontSize: "11px",
            letterSpacing: "0.15em",
          }}
        >
          DRILL
        </span>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "9px",
              color: "#A3A3A3",
              letterSpacing: "0.1em",
            }}
          >
            03 / 05
          </div>
          <div
            style={{
              width: "40px",
              height: "3px",
              background: "#262626",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "60%",
                height: "100%",
                background: "#E63323",
              }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div
        style={{
          padding: "16px",
          borderBottom: "2px solid #000",
          background: "#F5F5F5",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "8px",
            letterSpacing: "0.15em",
            color: "#E63323",
            marginBottom: "6px",
            fontWeight: 600,
          }}
        >
          RETENTION FRAMEWORK
        </div>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex)",
            fontSize: "12px",
            lineHeight: 1.5,
            color: "#000",
            fontWeight: 500,
          }}
        >
          Spotify&apos;s 7-day retention dropped 8% after a UI change.
          How would you diagnose this?
        </p>
      </div>

      {/* Outline Builder */}
      <div style={{ padding: "16px" }}>
        <div
          style={{
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "8px",
            letterSpacing: "0.12em",
            color: "#737373",
            marginBottom: "12px",
            fontWeight: 600,
          }}
        >
          BUILD YOUR OUTLINE:
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {OUTLINE_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  border: `2px solid ${item.done ? "#000" : "#D4D4D4"}`,
                  background: item.done ? "#000" : "transparent",
                  flexShrink: 0,
                  marginTop: "1px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.done && (
                  <span style={{ color: "#fff", fontSize: "8px", lineHeight: 1 }}>
                    ✓
                  </span>
                )}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "11px",
                  lineHeight: 1.4,
                  color: item.done ? "#404040" : "#000",
                  fontWeight: item.done ? 400 : 500,
                }}
                className={!item.done ? "cursor-blink" : ""}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Feedback Hint */}
      <div
        style={{
          margin: "0 16px 16px",
          padding: "10px 12px",
          background: "#000",
          color: "#fff",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "8px",
            letterSpacing: "0.1em",
            color: "#A3A3A3",
            marginBottom: "4px",
            fontWeight: 600,
          }}
        >
          AI FEEDBACK
        </div>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex)",
            fontSize: "10px",
            lineHeight: 1.5,
            color: "#E5E5E5",
          }}
        >
          Good structure. Consider adding metric segmentation before diagnosing
          root causes.
        </p>
      </div>

      {/* Submit Button */}
      <div
        style={{
          padding: "0 16px 16px",
        }}
      >
        <div
          style={{
            background: "#E63323",
            color: "#fff",
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            padding: "12px",
            textAlign: "center",
          }}
        >
          SUBMIT OUTLINE ↗
        </div>
      </div>
    </div>
  );
}
