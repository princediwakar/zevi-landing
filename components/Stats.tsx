"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  {
    value: 12000,
    suffix: "+",
    label: "ACTIVE LEARNERS",
    sub: "and growing fast",
  },
  {
    value: 50,
    suffix: "+",
    label: "PM FRAMEWORKS",
    sub: "from AARRR to CIRCLES",
  },
  {
    value: 94,
    suffix: "%",
    label: "PASS RATE",
    sub: "among daily users",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display =
    target >= 1000
      ? `${Math.floor(count / 1000)}K`
      : count.toString();

  return (
    <div ref={ref}>
      {display}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section
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
          <div
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "#E63323",
            }}
          >
            04 / BY THE NUMBERS
          </div>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex)",
              fontSize: "13px",
              color: "#525252",
              maxWidth: "300px",
              lineHeight: 1.6,
            }}
          >
            Real results. Not projections.
            <br />
            Updated weekly.
          </p>
        </div>

        {/* Metric grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderBottom: "2px solid #171717",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              style={{
                padding: "56px 0",
                paddingRight: "40px",
                borderRight:
                  i < METRICS.length - 1 ? "2px solid #171717" : "none",
                paddingLeft: i > 0 ? "40px" : "0",
              }}
            >
              {/* Counter */}
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "clamp(72px, 9vw, 120px)",
                  letterSpacing: "-3px",
                  lineHeight: 1,
                  color: "#fff",
                }}
              >
                <Counter target={metric.value} suffix={metric.suffix} />
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#fff",
                  marginTop: "12px",
                  marginBottom: "6px",
                }}
              >
                {metric.label}
              </div>

              {/* Sub */}
              <div
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "13px",
                  color: "#404040",
                }}
              >
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom marquee text */}
        <div
          style={{
            padding: "32px 0",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            overflow: "hidden",
          }}
        >
          {["LEARN", "DRILL", "PATTERN", "PRACTICE", "QUIZ"].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(28px, 3vw, 40px)",
                letterSpacing: "-0.5px",
                color: i % 2 === 0 ? "#171717" : "#E63323",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {item}
              {i < 4 && (
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    background: "#262626",
                    margin: "0 20px",
                    verticalAlign: "middle",
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
