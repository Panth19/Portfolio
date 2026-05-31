import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { profile } from "./data";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Background gradient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Three.js
          & Tailwind CSS.
        </p>
        <p className="mt-1">
          Hosted free on GitHub Pages ·{" "}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-violet-400 hover:underline"
          >
            @{profile.github}
          </a>
        </p>
      </footer>
    </div>
  );
}
