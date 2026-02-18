"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const JOB_TYPES = [
  {
    type: "FUNCTIONAL",
    icon: "⚙",
    color: "#000",
    definition: "The practical task the user is trying to accomplish",
    example: "A commuter needs to get from point A to point B on time.",
    pmApplication:
      "Functional jobs drive core feature decisions. When a metric drops, ask: 'Which functional job is no longer being fulfilled?'",
  },
  {
    type: "EMOTIONAL",
    icon: "◉",
    color: "#E63323",
    definition: "How the user wants to feel while accomplishing the task",
    example: "The commuter wants to feel calm, not stressed about being late.",
    pmApplication:
      "Emotional jobs explain why users choose one product over a functionally identical competitor. Tap into this in product positioning.",
  },
  {
    type: "SOCIAL",
    icon: "◎",
    color: "#000",
    definition: "How the user wants to be perceived by others",
    example: "The commuter wants to look like someone who has their life together.",
    pmApplication:
      "Social jobs unlock viral loops. When a product fulfills a social job, users will share it — it becomes a signal of identity.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "DEFINE THE JOB",
    description:
      "Write the job in the format: 'When [situation], I want to [motivation], so I can [expected outcome].' This is the 'Job Story' — more powerful than a user story because it captures context.",
    example: "When I'm in back-to-back meetings, I want to capture my ideas instantly, so I can process them later without forgetting.",
  },
  {
    number: "02",
    title: "IDENTIFY COMPETING SOLUTIONS",
    description:
      "What do users currently 'hire' to do this job? The competition isn't just your direct competitors — it's every solution, including pen and paper, spreadsheets, and doing nothing.",
    example: "For quick idea capture: voice memos, texting yourself, sticky notes, Notion mobile, WhatsApp to self.",
  },
  {
    number: "03",
    title: "FIND THE UNDERSERVED NEED",
    description:
      "Where do current solutions fail? Interview users about their frustrations with existing tools. The gap between what they hire and what they actually need is your product opportunity.",
    example: "Voice memos require transcription. Sticky notes get lost. Notion mobile is too slow. Opportunity: frictionless capture with automatic organization.",
  },
  {
    number: "04",
    title: "VALIDATE WILLINGNESS TO SWITCH",
    description:
      "Switching has costs. Users won't abandon a good-enough solution unless the pain is real and your solution removes it completely. Quantify the switching cost before building.",
    example: "Ask: 'How often does your current tool fail you? What's the cost of that failure?' High frequency + high cost = real switching motivation.",
  },
];

const INTERVIEW_QUESTIONS = [
  {
    question: "You're redesigning Google Maps. What job are users hiring it to do?",
    hint: "Go beyond navigation — think emotional and social jobs around confidence, identity, and discovery.",
  },
  {
    question: "Uber's ride completion rate dropped 8%. Apply JTBD to diagnose root cause.",
    hint: "The functional job (get somewhere) is unchanged. Check if emotional jobs (safety, reliability) are being unmet.",
  },
  {
    question: "Design a new feature for Spotify using the JTBD framework.",
    hint: "Spotify users hire it to feel understood, not just to listen to music. What social or emotional job is underserved?",
  },
];

