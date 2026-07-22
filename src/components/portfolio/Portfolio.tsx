import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";

export function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`min-h-dvh transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
