import { motion } from "framer-motion";
import { useGithubRepos } from "../useGithubRepos";
import { profile } from "../data";

const langColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
  Dart: "#00B4AB",
};

export default function Projects() {
  const { repos, loading, error } = useGithubRepos(profile.github);

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            My work
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            GitHub Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            All my public repositories, fetched live from GitHub.
          </p>
        </motion.div>

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-48 animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-slate-400">
              Couldn't load repositories right now.{" "}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-violet-400 underline"
              >
                View them on GitHub
              </a>
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              // Changed from motion.a to motion.div
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-violet-400/50 hover:bg-white/[0.08]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20" />

                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-500/30 text-violet-200">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Z" />
                      </svg>
                    </span>
                  </div>
                  <svg
                    className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-400"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="mb-2 break-words text-lg font-semibold text-white group-hover:text-violet-300">
                  {/* Added an anchor tag here to link to the GitHub code. 
                      The 'after:absolute after:inset-0' makes the whole card clickable */}
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
                    {repo.name}
                  </a>
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {repo.description || "No description provided."}
                </p>

                {repo.topics?.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1.5 relative z-10">
                    {repo.topics.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-violet-500/15 px-2.5 py-0.5 text-xs font-medium text-violet-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: langColors[repo.language] || "#8b5cf6",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    ★ {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    ⑂ {repo.forks_count}
                  </span>
                  
                  {/* Changed from span to a clickable anchor tag */}
                  {repo.homepage && (
                    <a 
                      href={repo.homepage} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="ml-auto text-cyan-400 relative z-10 hover:text-cyan-300 hover:underline"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {!loading && !error && repos.length === 0 && (
          <p className="text-center text-slate-400">No public repositories found.</p>
        )}

        <div className="mt-12 text-center">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View all on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
