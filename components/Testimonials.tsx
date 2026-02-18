const TESTIMONIALS = [
  {
    quote:
      "I bombed two PM rounds before Zevi. After 3 weeks of daily drills, I got offers from both Stripe and Notion. The framework analysis is what makes the difference — it caught patterns in my answers I never noticed.",
    name: "Priya Kapoor",
    role: "Senior PM, Stripe",
    tag: "HIRED IN 3 WEEKS",
  },
  {
    quote:
      "Every PM prep resource feels like it was designed for essays. Zevi actually gets how interviews work — fast, structured thinking. The drill lessons made AARRR feel completely automatic by day 10.",
    name: "Marcus Chen",
    role: "PM, Google",
    tag: "OFFER AFTER 4 WEEKS",
  },
  {
    quote:
      "The voice practice is underrated. Hearing my own AI-analyzed transcription was brutal but accurate. I stopped hedging and started structuring. I don't know any other app that does this.",
    name: "Amara Osei",
    role: "Product Manager, Airbnb",
    tag: "FULL PRACTICE MODE",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        borderBottom: "4px solid #000",
        background: "#FAFAFA",
      }}
    >
      {/* Header */}
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
          05 / TESTIMONIALS
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
          WHAT GETS
          <br />
          PEOPLE HIRED.
        </h2>
      </div>

      {/* Testimonial grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderBottom: "2px solid #000",
        }}
        className="grid-cols-1 md:grid-cols-3"
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            style={{
              borderRight:
                i < TESTIMONIALS.length - 1 ? "2px solid #000" : "none",
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              borderBottom: "2px solid #000",
            }}
          >
            {/* Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#E63323",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#A3A3A3",
                }}
              >
                {t.tag}
              </span>
            </div>

            {/* Opening mark */}
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "72px",
                lineHeight: 0.7,
                color: "#E5E5E5",
                userSelect: "none",
              }}
            >
              &ldquo;
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#262626",
                fontWeight: 400,
                flexGrow: 1,
              }}
            >
              {t.quote}
            </blockquote>

            {/* Attribution */}
            <div
              style={{
                borderTop: "1px solid #E5E5E5",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "#737373",
                }}
              >
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "9px",
            color: "#A3A3A3",
            letterSpacing: "0.1em",
          }}
        >
          BASED ON VERIFIED APP STORE REVIEWS
        </div>
        <div
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}
        >
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              style={{
                width: "12px",
                height: "12px",
                background: "#000",
                display: "inline-block",
              }}
            />
          ))}
          <span
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "9px",
              color: "#000",
              marginLeft: "8px",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            4.9 / 5.0
          </span>
        </div>
      </div>
    </section>
  );
}
