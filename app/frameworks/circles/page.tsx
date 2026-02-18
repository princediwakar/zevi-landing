"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const STEPS = [
  {
    letter: "C",
    name: "COMPREHEND THE SITUATION",
    description:
      "Before answering anything, clarify. Ask what stage the company is at, what constraints exist, and whether there are specific goals you need to design toward. Interviewers reward candidates who ask smart clarifying questions.",
    example: "Ask: 'Are we designing for growth or retention? What platform — mobile or web? Do we have a specific user segment in mind?'",
    trap: "Jumping straight into solutions without clarifying is the #1 reason candidates fail design questions.",
  },
  {
    letter: "I",
    name: "IDENTIFY THE CUSTOMER",
    description:
      "Define exactly who you're designing for. Segment your users by demographics, behaviors, and jobs-to-be-done. Choose one primary user persona and defend why.",
    example: "For a note-taking app: students, professionals, researchers, creative writers. Pick one — say 'remote knowledge workers aged 25-40' — and commit.",
    trap: "Designing for everyone means designing for no one. Vague user definitions produce vague solutions.",
  },
  {
    letter: "R",
    name: "REPORT THE NEEDS",
    description:
      "What does your chosen user actually need? Go deeper than surface-level wants. Use the 'functional, emotional, social' needs taxonomy to uncover the real job-to-be-done.",
    example: "'Remote workers need to capture ideas quickly (functional), feel organized and in control (emotional), and share knowledge with their team easily (social).'",
    trap: "Listing feature requests as 'needs' is a red flag. Needs are motivations. Features are solutions.",
  },
  {
    letter: "C",
    name: "CUT THROUGH PRIORITIZATION",
    description:
      "You have more needs than you can address. Use a prioritization framework — RICE, Impact/Effort, or MoSCoW — to select the highest-value need to solve. Defend your choice with data or logic.",
    example: "Use RICE: Reach × Impact × Confidence ÷ Effort. The highest-scoring need becomes your design focus.",
    trap: "Not prioritizing and trying to solve all needs leads to unfocused solutions and weak interview performance.",
  },
  {
    letter: "L",
    name: "LIST SOLUTIONS",
    description:
      "Now — and only now — brainstorm 3-5 distinct solutions to the prioritized need. Range from incremental to innovative. Don't self-filter too early.",
    example: "Solution 1: Smart quick-capture widget. Solution 2: AI-powered meeting transcript organizer. Solution 3: Contextual folder suggestions. Solution 4: Team knowledge graph.",
    trap: "Proposing only one solution looks uncreative. Proposing too many without depth looks scattered.",
  },
  {
    letter: "E",
    name: "EVALUATE TRADEOFFS",
    description:
      "Assess each solution against your success metric, technical feasibility, business impact, and user experience. Pick the best one and articulate why the others fall short.",
    example: "Solution 2 wins because it reduces manual effort (highest user need), is technically feasible with existing ML APIs, and differentiates against Notion.",
    trap: "Evaluating on gut feeling instead of against a defined success metric undermines your credibility.",
  },
  {
    letter: "S",
    name: "SUMMARIZE YOUR RECOMMENDATION",
    description:
      "Close with a clean, confident summary. State what you'd build, why, how you'd measure success, and what you'd do next. Practice delivering this in under 60 seconds.",
    example: "'I'd build an AI meeting transcript organizer. Success metric: 40% reduction in post-meeting note time in 30 days. Next step: prototype and validate with 5 users.'",
    trap: "Rambling summaries signal unclear thinking. A sharp, structured close is what separates good candidates from great ones.",
  },
];

