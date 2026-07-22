import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { projects, type Project } from "./data";

export function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects I'm proud of"
          subtitle="A handful of recent builds spanning AI, developer tools, and consumer commerce."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group gradient-border glass relative flex flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1"
    >
      {/* image / preview */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, oklch(1 0 0 / 0.3), transparent 50%), radial-gradient(circle at 70% 80%, oklch(0 0 0 / 0.3), transparent 50%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-black tracking-tight text-white/20 mix-blend-overlay">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/90 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        </div>

        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">Impact</p>
          <p className="mt-1 text-sm text-foreground/90">{project.impact}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.04] px-2 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-foreground/90 transition-colors hover:bg-white/5"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-primary to-accent px-3 py-2 text-xs font-semibold text-primary-foreground"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex rounded-full glass px-3 py-1 text-xs font-medium text-accent"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
