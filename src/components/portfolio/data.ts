export const profile = {
  name: "Alex Morgan",
  role: "Senior Full Stack & AI Engineer",
  tagline: "I build elegant, high-performance products at the edge of AI and design.",
  bio: "I'm a senior engineer with 8+ years of experience shipping polished web products for startups and public companies. I care deeply about craft — the way a button feels, the way a page loads, the way a system scales.",
  location: "San Francisco, CA",
  email: "hello@alexmorgan.dev",
  resumeUrl: "#",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:hello@alexmorgan.dev",
  },
};

export const highlights = [
  "Led engineering for products serving 2M+ monthly active users",
  "Built AI-native features with LLMs, RAG, and vector search in production",
  "Shipped design systems adopted across 40+ engineers and 12 product teams",
  "Speaker at React Summit and AI Engineer World's Fair",
];

export type Project = {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Lumen — AI Research Copilot",
    description:
      "A ChatGPT-style workspace for research teams with document ingestion, citations, and multi-agent workflows.",
    impact: "Cut literature review time by 68% across 400+ analysts.",
    tech: ["Next.js", "TypeScript", "OpenAI", "LangChain", "pgvector"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-violet-500/40 via-fuchsia-500/30 to-cyan-500/40",
  },
  {
    title: "Vector Studio",
    description:
      "Design-first vector database console with visual query builder, cluster explorer, and real-time metrics.",
    impact: "Reduced onboarding from 2 weeks to a single afternoon.",
    tech: ["React", "TypeScript", "D3", "Rust", "WebGL"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-cyan-500/40 via-blue-500/30 to-indigo-500/40",
  },
  {
    title: "Northwind Commerce",
    description:
      "Headless commerce platform with edge-rendered storefronts, unified checkout, and merchant analytics.",
    impact: "Powered $18M GMV in first year with 99.99% uptime.",
    tech: ["Next.js", "Node", "PostgreSQL", "Stripe", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/40",
  },
  {
    title: "Aperture Design System",
    description:
      "Fully accessible, themeable component library with 80+ primitives and Figma parity.",
    impact: "Adopted by 12 product teams; halved feature build time.",
    tech: ["React", "TypeScript", "Radix", "Tailwind", "Storybook"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-pink-500/40 via-rose-500/30 to-orange-500/40",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "GraphQL"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "pgvector"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Docker", "AWS", "GitHub Actions", "Cloudflare", "Terraform"],
  },
  {
    label: "AI Tools",
    items: ["OpenAI API", "LangChain", "RAG", "Vector Databases", "Embeddings"],
  },
];
