import PageLayout from "@/components/PageLayout";

const SECTIONS = [
  {
    title: "ACCEPTANCE OF TERMS",
    content: [
      { subtitle: "Agreement", body: "By downloading, installing, or using the Zevi mobile application or website (collectively, the 'Service'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, do not use the Service." },
      { subtitle: "Updates", body: "Zevi reserves the right to modify these Terms at any time. We will notify you of material changes via email or in-app notification at least 14 days before the change takes effect. Continued use of the Service after changes constitutes acceptance." },
      { subtitle: "Age Requirement", body: "You must be at least 13 years old to use Zevi. If you are under 18, you represent that you have your parent or guardian's permission to use the Service." },
    ],
  },
  {
    title: "YOUR ACCOUNT",
    content: [
      { subtitle: "Account Creation", body: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account." },
      { subtitle: "Account Security", body: "You must notify us immediately at support@zevi.app if you suspect unauthorized access to your account. Zevi is not liable for any loss or damage resulting from your failure to maintain account security." },
      { subtitle: "One Account Per User", body: "You may not create multiple accounts to circumvent feature limitations, gain unfair advantages on leaderboards, or abuse free trials. Accounts found in violation may be suspended or terminated." },
    ],
  },
  {
    title: "SUBSCRIPTION & PAYMENT",
    content: [
      { subtitle: "Free Tier", body: "Zevi offers a free tier with access to 3 frameworks, LEARN and DRILL lesson types, and limited AI feedback. The free tier is provided without charge and may be changed or discontinued at any time with 30 days' notice." },
      { subtitle: "Pro Subscription", body: "Pro subscriptions are billed monthly or annually at the rates listed in the app. All prices are in USD unless otherwise stated. Prices may change with 30 days' notice." },
      { subtitle: "Free Trial", body: "Pro subscriptions include a 7-day free trial for new subscribers. Your payment method will be charged at the end of the trial unless you cancel before the trial ends." },
      { subtitle: "Cancellation & Refunds", body: "You may cancel your Pro subscription at any time. Cancellation takes effect at the end of the current billing period. Zevi does not provide refunds for partial subscription periods except where required by applicable law." },
      { subtitle: "Payment Processing", body: "Payments are processed by Stripe. By providing payment information, you authorize Stripe to charge your payment method according to your subscription plan." },
    ],
  },
  {
    title: "ACCEPTABLE USE",
    content: [
      { subtitle: "Permitted Use", body: "Zevi grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal, non-commercial PM interview preparation." },
      { subtitle: "Prohibited Conduct", body: "You may not: (a) reverse engineer, decompile, or disassemble the Service; (b) use the Service to train competing AI models; (c) scrape, crawl, or extract data from the Service using automated means; (d) resell or sublicense access to the Service; (e) use the Service in any way that violates applicable law." },
      { subtitle: "Content Standards", body: "If you submit practice responses, feedback, or other content via the Service, you represent that your content does not violate any law, infringe any third-party rights, or contain harmful, offensive, or misleading information." },
    ],
  },
  {
    title: "INTELLECTUAL PROPERTY",
    content: [
      { subtitle: "Our Content", body: "All framework content, questions, AI feedback logic, software, design, and other materials in the Service are owned by Zevi or its licensors and are protected by copyright, trademark, and other intellectual property laws." },
      { subtitle: "Your Content", body: "You retain ownership of any practice responses or content you submit. By submitting content, you grant Zevi a non-exclusive, worldwide, royalty-free license to use, process, and analyze your content to provide and improve the Service." },
      { subtitle: "Feedback", body: "Any feedback, suggestions, or ideas you provide about the Service may be used by Zevi without restriction or compensation to you." },
    ],
  },
  {
    title: "DISCLAIMER & LIMITATION OF LIABILITY",
    content: [
      { subtitle: "No Guarantee of Results", body: "Zevi provides a practice and preparation tool. We do not guarantee that use of the Service will result in passing any particular interview or obtaining employment. Interview outcomes depend on many factors outside our control." },
      { subtitle: "Service Provided As-Is", body: "THE SERVICE IS PROVIDED 'AS IS' WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, ZEVI DISCLAIMS ALL WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT." },
      { subtitle: "Limitation of Liability", body: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZEVI'S TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO ZEVI IN THE 12 MONTHS PRECEDING THE CLAIM." },
    ],
  },
  {
    title: "TERMINATION",
    content: [
      { subtitle: "By You", body: "You may stop using the Service at any time and delete your account via Settings → Account → Delete Account." },
      { subtitle: "By Zevi", body: "We may suspend or terminate your account if you violate these Terms, engage in fraud, or if we discontinue the Service. We will provide reasonable notice where possible." },
      { subtitle: "Effect of Termination", body: "Upon termination, your license to use the Service ends. Sections relating to intellectual property, disclaimer, limitation of liability, and governing law survive termination." },
    ],
  },
  {
    title: "GOVERNING LAW",
    content: [
      { subtitle: "Jurisdiction", body: "These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in Delaware." },
      { subtitle: "Contact", body: "For legal questions or notices, contact us at legal@zevi.app." },
    ],
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "72px 40px 64px" }}>
          <a href="/" style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", color: "#737373", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            ← BACK TO HOME
          </a>
          <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#E63323", marginBottom: "16px" }}>
            LEGAL / TERMS OF SERVICE
          </div>
          <h1 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(48px, 7vw, 96px)", letterSpacing: "-2px", lineHeight: 0.9, color: "#000", marginBottom: "24px" }}>
            TERMS OF
            <br />
            SERVICE.
          </h1>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#737373", letterSpacing: "0.1em" }}>LAST UPDATED: FEBRUARY 2026</div>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#737373", letterSpacing: "0.1em" }}>EFFECTIVE: FEBRUARY 1, 2026</div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ borderBottom: "2px solid #E5E5E5" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
          <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "16px", lineHeight: 1.8, color: "#404040" }}>
            These Terms of Service govern your use of the Zevi application and related services. Please read them carefully. By using Zevi, you enter into a binding legal agreement with Zevi Inc. We&apos;ve written these terms in plain language wherever possible — if something is unclear, email us at legal@zevi.app.
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
