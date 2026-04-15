export const personalInfo = {
  name: "Alex Rivera",
  title: "Full-Stack Developer & UI Engineer",
  tagline: "I craft fast, beautiful, and scalable web experiences.",
  email: "alex@alexrivera.dev",
  phone: "+1 (555) 234-5678",
  location: "San Francisco, CA",
  availability: "Available for freelance & full-time roles",
  bio: "I'm a full-stack developer with 5+ years of experience building high-performance web applications. I specialize in React, Next.js, Node.js, and cloud infrastructure. I love turning complex problems into elegant digital solutions that delight users and drive business results.",
  bioExtended:
    "My journey into software development started during college when I built a small app to help students find study groups. That little project ignited a passion that's grown into a full-blown career. I've since worked with early-stage startups, mid-size SaaS companies, and Fortune 500 clients — each experience sharpening my craft and broadening my perspective. Outside of work, I contribute to open source, write technical articles, and mentor aspiring developers.",
  github: "https://github.com/alexrivera",
  linkedin: "https://linkedin.com/in/alexrivera",
  twitter: "https://twitter.com/alexrivera",
  dribbble: "https://dribbble.com/alexrivera",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Backend" },
  { name: "GraphQL", level: 78, category: "Backend" },
  { name: "AWS / Cloud", level: 75, category: "DevOps" },
  { name: "Docker / K8s", level: 70, category: "DevOps" },
  { name: "Figma / Design", level: 82, category: "Design" },
];

export const skillHighlights = [
  { icon: "Code2", label: "Frontend", desc: "React, Next.js, TypeScript, Tailwind" },
  { icon: "Server", label: "Backend", desc: "Node.js, PostgreSQL, GraphQL, REST" },
  { icon: "Cloud", label: "DevOps", desc: "AWS, Docker, CI/CD, Kubernetes" },
  { icon: "Palette", label: "Design", desc: "Figma, UI/UX, Design Systems" },
];

export const experience = [
  {
    company: "Vercel",
    role: "Senior Frontend Engineer",
    period: "2022 – Present",
    description:
      "Led the redesign of the Vercel dashboard, improving developer experience for 500k+ users. Built reusable component systems using Next.js 13+ App Router and TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React Query"],
  },
  {
    company: "Stripe",
    role: "Full-Stack Engineer",
    period: "2020 – 2022",
    description:
      "Developed internal tooling and customer-facing APIs used by 10,000+ merchants. Optimized critical payment flows, reducing latency by 40%.",
    tech: ["React", "Node.js", "PostgreSQL", "GraphQL"],
  },
  {
    company: "Acme Startup",
    role: "Software Engineer",
    period: "2019 – 2020",
    description:
      "Sole frontend engineer building a B2B SaaS product from 0 to 1. Shipped MVP in 3 months, enabling the company to close its seed round.",
    tech: ["React", "Express", "MongoDB", "Docker"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2017 – 2019",
    description:
      "Delivered 20+ client projects spanning marketing sites, e-commerce stores, and web apps. Maintained 100% client satisfaction rating.",
    tech: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
  },
];

export const education = [
  {
    school: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    period: "2015 – 2019",
    gpa: "3.8 / 4.0",
    notes: "Dean's List — Data Structures, Algorithms, Systems Programming",
  },
  {
    school: "freeCodeCamp / Coursera",
    degree: "Full-Stack Web Development",
    period: "2016 – 2017",
    gpa: "",
    notes: "Responsive Web Design, JavaScript Algorithms, React",
  },
];

export const achievements = [
  "🏆 GitHub Arctic Code Vault Contributor (2020)",
  "📝 Author of 'Next.js Performance Patterns' – 50k+ reads",
  "🎤 Speaker at ReactConf 2023 — 'Streaming UI with RSC'",
  "🌟 AWS Certified Solutions Architect – Associate",
  "🥇 1st Place — HackSF 2021 Hackathon",
  "📦 Open source: react-command-palette (2.1k GitHub stars)",
];