export default function JTBDPage() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

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
            FRAMEWORKS / JOBS-TO-BE-DONE
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
                fontSize: "clamp(48px, 7vw, 104px)",
                letterSpacing: "-2px",
                lineHeight: 0.88,
                color: "#000",
              }}
            >
              JOBS TO
              <br />
              BE
              <br />
              <span style={{ color: "#E63323" }}>DONE.</span>
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
                BY CLAYTON CHRISTENSEN · HARVARD BUSINESS SCHOOL
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#404040",
                }}
              >
                People don&apos;t buy products. They &quot;hire&quot; them to get a job
                done. JTBD is the framework that forces you to understand the
                deep motivation behind user behavior — not just what they do, but
                why they do it, and what they&apos;d do instead if your product
                disappeared tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core concept — the big idea */}
      <section style={{ background: "#000", borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "72px 40px",
            display: "grid",
            gap: "64px",
          }}
          className="lg:grid-cols-[1fr_1fr]"
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "#404040",
                marginBottom: "16px",
              }}
            >
              THE CORE IDEA
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(32px, 4vw, 52px)",
                letterSpacing: "-1px",
                lineHeight: 0.95,
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              USERS HIRE YOUR
              <br />
              PRODUCT.
              <br />
              THEY ALSO FIRE IT.
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#737373",
              }}
            >
              Christensen&apos;s famous example: McDonald&apos;s discovered their
              morning milkshake customers weren&apos;t buying a drink — they were
              hiring it to make a boring commute less boring. They needed
              something that could be consumed one-handed and lasted the entire
              drive.
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#737373",
              }}
            >
              The insight unlocked a completely different product strategy. In
              PM interviews, JTBD thinking separates candidates who understand
              users from candidates who understand features.
            </p>
          </div>
        </div>
      </section>

      {/* Three job types */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "72px 40px 0",
          }}
        >
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
            01 / THREE TYPES OF JOBS
          </div>
          <h2
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 900,
              fontSize: "clamp(36px, 4vw, 56px)",
              letterSpacing: "-1px",
              lineHeight: 0.95,
              color: "#000",
              marginBottom: "48px",
            }}
          >
            EVERY JOB HAS
            <br />
            THREE LAYERS.
          </h2>
        </div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "2px solid #000",
            marginBottom: "0",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {JOB_TYPES.map((job, i) => (
            <div
              key={job.type}
              style={{
                padding: "40px",
                borderRight: i < JOB_TYPES.length - 1 ? "2px solid #000" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                borderBottom: "4px solid #000",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "20px",
                    color: job.color,
                  }}
                >
                  {job.icon}
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "22px",
                    letterSpacing: "-0.3px",
                    color: "#000",
                  }}
                >
                  {job.type}
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "#737373",
                  fontStyle: "italic",
                }}
              >
                &quot;{job.definition}&quot;
              </p>

              <div
                style={{
                  height: "1px",
                  background: "#E5E5E5",
                }}
              />

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#A3A3A3",
                    marginBottom: "8px",
                  }}
                >
                  EXAMPLE
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#525252",
                  }}
                >
                  {job.example}
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#E63323",
                    marginBottom: "8px",
                  }}
                >
                  PM APPLICATION
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#525252",
                  }}
                >
                  {job.pmApplication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-step process */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "72px 40px",
          }}
        >
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
            02 / HOW TO APPLY IT
          </div>
          <h2
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 900,
              fontSize: "clamp(36px, 4vw, 56px)",
              letterSpacing: "-1px",
              lineHeight: 0.95,
              color: "#000",
              marginBottom: "48px",
            }}
          >
            THE 4-STEP
            <br />
            PROCESS.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0",
              border: "2px solid #000",
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                style={{
                  padding: "40px",
                  borderRight: i % 2 === 0 ? "2px solid #000" : "none",
                  borderBottom: i < 2 ? "2px solid #000" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "56px",
                    letterSpacing: "-2px",
                    lineHeight: 1,
                    color: "#E5E5E5",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "22px",
                    letterSpacing: "-0.3px",
                    color: "#000",
                    lineHeight: 1.1,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "#525252",
                  }}
                >
                  {step.description}
                </p>
                <div
                  style={{
                    background: "#F5F5F5",
                    padding: "16px",
                    borderLeft: "3px solid #E63323",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex)",
                      fontSize: "12px",
                      lineHeight: 1.6,
                      color: "#525252",
                      fontStyle: "italic",
                    }}
                  >
                    {step.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice questions */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "72px 40px",
          }}
        >
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
            03 / PRACTICE QUESTIONS
          </div>
          <h2
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 900,
              fontSize: "clamp(36px, 4vw, 56px)",
              letterSpacing: "-1px",
              lineHeight: 0.95,
              color: "#000",
              marginBottom: "48px",
            }}
          >
            TRY THESE
            <br />
            SCENARIOS.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0", border: "2px solid #000" }}>
            {INTERVIEW_QUESTIONS.map((q, i) => (
              <div key={i} style={{ borderBottom: i < INTERVIEW_QUESTIONS.length - 1 ? "2px solid #000" : "none" }}>
                <button
                  onClick={() => setActiveQuestion(activeQuestion === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "28px 32px",
                    background: activeQuestion === i ? "#000" : "#fff",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                    textAlign: "left",
                    transition: "background 0.2s",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex)",
                      fontSize: "15px",
                      lineHeight: 1.5,
                      color: activeQuestion === i ? "#fff" : "#000",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                  >
                    {q.question}
                  </p>
                  <div
                    style={{
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "18px",
                      color: activeQuestion === i ? "#E63323" : "#A3A3A3",
                      transition: "color 0.2s, transform 0.2s",
                      transform: activeQuestion === i ? "rotate(45deg)" : "none",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </div>
                </button>
                {activeQuestion === i && (
                  <div
                    style={{
                      padding: "0 32px 28px",
                      background: "#000",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-ibm-mono)",
                        fontSize: "8px",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "#404040",
                        marginBottom: "10px",
                      }}
                    >
                      ZEVI PRO HINT
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-ibm-plex)",
                        fontSize: "14px",
                        lineHeight: 1.65,
                        color: "#A3A3A3",
                      }}
                    >
                      {q.hint}
                    </p>
                  </div>
                )}
              </div>
            ))}
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
              18 JTBD QUESTIONS.
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
