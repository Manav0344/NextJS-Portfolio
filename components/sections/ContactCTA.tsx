"use client";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { personalInfo } from "@/data";

export default function ContactCTA() {
  return (
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          data-aos="fade-up"
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--accent)", transform: "translate(-50%, -50%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-15"
            style={{ background: "var(--accent-2)", transform: "translate(50%, 50%)" }}
          />

          <div className="relative z-10">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                color: "var(--accent)",
                fontFamily: "var(--font-display)",
              }}
            >
              Let&apos;s Work Together
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Have a project in mind?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
              I&apos;m currently available for freelance projects and full-time roles. Let&apos;s
              build something great together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
              >
                Start a Conversation <ArrowRight size={18} />
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:scale-105"
                style={{
                  background: "var(--bg-muted)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-display)",
                }}
              >
                <Mail size={16} /> Email Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
