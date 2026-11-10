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
      className="fixed inset-x-0 top-0 z-50 border-b border-ink/8 bg-paper/85 backdrop-blur-md"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
    >
      <div className="section-pad flex h-14 items-center justify-end sm:h-16">
        <nav className="flex items-center gap-6 text-sm text-ink-soft sm:gap-8">
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