export const projects = [
  {
    id: "1",
    title: "Flowboard",
    description:
      "A real-time collaborative project management tool built with Next.js 14, Socket.io, and PostgreSQL. Supports 10,000+ concurrent users.",
    longDescription:
      "Flowboard is a full-featured project management platform inspired by Linear and Jira. It features real-time collaboration via WebSockets, drag-and-drop Kanban boards, custom workflows, Slack integrations, and advanced analytics dashboards. Built to scale with a microservices architecture on AWS.",
    category: "SaaS",
    image: "/images/project1.jpg",
    tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Redis", "AWS"],
    github: "https://github.com/alexrivera/flowboard",
    live: "https://flowboard.app",
    featured: true,
    color: "#6366f1",
  },
  {
    id: "2",
    title: "ShopSpark",
    description:
      "High-performance e-commerce platform with AI-powered product recommendations, Stripe payments, and sub-1s page loads.",
    longDescription:
      "ShopSpark is a modern e-commerce solution built for conversion. It features AI-driven product recommendations, real-time inventory, multi-currency Stripe checkout, and advanced SEO. Achieves 99 Lighthouse scores with Next.js Server Components and edge caching.",
    category: "E-commerce",
    image: "/images/project2.jpg",
    tech: ["Next.js", "Stripe", "Prisma", "Tailwind", "OpenAI", "Vercel"],
    github: "https://github.com/alexrivera/shopspark",
    live: "https://shopspark.vercel.app",
    featured: true,
    color: "#10b981",
  },
  {
    id: "3",
    title: "DevPulse",
    description:
      "Developer analytics dashboard that aggregates GitHub, Jira, and Slack activity into actionable engineering metrics.",
    longDescription:
      "DevPulse helps engineering managers understand team productivity without micromanagement. It pulls data from GitHub, Linear, and Slack to surface cycle time, PR review time, and deployment frequency — all in a clean, customizable dashboard.",
    category: "Dashboard",
    image: "/images/project3.jpg",
    tech: ["React", "D3.js", "Node.js", "GraphQL", "Docker"],
    github: "https://github.com/alexrivera/devpulse",
    live: "https://devpulse.io",
    featured: true,
    color: "#f59e0b",
  },
  {
    id: "4",
    title: "AuthKit",
    description:
      "Open-source authentication library for Next.js with magic links, OAuth, RBAC, and edge-ready middleware.",
    longDescription:
      "AuthKit is a batteries-included auth solution for Next.js apps. Drop-in support for magic links, Google/GitHub OAuth, multi-tenant RBAC, and session management with edge-compatible middleware. Ships with a headless UI kit for full customization.",
    category: "Open Source",
    image: "/images/project4.jpg",
    tech: ["Next.js", "TypeScript", "JWT", "Prisma", "PostgreSQL"],
    github: "https://github.com/alexrivera/authkit",
    live: "https://authkit.dev",
    featured: false,
    color: "#8b5cf6",
  },
  {
    id: "5",
    title: "Moodboard AI",
    description:
      "AI-powered moodboard generator for designers — describe a vibe, get a curated visual board in seconds.",
    longDescription:
      "Moodboard AI uses GPT-4 and DALL-E to generate stunning moodboards from natural language descriptions. Designers describe a project's feel, and the app returns a grid of color palettes, typography pairs, and AI-generated visuals — all exportable to PDF or Figma.",
    category: "AI",
    image: "/images/project5.jpg",
    tech: ["Next.js", "OpenAI", "Replicate", "Tailwind", "Framer Motion"],
    github: "https://github.com/alexrivera/moodboard-ai",
    live: "https://moodboard.ai",
    featured: false,
    color: "#ec4899",
  },
  {
    id: "6",
    title: "Logsmith",
    description:
      "Structured logging SDK for Node.js microservices with auto-correlation IDs, Datadog/Grafana integrations, and zero-config setup.",
    longDescription:
      "Logsmith is a lightweight, structured logging library for Node.js that brings production-grade observability with zero config. It auto-generates correlation IDs for distributed tracing, formats logs as JSON, and ships built-in exporters for Datadog, Grafana Loki, and CloudWatch.",
    category: "Open Source",
    image: "/images/project6.jpg",
    tech: ["Node.js", "TypeScript", "Datadog", "Docker", "GitHub Actions"],
    github: "https://github.com/alexrivera/logsmith",
    live: "https://logsmith.dev",
    featured: false,
    color: "#14b8a6",
  },
];

