import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, sectionTransition, sectionView } from '../lib/motion'

const items = [
  {
    label: 'Company',
    value: 'hSenid Mobile Solutions',
    detail:
      'Associate Full-Cycle Engineer — Dedicated Quality Assurance and production implementation',
  },
  {
    label: 'Publication',
    value: 'IEEE ICBC 2025',
    detail: 'Behavioural analysis for money laundering in the Bitcoin network',
  },
  {
    label: 'Training',
    value: 'Forward Deployed Engineer',
    detail: 'hSenid Mobile Solutions — client-facing delivery track',
  },
  {
    label: 'Security',
    value: 'ISO 27001:2022',
    detail: 'Internal security auditor across systems and platform operations',
  },
  {
    label: 'Education',
    value: 'B.Sc. Honours in Computer Science',
    detail: 'University of Jaffna · GPA 3.18 / 4.00',
  },
]

export function Credibility() {
  const reduce = useReducedMotion()

  return (
    <section className="section-y bg-mist/50">
      <div className="section-pad">
        <motion.div
          initial={reduce ? false : fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={sectionView}
          transition={sectionTransition()}
        >
          <p className="section-label text-signal-deep">Credibility</p>
          <h2 className="section-title text-ink">
            Signals that hold up under scrutiny.
          </h2>
        </motion.div>

        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10">
          {items.map((item, i) => (
            <motion.li
              key={item.label}
              initial={reduce ? false : fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={sectionView}
              transition={sectionTransition(i * 0.06)}
              className="border-t border-ink/15 pt-4 sm:pt-5"
            >
              <p className="text-[0.65rem] tracking-[0.16em] text-ink-soft uppercase sm:text-xs">
                {item.label}
              </p>
              <p className="font-display mt-1.5 text-lg text-ink sm:mt-2 sm:text-xl">
                {item.value}
              </p>
              <p className="body-copy mt-2 text-ink-soft">{item.detail}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
