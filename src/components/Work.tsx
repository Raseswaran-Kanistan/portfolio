import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, sectionTransition, sectionView } from '../lib/motion'

const projects = [
  {
    tag: 'Current role',
    title: 'CPaaS quality & production implementation',
    blurb:
      'Full-cycle assurance for high-availability SMS, voice, and cloud communication APIs — functional, regression, API, and UI testing, plus post-release monitoring and stability verification.',
    meta: 'hSenid Mobile Solutions · Associate Full-Cycle Engineer',
  },
  {
    tag: 'Forward Deployed Engineering',
    title: 'Yathra — Travel Plan Creation',
    blurb:
      'Sri Lanka public-transit planning product: conversational journey planning, agent workflows, and Cloud Run delivery. Built under Forward Deployed Engineering training for real client-facing systems.',
    meta: 'GitHub · Raseswaran-Kanistan/Travel-Plan-Creation',
    href: 'https://github.com/Raseswaran-Kanistan/Travel-Plan-Creation',
  },
  {
    tag: 'Research',
    title: 'Behavioural analysis for money laundering in Bitcoin',
    blurb:
      'Machine learning with time-based transaction features and explainable AI (SHAP) to surface suspicious cryptocurrency activity. Published at IEEE ICBC 2025, Pisa.',
    meta: 'IEEE ICBC 2025 · doi:10.1109/ICBC64466.2025.11185094',
    href: 'https://doi.org/10.1109/ICBC64466.2025.11185094',
  },
]

export function Work() {
  const reduce = useReducedMotion()

  return (
    <section id="work" className="section-y relative bg-paper">
      <div className="section-pad">
        <motion.div
          initial={reduce ? false : fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={sectionView}
          transition={sectionTransition()}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-signal-deep uppercase">
            Selected work
          </p>
          <h2 className="font-display max-w-2xl text-3xl tracking-tight text-ink sm:text-4xl">
            Proof over polish — releases, products, research.
          </h2>
        </motion.div>

        <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="grid gap-4 py-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:gap-10"
              initial={reduce ? false : fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={sectionView}
              transition={sectionTransition(i * 0.07)}
            >
              <div>
                <p className="text-xs tracking-[0.16em] text-ink-soft uppercase">
                  {p.tag}
                </p>
                <h3 className="font-display mt-3 text-xl text-ink sm:text-2xl">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-4 transition hover:underline"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="mt-3 text-xs text-ink-soft">{p.meta}</p>
              </div>
              <p className="max-w-prose text-sm leading-relaxed text-ink-soft sm:pt-6 sm:text-[0.95rem]">
                {p.blurb}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
