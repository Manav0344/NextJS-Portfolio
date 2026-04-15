"use client";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Coffee } from "lucide-react";
import { personalInfo, skillHighlights } from "@/data";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

export default function AboutPreview() {
  return (
    <section className="py-24" style={{ background: "var(--bg-muted)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div data-aos="fade-right">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                color: "var(--accent)",
                fontFamily: "var(--font-display)",
              }}
            >
              About Me
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Crafting digital products with purpose.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 mt-6 mb-8">
              {[
                { icon: MapPin, text: personalInfo.location },
                { icon: Calendar, text: "5+ years experience" },
                { icon: Coffee, text: "Coffee-powered" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Icon size={14} style={{ color: "var(--accent)" }} />
                  {text}
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-sm group"
              style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
            >
              Read Full Story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="100">
            {skillHighlights.map(({ icon, label, desc }, i) => {
              const Icon = (LucideIcons as Record<string, unknown>)[icon] as React.ElementType;
              return (
                <div
                  key={label}
                  className="p-5 rounded-2xl card-hover"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
                  >
                    {Icon && <Icon size={20} style={{ color: "var(--accent)" }} />}
                  </div>
                  <h3
                    className="font-bold text-sm mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
