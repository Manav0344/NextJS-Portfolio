"use client";
import Link from "next/link";
import { ArrowRight, GitFork, ExternalLink } from "lucide-react";
import { projects } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div data-aos="fade-up">
          <SectionHeader
            tag="Featured Work"
            title="Projects I'm proud of"
            subtitle="A selection of my best work — from SaaS products to open-source libraries."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden card-hover"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Color header */}
              <div
                className="h-40 relative overflow-hidden flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
              >
                <div
                  className="text-6xl font-black opacity-20 select-none"
                  style={{ fontFamily: "var(--font-display)", color: project.color }}
                >
                  {project.title.slice(0, 2).toUpperCase()}
                </div>
                <div
                  className="absolute top-3 right-3 w-3 h-3 rounded-full"
                  style={{ background: project.color }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="font-bold text-lg"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>
                  <Badge variant="accent">{project.category}</Badge>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                  >
                    <GitFork size={14} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                    style={{ color: "var(--accent)" }}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:gap-3"
            style={{
              background: "var(--bg-muted)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-display)",
            }}
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
