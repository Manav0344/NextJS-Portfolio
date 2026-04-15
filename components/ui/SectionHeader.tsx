interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {tag && (
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
          style={{
            background: "color-mix(in srgb, var(--accent) 12%, transparent)",
            color: "var(--accent)",
            fontFamily: "var(--font-display)",
          }}
        >
          {tag}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
          style={{ color: "var(--text-muted)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
