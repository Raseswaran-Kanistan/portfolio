import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, sectionTransition, sectionView } from '../lib/motion'

const items = [
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
    value: 'B.Sc. Computer Science',
    detail: 'University of Jaffna · Honours · GPA 3.18 / 4.00',
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
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-signal-deep uppercase">
            Credibility
          </p>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Signals that hold up under scrutiny.
          </h2>
        </motion.div>

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.li
              key={item.label}
              initial={reduce ? false : fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={sectionView}
              transition={sectionTransition(i * 0.06)}
              className="border-t border-ink/15 pt-5"
            >
              <p className="text-xs tracking-[0.16em] text-ink-soft uppercase">
                {item.label}
              </p>
              <p className="font-display mt-2 text-xl text-ink">{item.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.detail}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
