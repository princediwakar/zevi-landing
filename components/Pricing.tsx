"use client";

const FREE_FEATURES = [
  "3 frameworks unlocked",
  "LEARN + DRILL lesson types",
  "AI feedback on 5 answers/week",
  "Basic progress tracking",
  "Daily streak system",
];

const PRO_FEATURES = [
  "All 50+ frameworks unlocked",
  "All 5 lesson types",
  "Unlimited AI feedback",
  "Voice practice + transcription",
  "Advanced analytics dashboard",
  "Interview readiness score",
  "Priority support",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: "#000",
        borderBottom: "4px solid #000",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "64px 0 48px",
            borderBottom: "2px solid #171717",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "#E63323",
                marginBottom: "12px",
              }}
            >
              06 / PRICING
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(48px, 6vw, 80px)",
                letterSpacing: "-1px",
                lineHeight: 0.95,
                color: "#fff",
              }}
            >
              START FREE.
              <br />
              GO PRO
              <br />
              WHEN READY.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex)",
              fontSize: "15px",
              color: "#525252",
              maxWidth: "320px",
              lineHeight: 1.65,
            }}
          >
            No credit card required to start. Upgrade when you want unlimited
            access and voice practice.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            borderBottom: "2px solid #171717",
            paddingTop: "48px",
            paddingBottom: "48px",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Free */}
          <div
            style={{
              border: "2px solid #171717",
              padding: "40px",
              marginRight: "0",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
            className="md:mr-6"
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#525252",
                  marginBottom: "8px",
                }}
              >
                FREE TIER
              </div>
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "64px",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  color: "#fff",
                }}
              >
                $0
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  color: "#404040",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                FOREVER FREE
              </div>
            </div>

            <div
              style={{
                height: "1px",
                background: "#171717",
              }}
            />

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {FREE_FEATURES.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      border: "2px solid #262626",
                      flexShrink: 0,
                      marginTop: "1px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#404040",
                        fontSize: "8px",
                        lineHeight: 1,
                      }}
                    >
                      ✓
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex)",
                      fontSize: "13px",
                      color: "#525252",
                      lineHeight: 1.4,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#fff",
                background: "transparent",
                padding: "16px 32px",
                border: "2px solid #262626",
                textAlign: "center",
                marginTop: "auto",
                transition: "border-color 0.15s, background 0.15s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#262626";
              }}
            >
              DOWNLOAD FREE ↗
            </a>
          </div>

          {/* Pro */}
          <div
            style={{
              border: "2px solid #E63323",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              position: "relative",
            }}
          >
            {/* Pro badge */}
            <div
              style={{
                position: "absolute",
                top: "-1px",
                right: "32px",
                background: "#E63323",
                color: "#fff",
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "8px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                padding: "4px 10px",
              }}
            >
              MOST POPULAR
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#E63323",
                  marginBottom: "8px",
                }}
              >
                PRO TIER
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 900,
                    fontSize: "64px",
                    letterSpacing: "-2px",
                    lineHeight: 1,
                    color: "#fff",
                  }}
                >
                  $12
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "10px",
                    color: "#525252",
                    letterSpacing: "0.1em",
                  }}
                >
                  / MONTH
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  color: "#404040",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                $8/MO BILLED ANNUALLY
              </div>
            </div>

            <div
              style={{
                height: "1px",
                background: "#1a0a09",
              }}
            />

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {PRO_FEATURES.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      border: "2px solid #E63323",
                      flexShrink: 0,
                      marginTop: "1px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#E63323",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "8px",
                        lineHeight: 1,
                      }}
                    >
                      ✓
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex)",
                      fontSize: "13px",
                      color: "#D4D4D4",
                      lineHeight: 1.4,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#fff",
                background: "#E63323",
                padding: "16px 32px",
                border: "2px solid #E63323",
                textAlign: "center",
                marginTop: "auto",
                transition: "background 0.15s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#c42a1a";
                (e.currentTarget as HTMLElement).style.borderColor = "#c42a1a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E63323";
                (e.currentTarget as HTMLElement).style.borderColor = "#E63323";
              }}
            >
              START PRO FREE (7 DAYS) ↗
            </a>
          </div>
        </div>

        {/* Guarantee strip */}
        <div
          style={{
            padding: "32px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "1px",
              background: "#262626",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "9px",
              color: "#404040",
              letterSpacing: "0.1em",
              textAlign: "center",
            }}
          >
            NO CREDIT CARD REQUIRED · CANCEL ANY TIME · 7-DAY FREE PRO TRIAL
          </p>
          <div
            style={{
              width: "20px",
              height: "1px",
              background: "#262626",
            }}
          />
        </div>
      </div>
    </section>
  );
}
