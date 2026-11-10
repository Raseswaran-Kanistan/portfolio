import { motion, useReducedMotion } from 'framer-motion'

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
    <section className="bg-mist/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-signal-deep uppercase">
            Credibility
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Signals that hold up under scrutiny.
          </h2>
        </motion.div>

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.li
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="border-t border-ink/15 pt-5"
            >
              <p className="text-xs tracking-[0.16em] text-ink-soft uppercase">
                {item.label}
              </p>
              <p className="font-display mt-2 text-xl font-bold text-ink">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{item.detail}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
