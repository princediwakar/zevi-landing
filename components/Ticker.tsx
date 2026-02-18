"use client";

const COMPANIES = [
  "GOOGLE",
  "META",
  "APPLE",
  "MICROSOFT",
  "STRIPE",
  "AIRBNB",
  "AMAZON",
  "OPENAI",
  "SPOTIFY",
  "NETFLIX",
  "NOTION",
  "FIGMA",
  "LINEAR",
  "VERCEL",
  "DATABRICKS",
];

const DOT = (
  <span
    style={{
      display: "inline-block",
      width: "4px",
      height: "4px",
      background: "#E63323",
      margin: "0 28px",
      flexShrink: 0,
      verticalAlign: "middle",
    }}
  />
);

export default function Ticker() {
  const doubled = [...COMPANIES, ...COMPANIES];

  return (
    <div
      style={{
        background: "#000",
        borderBottom: "4px solid #000",
        overflow: "hidden",
        padding: "18px 0",
      }}
    >
      {/* Label row */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          marginBottom: "14px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "2px",
            background: "#E63323",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#525252",
          }}
        >
          USED BY PMs AT
        </span>
      </div>

      {/* Scrolling track */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            background:
              "linear-gradient(to right, #000 0%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            background:
              "linear-gradient(to left, #000 0%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div className="ticker-track" style={{ alignItems: "center" }}>
          {doubled.map((company, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "0.12em",
                  color: "#525252",
                  transition: "color 0.15s",
                  cursor: "default",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#525252")
                }
              >
                {company}
              </span>
              {DOT}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
