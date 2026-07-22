import { useState, type FormEvent } from "react";
import {
  Check,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";
import { z } from "zod";
import { profile } from "./data";
import { SectionHeader } from "./Projects";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message is too short").max(1500),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FieldErrors;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind, or just want to say hi? My inbox is always open."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="glass gradient-border rounded-3xl p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} placeholder="Jane Doe" />
              <Field
                label="Email"
                name="email"
                type="email"
                error={errors.email}
                placeholder="jane@company.com"
              />
            </div>
            <div className="mt-5">
              <Field
                label="Subject"
                name="subject"
                error={errors.subject}
                placeholder="Project inquiry"
              />
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-foreground/80">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me a bit about the project…"
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:bg-white/[0.05]"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/50 transition-transform hover:scale-[1.01] disabled:opacity-80 sm:w-auto"
            >
              {status === "loading" && <Loader2 size={16} className="animate-spin" />}
              {status === "success" && <Check size={16} />}
              {status === "idle" && <Send size={16} />}
              {status === "success" ? "Message sent" : status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass gradient-border flex flex-col gap-4 rounded-3xl p-8"
          >
            <ContactRow icon={<Mail size={16} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={<Linkedin size={16} />} label="LinkedIn" value="/in/alexmorgan" href={profile.socials.linkedin} />
            <ContactRow icon={<Github size={16} />} label="GitHub" value="@alexmorgan" href={profile.socials.github} />
            <ContactRow icon={<Twitter size={16} />} label="X (Twitter)" value="@alexmorgan" href={profile.socials.twitter} />
            <ContactRow icon={<MapPin size={16} />} label="Location" value={profile.location} />

            <div className="mt-auto rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 to-accent/10 p-5">
              <div className="text-sm font-semibold text-foreground">Currently available</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Taking on new freelance and full-time opportunities for Q1.
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:bg-white/[0.05]"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
