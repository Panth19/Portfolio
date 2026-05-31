import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Career
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative space-y-8 border-l border-white/10 pl-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <span className="absolute -left-[42px] top-7 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-br from-violet-500 to-cyan-500" />
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-cyan-300">
                {exp.company} · <span className="text-slate-400">{exp.location}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {exp.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
