import { motion, useReducedMotion } from 'framer-motion'

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
    <section id="approach" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 10% 0%, #1a9e9340 0%, transparent 45%), radial-gradient(ellipse at 90% 80%, #f4a26122 0%, transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-signal uppercase">
            Approach
          </p>
          <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            How releases stay trustworthy.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-fog">
            Dedicated Quality Assurance inside a Full-Cycle role — then Forward
            Deployed Engineering training for the client edge.
          </p>
        </motion.div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-sm font-bold text-signal">{s.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{s.body}</p>
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
