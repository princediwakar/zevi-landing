"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "FEATURES", href: "/#features" },
    { label: "HOW IT WORKS", href: "/#how-it-works" },
    { label: "PRICING", href: "/#pricing" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "#fff",
        borderBottom: scrolled ? "2px solid #000" : "2px solid transparent",
        transition: "border-color 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 900,
            fontSize: "26px",
            letterSpacing: "-0.5px",
            color: "#000",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          ZEVI
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              background: "#E63323",
              marginBottom: "2px",
            }}
          />
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#000",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#E63323")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#000")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/#pricing"
          style={{
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#fff",
            background: "#000",
            padding: "10px 22px",
            border: "2px solid #000",
            transition: "background 0.15s, color 0.15s",
            cursor: "pointer",
          }}
          className="hidden md:inline-flex items-center"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#E63323";
            (e.currentTarget as HTMLElement).style.borderColor = "#E63323";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#000";
            (e.currentTarget as HTMLElement).style.borderColor = "#000";
          }}
        >
          GET EARLY ACCESS
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: "24px",
              height: "2px",
              background: "#000",
              marginBottom: menuOpen ? "0" : "5px",
              transition: "all 0.2s",
              transform: menuOpen ? "rotate(45deg) translateY(3.5px)" : "none",
            }}
          />
          <div
            style={{
              width: "24px",
              height: "2px",
              background: "#000",
              transform: menuOpen ? "rotate(-45deg) translateY(-3.5px)" : "none",
              transition: "all 0.2s",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "2px solid #000",
            padding: "24px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#000",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#pricing"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#fff",
              background: "#000",
              padding: "12px 24px",
              border: "2px solid #000",
              textAlign: "center",
              marginTop: "4px",
            }}
          >
            GET EARLY ACCESS
          </a>
        </div>
      )}
    </nav>
  );
}
