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

      <div className="section-pad relative z-10 grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:gap-16">
        <div>
          <motion.p
            className="font-display mb-5 text-[clamp(2.5rem,7.5vw,4.75rem)] leading-[1.05] text-ink text-balance"
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
          className="relative mx-auto flex w-full max-w-[220px] flex-col items-center sm:max-w-[240px] lg:mx-0 lg:mb-2 lg:justify-self-end"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.16, ease: easeOut }}
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-full bg-mist shadow-[0_0_0_1px_rgba(10,31,46,0.12)]">
            <img
              src={`${import.meta.env.BASE_URL}portrait.jpg`}
              alt="Kanistan Raseswaran"
              width={900}
              height={900}
              className="h-full w-full scale-[1.08] object-cover object-[50%_28%]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <p className="mt-4 text-center text-xs tracking-[0.12em] text-ink-soft uppercase">
            Ariyalai, Jaffna
            <br />
            Wellawatte, Colombo
          </p>
        </motion.div>
      </div>
    </section>
  )
}
