"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { navLinks } from "@/data";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 85%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ background: "var(--accent)" }}
          >
            <Code2 size={16} color="white" strokeWidth={2.5} />
          </div>
          <span
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Alex<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: active ? "var(--accent)" : "var(--text-muted)",
                    background: active ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent",
                    fontFamily: "var(--font-display)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.target as HTMLElement).style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.target as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "var(--bg-muted)", color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
          >
            Hire Me
          </Link>

          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--bg-muted)", color: "var(--text)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "400px" : "0",
          borderTop: open ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-2" style={{ background: "var(--bg)" }}>
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: active ? "var(--accent)" : "var(--text)",
                  background: active ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "var(--bg-muted)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="px-4 py-3 rounded-lg text-sm font-semibold text-white text-center mt-2"
            style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
