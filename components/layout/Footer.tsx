"use client";
import Link from "next/link";
import { GitFork, Link2, AtSign, Globe, Code2, Mail, ArrowUpRight } from "lucide-react";
import { personalInfo, navLinks } from "@/data";

const socials = [
  { icon: GitFork, href: personalInfo.github, label: "GitHub" },
  { icon: Link2, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: AtSign, href: personalInfo.twitter, label: "Twitter" },
  { icon: Globe, href: personalInfo.dribbble, label: "Dribbble" },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-muted)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent)" }}
              >
                <Code2 size={18} color="white" strokeWidth={2.5} />
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Alex<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Full-stack developer crafting fast, beautiful, and scalable web experiences.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "var(--bg-card)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm link-underline inline-block transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
            >
              Get in Touch
            </h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm mb-3 group w-fit"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              <Mail size={14} />
              {personalInfo.email}
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "color-mix(in srgb, #22c55e 15%, transparent)",
                color: "#22c55e",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-glow" />
              {personalInfo.availability}
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          <p>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
          <p>
            Built with{" "}
            <span style={{ color: "var(--accent)" }}>Next.js</span> ·{" "}
            <span style={{ color: "var(--accent)" }}>Tailwind CSS</span> ·{" "}
            <span style={{ color: "var(--accent)" }}>TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
