"use client";

import PageLayout from "@/components/PageLayout";
import type { BlogPost } from "@/lib/blog-posts";

export default function BlogPostClient({
  post,
  otherPosts,
}: {
  post: BlogPost;
  otherPosts: BlogPost[];
}) {
  return (
    <PageLayout>
      {/* Hero */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "72px 40px 64px" }}>
          <a
            href="/blog"
            style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", color: "#737373", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px", transition: "color 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#000")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#737373")}
          >
            ← ALL POSTS
          </a>
          <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#E63323", marginBottom: "16px" }}>
            {post.category}
          </div>
          <h1 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "-2px", lineHeight: 0.92, color: "#000", marginBottom: "32px", maxWidth: "900px" }}>
            {post.title.toUpperCase()}
          </h1>
          <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", color: "#737373" }}>{post.date}</span>
            <span style={{ width: "3px", height: "3px", background: "#E63323", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#737373", letterSpacing: "0.12em" }}>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Lead */}
      <section style={{ borderBottom: "4px solid #000", background: "#F5F5F5" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 40px" }}>
          <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "18px", lineHeight: 1.75, color: "#404040", fontWeight: 500 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(22px, 2.5vw, 30px)", letterSpacing: "-0.5px", color: "#000", marginBottom: "16px", lineHeight: 1.05, display: "flex", gap: "16px", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: "#E63323", flexShrink: 0 }}>
                      {String(i).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                )}
                <p style={{ fontFamily: "var(--font-ibm-plex)", fontSize: "16px", lineHeight: 1.8, color: "#404040" }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section style={{ borderBottom: "4px solid #000" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "64px 40px" }}>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#E63323", marginBottom: "32px" }}>
              KEEP READING
            </div>
            <div style={{ display: "grid", gap: "0", border: "2px solid #000" }} className="md:grid-cols-3">
              {otherPosts.map((p, i) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  style={{ padding: "32px", borderRight: i < otherPosts.length - 1 ? "2px solid #000" : "none", display: "flex", flexDirection: "column", gap: "12px", transition: "background 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#F5F5F5")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#fff")}
                >
                  <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "8px", fontWeight: 700, letterSpacing: "0.15em", color: "#E63323" }}>{p.category}</div>
                  <h3 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "18px", letterSpacing: "-0.3px", lineHeight: 1.1, color: "#000" }}>{p.title}</h3>
                  <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", color: "#A3A3A3", letterSpacing: "0.08em", marginTop: "auto" }}>{p.readTime}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "#000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "64px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#404040", marginBottom: "12px" }}>PRACTICE IN ZEVI</div>
            <h2 style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-1px", lineHeight: 0.95, color: "#fff" }}>
              READING ISN&apos;T ENOUGH.
              <br />
              START PRACTICING.
            </h2>
          </div>
          <a
            href="/#pricing"
            style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#000", background: "#fff", padding: "16px 40px", border: "2px solid #fff", display: "inline-flex", alignItems: "center", gap: "10px", transition: "background 0.15s, border-color 0.15s, color 0.15s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#E63323"; (e.currentTarget as HTMLElement).style.borderColor = "#E63323"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.color = "#000"; }}
          >
            DOWNLOAD FREE ↗
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
