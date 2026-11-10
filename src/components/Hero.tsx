import { motion } from 'framer-motion'
import { easeOut } from '../lib/motion'
import { SignalField } from './SignalField'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-28"
    >
      <SignalField />

      <div className="section-pad relative z-10 grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.72fr)] lg:gap-14">
        <div>
          <motion.p
            className="font-display mb-5 text-[clamp(2.75rem,8.5vw,5.4rem)] leading-[0.95] tracking-[-0.02em] text-ink text-balance"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            Kanistan
            <br />
            Raseswaran
          </motion.p>

          <motion.div
            className="max-w-xl space-y-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
          >
            <h1 className="text-lg font-medium tracking-tight text-ink sm:text-xl">
              Associate Full-Cycle Engineer
            </h1>
            <p className="text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
              Dedicated Quality Assurance Engineer · Trained Forward Deployed
              Engineer
            </p>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft/90">
              I keep CPaaS releases reliable — API, UI, data validation, and
              production implementation — with Forward Deployed Engineering
              training for client-facing delivery.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: easeOut }}
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

        <motion.div
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none lg:justify-self-end"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: easeOut }}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-mist/80">
            <img
              src={`${import.meta.env.BASE_URL}portrait.jpg`}
              alt="Kanistan Raseswaran"
              width={1100}
              height={1340}
              className="h-full w-full object-cover object-[50%_12%]"
              decoding="async"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-ink/10 ring-inset" />
          </div>
          <p className="mt-3 text-xs tracking-[0.12em] text-ink-soft uppercase">
            Ariyalai, Jaffna · Wellawatte, Colombo
          </p>
        </motion.div>
      </div>
    </section>
  )
}
