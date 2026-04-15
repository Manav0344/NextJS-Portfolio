"use client";
import { tools } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function SkillsHighlight() {
  return (
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div data-aos="fade-up">
          <SectionHeader
            tag="Tech Stack"
            title="Tools I work with"
            subtitle="A curated toolkit built from years of shipping production software."
          />
        </div>

        <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up" data-aos-delay="100">
          {tools.map((tool, i) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
              style={{
                background: "var(--bg-card)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-display)",
                animationDelay: `${i * 30}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
