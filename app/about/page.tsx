import type { Metadata } from "next";
import Link from "next/link";
import { Download, Award, MapPin, Calendar, ExternalLink } from "lucide-react";
import { personalInfo, skills, experience, education, achievements } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About — Alex Rivera",
  description: "Learn more about Alex Rivera — full-stack developer, open source contributor, and tech speaker.",
};

function SkillBar({ name, level, category }: { name: string; level: number; category: string }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
          {name}
        </span>
        <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-muted)" }}>
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: "var(--accent)", transform: "translate(30%, -30%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)", fontFamily: "var(--font-display)" }}
            >
              About Me
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Developer. Creator.<br />
              <span className="gradient-text">Problem Solver.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              {personalInfo.bio}
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              {personalInfo.bioExtended}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: MapPin, text: personalInfo.location },
                { icon: Calendar, text: "5+ years experience" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <Icon size={14} style={{ color: "var(--accent)" }} />
                  {text}
                </div>
              ))}
            </div>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24" style={{ background: "var(--bg-muted)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up">
            <SectionHeader tag="Skills" title="What I bring to the table" centered={false} />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((cat) => (
              <div key={cat} data-aos="fade-up">
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-6"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
                >
                  {cat}
                </h3>
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up">
            <SectionHeader tag="Experience" title="Where I've worked" centered={false} />
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "var(--border)", left: "11px" }}
            />
            <div className="space-y-12">
              {experience.map((job, i) => (
                <div
                  key={job.company}
                  className="flex gap-8"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  {/* Dot */}
                  <div className="hidden md:flex flex-col items-center pt-1">
                    <div
                      className="w-6 h-6 rounded-full border-2 flex-shrink-0 z-10"
                      style={{ background: "var(--bg)", borderColor: "var(--accent)" }}
                    />
                  </div>

                  <div
                    className="flex-1 p-6 rounded-2xl"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3
                          className="text-lg font-bold"
                          style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                        >
                          {job.role}
                        </h3>
                        <span style={{ color: "var(--accent)" }} className="font-medium text-sm">
                          {job.company}
                        </span>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: "var(--bg-muted)", color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                      >
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                            color: "var(--accent)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24" style={{ background: "var(--bg-muted)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up">
            <SectionHeader tag="Education" title="Academic background" centered={false} />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div
                key={edu.school}
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {edu.degree}
                  </h3>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{edu.period}</span>
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>{edu.school}</p>
                {edu.gpa && (
                  <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>GPA: {edu.gpa}</p>
                )}
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{edu.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up">
            <SectionHeader tag="Achievements" title="Milestones & Recognition" centered={false} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl flex items-start gap-3"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <span className="text-2xl">{a.split(" ")[0]}</span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {a.slice(a.indexOf(" ") + 1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
