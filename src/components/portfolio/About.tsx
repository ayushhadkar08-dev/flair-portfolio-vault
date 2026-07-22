import { Check, Download } from "lucide-react";
import { motion } from "motion/react";
import { highlights, profile, skillGroups } from "./data";
import { SectionHeader } from "./Projects";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About" title="Craft, curiosity, and a bias for shipping" />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass gradient-border rounded-3xl p-8"
          >
            <p className="text-lg leading-relaxed text-foreground/90">{profile.bio}</p>
            <p className="mt-4 text-muted-foreground">
              I care about the details most people never notice — the ones that quietly compound
              into products that feel effortless. My focus is on AI-native tools, developer
              experience, and design systems that scale.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <Check size={12} className="text-primary-foreground" />
                  </span>
                  <span className="text-sm text-foreground/90">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Download size={16} /> Download Resume
              </a>
              <div className="text-xs text-muted-foreground">Based in {profile.location}</div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass gradient-border rounded-3xl p-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Skills & Tools
            </h3>
            <div className="mt-6 space-y-6">
              {skillGroups.map((g, gi) => (
                <div key={g.label}>
                  <div className="text-sm font-medium text-foreground/80">{g.label}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: gi * 0.05 + i * 0.02 }}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/90 transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
