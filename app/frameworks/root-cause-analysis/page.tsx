"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const STEPS = [
  {
    number: "01",
    title: "DEFINE THE METRIC THAT CHANGED",
    description: "Start with extreme precision. Don't say 'DAU dropped.' Say 'Android DAU in the US dropped 8% between Nov 1–7 vs. the prior week.' Precision eliminates half the hypotheses before you start.",
    questions: ["What exactly changed?", "When did it change?", "Which platform / geography / user segment?", "Is the change statistically significant?"],
  },
  {
    number: "02",
    title: "RULE OUT DATA & INSTRUMENTATION ISSUES",
    description: "Before diagnosing the product, verify the data. A surprising number of 'metric drops' are tracking bugs, logging failures, or dashboard misconfiguration. Always check this first or you'll waste hours chasing ghosts.",
    questions: ["Did any tracking changes ship around this date?", "Is the raw event count also down, or just the derived metric?", "Are other metrics also affected (suggesting a pipeline issue)?", "Can you reproduce the drop in a second data source?"],
  },
  {
    number: "03",
    title: "SEGMENT THE DATA",
    description: "Aggregate metrics hide the truth. Slice your data by platform, geography, acquisition channel, user cohort, device type, and app version to find where the drop is concentrated.",
    questions: ["Which user segment is most affected?", "Is the drop isolated to a specific platform or version?", "Did a specific cohort (e.g., new users) drive the change?", "Is it global or specific to one geography?"],
  },
  {
    number: "04",
    title: "FORM HYPOTHESES",
    description: "Based on your segmentation, generate 3-5 specific, testable hypotheses. Rank them by likelihood and ease of validation. A hypothesis must be falsifiable — not 'users are unhappy' but 'the new onboarding screen reduced D1 retention.'",
    questions: ["What product changes shipped in this window?", "What external factors changed (competitor launch, news event, seasonality)?", "What does the pattern of the drop tell you (sudden vs. gradual)?", "Which hypothesis can be validated fastest?"],
  },
  {
    number: "05",
    title: "APPLY THE 5 WHYS",
    description: "For your leading hypothesis, dig recursively. Keep asking 'why' until you reach an actionable root cause. Surface-level causes lead to surface-level fixes — the 5 Whys technique forces you deeper.",
    questions: ["Why did this metric drop?", "Why did that happen?", "Why did that happen? (×3 more)", "What's the actionable intervention at the root?"],
  },
  {
    number: "06",
    title: "VALIDATE & RECOMMEND",
    description: "Don't present the hypothesis as the conclusion. Propose a validation method (A/B test, user interviews, log analysis) and a remediation plan. Structure your recommendation as: finding → evidence → fix → success metric.",
    questions: ["How can I validate this hypothesis in < 48 hours?", "What's the fix if the hypothesis is correct?", "What's the success metric I'll track post-fix?", "What's the rollback plan if the fix makes things worse?"],
  },
];

