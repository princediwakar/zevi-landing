"use client";

import PageLayout from "@/components/PageLayout";

const VALUES = [
  {
    number: "01",
    title: "PATTERN FIRST",
    body: "We believe mastering the pattern matters more than memorizing the answer. Zevi teaches you to recognize the question type so you can construct any answer on the fly.",
  },
  {
    number: "02",
    title: "RADICAL CANDOR",
    body: "Our AI doesn't sugarcoat. It tells you exactly where your logic breaks down, what's missing from your structure, and what a great answer looks like — every time.",
  },
  {
    number: "03",
    title: "MICRO-PRACTICE",
    body: "Five minutes beats five hours once a week. Zevi is built for mobile because the best preparation happens in the gaps — commutes, lunch breaks, waiting rooms.",
  },
  {
    number: "04",
    title: "MEASURABLE PROGRESS",
    body: "Gut feeling isn't good enough. Every session generates data. Your interview readiness score, weak-spot map, and framework fluency are always visible and always honest.",
  },
];

const TEAM = [
  {
    name: "ARJUN MEHRA",
    role: "Co-founder & CEO",
    bio: "Former PM at Stripe and Figma. Failed 3 PM interviews before cracking Google. Built Zevi to give everyone the coaching he wished he had.",
    initial: "A",
  },
  {
    name: "PRIYA NAIR",
    role: "Co-founder & CTO",
    bio: "ML Engineer from IIT Bombay. Built the AI feedback engine that powers every Zevi session. Obsessed with real-time speech analysis.",
    initial: "P",
  },
  {
    name: "JAMES OKAFOR",
    role: "Head of Frameworks",
    bio: "Ex-McKinsey and ex-Amazon PM. Personally designed every framework unit in Zevi. He's the one who writes the practice questions that make you sweat.",
    initial: "J",
  },
];

const STATS = [
  { value: "12K+", label: "Active Learners" },
  { value: "50+", label: "PM Frameworks" },
  { value: "94%", label: "Interview Pass Rate" },
  { value: "Aug 2025", label: "Founded" },
];

export default function AboutPage() {
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
            COMPANY / ABOUT
          </div>

          <div
            style={{
              display: "grid",
              gap: "48px",
            }}
            className="lg:grid-cols-[1fr_1fr]"
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
              WE MAKE
              <br />
              PM PREP
              <br />
              <span style={{ color: "#E63323" }}>HONEST.</span>
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
                The PM interview industry is full of vague advice, recycled
                frameworks, and expensive coaches who tell you what you want to
                hear. Zevi was built to cut through that noise.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#404040",
                }}
              >
                We&apos;re a small team of ex-PMs, engineers, and educators who
                believe that structured repetition — not motivation — is what
                creates interview-ready candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "40px",
                borderRight:
                  i < STATS.length - 1 ? "2px solid #000" : "none",
                borderBottom: "2px solid #000",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "clamp(32px, 3vw, 48px)",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                  color: "#000",
                  marginBottom: "6px",
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
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
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
              01 / THE STORY
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(36px, 4vw, 56px)",
                letterSpacing: "-1px",
                lineHeight: 0.95,
                color: "#000",
                marginBottom: "32px",
              }}
            >
              BUILT BY A PM
              <br />
              WHO FAILED.
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#404040",
              }}
            >
              Arjun Mehra failed his first three PM interviews. Not because he
              lacked knowledge — he&apos;d read every PM book on the shelf — but
              because he couldn&apos;t apply frameworks under pressure. The mental
              model would dissolve the moment a hard follow-up landed.
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#404040",
              }}
            >
              The solution wasn&apos;t more reading. It was deliberate, repetitive
              practice with honest feedback. He found a coach, practiced daily
              for 60 days, and cracked Google. Then he set out to bottle that
              system into something anyone could access for free.
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#404040",
              }}
            >
              Zevi launched in August 2025. In six months, 12,000 candidates
              have used it. 94% of Pro users who tracked their practice passed
              their target interview round.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
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
            02 / VALUES
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
            WHAT WE
            <br />
            STAND FOR.
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
            {VALUES.map((value, i) => (
              <div
                key={value.number}
                style={{
                  padding: "40px",
                  borderRight: i % 2 === 0 ? "2px solid #000" : "none",
                  borderBottom: i < 2 ? "2px solid #000" : "none",
                }}
                className={i % 2 !== 0 ? "border-r-0" : ""}
              >
                <div
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "48px",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                    color: "#E5E5E5",
                    marginBottom: "16px",
                  }}
                >
                  {value.number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "24px",
                    letterSpacing: "-0.5px",
                    color: "#000",
                    marginBottom: "12px",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "#525252",
                  }}
                >
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
            03 / TEAM
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
            THE PEOPLE
            <br />
            BEHIND ZEVI.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              border: "2px solid #000",
            }}
            className="grid-cols-1 md:grid-cols-3"
          >
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                style={{
                  padding: "40px",
                  borderRight:
                    i < TEAM.length - 1 ? "2px solid #000" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "24px",
                  }}
                >
                  {member.initial}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 900,
                      fontSize: "20px",
                      letterSpacing: "-0.3px",
                      color: "#000",
                      marginBottom: "4px",
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#E63323",
                    }}
                  >
                    {member.role}
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "#525252",
                  }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
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
              WE&apos;RE HIRING
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
              JOIN THE
              <br />
              TEAM.
            </h2>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="/careers"
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#000",
                background: "#fff",
                padding: "16px 36px",
                border: "2px solid #fff",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
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
              VIEW OPEN ROLES ↗
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
