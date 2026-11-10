import { motion } from 'framer-motion'
import { easeOut } from '../lib/motion'
import { SignalField } from './SignalField'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-12 pt-[4.5rem] sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      <SignalField />

      <div className="section-pad relative z-10 w-full max-w-3xl">
        <motion.p
          className="font-display mb-4 text-[clamp(2rem,8.5vw,4.25rem)] leading-[1.1] text-ink text-balance sm:mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          Kanistan
          <br />
          Raseswaran
        </motion.p>

        <motion.div
          className="max-w-xl space-y-2.5 sm:space-y-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
        >
          <h1 className="text-base font-medium tracking-tight text-ink sm:text-lg lg:text-xl">
            Associate Full-Cycle Engineer
          </h1>
          <p className="text-sm font-medium text-ink-soft sm:text-[0.95rem]">
            hSenid Mobile Solutions
          </p>
          <p className="body-copy text-ink-soft">
            Dedicated Quality Assurance Engineer · Trained Forward Deployed
            Engineer
          </p>
          <p className="body-copy max-w-md text-ink-soft/90">
            I keep CPaaS releases reliable — API, UI, data validation, and
            production implementation — with Forward Deployed Engineering
            training for client-facing delivery.
          </p>
          <p className="pt-1 text-[0.65rem] tracking-[0.12em] text-ink-soft uppercase sm:text-xs">
            Ariyalai, Jaffna · Wellawatte, Colombo
          </p>
        </motion.div>

        <motion.div
          className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: easeOut }}
        >
          <a href="#work" className="btn-primary w-full sm:w-auto">
            See the work
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
