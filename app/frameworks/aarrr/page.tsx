"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const METRICS = [
  {
    letter: "A",
    name: "ACQUISITION",
    tagline: "How do users find you?",
    color: "#E63323",
    description:
      "Acquisition measures how people discover your product. It covers every channel — organic search, paid ads, word-of-mouth, app store discovery, social media, PR.",
    pmQuestion: "What's the most scalable acquisition channel for a B2B SaaS product entering a crowded market?",
    keyMetrics: ["CAC (Customer Acquisition Cost)", "Channel conversion rate", "Organic vs. paid ratio", "Time to first session"],
    interviewTip: "Always clarify the acquisition channel before jumping to tactics. Paid and organic require completely different PM mindsets.",
  },
  {
    letter: "A",
    name: "ACTIVATION",
    tagline: "Do users have a great first experience?",
    color: "#000",
    description:
      "Activation is the 'aha moment' — when a user first realizes the core value of your product. Poor activation is the most common reason users churn before they ever become engaged.",
    pmQuestion: "Spotify's 7-day activation rate dropped 12% after a redesign. How do you diagnose and fix it?",
    keyMetrics: ["Time to first value action", "Onboarding completion rate", "Day-1 retention", "Feature adoption in first session"],
    interviewTip: "In interviews, define what 'activated' means before analyzing. The interviewer is testing whether you know to clarify the metric first.",
  },
  {
    letter: "R",
    name: "RETENTION",
    tagline: "Do users come back?",
    color: "#000",
    description:
      "Retention is the most critical metric for long-term product health. If you can't retain users, every dollar spent on acquisition is wasted. Focus here before growth.",
    pmQuestion: "DAU/MAU for a social product dropped from 0.45 to 0.38. Walk me through your diagnosis.",
    keyMetrics: ["D1 / D7 / D30 retention", "DAU/MAU ratio", "Churn rate", "Resurrection rate"],
    interviewTip: "Segment retention by cohort, acquisition channel, and user type. A flat retention curve hides critical differences between user segments.",
  },
  {
    letter: "R",
    name: "REVENUE",
    tagline: "Do you make money?",
    color: "#000",
    description:
      "Revenue metrics track how effectively your product converts retained users into paying customers. For PMs, this means understanding conversion funnels, pricing psychology, and LTV optimization.",
    pmQuestion: "Your freemium app has 10K users but only a 2% conversion to paid. How do you improve this?",
    keyMetrics: ["ARPU (Average Revenue Per User)", "LTV (Lifetime Value)", "Conversion rate (free → paid)", "MRR growth rate"],
    interviewTip: "Revenue questions often hide a retention problem. Always check if your churn is killing LTV before optimizing the conversion funnel.",
  },
  {
    letter: "R",
    name: "REFERRAL",
    tagline: "Do users tell others?",
    color: "#E63323",
    description:
      "Referral is your free acquisition channel. A product with strong referral has a virality coefficient (K-factor) above 1 — meaning each user brings in more than one new user on average.",
    pmQuestion: "Design a referral program for a productivity app targeting remote teams.",
    keyMetrics: ["Viral coefficient (K-factor)", "NPS (Net Promoter Score)", "Referral conversion rate", "Invite-to-install rate"],
    interviewTip: "Referral programs fail when the incentive benefits the referrer but not the referee. Design for both sides or it won't spread.",
  },
];

export default function AARRRPage() {
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
            href="/frameworks/aarrr"
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
            FRAMEWORKS / AARRR
          </div>

          <div
            style={{
              display: "grid",
              gap: "48px",
            }}
            className="lg:grid-cols-[1.4fr_1fr]"
          >
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "clamp(64px, 10vw, 140px)",
                  letterSpacing: "-3px",
                  lineHeight: 0.85,
                  color: "#000",
                }}
              >
                AARRR
                <br />
                <span style={{ color: "#E63323" }}>PIRATE</span>
                <br />
                METRICS.
              </h1>
            </div>
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
                CREATED BY DAVE MCCLURE · 500 STARTUPS
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#404040",
                }}
              >
                The AARRR framework breaks down the entire customer journey into
                five measurable stages. Mastering it means you can diagnose
                exactly where your product is leaking users — and prescribe the
                right fix.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#404040",
                }}
              >
                It&apos;s called &quot;Pirate Metrics&quot; because the acronym
                sounds like what a pirate would say. It&apos;s used in PM
                interviews more than any other metrics framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Letter tabs */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
          }}
        >
          {METRICS.map((metric, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "32px 24px",
                background: active === i ? "#000" : "#fff",
                border: "none",
                borderRight: i < METRICS.length - 1 ? "2px solid #000" : "none",
                borderTop: active === i ? "4px solid #E63323" : "4px solid transparent",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                textAlign: "left",
                transition: "background 0.2s",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "56px",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  color: active === i ? "#fff" : "#E5E5E5",
                  transition: "color 0.2s",
                }}
              >
                {metric.letter}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "14px",
                  letterSpacing: "0.3px",
                  color: active === i ? "#fff" : "#000",
                  transition: "color 0.2s",
                }}
              >
                {metric.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  color: active === i ? "#525252" : "#A3A3A3",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s",
                }}
              >
                {metric.tagline}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Active metric detail */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gap: "0",
          }}
          className="lg:grid-cols-[1fr_1fr]"
        >
          {/* Left */}
          <div
            style={{
              padding: "64px 40px",
              borderRight: "2px solid #000",
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
              {METRICS[active].name}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(32px, 4vw, 52px)",
                letterSpacing: "-1px",
                lineHeight: 0.95,
                color: "#000",
                marginBottom: "24px",
              }}
            >
              {METRICS[active].tagline.toUpperCase()}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#404040",
                marginBottom: "40px",
              }}
            >
              {METRICS[active].description}
            </p>

            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#A3A3A3",
                marginBottom: "16px",
              }}
            >
              KEY METRICS TO TRACK
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {METRICS[active].keyMetrics.map((m, j) => (
                <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "#E63323",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex)",
                      fontSize: "14px",
                      lineHeight: 1.5,
                      color: "#000",
                    }}
                  >
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ padding: "64px 40px", background: "#F5F5F5" }}>
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#A3A3A3",
                marginBottom: "20px",
              }}
            >
              SAMPLE INTERVIEW QUESTION
            </div>
            <div
              style={{
                background: "#fff",
                border: "2px solid #000",
                padding: "28px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#E63323",
                  marginBottom: "12px",
                }}
              >
                PM INTERVIEW SCENARIO
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#000",
                  fontWeight: 500,
                }}
              >
                {METRICS[active].pmQuestion}
              </p>
            </div>

            <div
              style={{
                background: "#000",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#404040",
                  marginBottom: "12px",
                }}
              >
                ZEVI PRO TIP
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: "#A3A3A3",
                }}
              >
                {METRICS[active].interviewTip}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice CTA */}
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
              MASTER AARRR
              <br />
              IN 60 DAYS.
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
