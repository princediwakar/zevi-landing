const STEPS = [
  {
    num: "01",
    heading: "CHOOSE A FRAMEWORK.",
    body: "Browse 50+ PM frameworks organized by category — AARRR, Jobs-to-be-Done, CIRCLES, Root Cause Analysis, and more. Each one has a structured learning path.",
    detail: "Product Sense · Execution · Strategy · Behavioral · Estimation",
    aside: "Pick what you need, skip what you don't.",
  },
  {
    num: "02",
    heading: "PRACTICE DAILY.",
    body: "Lessons are bite-sized and mobile-native. 5–15 minutes per session. Use bullet outline mode for structure or voice input for simulation. No essays. No essays ever.",
    detail: "5 lesson types · XP rewards · Daily streaks",
    aside: "Consistency beats cramming. Always.",
  },
  {
    num: "03",
    heading: "AI CHECKS YOUR THINKING.",
    body: "Our AI doesn't just grade your answer — it analyzes whether you applied the framework correctly. It checks your logic, structure, and tradeoff reasoning at each step.",
    detail: "Framework application · Logic flow · Tradeoff analysis",
    aside: "Not what you said. How you thought.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        borderBottom: "4px solid #000",
      }}
    >
      {/* Section header */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "64px 40px 0",
          borderBottom: "2px solid #000",
          paddingBottom: "40px",
        }}
      >
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
          03 / HOW IT WORKS
        </div>
        <h2
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 900,
            fontSize: "clamp(48px, 6vw, 80px)",
            letterSpacing: "-1px",
            lineHeight: 0.95,
            color: "#000",
          }}
        >
          THREE STEPS.
          <br />
          ONE OFFER.
        </h2>
      </div>

      {/* Steps */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              borderBottom: i < STEPS.length - 1 ? "2px solid #000" : "none",
              padding: "0 40px",
              gap: "40px",
              alignItems: "stretch",
            }}
            className="grid-cols-1 md:grid-cols-[auto_1fr_auto]"
          >
            {/* Step number */}
            <div
              style={{
                padding: "48px 0",
                paddingRight: "40px",
                borderRight: "2px solid #000",
                display: "flex",
                alignItems: "center",
                minWidth: "120px",
              }}
              className="hidden md:flex"
            >
              <span
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "96px",
                  letterSpacing: "-3px",
                  lineHeight: 1,
                  color: "#E5E5E5",
                }}
              >
                {step.num}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: "48px 0", paddingLeft: "0" }}>
              {/* Mobile step number */}
              <div
                className="md:hidden"
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
                {step.num}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "clamp(32px, 3.5vw, 48px)",
                  letterSpacing: "-0.5px",
                  lineHeight: 1,
                  color: "#000",
                  marginBottom: "20px",
                }}
              >
                {step.heading}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "#404040",
                  maxWidth: "600px",
                  marginBottom: "20px",
                }}
              >
                {step.body}
              </p>

              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#A3A3A3",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "1px",
                    background: "#E63323",
                    flexShrink: 0,
                  }}
                />
                {step.detail}
              </div>
            </div>

            {/* Aside */}
            <div
              style={{
                padding: "48px 0",
                paddingLeft: "40px",
                borderLeft: "2px solid #000",
                display: "flex",
                alignItems: "flex-end",
                maxWidth: "220px",
                minWidth: "180px",
              }}
              className="hidden md:flex"
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "13px",
                  lineHeight: 1.55,
                  color: "#737373",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{step.aside}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
