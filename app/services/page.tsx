"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { services, pricing, processSteps, faqs, tools } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm pr-4" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
          {q}
        </span>
        <ChevronDown
          size={16}
          style={{
            color: "var(--accent)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
          }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "var(--accent)", transform: "translate(-30%, -30%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeader
            tag="Services"
            title="What I can build for you"
            subtitle="From idea to production — I offer end-to-end web development services tailored to your goals and budget."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = (LucideIcons as Record<string, unknown>)[service.icon] as React.ElementType;
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl card-hover group"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                  data-aos="fade-up"
                  data-aos-delay={i * 70}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
                  >
                    {Icon && <Icon size={22} style={{ color: "var(--accent)" }} />}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                        <Check size={12} style={{ color: "var(--accent)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24" style={{ background: "var(--bg-muted)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up">
            <SectionHeader
              tag="Pricing"
              title="Transparent, flexible pricing"
              subtitle="No surprises. Every project starts with a discovery call to scope out exactly what you need."
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div
                key={plan.name}
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{
                  background: plan.highlighted ? "var(--accent)" : "var(--bg-card)",
                  border: plan.highlighted ? "none" : "1px solid var(--border)",
                  transform: plan.highlighted ? "scale(1.03)" : "scale(1)",
                }}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {plan.highlighted && (
                  <div
                    className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: "rgba(255,255,255,0.25)", color: "white", fontFamily: "var(--font-display)" }}
                  >
                    Popular
                  </div>
                )}
                <h3
                  className="text-lg font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: plan.highlighted ? "white" : "var(--text)",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: plan.highlighted ? "rgba(255,255,255,0.7)" : "var(--text-muted)" }}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span
                    className="text-4xl font-black"
                    style={{ fontFamily: "var(--font-display)", color: plan.highlighted ? "white" : "var(--text)" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm ml-1"
                    style={{ color: plan.highlighted ? "rgba(255,255,255,0.6)" : "var(--text-muted)" }}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: plan.highlighted ? "rgba(255,255,255,0.85)" : "var(--text-muted)" }}
                    >
                      <Check
                        size={14}
                        style={{ color: plan.highlighted ? "white" : "var(--accent)", flexShrink: 0 }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center py-3 rounded-xl text-sm font-bold transition-all hover:scale-105"
                  style={{
                    background: plan.highlighted ? "rgba(255,255,255,0.2)" : "var(--bg-muted)",
                    color: plan.highlighted ? "white" : "var(--text)",
                    border: plan.highlighted ? "1px solid rgba(255,255,255,0.3)" : "1px solid var(--border)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up">
            <SectionHeader
              tag="Process"
              title="How we'll work together"
              subtitle="A proven 6-step process that keeps projects on time, on budget, and above expectations."
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                <div
                  className="text-4xl font-black mb-4 opacity-20"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24" style={{ background: "var(--bg-muted)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up">
            <SectionHeader tag="Tools" title="My technology toolkit" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up" data-aos-delay="100">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{ background: "var(--bg-card)", color: "var(--text)", border: "1px solid var(--border)", fontFamily: "var(--font-display)" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div data-aos="fade-up">
            <SectionHeader tag="FAQ" title="Common questions" />
          </div>
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq) => (
              <FAQ key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "var(--bg-muted)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            data-aos="fade-up"
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{ background: `radial-gradient(circle at 50% 50%, var(--accent), transparent 70%)` }}
            />
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Ready to start your project?
            </h2>
            <p className="text-lg mb-8 relative z-10" style={{ color: "var(--text-muted)" }}>
              Book a free 30-minute discovery call and let&apos;s talk about what we can build together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 relative z-10"
              style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
            >
              Book a Free Call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
