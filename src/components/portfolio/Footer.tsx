import { profile } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with care.
        </div>
        <div className="text-xs text-muted-foreground/70">
          Built with React, TypeScript, Tailwind & Motion.
        </div>
      </div>
    </footer>
  );
}
