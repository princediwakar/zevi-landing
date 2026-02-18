import PageLayout from "@/components/PageLayout";

const COOKIE_TYPES = [
  {
    type: "STRICTLY NECESSARY",
    tag: "CANNOT BE DISABLED",
    tagColor: "#000",
    description: "These cookies are essential for the Zevi app to function. They enable core features like authentication, session management, and security. The app cannot function without these cookies.",
    examples: [
      { name: "session_token", purpose: "Keeps you logged in during your session", duration: "Session" },
      { name: "csrf_token", purpose: "Prevents cross-site request forgery attacks", duration: "Session" },
      { name: "device_id", purpose: "Identifies your device for security purposes", duration: "1 year" },
    ],
  },
  {
    type: "FUNCTIONAL",
    tag: "OPTIONAL",
    tagColor: "#737373",
    description: "These cookies enable enhanced functionality and personalization. They remember your preferences so you don't have to re-configure the app on each visit.",
    examples: [
      { name: "theme_pref", purpose: "Remembers your dark/light mode preference", duration: "1 year" },
      { name: "onboarding_state", purpose: "Tracks which onboarding steps you've completed", duration: "30 days" },
      { name: "streak_timezone", purpose: "Maintains streak accuracy across timezone changes", duration: "1 year" },
    ],
  },
  {
    type: "ANALYTICS",
    tag: "OPTIONAL",
    tagColor: "#737373",
    description: "These cookies help us understand how users interact with Zevi. We use this data to improve the product — identifying which frameworks are most practiced, where users drop off, and which features drive the most value.",
    examples: [
      { name: "_mp_session", purpose: "Mixpanel session tracking for product analytics", duration: "30 minutes" },
      { name: "_mp_id", purpose: "Mixpanel user identification (anonymized)", duration: "1 year" },
      { name: "perf_log", purpose: "Performance timing data for app optimization", duration: "7 days" },
    ],
  },
  {
    type: "MARKETING",
    tag: "OPTIONAL",
    tagColor: "#737373",
    description: "Zevi does not use marketing or advertising cookies. We do not track users across third-party websites or serve targeted advertisements. If this ever changes, we will update this policy and obtain your explicit consent.",
    examples: [],
  },
];

const SECTIONS = [
  {
    title: "WHAT ARE COOKIES?",
    body: "Cookies are small text files stored on your device by your browser when you visit a website or use a web-based app. They help the app remember information about your visit — like your login state, preferences, and usage patterns — so you don't have to re-enter the same information every time.",
  },
  {
    title: "HOW WE USE COOKIES",
    body: "Zevi uses cookies for three purposes: to keep you securely logged in (strictly necessary), to remember your preferences (functional), and to analyze how the app is used so we can improve it (analytics). We do not use cookies for advertising or tracking across third-party websites.",
  },
  {
    title: "YOUR CHOICES",
    body: "You can control cookies through your browser settings or, for functional and analytics cookies, through the Zevi app settings under Privacy. Note that disabling strictly necessary cookies will prevent the app from functioning. You can also clear all cookies from the Zevi app by logging out — this resets your session and preference data.",
  },
  {
    title: "THIRD-PARTY COOKIES",
    body: "Our analytics provider (Mixpanel) sets cookies on our behalf. These cookies are subject to Mixpanel's own privacy policy. We have configured Mixpanel to anonymize user identifiers and to respect browser Do Not Track signals where supported.",
  },
  {
    title: "UPDATES TO THIS POLICY",
    body: "We may update this Cookie Policy to reflect changes in our practices or for legal reasons. We will post the updated policy with a new effective date. For material changes, we will provide in-app notification.",
  },
];

export default function CookiesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "72px 40px 64px" }}>
          <a href="/" style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", color: "#737373", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            ← BACK TO HOME
          </a>
          <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#E63323", marginBottom: "16px" }}>
            LEGAL / COOKIE POLICY
          </div>
          <h1 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(48px, 7vw, 96px)", letterSpacing: "-2px", lineHeight: 0.9, color: "#000", marginBottom: "24px" }}>
            COOKIE
            <br />
            POLICY.
          </h1>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#737373", letterSpacing: "0.1em" }}>LAST UPDATED: FEBRUARY 2026</div>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#737373", letterSpacing: "0.1em" }}>EFFECTIVE: FEBRUARY 1, 2026</div>
          </div>
        </div>
      </section>

      {/* Overview sections */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "56px 40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {SECTIONS.map((section, i) => (
              <div key={i}>
                <h2 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "22px", letterSpacing: "-0.3px", color: "#000", marginBottom: "12px", display: "flex", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", color: "#E63323", flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "15px", lineHeight: 1.75, color: "#525252" }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie types table */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "72px 40px" }}>
          <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#E63323", marginBottom: "16px" }}>
            COOKIE INVENTORY
          </div>
          <h2 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-1px", lineHeight: 0.95, color: "#000", marginBottom: "48px" }}>
            ALL COOKIES
            <br />
            WE USE.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0", border: "2px solid #000" }}>
            {COOKIE_TYPES.map((ct, i) => (
              <div key={ct.type} style={{ borderBottom: i < COOKIE_TYPES.length - 1 ? "2px solid #000" : "none" }}>
                {/* Type header */}
                <div style={{ padding: "32px 40px", background: "#F5F5F5", borderBottom: "1px solid #E5E5E5", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  <div style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "22px", letterSpacing: "-0.3px", color: "#000" }}>
                    {ct.type}
                  </div>
                  <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "8px", fontWeight: 700, letterSpacing: "0.15em", color: "#fff", background: ct.tagColor, padding: "4px 10px" }}>
                    {ct.tag}
                  </div>
                </div>

                {/* Description + examples */}
                <div style={{ padding: "32px 40px", display: "grid", gap: "32px" }} className="lg:grid-cols-[1fr_1fr]">
                  <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "14px", lineHeight: 1.7, color: "#525252" }}>
                    {ct.description}
                  </p>

                  {ct.examples.length > 0 ? (
                    <div>
                      <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "8px", fontWeight: 700, letterSpacing: "0.15em", color: "#A3A3A3", marginBottom: "16px" }}>
                        SPECIFIC COOKIES
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {ct.examples.map((ex, j) => (
                          <div key={j} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "16px", padding: "12px 16px", background: "#F5F5F5", borderLeft: "3px solid #E5E5E5" }}>
                            <div>
                              <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "10px", fontWeight: 600, color: "#000", marginBottom: "2px" }}>{ex.name}</div>
                              <div style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "11px", lineHeight: 1.5, color: "#737373" }}>{ex.purpose}</div>
                            </div>
                            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#A3A3A3", letterSpacing: "0.08em", alignSelf: "center" }}>
                              {ex.duration}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F5F5", border: "1px solid #E5E5E5" }}>
                      <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", color: "#A3A3A3", padding: "32px" }}>
                        NO COOKIES OF THIS TYPE USED
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ background: "#000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "64px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#404040", marginBottom: "12px" }}>QUESTIONS?</div>
            <h2 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-1px", lineHeight: 0.95, color: "#fff" }}>
              CONTACT OUR
              <br />
              PRIVACY TEAM.
            </h2>
          </div>
          <a
            href="mailto:privacy@zevi.app"
            style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#000", background: "#fff", padding: "16px 36px", border: "2px solid #fff", display: "inline-flex", alignItems: "center", gap: "8px", transition: "background 0.15s, border-color 0.15s, color 0.15s" }}
          >
            PRIVACY@ZEVI.APP ↗
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
