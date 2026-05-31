import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

const Scene3D = lazy(() => import("../Scene3D"));

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 -z-0">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Panth Patel
            </span>
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-200">
            {profile.title}
          </p>
          <p className="mt-4 max-w-md text-slate-400">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => go("projects")}
              className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => go("contact")}
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex gap-4">
            <Social href={profile.githubUrl} label="GitHub">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </Social>
            <Social href={profile.linkedin} label="LinkedIn">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .92.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </Social>
            <Social href={`mailto:${profile.email}`} label="Email">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </Social>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-tr from-violet-600/40 to-cyan-500/40 blur-3xl" />
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl shadow-violet-900/50 sm:h-80 sm:w-80">
            <img
              src="./Photo.png"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-slate-900/80 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
            📍 {profile.location}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-slate-400">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 backdrop-blur-md transition hover:scale-110 hover:border-violet-400/50 hover:text-white"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
