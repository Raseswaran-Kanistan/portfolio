import { motion } from 'framer-motion'
import { SignalField } from './SignalField'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <SignalField />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          className="mb-4 font-display text-[clamp(2.6rem,9vw,5.75rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-ink text-balance"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Kanistan
          <br />
          Raseswaran
        </motion.p>

        <motion.div
          className="max-w-xl space-y-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-lg font-medium text-ink sm:text-xl">
            Associate Full-Cycle Engineer
          </h1>
          <p className="text-sm text-ink-soft sm:text-base">
            Dedicated Quality Assurance Engineer · Trained Forward Deployed
            Engineer
          </p>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft/90 sm:text-[0.95rem]">
            I keep CPaaS releases reliable — API, UI, data validation, and
            production implementation — with Forward Deployed Engineering
            training for client-facing delivery.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          <a
            href="#work"
            className="inline-flex items-center bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-ink-soft"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink/50"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
