import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

// Free contact form via Formspree. Replace "xanybkqr" with your own
// Formspree form ID after signing up at https://formspree.io (free tier).
// Until then, the form falls back to opening the user's email client.
const FORMSPREE_ID = "xgoqblpy";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Let's work together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Have a project, opportunity, or just want to say hi? Drop me a
            message and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:col-span-2"
          >
            <ContactCard
              icon="✉️"
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactCard
              icon="📞"
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon="💼"
              label="LinkedIn"
              value="panthpatel1322"
              href={profile.linkedin}
            />
            <ContactCard
              icon="🐙"
              label="GitHub"
              value={profile.github}
              href={profile.githubUrl}
            />
            <ContactCard icon="📍" label="Location" value={profile.location} />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" type="text" />
              <Field name="email" label="Email" type="email" />
            </div>
            <Field name="subject" label="Subject" type="text" />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:shadow-violet-700/50 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-center text-sm font-medium text-emerald-400">
                ✓ Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm font-medium text-rose-400">
                Something went wrong. Email me directly at{" "}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
        placeholder={label}
      />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:border-violet-400/40 hover:bg-white/10">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-xl">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
        <p className="truncate font-medium text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
