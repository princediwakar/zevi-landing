"use client";

import { useState } from "react";

const LESSON_TYPES = [
  {
    number: "01",
    type: "LEARN",
    duration: "5 MIN",
    xp: "+10 XP",
    color: "#000",
    description:
      "Five swipeable cards breaking down a framework into digestible concepts. Build the mental model before practicing.",
    tag: "FOUNDATION",
  },
  {
    number: "02",
    type: "DRILL",
    duration: "7 MIN",
    xp: "+10 XP",
    color: "#000",
    description:
      "Repeat one framework step until it's instinctive. Focused repetition creates automatic recall under pressure.",
    tag: "REPETITION",
  },
  {
    number: "03",
    type: "PATTERN",
    duration: "12 MIN",
    xp: "+15 XP",
    color: "#000",
    description:
      "Recognize the interview pattern. Use the OutlineBuilder to structure a full response. AI checks your logic flow.",
    tag: "PATTERN RECOGNITION",
  },
  {
    number: "04",
    type: "FULL PRACTICE",
    duration: "15 MIN",
    xp: "+20 XP",
    color: "#000",
    description:
      "Complete a real interview question timed. Respond via bullet outline or voice. Get detailed AI feedback.",
    tag: "SIMULATION",
  },
  {
    number: "05",
    type: "QUIZ",
    duration: "10 MIN",
    xp: "+50 XP",
    color: "#E63323",
    description:
      "Ten MCQs testing unit mastery. Highest XP reward. Unlocks the next unit when passed.",
    tag: "MASTERY CHECK",
  },
];

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" style={{ borderBottom: "4px solid #000" }}>
      {/* Section header */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "64px 40px 48px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
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
            02 / LESSON TYPES
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
            FIVE WAYS
            <br />
            TO MASTER
            <br />A FRAMEWORK.
          </h2>
        </div>

        <p
          style={{
            fontFamily: "var(--font-ibm-plex)",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "#525252",
            maxWidth: "360px",
          }}
        >
          Every unit contains all five lesson types, each targeting a different
          layer of mastery. Progress unlocks as you complete each type.
        </p>
      </div>

      {/* Lesson type grid */}
      <div
        style={{
          borderTop: "2px solid #000",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
      >
        {LESSON_TYPES.map((lesson, i) => (
          <div
            key={lesson.number}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderRight:
                i < LESSON_TYPES.length - 1 ? "2px solid #000" : "none",
              borderBottom: "2px solid #000",
              padding: "32px 28px",
              cursor: "default",
              background: hovered === i ? "#000" : "#fff",
              transition: "background 0.2s",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Number */}
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "64px",
                lineHeight: 1,
                letterSpacing: "-2px",
                color:
                  hovered === i
                    ? lesson.color === "#E63323"
                      ? "#E63323"
                      : "#E5E5E5"
                    : lesson.color === "#E63323"
                    ? "#E63323"
                    : "#E5E5E5",
                transition: "color 0.2s",
              }}
            >
              {lesson.number}
            </div>

            {/* Lesson name */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "28px",
                  letterSpacing: "-0.5px",
                  lineHeight: 1,
                  color: hovered === i ? "#fff" : "#000",
                  transition: "color 0.2s",
                  marginBottom: "8px",
                }}
              >
                {lesson.type}
              </div>

              {/* Metrics */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: hovered === i ? "#737373" : "#737373",
                    border: `1px solid ${hovered === i ? "#404040" : "#D4D4D4"}`,
                    padding: "3px 6px",
                  }}
                >
                  {lesson.duration}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: hovered === i ? "#E63323" : "#E63323",
                  }}
                >
                  {lesson.xp}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: hovered === i ? "#262626" : "#E5E5E5",
                transition: "background 0.2s",
              }}
            />

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "12px",
                lineHeight: 1.6,
                color: hovered === i ? "#A3A3A3" : "#525252",
                transition: "color 0.2s",
                flexGrow: 1,
              }}
            >
              {lesson.description}
            </p>

            {/* Tag */}
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "8px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: hovered === i ? "#404040" : "#D4D4D4",
                transition: "color 0.2s",
              }}
            >
              {lesson.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