export default function RCAPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <PageLayout>
      {/* Hero */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "72px 40px 64px" }}>
          <a
            href="/"
            style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", color: "#737373", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px", transition: "color 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#000")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#737373")}
          >
            ← FRAMEWORKS
          </a>
          <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#E63323", marginBottom: "16px" }}>
            FRAMEWORKS / ROOT CAUSE ANALYSIS
          </div>
          <div style={{ display: "grid", gap: "48px" }} className="lg:grid-cols-[1.4fr_1fr]">
            <h1 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(48px, 7vw, 104px)", letterSpacing: "-2px", lineHeight: 0.88, color: "#000" }}>
              ROOT
              <br />
              CAUSE
              <br />
              <span style={{ color: "#E63323" }}>ANALYSIS.</span>
            </h1>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "20px" }}>
              <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", color: "#A3A3A3", border: "1px solid #E5E5E5", padding: "6px 12px", display: "inline-block", width: "fit-content" }}>
                THE PM DIAGNOSTIC FRAMEWORK
              </div>
              <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "16px", lineHeight: 1.7, color: "#404040" }}>
                When a metric drops, the worst thing you can do is guess. Root Cause Analysis is the structured diagnostic process that PMs use to find the real problem — not the surface-level symptom — so they can prescribe the right fix.
              </p>
              <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "16px", lineHeight: 1.7, color: "#404040" }}>
                It&apos;s tested in every PM interview at Facebook, Google, Uber, and Amazon. Candidates who can walk through RCA fluently signal senior-level thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step navigator */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
          {STEPS.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                padding: "24px 16px",
                background: activeStep === i ? "#000" : "#fff",
                border: "none",
                borderRight: i < STEPS.length - 1 ? "2px solid #000" : "none",
                borderTop: activeStep === i ? "4px solid #E63323" : "4px solid transparent",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                textAlign: "left",
                transition: "background 0.2s",
              }}
            >
              <div style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "36px", letterSpacing: "-1px", lineHeight: 1, color: activeStep === i ? "#fff" : "#E5E5E5", transition: "color 0.2s" }}>
                {step.number}
              </div>
              <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "7px", fontWeight: 700, letterSpacing: "0.1em", color: activeStep === i ? "#525252" : "#A3A3A3", transition: "color 0.2s", lineHeight: 1.4 }}>
                {step.title.split(" ").slice(0, 2).join(" ")}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Active step */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid" }} className="lg:grid-cols-[1fr_1fr]">
          <div style={{ padding: "64px 40px", borderRight: "2px solid #000" }}>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "8px", fontWeight: 700, letterSpacing: "0.15em", color: "#E63323", marginBottom: "12px" }}>
              STEP {activeStep + 1} OF 6
            </div>
            <h2 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-1px", lineHeight: 1, color: "#000", marginBottom: "24px" }}>
              {STEPS[activeStep].title}
            </h2>
            <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "15px", lineHeight: 1.7, color: "#404040" }}>
              {STEPS[activeStep].description}
            </p>
          </div>
          <div style={{ padding: "64px 40px", background: "#F5F5F5" }}>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: "#A3A3A3", marginBottom: "24px" }}>
              KEY QUESTIONS TO ASK
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {STEPS[activeStep].questions.map((q, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "16px", background: "#fff", border: "1px solid #E5E5E5" }}>
                  <div style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "16px", color: "#E63323", flexShrink: 0, lineHeight: 1, marginTop: "2px" }}>Q</div>
                  <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "13px", lineHeight: 1.6, color: "#000" }}>{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All steps list */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "64px 40px" }}>
          <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#E63323", marginBottom: "32px" }}>
            THE FULL PROCESS AT A GLANCE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: "grid", gap: "24px", padding: "24px 0", borderBottom: i < STEPS.length - 1 ? "1px solid #E5E5E5" : "none" }} className="md:grid-cols-[80px_1fr]">
                <div style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "24px", letterSpacing: "-0.5px", color: "#D4D4D4" }}>{step.number}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "18px", color: "#000", marginBottom: "4px" }}>{step.title}</div>
                  <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "13px", lineHeight: 1.6, color: "#737373" }}>{step.description.split(".")[0]}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "72px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#404040", marginBottom: "12px" }}>PRACTICE THIS IN ZEVI</div>
            <h2 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-1px", lineHeight: 0.95, color: "#fff" }}>
              12 RCA SCENARIOS.
              <br />
              AI FEEDBACK ON EACH.
            </h2>
          </div>
          <a
            href="/#pricing"
            style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#000", background: "#fff", padding: "16px 40px", border: "2px solid #fff", display: "inline-flex", alignItems: "center", gap: "10px", transition: "background 0.15s, border-color 0.15s, color 0.15s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#E63323"; (e.currentTarget as HTMLElement).style.borderColor = "#E63323"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.color = "#000"; }}
          >
            DOWNLOAD ZEVI FREE ↗
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
