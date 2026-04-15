"use client";
import { Star } from "lucide-react";
import { testimonials } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  return (
    <section className="py-24" style={{ background: "var(--bg-muted)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div data-aos="fade-up">
          <SectionHeader
            tag="Testimonials"
            title="What clients say"
            subtitle="Don't take my word for it — hear from the people I've worked with."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Quote mark */}
              <div
                className="absolute top-4 right-6 text-6xl font-black opacity-10 select-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="var(--accent)" style={{ color: "var(--accent)" }} />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "var(--accent)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
