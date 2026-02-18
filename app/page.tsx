import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Zevi",
      applicationCategory: "EducationalApplication",
      operatingSystem: "iOS, Android",
      url: "https://usezevi.com",
      description:
        "The mobile-native PM interview prep app. Framework mastery + pattern recognition + AI feedback. Think Duolingo × PM coaching.",
      offers: [
        {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          name: "Free Tier",
          description: "3 frameworks, LEARN + DRILL lessons, limited AI feedback",
        },
        {
          "@type": "Offer",
          price: "12",
          priceCurrency: "USD",
          name: "Pro Tier",
          description: "All 50+ frameworks, unlimited AI feedback, voice practice",
          billingIncrement: "P1M",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "12000",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "50+ PM frameworks",
        "AI-powered feedback on every answer",
        "Voice practice with transcription",
        "AARRR, CIRCLES, Jobs-to-be-Done, Root Cause Analysis",
        "Daily streaks and XP system",
        "Interview readiness score",
        "5 lesson types: Learn, Drill, Pattern, Practice, Quiz",
      ],
      screenshot: "https://usezevi.com/opengraph-image",
      softwareVersion: "2.4.0",
      datePublished: "2025-08-01",
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      name: "Zevi",
      url: "https://usezevi.com",
      logo: {
        "@type": "ImageObject",
        url: "https://usezevi.com/opengraph-image",
        width: 1200,
        height: 630,
      },
      description:
        "Zevi is the mobile-native PM interview prep app. Built by ex-PMs from Stripe, Google, and McKinsey.",
      foundingDate: "2025-08",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@zevi.app",
        },
        {
          "@type": "ContactPoint",
          contactType: "press",
          email: "press@zevi.app",
        },
      ],
      sameAs: [
        "https://www.producthunt.com/posts/zevi",
        "https://news.ycombinator.com/item?id=zevi",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Zevi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zevi is a mobile-native PM interview prep app that combines framework mastery, pattern recognition, and AI feedback. It's available free on iOS and Android.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Zevi cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zevi is free to download with 3 frameworks and basic AI feedback. The Pro tier costs $12/month (or $8/month billed annually) and includes all 50+ frameworks, unlimited AI feedback, and voice practice. A 7-day free trial is available.",
          },
        },
        {
          "@type": "Question",
          name: "What PM frameworks does Zevi cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zevi covers 50+ PM frameworks including AARRR (Pirate Metrics), CIRCLES design method, Jobs-to-be-Done, Root Cause Analysis, and many more organized by interview type: Product Sense, Execution, Strategy, Behavioral, and Estimation.",
          },
        },
        {
          "@type": "Question",
          name: "How does Zevi's AI feedback work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zevi's AI analyzes not just your answer but how you applied the framework — checking your logic flow, structure depth, and tradeoff reasoning at each step. It's not just grading; it's coaching. You can practice by typing bullet outlines or via voice input.",
          },
        },
        {
          "@type": "Question",
          name: "Is Zevi available on iOS and Android?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Zevi is available on both the App Store (iOS) and Google Play (Android). It is built mobile-native, optimized for 5–15 minute daily practice sessions.",
          },
        },
        {
          "@type": "Question",
          name: "What is the PM interview pass rate for Zevi users?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "94% of Zevi Pro users who tracked their daily practice passed their target PM interview round. Zevi has 12,000+ active learners since launching in August 2025.",
          },
        },
        {
          "@type": "Question",
          name: "How is Zevi different from other PM interview prep resources?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most PM prep tools test whether you know the answer. Zevi tests whether you can apply the framework correctly under pressure. The AI analyzes your structure, logic, and reasoning step-by-step — not just the final output. It's the difference between memorization and mastery.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      name: "Zevi",
      url: "https://usezevi.com",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://usezevi.com/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Nav />
        <Hero />
        <Ticker />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
