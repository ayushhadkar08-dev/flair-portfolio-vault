import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]" : "glass"
          }`}
        >
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 text-sm font-bold tracking-tight"
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
              A
            </span>
            <span className="hidden sm:inline">alex.morgan</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    active === s.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === s.id && (
                    <span className="absolute inset-0 rounded-lg bg-foreground/5" />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-lg bg-gradient-to-br from-primary to-accent px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Hire Me
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden rounded-lg p-2 text-foreground/80 hover:bg-foreground/5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6h18" strokeLinecap="round" />
                  <path d="M3 12h18" strokeLinecap="round" />
                  <path d="M3 18h18" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-2 md:hidden animate-fade-in">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full rounded-lg px-4 py-3 text-left text-sm ${
                  active === s.id ? "bg-foreground/5 text-foreground" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-1 block w-full rounded-lg bg-gradient-to-br from-primary to-accent px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