export const services = [
  {
    icon: "Monitor",
    title: "Web Application Development",
    description:
      "End-to-end web apps built with React, Next.js, and TypeScript. From MVPs to enterprise-scale platforms.",
    features: ["Next.js App Router", "TypeScript + Testing", "API integration", "CMS setup"],
  },
  {
    icon: "Smartphone",
    title: "Responsive UI Development",
    description:
      "Pixel-perfect, mobile-first interfaces using Tailwind CSS and modern design systems that work everywhere.",
    features: ["Mobile-first design", "Design system creation", "Accessibility (WCAG)", "Cross-browser support"],
  },
  {
    icon: "Database",
    title: "Backend & API Development",
    description:
      "Scalable REST and GraphQL APIs with Node.js, authentication, and cloud database architecture.",
    features: ["RESTful & GraphQL APIs", "Auth & security", "PostgreSQL / MongoDB", "Serverless functions"],
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Audit and optimize existing sites for Core Web Vitals, SEO, and loading speed. Achieve 90+ Lighthouse scores.",
    features: ["Core Web Vitals audit", "Bundle optimization", "Image & font tuning", "CDN & caching setup"],
  },
  {
    icon: "Cloud",
    title: "DevOps & Cloud Deployment",
    description:
      "Set up CI/CD pipelines, containerize apps with Docker, and deploy to AWS, Vercel, or GCP.",
    features: ["CI/CD with GitHub Actions", "Docker & Kubernetes", "AWS / GCP setup", "Monitoring & alerts"],
  },
  {
    icon: "Users",
    title: "Technical Consulting",
    description:
      "Architecture reviews, code audits, and fractional CTO services for startups and growing engineering teams.",
    features: ["Architecture review", "Code audit & refactor", "Team mentoring", "Tech stack selection"],
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$2,500",
    period: "per project",
    description: "Perfect for landing pages and small business sites.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "1 revision round",
      "2-week delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$7,500",
    period: "per project",
    description: "For startups building their core product.",
    features: [
      "Full web application",
      "Custom design system",
      "Auth & user management",
      "API development",
      "3 revision rounds",
      "4-week delivery",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact for quote",
    description: "Large-scale platforms and ongoing partnerships.",
    features: [
      "Unlimited scope",
      "Dedicated dev time",
      "Full DevOps setup",
      "Team collaboration",
      "Ongoing support",
      "Priority response",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export const processSteps = [
  { step: "01", title: "Discovery", desc: "We align on goals, users, and technical requirements through structured discovery sessions." },
  { step: "02", title: "Design", desc: "Wireframes and high-fidelity mockups are crafted in Figma for your approval before any code is written." },
  { step: "03", title: "Development", desc: "Clean, tested, and documented code is written in sprints with weekly demo check-ins." },
  { step: "04", title: "Testing", desc: "Rigorous QA across devices and browsers, performance audits, and security reviews." },
  { step: "05", title: "Launch", desc: "Smooth deployment with monitoring, rollback capability, and a production-readiness checklist." },
  { step: "06", title: "Support", desc: "Post-launch support, bug fixes, and iterative improvements based on real user data." },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A landing page takes 1–2 weeks. A full web application typically takes 4–8 weeks depending on scope. We'll establish a clear timeline during the discovery phase.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I work with clients across North America, Europe, and Asia. Async communication works great, and I schedule video calls around your timezone.",
  },
  {
    q: "What's your tech stack preference?",
    a: "I default to Next.js + TypeScript + Tailwind + PostgreSQL, but I'm flexible. I adapt to your existing stack if needed — React, Vue, Node, Python, etc.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes. I offer monthly retainer plans for ongoing feature development, bug fixes, and infrastructure management. Rates start at $1,500/month.",
  },
  {
    q: "Can I see your code quality before hiring?",
    a: "Of course — all my open-source projects are on GitHub. I'm also happy to do a paid discovery sprint so you can evaluate my work risk-free.",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, Flowboard",
    avatar: "SC",
    text: "Alex completely transformed our product. The new dashboard is fast, beautiful, and our users love it. He communicated clearly throughout and delivered ahead of schedule.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder, ShopSpark",
    avatar: "MJ",
    text: "Hiring Alex was one of the best business decisions I've made. He took our e-commerce vision and turned it into a product that converts at 4x our old rate.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Engineering Manager, Stripe",
    avatar: "PP",
    text: "Alex's code quality is exceptional. He writes clean, well-tested TypeScript and always thinks about long-term maintainability. A pleasure to work with.",
    rating: 5,
  },
  {
    name: "Jake Williams",
    role: "Product Lead, Acme Co.",
    avatar: "JW",
    text: "We needed an MVP fast and Alex delivered in 6 weeks without cutting corners. The architecture he chose has scaled perfectly as we've grown.",
    rating: 5,
  },
];

export const tools = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Redis", "GraphQL",
  "AWS", "Docker", "GitHub Actions", "Vercel",
  "Figma", "Prisma", "Stripe", "OpenAI",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];
