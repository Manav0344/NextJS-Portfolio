interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "md";
}

export default function Badge({ children, variant = "default", size = "sm" }: BadgeProps) {
  const styles = {
    default: { background: "var(--bg-muted)", color: "var(--text-muted)", border: "1px solid var(--border)" },
    accent: { background: "color-mix(in srgb, var(--accent) 15%, transparent)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)" },
    outline: { background: "transparent", color: "var(--text-muted)", border: "1px solid var(--border)" },
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`inline-block rounded-full font-medium ${sizes[size]}`}
      style={{ ...styles[variant], fontFamily: "var(--font-display)" }}
    >
      {children}
    </span>
  );
}
