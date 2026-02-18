import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zevi — Master the PM Interview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#000",
          fontFamily: "sans-serif",
          padding: "0",
          position: "relative",
        }}
      >
        {/* Grid lines decoration */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            display: "flex",
          }}
        />

        {/* Red accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#E63323",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "64px 80px",
            position: "relative",
          }}
        >
          {/* Logo row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              ZEVI
            </span>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#E63323",
                marginBottom: "2px",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#404040",
                letterSpacing: "0.2em",
                marginLeft: "8px",
              }}
            >
              PM INTERVIEW PREP
            </span>
          </div>

          {/* Main headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            <div
              style={{
                fontSize: "120px",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-4px",
                lineHeight: 0.88,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>CRACK</span>
              <span>
                THE{" "}
                <span style={{ color: "#E63323" }}>PM</span>
              </span>
              <span>INTERVIEW.</span>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "0",
              borderTop: "1px solid #171717",
              paddingTop: "32px",
            }}
          >
            {[
              { value: "12K+", label: "ACTIVE LEARNERS" },
              { value: "50+", label: "PM FRAMEWORKS" },
              { value: "94%", label: "INTERVIEW PASS RATE" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  paddingRight: "48px",
                  marginRight: "48px",
                  borderRight: i < 2 ? "1px solid #171717" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: 900,
                    color: "#fff",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "#525252",
                    letterSpacing: "0.15em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Pill */}
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#fff",
                padding: "12px 24px",
                alignSelf: "flex-end",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#000",
                  letterSpacing: "0.1em",
                }}
              >
                FREE ON iOS & ANDROID ↗
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
