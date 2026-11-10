import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, sectionTransition, sectionView } from '../lib/motion'

const steps = [
  {
    n: '01',
    title: 'Test',
    body: 'Manual, functional, regression, API, and load coverage with clear cases and defect trails.',
  },
  {
    n: '02',
    title: 'Validate',
    body: 'Backend integrity checks in MySQL and MongoDB — sessions, transactions, and query truth.',
  },
  {
    n: '03',
    title: 'Ship',
    body: 'Production implementation for multi-tenant CPaaS platforms with configuration discipline.',
  },
  {
    n: '04',
    title: 'Monitor',
    body: 'Post-release stability verification so issues surface before customers do.',
  },
]

export function Approach() {
  const reduce = useReducedMotion()

  return (
    <section
      id="approach"
      className="section-y relative overflow-hidden bg-ink text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 10% 0%, #1a9e9340 0%, transparent 45%), radial-gradient(ellipse at 90% 80%, #f4a26122 0%, transparent 40%)',
        }}
      />

      <div className="section-pad relative">
        <motion.div
          initial={reduce ? false : fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={sectionView}
          transition={sectionTransition()}
        >
          <p className="section-label text-signal">Approach</p>
          <h2 className="section-title max-w-xl">
            How releases stay trustworthy.
          </h2>
          <p className="body-copy mt-3 max-w-lg text-fog sm:mt-4">
            At hSenid Mobile Solutions — Dedicated Quality Assurance inside a
            Full-Cycle role, with Forward Deployed Engineering training for the
            client edge.
          </p>
        </motion.div>

        <ol className="mt-10 grid gap-7 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={reduce ? false : fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={sectionView}
              transition={sectionTransition(i * 0.08)}
            >
              <p className="font-display text-xs text-signal sm:text-sm">
                {s.n}
              </p>
              <h3 className="mt-2 text-base font-semibold tracking-tight sm:mt-3 sm:text-lg">
                {s.title}
              </h3>
              <p className="body-copy mt-2 text-fog">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-signal/60 to-transparent lg:block" />
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
