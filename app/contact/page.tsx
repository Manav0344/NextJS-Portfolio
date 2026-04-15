"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, GitFork, Link2, AtSign, Globe, Send, CheckCircle, Clock, MessageSquare, Calendar } from "lucide-react";
import { personalInfo } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

const socials = [
  { icon: GitFork, href: personalInfo.github, label: "GitHub", desc: "Open source work" },
  { icon: Link2, href: personalInfo.linkedin, label: "LinkedIn", desc: "Professional network" },
  { icon: AtSign, href: personalInfo.twitter, label: "Twitter/X", desc: "Thoughts & updates" },
  { icon: Globe, href: personalInfo.dribbble, label: "Dribbble", desc: "Design shots" },
];

type FormState = { name: string; email: string; budget: string; message: string };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle = {
    background: "var(--bg-muted)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "var(--font-body)",
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: "var(--accent)", transform: "translate(30%, -30%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeader
            tag="Contact"
            title="Let's build something together"
            subtitle="Have a project in mind? I'd love to hear about it. Fill out the form or reach out directly."
          />
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <div
                className="p-8 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#22c55e" }} />
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", budget: "", message: "" }); }}
                      className="mt-6 px-5 py-2 rounded-xl text-sm font-semibold"
                      style={{ background: "var(--bg-muted)", color: "var(--text)", border: "1px solid var(--border)", fontFamily: "var(--font-display)" }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3
                      className="text-xl font-bold mb-6"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                    >
                      Send a Message
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
                          Full Name *
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      >
                        <option value="">Select a budget range...</option>
                        <option value="under-2500">Under $2,500</option>
                        <option value="2500-7500">$2,500 – $7,500</option>
                        <option value="7500-20000">$7,500 – $20,000</option>
                        <option value="20000+">$20,000+</option>
                        <option value="retainer">Monthly Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
                        Tell me about your project *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Describe your project, goals, timeline, and any specific requirements..."
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: "vertical" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                      style={{
                        background: loading ? "var(--text-muted)" : "var(--accent)",
                        fontFamily: "var(--font-display)",
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6" data-aos="fade-left" data-aos-delay="100">
              {/* Quick contact */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-5"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                >
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                    { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-3 group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-opacity-100"
                        style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
                      >
                        <Icon size={14} style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <div className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>{label}</div>
                        <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                >
                  Availability
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle, text: "Open to freelance projects", color: "#22c55e" },
                    { icon: CheckCircle, text: "Considering full-time roles", color: "#22c55e" },
                    { icon: Clock, text: "Response time: &lt; 24 hours", color: "var(--accent)" },
                    { icon: Calendar, text: "Next available: Immediately", color: "var(--accent)" },
                    { icon: MessageSquare, text: "Free 30-min discovery call", color: "var(--accent)" },
                  ].map(({ icon: Icon, text, color }, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                      <Icon size={14} style={{ color }} />
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                >
                  Find Me Online
                </h3>
                <div className="space-y-3">
                  {socials.map(({ icon: Icon, href, label, desc }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                        style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}
                      >
                        <Icon size={16} style={{ color: "var(--text-muted)" }} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>{label}</div>
                        <div className="text-xs" style={{ color: "var(--text-muted)" }}>{desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12" style={{ background: "var(--bg-muted)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ height: "280px", background: "var(--bg-card)", border: "1px solid var(--border)" }}
            data-aos="fade-up"
          >
            <div className="text-center">
              <MapPin size={32} className="mx-auto mb-3" style={{ color: "var(--accent)" }} />
              <p className="font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                {personalInfo.location}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
