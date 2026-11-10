import { motion, useReducedMotion } from 'framer-motion'

const links = [
  {
    label: 'Email',
    value: 'rkanistan2000@gmail.com',
    href: 'mailto:rkanistan2000@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'raseswaran-kanistan',
    href: 'https://www.linkedin.com/in/raseswaran-kanistan-130a9221b',
  },
  {
    label: 'GitHub',
    value: 'Raseswaran-Kanistan',
    href: 'https://github.com/Raseswaran-Kanistan',
  },
]

export function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-signal-deep uppercase">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Let’s talk about reliable delivery.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Open to conversations about Quality Assurance, Full-Cycle engineering,
            and Forward Deployed Engineering work.
          </p>
        </motion.div>

        <ul className="mt-12 space-y-5">
          {links.map((l, i) => (
            <motion.li
              key={l.label}
              initial={reduce ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex flex-col gap-1 border-b border-ink/10 pb-4 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="w-24 text-xs tracking-[0.14em] text-ink-soft uppercase">
                  {l.label}
                </span>
                <span className="font-display text-lg font-semibold text-ink transition group-hover:text-signal-deep sm:text-xl">
                  {l.value}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={`${import.meta.env.BASE_URL}Kanistan-Raseswaran.pdf`}
          download
          className="mt-12 inline-flex items-center border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink/50 hover:bg-mist/60"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Download CV
        </motion.a>

        <p className="mt-16 text-xs text-ink-soft/80">
          © {new Date().getFullYear()} Kanistan Raseswaran · Dehiwala / Jaffna,
          Sri Lanka
        </p>
      </div>
    </section>
  )
}
