"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const ROLES = [
  {
    title: "SENIOR iOS ENGINEER",
    team: "ENGINEERING",
    location: "REMOTE (INDIA / US)",
    type: "FULL-TIME",
    description:
      "Own the iOS app end-to-end. You'll architect new features, optimize for performance, and work directly with the AI team to integrate real-time speech feedback into the native app.",
    requirements: [
      "5+ years of Swift / SwiftUI experience",
      "Strong understanding of iOS performance optimization",
      "Experience shipping consumer apps at scale",
      "Bonus: Core ML or audio processing experience",
    ],
  },
  {
    title: "GROWTH PRODUCT MANAGER",
    team: "PRODUCT",
    location: "REMOTE (ANYWHERE)",
    type: "FULL-TIME",
    description:
      "Drive Zevi's acquisition and activation metrics. You'll run experiments across onboarding, referral loops, and content distribution — and you'll use your own product to prep for the role.",
    requirements: [
      "3+ years in growth or product roles at B2C apps",
      "Strong command of AARRR metrics (ironic, we know)",
      "Experience running A/B experiments at scale",
      "Bonus: Ed-tech or mobile-first product background",
    ],
  },
  {
    title: "PM FRAMEWORK WRITER",
    team: "CONTENT",
    location: "REMOTE (ANYWHERE)",
    type: "CONTRACT",
    description:
      "Write the scenarios, questions, and answer guides that PM candidates practice with every day. You'll work with James (our Head of Frameworks) to turn real interview patterns into structured Zevi units.",
    requirements: [
      "Passed PM interviews at top-tier tech companies",
      "Strong written communication and instructional design instincts",
      "Deep familiarity with product frameworks (CIRCLES, AARRR, etc.)",
      "Bonus: Teaching, coaching, or curriculum design experience",
    ],
  },
];

const BENEFITS = [
  {
    icon: "◈",
    title: "FULLY REMOTE",
    body: "Work from anywhere. We care about output, not presence. Async-first culture with optional in-person sprints twice a year.",
  },
  {
    icon: "◉",
    title: "EQUITY",
    body: "Meaningful equity. We're early. The people who build Zevi now will share meaningfully in what it becomes.",
  },
  {
    icon: "◎",
    title: "UNLIMITED PTO",
    body: "Take the time you need. We're serious about sustainable pace — you can't do your best work burnt out.",
  },
  {
    icon: "◍",
    title: "LEARNING BUDGET",
    body: "$2,000/year for courses, books, conferences. If it makes you better at your job, we cover it.",
  },
];

export default function CareersPage() {
  const [openRole, setOpenRole] = useState<number | null>(null);

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
            ← BACK TO HOME
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
            COMPANY / CAREERS
          </div>

          <div
            style={{
              display: "grid",
              gap: "48px",
            }}
            className="lg:grid-cols-[1.2fr_1fr]"
          >
            <h1
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(56px, 8vw, 112px)",
                letterSpacing: "-2px",
                lineHeight: 0.9,
                color: "#000",
              }}
            >
              BUILD THE
              <br />
              FUTURE OF
              <br />
              <span style={{ color: "#E63323" }}>PM PREP.</span>
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#404040",
                }}
              >
                We&apos;re a small, remote-first team building the app that
                12,000 PM candidates use to land their dream role. Every person
                here has a direct impact on the product.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#404040",
                }}
              >
                We move fast, default to transparency, and treat each other like
                adults. If you care about education, AI, and mobile product —
                keep reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
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
            01 / OPEN ROLES
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
            {ROLES.length} POSITIONS
            <br />
            AVAILABLE NOW.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              border: "2px solid #000",
            }}
          >
            {ROLES.map((role, i) => (
              <div key={role.title} style={{ borderBottom: i < ROLES.length - 1 ? "2px solid #000" : "none" }}>
                {/* Role header — clickable */}
                <button
                  onClick={() => setOpenRole(openRole === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "32px 40px",
                    background: openRole === i ? "#000" : "#fff",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                    transition: "background 0.2s",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-barlow)",
                        fontWeight: 900,
                        fontSize: "clamp(20px, 2vw, 28px)",
                        letterSpacing: "-0.3px",
                        color: openRole === i ? "#fff" : "#000",
                        transition: "color 0.2s",
                      }}
                    >
                      {role.title}
                    </div>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                      {[role.team, role.location, role.type].map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "var(--font-ibm-mono)",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            color: openRole === i ? "#525252" : "#737373",
                            transition: "color 0.2s",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "20px",
                      color: openRole === i ? "#E63323" : "#000",
                      transition: "color 0.2s, transform 0.2s",
                      transform: openRole === i ? "rotate(45deg)" : "none",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </div>
                </button>

                {/* Expanded content */}
                {openRole === i && (
                  <div
                    style={{
                      padding: "0 40px 40px",
                      background: "#000",
                      display: "grid",
                      gap: "32px",
                    }}
                    className="lg:grid-cols-[1fr_1fr]"
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-ibm-mono)",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          color: "#404040",
                          marginBottom: "12px",
                        }}
                      >
                        ABOUT THE ROLE
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-ibm-plex)",
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: "#737373",
                        }}
                      >
                        {role.description}
                      </p>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-ibm-mono)",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          color: "#404040",
                          marginBottom: "16px",
                        }}
                      >
                        REQUIREMENTS
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {role.requirements.map((req, j) => (
                          <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                            <div
                              style={{
                                width: "4px",
                                height: "4px",
                                background: "#E63323",
                                flexShrink: 0,
                                marginTop: "7px",
                              }}
                            />
                            <span
                              style={{
                                fontFamily: "var(--font-ibm-plex)",
                                fontSize: "13px",
                                lineHeight: 1.5,
                                color: "#737373",
                              }}
                            >
                              {req}
                            </span>
                          </div>
                        ))}
                      </div>
                      <a
                        href="mailto:jobs@zevi.app"
                        style={{
                          marginTop: "28px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          fontFamily: "var(--font-ibm-mono)",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          color: "#000",
                          background: "#fff",
                          padding: "14px 28px",
                          border: "2px solid #fff",
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
                        APPLY NOW ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
            02 / BENEFITS
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
            WHAT YOU
            <br />
            GET.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "2px solid #000",
            }}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                style={{
                  padding: "40px 32px",
                  borderRight: i < BENEFITS.length - 1 ? "2px solid #000" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "24px",
                    color: "#E63323",
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "18px",
                    letterSpacing: "-0.2px",
                    color: "#000",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "#525252",
                  }}
                >
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
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
              DON&apos;T SEE YOUR ROLE?
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
              SEND AN OPEN
              <br />
              APPLICATION.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#525252",
                maxWidth: "400px",
                marginTop: "16px",
              }}
            >
              If you&apos;re exceptional at what you do and believe in what
              Zevi is building, tell us. We read every application.
            </p>
          </div>
          <a
            href="mailto:jobs@zevi.app"
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
            EMAIL US ↗
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
