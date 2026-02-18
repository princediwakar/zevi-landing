import PageLayout from "@/components/PageLayout";

const SECTIONS = [
  {
    title: "INFORMATION WE COLLECT",
    content: [
      { subtitle: "Account Data", body: "When you create a Zevi account, we collect your email address, display name, and password (stored as a salted hash). If you sign in via Apple or Google, we receive a unique identifier and email address from that provider." },
      { subtitle: "Usage Data", body: "We collect data about how you interact with Zevi — which frameworks you practice, your session lengths, quiz scores, XP earned, and streak history. This data powers your personalized readiness score and weak-spot analysis." },
      { subtitle: "Voice Data", body: "If you use voice practice mode, your audio is transmitted to our AI service for transcription and analysis. Audio recordings are not stored after processing. Only the resulting transcript and feedback scores are retained." },
      { subtitle: "Device & Technical Data", body: "We collect your device type, operating system version, app version, IP address, and crash logs. This is used for debugging, performance monitoring, and fraud prevention." },
    ],
  },
  {
    title: "HOW WE USE YOUR INFORMATION",
    content: [
      { subtitle: "Core Service", body: "We use your data to provide the Zevi app: deliver framework content, process your practice responses, generate AI feedback, track your progress, and maintain your streak." },
      { subtitle: "Product Improvement", body: "We analyze aggregate, anonymized usage patterns to improve our framework content, AI feedback quality, and app performance. No individual usage data is sold or shared for this purpose." },
      { subtitle: "Communications", body: "We may send you push notifications (if enabled) for daily practice reminders and app updates. We send transactional emails for account changes, password resets, and subscription receipts. You can opt out of marketing emails at any time." },
      { subtitle: "Legal & Safety", body: "We may use your data to comply with legal obligations, enforce our Terms of Service, and protect the safety of our users and platform." },
    ],
  },
  {
    title: "DATA SHARING",
    content: [
      { subtitle: "We Do Not Sell Your Data", body: "Zevi does not sell, rent, or trade your personal information to third parties for their marketing purposes. Full stop." },
      { subtitle: "Service Providers", body: "We share data with trusted service providers who operate under strict data processing agreements: our AI feedback provider (OpenAI), cloud infrastructure (AWS), payment processor (Stripe), and analytics platform (Mixpanel). Each provider is contractually limited to using your data only to provide their service to us." },
      { subtitle: "Legal Requirements", body: "We may disclose your information if required by law, court order, or government request, or if we believe disclosure is necessary to protect the rights, property, or safety of Zevi, our users, or the public." },
    ],
  },
  {
    title: "DATA RETENTION",
    content: [
      { subtitle: "Active Accounts", body: "We retain your account data and usage history for as long as your account is active or as needed to provide you with services." },
      { subtitle: "Account Deletion", body: "If you delete your Zevi account, we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal compliance (e.g., financial records)." },
      { subtitle: "Backup Retention", body: "Encrypted backup copies may persist for up to 90 days after deletion as part of our disaster recovery systems." },
    ],
  },
  {
    title: "YOUR RIGHTS",
    content: [
      { subtitle: "Access & Portability", body: "You may request a copy of all personal data we hold about you at any time by emailing privacy@zevi.app. We will respond within 30 days." },
      { subtitle: "Correction", body: "You can update your display name and email directly in the Zevi app settings. For other corrections, contact privacy@zevi.app." },
      { subtitle: "Deletion", body: "You may delete your account at any time via Settings → Account → Delete Account. See Data Retention above for what happens after deletion." },
      { subtitle: "GDPR & CCPA", body: "If you are in the EU or California, you have additional rights under GDPR and CCPA respectively, including the right to object to processing, restrict processing, and lodge a complaint with your local supervisory authority." },
    ],
  },
  {
    title: "SECURITY",
    content: [
      { subtitle: "Encryption", body: "All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256. Passwords are hashed using bcrypt with a per-user salt." },
      { subtitle: "Access Controls", body: "Access to user data within Zevi is role-based and limited to employees who need it to perform their job. All access is logged and audited quarterly." },
      { subtitle: "Incident Response", body: "In the event of a data breach affecting your personal information, we will notify you within 72 hours as required by GDPR, and follow applicable breach notification laws in other jurisdictions." },
    ],
  },
  {
    title: "CONTACT",
    content: [
      { subtitle: "Privacy Officer", body: "For privacy-related questions, requests, or complaints, contact us at privacy@zevi.app. We will respond within 30 days. Our mailing address is available upon request." },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "72px 40px 64px" }}>
          <a href="/" style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", color: "#737373", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            ← BACK TO HOME
          </a>
          <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#E63323", marginBottom: "16px" }}>
            LEGAL / PRIVACY POLICY
          </div>
          <h1 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(48px, 7vw, 96px)", letterSpacing: "-2px", lineHeight: 0.9, color: "#000", marginBottom: "24px" }}>
            PRIVACY
            <br />
            POLICY.
          </h1>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#737373", letterSpacing: "0.1em" }}>
              LAST UPDATED: FEBRUARY 2026
            </div>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#737373", letterSpacing: "0.1em" }}>
              EFFECTIVE: FEBRUARY 1, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ borderBottom: "2px solid #E5E5E5" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
          <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "16px", lineHeight: 1.8, color: "#404040" }}>
            Zevi (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains what information we collect, why we collect it, how we use it, and your rights regarding your data. By using the Zevi app or website, you agree to the practices described in this policy.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 40px 80px" }}>
          {SECTIONS.map((section, i) => (
            <div key={i} style={{ paddingTop: "56px", borderTop: i > 0 ? "2px solid #E5E5E5" : "none", marginTop: i > 0 ? "56px" : "0" }}>
              <h2 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "28px", letterSpacing: "-0.5px", color: "#000", marginBottom: "32px", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: "#E63323", flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {section.content.map((item, j) => (
                  <div key={j}>
                    <h3 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "16px", color: "#000", marginBottom: "8px" }}>
                      {item.subtitle}
                    </h3>
                    <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "15px", lineHeight: 1.75, color: "#525252" }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
