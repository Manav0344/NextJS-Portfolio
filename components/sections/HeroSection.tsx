"use client";
import Link from "next/link";
import { ArrowRight, GitFork, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/data";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "UI Engineer",
  "React Specialist",
  "Open Source Contributor",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 float"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: "var(--accent-2)", animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-4xl">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 fade-in-up"
            style={{
              background: "color-mix(in srgb, var(--accent) 12%, transparent)",
              color: "var(--accent)",
              border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
              fontFamily: "var(--font-display)",
              animationDelay: "0.1s",
            }}
          >
            <Sparkles size={14} />
            Available for new projects
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text)",
            }}
          >
            <span className="block fade-in-up" style={{ animationDelay: "0.2s" }}>
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>.
            </span>
            <span
              className="block text-3xl md:text-4xl lg:text-5xl mt-2 fade-in-up"
              style={{
                color: "var(--text-muted)",
                fontWeight: 400,
                animationDelay: "0.35s",
              }}
            >
              <span style={{ color: "var(--text)" }}>{displayed}</span>
              <span className="cursor" style={{ color: "var(--accent)" }}>|</span>
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl fade-in-up"
            style={{ color: "var(--text-muted)", animationDelay: "0.5s" }}
          >
            {personalInfo.tagline} I specialize in{" "}
            <span style={{ color: "var(--text)" }}>React, Next.js</span>, and{" "}
            <span style={{ color: "var(--text)" }}>Node.js</span> — turning complex ideas into
            elegant, production-ready products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 fade-in-up" style={{ animationDelay: "0.65s" }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:gap-3 hover:scale-105"
              style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
            >
              View My Work
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--bg-card)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-display)",
              }}
            >
              Get in Touch
            </Link>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--bg-muted)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              <GitFork size={18} />
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-10 fade-in-up"
            style={{ borderTop: "1px solid var(--border)", animationDelay: "0.8s" }}
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "40+", label: "Projects Shipped" },
              { value: "20+", label: "Happy Clients" },
              { value: "2.1k", label: "GitHub Stars" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {value}
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
