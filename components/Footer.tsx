"use client";

const FOOTER_LINKS = {
  PRODUCT: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  FRAMEWORKS: [
    { label: "AARRR", href: "#" },
    { label: "Jobs-to-be-Done", href: "#" },
    { label: "CIRCLES", href: "#" },
    { label: "Root Cause Analysis", href: "#" },
  ],
  COMPANY: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  LEGAL: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
      }}
    >
      {/* Big CTA banner */}
      <div
        style={{
          borderBottom: "2px solid #171717",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "80px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 96px)",
              letterSpacing: "-2px",
              lineHeight: 0.9,
              color: "#fff",
            }}
          >
            READY TO
            <br />
            <span style={{ color: "#E63323" }}>CRACK</span>
            <br />
            YOUR ROUND?
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "flex-start",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#000",
                background: "#fff",
                padding: "16px 40px",
                border: "2px solid #fff",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E63323";
                (e.currentTarget as HTMLElement).style.borderColor = "#E63323";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = "#fff";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
            >
              DOWNLOAD FOR FREE
              <span style={{ fontSize: "16px" }}>↗</span>
            </a>
            <p
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "9px",
                color: "#404040",
                letterSpacing: "0.1em",
              }}
            >
              AVAILABLE ON iOS AND ANDROID
            </p>
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "56px 40px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px",
          borderBottom: "2px solid #171717",
        }}
        className="grid-cols-2 md:grid-cols-4"
      >
        {Object.entries(FOOTER_LINKS).map(([category, links]) => (
          <div key={category}>
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "8px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#404040",
                marginBottom: "20px",
              }}
            >
              {category}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "13px",
                    color: "#525252",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#525252")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 900,
            fontSize: "22px",
            letterSpacing: "-0.5px",
            color: "#262626",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          ZEVI
          <span
            style={{
              display: "inline-block",
              width: "5px",
              height: "5px",
              background: "#E63323",
              marginBottom: "2px",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "9px",
            color: "#404040",
            letterSpacing: "0.08em",
          }}
        >
          © {new Date().getFullYear()} ZEVI. ALL RIGHTS RESERVED.
        </p>

        <div
          style={{
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "9px",
            color: "#262626",
            letterSpacing: "0.08em",
          }}
        >
          DESIGNED IN SWISS STYLE.
        </div>
      </div>
    </footer>
  );
}
