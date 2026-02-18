"use client";

import PageLayout from "@/components/PageLayout";

const MENTIONS = [
  {
    publication: "TECHCRUNCH",
    date: "JAN 2026",
    headline: "Zevi Is the Duolingo of PM Interview Prep — and It's Growing Fast",
    excerpt:
      "The mobile-first app has quietly amassed 12,000 active users in six months with a deceptively simple premise: teach PM candidates how to apply frameworks, not just recite them.",
    url: "#",
  },
  {
    publication: "PRODUCT HUNT",
    date: "SEP 2025",
    headline: "#1 Product of the Day — Zevi: AI-Powered PM Interview Coach",
    excerpt:
      "Launched to Product Hunt on day one, Zevi topped the charts with over 1,200 upvotes. 'Finally, something that actually prepares you for the follow-up question,' wrote one early user.",
    url: "#",
  },
  {
    publication: "LENNY'S NEWSLETTER",
    date: "NOV 2025",
    headline: "The App That's Changing How PMs Prepare for Interviews",
    excerpt:
      "Lenny Rachitsky spotlighted Zevi in his 'Tools I'm Excited About' roundup, calling its AI feedback loop 'the closest thing to having a PM coach in your pocket.'",
    url: "#",
  },
  {
    publication: "YCOMBINATOR HACKER NEWS",
    date: "OCT 2025",
    headline: "Show HN: We built a Duolingo-style app for PM interview prep",
    excerpt:
      "Zevi's Show HN post reached the front page with 400+ points and spawned a rich discussion about the state of PM interview coaching and whether AI can replace human coaches.",
    url: "#",
  },
];

const QUOTES = [
  {
    quote:
      "The AI feedback is shockingly specific. It doesn't just say 'good job' — it tells you your root cause hypothesis was too shallow and exactly why.",
    attribution: "TECHCRUNCH",
    year: "2026",
  },
  {
    quote:
      "Zevi fills a real gap in the PM prep market. Most tools test knowledge. This one tests application.",
    attribution: "LENNY'S NEWSLETTER",
    year: "2025",
  },
  {
    quote:
      "I stopped recommending books to PM candidates who ask me how to prep. I tell them to download Zevi and practice every day for 60 days.",
    attribution: "YCOMBINATOR HN COMMENTER",
    year: "2025",
  },
];

export default function PressPage() {
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
            COMPANY / PRESS
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
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
              ZEVI IN
              <br />
              THE
              <br />
              <span style={{ color: "#E63323" }}>PRESS.</span>
            </h1>
            <div style={{ maxWidth: "360px" }}>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#525252",
                  marginBottom: "24px",
                }}
              >
                For media inquiries, interview requests, or press kit access,
                contact our team directly.
              </p>
              <a
                href="mailto:press@zevi.app"
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#fff",
                  background: "#000",
                  padding: "14px 28px",
                  border: "2px solid #000",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "background 0.15s, border-color 0.15s",
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
                PRESS@ZEVI.APP ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes strip */}
      <section style={{ background: "#000", borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {QUOTES.map((q, i) => (
            <div
              key={i}
              style={{
                padding: "48px 40px",
                borderRight: i < QUOTES.length - 1 ? "2px solid #171717" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "48px",
                  color: "#E63323",
                  lineHeight: 1,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#D4D4D4",
                  fontStyle: "italic",
                  flexGrow: 1,
                }}
              >
                {q.quote}
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#525252",
                  }}
                >
                  — {q.attribution}, {q.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
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
            01 / COVERAGE
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
            RECENT
            <br />
            MENTIONS.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              border: "2px solid #000",
            }}
          >
            {MENTIONS.map((mention, i) => (
              <a
                key={mention.publication}
                href={mention.url}
                style={{
                  display: "grid",
                  borderBottom: i < MENTIONS.length - 1 ? "2px solid #000" : "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                className="lg:grid-cols-[200px_1fr]"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#F5F5F5";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fff";
                }}
              >
                {/* Publication label */}
                <div
                  style={{
                    padding: "32px 40px",
                    borderRight: "2px solid #000",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 900,
                      fontSize: "16px",
                      letterSpacing: "0.5px",
                      color: "#000",
                    }}
                  >
                    {mention.publication}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color: "#A3A3A3",
                    }}
                  >
                    {mention.date}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "32px 40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 900,
                      fontSize: "clamp(18px, 2vw, 24px)",
                      letterSpacing: "-0.3px",
                      lineHeight: 1.1,
                      color: "#000",
                    }}
                  >
                    {mention.headline}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex)",
                      fontSize: "13px",
                      lineHeight: 1.65,
                      color: "#525252",
                    }}
                  >
                    {mention.excerpt}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#000",
                    }}
                  >
                    READ FULL ARTICLE ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section style={{ borderBottom: "4px solid #000" }}>
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
                color: "#E63323",
                marginBottom: "16px",
              }}
            >
              02 / PRESS KIT
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(36px, 4vw, 56px)",
                letterSpacing: "-1px",
                lineHeight: 0.95,
                color: "#000",
                marginBottom: "24px",
              }}
            >
              ASSETS &
              <br />
              GUIDELINES.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#525252",
                marginBottom: "32px",
              }}
            >
              Our press kit includes logos in SVG and PNG formats, product
              screenshots, founder headshots, and brand usage guidelines. All
              assets are free to use for editorial coverage.
            </p>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#fff",
                background: "#000",
                padding: "14px 28px",
                border: "2px solid #000",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "background 0.15s, border-color 0.15s",
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
              DOWNLOAD PRESS KIT ↓
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#A3A3A3",
                marginBottom: "8px",
              }}
            >
              QUICK FACTS
            </div>
            {[
              ["Founded", "August 2025"],
              ["Headquarters", "Fully Remote"],
              ["Active Users", "12,000+"],
              ["Frameworks", "50+"],
              ["Platforms", "iOS & Android"],
              ["Pass Rate (Pro users)", "94%"],
              ["Press Contact", "press@zevi.app"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderBottom: "1px solid #E5E5E5",
                  paddingBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "#737373",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#000",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