export default function CirclesPage() {
  const [active, setActive] = useState<number>(0);

  return (
    <PageLayout>
      {/* Hero */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "72px 40px 64px",
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#737373",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "32px",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#000")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#737373")
            }
          >
            ← FRAMEWORKS
          </a>

          <div
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "#E63323",
              marginBottom: "16px",
            }}
          >
            FRAMEWORKS / CIRCLES
          </div>

          <div
            style={{
              display: "grid",
              gap: "48px",
            }}
            className="lg:grid-cols-[1.4fr_1fr]"
          >
            <h1
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(56px, 9vw, 128px)",
                letterSpacing: "-3px",
                lineHeight: 0.85,
                color: "#000",
              }}
            >
              CIRCLES
              <br />
              <span style={{ color: "#E63323" }}>DESIGN</span>
              <br />
              METHOD.
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#A3A3A3",
                  border: "1px solid #E5E5E5",
                  padding: "6px 12px",
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                BY LEWIS C. LIN · IMPACT INTERVIEW
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#404040",
                }}
              >
                CIRCLES is the definitive framework for product design interview
                questions. It gives you a structured, 7-step process that covers
                everything from user identification to solution evaluation — so
                you never go blank when asked &quot;design a product for X.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps grid — letter tabs */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
          }}
        >
          {STEPS.map((step, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "24px 16px",
                background: active === i ? "#000" : "#fff",
                border: "none",
                borderRight: i < STEPS.length - 1 ? "2px solid #000" : "none",
                borderTop: active === i ? "4px solid #E63323" : "4px solid transparent",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                textAlign: "left",
                transition: "background 0.2s",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "44px",
                  letterSpacing: "-1.5px",
                  lineHeight: 1,
                  color: active === i ? "#fff" : "#E5E5E5",
                  transition: "color 0.2s",
                }}
              >
                {step.letter}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "7px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: active === i ? "#525252" : "#A3A3A3",
                  transition: "color 0.2s",
                  lineHeight: 1.3,
                }}
              >
                {step.name.split(" ")[0]}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Active step detail */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
          }}
          className="lg:grid-cols-[1fr_1fr]"
        >
          {/* Left */}
          <div style={{ padding: "64px 40px", borderRight: "2px solid #000" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "80px",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  color: "#E5E5E5",
                }}
              >
                {STEPS[active].letter}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#E63323",
                    marginBottom: "4px",
                  }}
                >
                  STEP {active + 1} OF 7
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "20px",
                    letterSpacing: "-0.3px",
                    color: "#000",
                    lineHeight: 1.1,
                  }}
                >
                  {STEPS[active].name}
                </div>
              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#404040",
                marginBottom: "32px",
              }}
            >
              {STEPS[active].description}
            </p>

            <div
              style={{
                background: "#F5F5F5",
                border: "2px solid #E5E5E5",
                padding: "24px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#737373",
                  marginBottom: "10px",
                }}
              >
                EXAMPLE IN PRACTICE
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: "#525252",
                  fontStyle: "italic",
                }}
              >
                {STEPS[active].example}
              </p>
            </div>

            <div
              style={{
                background: "#000",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#E63323",
                  marginBottom: "10px",
                }}
              >
                ⚠ COMMON TRAP
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: "#A3A3A3",
                }}
              >
                {STEPS[active].trap}
              </p>
            </div>
          </div>

          {/* Right — all steps overview */}
          <div style={{ padding: "64px 40px" }}>
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#A3A3A3",
                marginBottom: "24px",
              }}
            >
              ALL 7 STEPS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {STEPS.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 0",
                    background: "none",
                    border: "none",
                    borderBottom: i < STEPS.length - 1 ? "1px solid #E5E5E5" : "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: active === i ? "#000" : "#F5F5F5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 900,
                      fontSize: "18px",
                      color: active === i ? "#fff" : "#A3A3A3",
                      flexShrink: 0,
                      transition: "background 0.15s, color 0.15s",
                    }}
                  >
                    {step.letter}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-ibm-plex)",
                      fontSize: "13px",
                      fontWeight: active === i ? 600 : 400,
                      color: active === i ? "#000" : "#525252",
                      transition: "color 0.15s, font-weight 0.15s",
                    }}
                  >
                    {step.name}
                  </div>
                  {active === i && (
                    <div
                      style={{
                        marginLeft: "auto",
                        width: "4px",
                        height: "4px",
                        background: "#E63323",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "72px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "#404040",
                marginBottom: "12px",
              }}
            >
              PRACTICE THIS IN ZEVI
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(36px, 4vw, 56px)",
                letterSpacing: "-1px",
                lineHeight: 0.95,
                color: "#fff",
              }}
            >
              20 CIRCLES QUESTIONS.
              <br />
              AI FEEDBACK ON EACH.
            </h2>
          </div>
          <a
            href="/#pricing"
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#000",
              background: "#fff",
              padding: "16px 40px",
              border: "2px solid #fff",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "background 0.15s, border-color 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#E63323";
              (e.currentTarget as HTMLElement).style.borderColor = "#E63323";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = "#fff";
              (e.currentTarget as HTMLElement).style.color = "#000";
            }}
          >
            DOWNLOAD ZEVI FREE ↗
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
