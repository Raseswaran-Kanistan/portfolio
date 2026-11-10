import { motion } from 'framer-motion'
import { easeOut } from '../lib/motion'
import { SignalField } from './SignalField'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28"
    >
      <SignalField />

      <div className="section-pad relative z-10 grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-16">
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
            <p className="pt-1 text-xs tracking-[0.12em] text-ink-soft uppercase">
              Ariyalai, Jaffna · Wellawatte, Colombo
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
          className="relative mx-auto w-[220px] sm:w-[260px] lg:mx-0 lg:w-full"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.16, ease: easeOut }}
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-full bg-mist ring-1 ring-ink/15">
            <img
              src={`${import.meta.env.BASE_URL}portrait.jpg`}
              alt="Kanistan Raseswaran"
              width={1000}
              height={1000}
              className="h-full w-full scale-110 object-cover object-center"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
