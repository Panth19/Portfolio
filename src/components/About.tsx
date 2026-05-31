import { motion } from "framer-motion";
import { profile, education, skills } from "../data";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            About me
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Who I am
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-slate-300">
              {profile.about}
            </p>

            <h3 className="mt-10 mb-4 text-xl font-semibold text-white">
              🎓 Education
            </h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="font-semibold text-white">
                      {e.degree}
                    </h4>
                    <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-cyan-300">{e.field}</p>
                  <p className="mt-1 text-sm text-slate-400">{e.school}</p>
                  <p className="text-xs text-slate-500">{e.location}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-white">
              🛠️ Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl transition hover:border-violet-400/40 hover:bg-white/10"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-xs font-medium text-slate-300">
                    {s.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat value="2+" label="Years Coding" />
              <Stat value="M.Sc." label="AI Student" />
              <Stat value="∞" label="Curiosity" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-4 text-center backdrop-blur-xl">
      <div className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
        {value}
      </div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}
