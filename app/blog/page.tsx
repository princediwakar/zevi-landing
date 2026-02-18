"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { BLOG_POSTS } from "@/lib/blog-posts";

const POSTS = BLOG_POSTS;

export default function BlogPage() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <PageLayout>
      {/* Hero */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "72px 40px 64px",
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#737373",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "32px",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#000")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#737373")
            }
          >
            ← BACK TO HOME
          </a>

          <div
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "#E63323",
              marginBottom: "16px",
            }}
          >
            COMPANY / BLOG
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(56px, 8vw, 112px)",
                letterSpacing: "-2px",
                lineHeight: 0.9,
                color: "#000",
              }}
            >
              INSIGHTS
              <br />
              FOR SERIOUS
              <br />
              <span style={{ color: "#E63323" }}>PMs.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex)",
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#525252",
                maxWidth: "360px",
              }}
            >
              Framework guides, interview strategy, and honest analysis from the
              Zevi team. No fluff. No recycled LinkedIn advice.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section style={{ borderBottom: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <a
            href={`/blog/${featured.slug}`}
            style={{
              display: "grid",
              gap: "0",
              cursor: "pointer",
              background: hoveredPost === -1 ? "#000" : "#fff",
              transition: "background 0.2s",
            }}
            className="lg:grid-cols-[1fr_1fr]"
            onMouseEnter={() => setHoveredPost(-1)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            {/* Left - big visual */}
            <div
              style={{
                background: hoveredPost === -1 ? "#E63323" : "#F5F5F5",
                borderRight: "2px solid #000",
                padding: "64px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "360px",
                transition: "background 0.2s",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: hoveredPost === -1 ? "#fff" : "#A3A3A3",
                  transition: "color 0.2s",
                }}
              >
                FEATURED
              </div>
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "clamp(48px, 5vw, 72px)",
                  letterSpacing: "-1.5px",
                  lineHeight: 0.9,
                  color: hoveredPost === -1 ? "#fff" : "#000",
                  transition: "color 0.2s",
                }}
              >
                {featured.category}
              </div>
            </div>

            {/* Right - content */}
            <div
              style={{
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: hoveredPost === -1 ? "#737373" : "#737373",
                  }}
                >
                  {featured.date}
                </span>
                <span
                  style={{
                    width: "3px",
                    height: "3px",
                    background: "#E63323",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "9px",
                    color: hoveredPost === -1 ? "#737373" : "#737373",
                  }}
                >
                  {featured.readTime}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 3vw, 40px)",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.05,
                  color: hoveredPost === -1 ? "#fff" : "#000",
                  transition: "color 0.2s",
                }}
              >
                {featured.title}
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: hoveredPost === -1 ? "#737373" : "#525252",
                  transition: "color 0.2s",
                }}
              >
                {featured.excerpt}
              </p>

              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: hoveredPost === -1 ? "#E63323" : "#000",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "8px",
                  transition: "color 0.2s",
                }}
              >
                READ ARTICLE ↗
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Post Grid */}
      <section>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderBottom: "4px solid #000",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((post, i) => (
            <a
              key={post.title}
              href={`/blog/${post.slug}`}
              style={{
                padding: "40px",
                borderRight:
                  (i + 1) % 3 !== 0 && i < rest.length - 1
                    ? "2px solid #000"
                    : "none",
                borderBottom: i < rest.length - 3 ? "2px solid #000" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                background: hoveredPost === i ? "#000" : "#fff",
                transition: "background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredPost(i)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#E63323",
                }}
              >
                {post.category}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontSize: "22px",
                  letterSpacing: "-0.3px",
                  lineHeight: 1.1,
                  color: hoveredPost === i ? "#fff" : "#000",
                  transition: "color 0.2s",
                }}
              >
                {post.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: hoveredPost === i ? "#737373" : "#525252",
                  transition: "color 0.2s",
                  flexGrow: 1,
                }}
              >
                {post.excerpt}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: `1px solid ${hoveredPost === i ? "#262626" : "#E5E5E5"}`,
                  paddingTop: "16px",
                  marginTop: "auto",
                  transition: "border-color 0.2s",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "9px",
                    color: hoveredPost === i ? "#525252" : "#A3A3A3",
                    letterSpacing: "0.08em",
                    transition: "color 0.2s",
                  }}
                >
                  {post.date}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "9px",
                    fontWeight: 600,
                    color: hoveredPost === i ? "#737373" : "#A3A3A3",
                    letterSpacing: "0.08em",
                    transition: "color 0.2s",
                  }}
                >
                  {post.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ background: "#000", borderTop: "4px solid #000" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "72px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "#404040",
                marginBottom: "12px",
              }}
            >
              NEVER MISS A POST
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontSize: "clamp(36px, 4vw, 56px)",
                letterSpacing: "-1px",
                lineHeight: 0.95,
                color: "#fff",
              }}
            >
              GET THE
              <br />
              NEWSLETTER.
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0",
              border: "2px solid #262626",
            }}
          >
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#fff",
                background: "transparent",
                border: "none",
                outline: "none",
                padding: "16px 24px",
                width: "280px",
              }}
            />
            <button
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#000",
                background: "#fff",
                padding: "16px 28px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E63323";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
              }}
            >
              SUBSCRIBE ↗
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
