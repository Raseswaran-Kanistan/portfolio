import { motion } from 'framer-motion'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-20"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-[0.14em] text-ink uppercase"
        >
          KR
        </a>
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
