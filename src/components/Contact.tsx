import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, sectionTransition, sectionView } from '../lib/motion'

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
  {
    label: 'Location',
    value: 'Ariyalai, Jaffna · Wellawatte, Colombo',
    href: undefined as string | undefined,
  },
]

export function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="section-y bg-paper">
      <div className="section-pad">
        <motion.div
          initial={reduce ? false : fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={sectionView}
          transition={sectionTransition()}
          className="max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-signal-deep uppercase">
            Contact
          </p>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Let’s talk about reliable delivery.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Open to conversations about Quality Assurance, Full-Cycle
            engineering, and Forward Deployed Engineering work.
          </p>
        </motion.div>

        <ul className="mt-12 space-y-0">
          {links.map((l, i) => {
            const inner = (
              <>
                <span className="w-28 shrink-0 text-xs tracking-[0.14em] text-ink-soft uppercase">
                  {l.label}
                </span>
                <span
                  className={`font-display text-lg text-ink sm:text-xl ${l.href ? 'transition group-hover:text-signal-deep' : ''}`}
                >
                  {l.value}
                </span>
              </>
            )

            return (
              <motion.li
                key={l.label}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={sectionView}
                transition={sectionTransition(i * 0.06)}
                className="border-b border-ink/10"
              >
                {l.href ? (
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8">
                    {inner}
                  </div>
                )}
              </motion.li>
            )
          })}
        </ul>

        <motion.a
          href={`${import.meta.env.BASE_URL}Kanistan-Raseswaran.pdf`}
          download
          className="mt-12 inline-flex items-center border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink/50 hover:bg-mist/60"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={sectionView}
          transition={sectionTransition(0.2)}
        >
          Download CV
        </motion.a>

        <p className="mt-16 text-xs text-ink-soft/80">
          © {new Date().getFullYear()} Kanistan Raseswaran · Ariyalai, Jaffna ·
          Wellawatte, Colombo
        </p>
      </div>
    </section>
  )
}
