import { motion } from 'framer-motion'
import { easeOut } from '../lib/motion'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-20"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
    >
      <div className="section-pad flex items-center justify-end py-5">
        <nav className="flex items-center gap-6 text-sm text-ink-soft">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
