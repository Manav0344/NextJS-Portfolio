"use client";
import { useState } from "react";
import { GitFork, ExternalLink, X, Star } from "lucide-react";
import { projects } from "@/data";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

type Project = (typeof projects)[0];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden relative"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="h-48 relative flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}55)` }}
        >
          <div
            className="text-8xl font-black opacity-25 select-none"
            style={{ fontFamily: "var(--font-display)", color: project.color }}
          >
            {project.title.slice(0, 2).toUpperCase()}
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.3)", color: "white" }}
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-4 left-6">
            <Badge variant="accent">{project.category}</Badge>
          </div>
        </div>

        <div className="p-8">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            {project.title}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            {project.longDescription}
          </p>

          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <Badge key={t} variant="accent">{t}</Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "var(--bg-muted)", color: "var(--text)", border: "1px solid var(--border)", fontFamily: "var(--font-display)" }}
            >
              <GitFork size={16} /> View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div style={{ paddingTop: "80px" }}>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      {/* Hero */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            tag="Portfolio"
            title="My Work"
            subtitle="A collection of projects I've built — from side experiments to production-grade products used by thousands."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: activeCategory === cat ? "var(--accent)" : "var(--bg-card)",
                  color: activeCategory === cat ? "white" : "var(--text-muted)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden cursor-pointer card-hover group"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                onClick={() => setSelected(project)}
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                {/* Color header */}
                <div
                  className="h-44 relative flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
                >
                  <div
                    className="text-7xl font-black opacity-20 select-none group-hover:opacity-30 transition-opacity"
                    style={{ fontFamily: "var(--font-display)", color: project.color }}
                  >
                    {project.title.slice(0, 2).toUpperCase()}
                  </div>
                  {project.featured && (
                    <div
                      className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(0,0,0,0.4)", color: "white", fontFamily: "var(--font-display)" }}
                    >
                      <Star size={10} fill="gold" color="gold" /> Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge variant="accent">{project.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color: "var(--text-muted)" }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                    >
                      <GitFork size={14} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium"
                      style={{ color: "var(--accent)" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
