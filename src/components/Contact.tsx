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
    label: 'Company',
    value: 'hSenid Mobile Solutions',
    href: undefined as string | undefined,
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
          <p className="section-label text-signal-deep">Contact</p>
          <h2 className="section-title text-ink">
            Let’s talk about reliable delivery.
          </h2>
          <p className="body-copy mt-3 text-ink-soft sm:mt-4">
            Open to conversations about Quality Assurance, Full-Cycle
            engineering, and Forward Deployed Engineering work at hSenid Mobile
            Solutions and beyond.
          </p>
        </motion.div>

        <ul className="mt-10 space-y-0 sm:mt-12">
          {links.map((l, i) => {
            const inner = (
              <>
                <span className="w-24 shrink-0 text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase sm:w-28 sm:text-xs">
                  {l.label}
                </span>
                <span
                  className={`font-display text-base break-all text-ink sm:text-lg lg:text-xl ${l.href ? 'transition group-hover:text-signal-deep' : ''}`}
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
                    className="group flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-8 sm:py-4"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-8 sm:py-4">
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
          className="btn-secondary mt-10 w-full sm:mt-12 sm:w-auto"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={sectionView}
          transition={sectionTransition(0.2)}
        >
          Download CV
        </motion.a>

        <p className="mt-12 text-[0.7rem] text-ink-soft/80 sm:mt-16 sm:text-xs">
          © {new Date().getFullYear()} Kanistan Raseswaran · hSenid Mobile
          Solutions · Ariyalai, Jaffna · Wellawatte, Colombo
        </p>
      </div>
    </section>
  )
}
