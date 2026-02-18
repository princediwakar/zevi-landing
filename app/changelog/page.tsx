"use client";

import PageLayout from "@/components/PageLayout";

const CHANGELOG = [
  {
    version: "v2.4.0",
    date: "FEB 2026",
    tag: "MAJOR UPDATE",
    tagColor: "#E63323",
    items: [
      "Added Root Cause Analysis framework with 12 drill scenarios",
      "Voice practice now supports 7 languages",
      "AI feedback engine v3 — 40% more specific coaching",
      "Redesigned progress dashboard with heatmap view",
      "Bug fix: streak reset issue on timezone change",
    ],
  },
  {
    version: "v2.3.0",
    date: "JAN 2026",
    tag: "FRAMEWORKS",
    tagColor: "#000",
    items: [
      "CIRCLES framework fully launched with 20 practice questions",
      "Global leaderboard — compete with top Zevi users",
      "New 'Weak Spots' analysis — pinpoints frameworks you avoid",
      "Share your score card to LinkedIn directly",
    ],
  },
  {
    version: "v2.2.0",
    date: "DEC 2025",
    tag: "AI UPDATE",
    tagColor: "#000",
    items: [
      "AI feedback v2 — now evaluates structure, depth, and pacing",
      "Streak shield: protect your streak once per week",
      "Added 15 new AARRR scenario questions",
      "Performance improvements — app loads 2× faster",
    ],
  },
  {
    version: "v2.1.0",
    date: "NOV 2025",
    tag: "FRAMEWORKS",
    tagColor: "#000",
    items: [
      "Jobs-to-be-Done framework launched — 18 interview questions",
      "Dark mode (finally!)",
      "Calendar sync: schedule daily practice sessions",
      "Improved offline support — practice without internet",
    ],
  },
  {
    version: "v2.0.0",
    date: "OCT 2025",
    tag: "REDESIGN",
    tagColor: "#E63323",
    items: [
      "Complete visual redesign — cleaner, faster, more focused",
      "AARRR pirate metrics framework — most-requested addition",
      "New unit structure: LEARN → DRILL → PATTERN → PRACTICE → QUIZ",
      "XP system overhaul with weekly challenges",
      "iPad support launched",
    ],
  },
  {
    version: "v1.5.0",
    date: "SEP 2025",
    tag: "FEATURE",
    tagColor: "#000",
    items: [
      "Voice practice launched — answer questions out loud",
      "AI transcription and verbal fluency scoring",
      "Framework search — find questions by topic or company",
      "Push notifications for daily practice reminders",
    ],
  },
  {
    version: "v1.0.0",
    date: "AUG 2025",
    tag: "LAUNCH",
    tagColor: "#E63323",
    items: [
      "Zevi launches on iOS and Android 🎉",
      "5 core PM frameworks at launch",
      "AI outline feedback on written responses",
      "Free tier with 3 frameworks, Pro tier with unlimited access",
      "Daily streak system",
    ],
  },
];

export default function ChangelogPage() {
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
            PRODUCT / CHANGELOG
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
              WHAT&apos;S
              <br />
              NEW IN
              <br />
              <span style={{ color: "#E63323" }}>ZEVI.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#525252",
                maxWidth: "380px",
              }}
            >
              Every update ships new frameworks, sharper AI feedback, and
              features built from real user requests. This is the full record.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "64px 40px",
        }}
      >
        {CHANGELOG.map((entry, i) => (
          <div
            key={entry.version}
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: "40px",
              borderTop: i === 0 ? "none" : "2px solid #E5E5E5",
              paddingTop: i === 0 ? "0" : "48px",
              marginTop: i === 0 ? "0" : "48px",
            }}
            className="grid-cols-1 md:grid-cols-[200px_1fr]"
          >
            {/* Left — version info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                paddingTop: "4px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "28px",
                  letterSpacing: "-0.5px",
                  color: "#000",
                  lineHeight: 1,
                }}
              >
                {entry.version}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "#A3A3A3",
                }}
              >
                {entry.date}
              </div>
              <div
                style={{
                  display: "inline-block",
                  background: entry.tagColor,
                  color: "#fff",
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  padding: "4px 10px",
                  width: "fit-content",
                }}
              >
                {entry.tag}
              </div>
            </div>

            {/* Right — items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {entry.items.map((item, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "#E63323",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex)",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#000",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "#000",
          borderTop: "4px solid #000",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "64px 40px",
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
              WANT EARLY FEATURE ACCESS?
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
              DOWNLOAD ZEVI.
              <br />
              IT&apos;S FREE.
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
            GET STARTED FREE ↗
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
