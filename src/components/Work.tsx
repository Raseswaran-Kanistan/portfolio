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
      'Sri Lanka public-transit planning product: conversational journey planning, agent workflows, and Cloud Run delivery. Built at hSenid Mobile Solutions under Forward Deployed Engineering training.',
    meta: 'hSenid Mobile Solutions · Live demo (registration required)',
    href: 'https://travel-plan-creation-wviq3jiw7a-uc.a.run.app',
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
          <p className="section-label text-signal-deep">Selected work</p>
          <h2 className="section-title max-w-2xl text-ink">
            Proof over polish — releases, products, research.
          </h2>
        </motion.div>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10 sm:mt-14">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="grid gap-3 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:gap-8 sm:py-10 lg:gap-10"
              initial={reduce ? false : fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={sectionView}
              transition={sectionTransition(i * 0.07)}
            >
              <div>
                <p className="text-[0.65rem] tracking-[0.16em] text-ink-soft uppercase sm:text-xs">
                  {p.tag}
                </p>
                <h3 className="font-display mt-2 text-lg text-ink sm:mt-3 sm:text-xl lg:text-2xl">
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
                <p className="mt-2 text-[0.7rem] leading-snug text-ink-soft sm:mt-3 sm:text-xs">
                  {p.meta}
                </p>
              </div>
              <p className="body-copy max-w-prose text-ink-soft sm:pt-5">
                {p.blurb}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
