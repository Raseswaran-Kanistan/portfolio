import { motion } from 'framer-motion'

/** Full-bleed atmospheric field: route hops + pulse — the hero visual plane. */
export function SignalField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,#d7ebe8_0%,transparent_50%),radial-gradient(ellipse_at_85%_30%,#c9d9e8_0%,transparent_45%),linear-gradient(165deg,#f3f7f9_0%,#dce8ef_48%,#c5d8e4_100%)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="route" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2ec4b6" stopOpacity="0" />
            <stop offset="35%" stopColor="#2ec4b6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f4a261" stopOpacity="0.9" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint grid */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={60 + i * 70}
            x2="1440"
            y2={60 + i * 70}
            stroke="#0a1f2e"
            strokeOpacity="0.04"
          />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 90}
            y1="0"
            x2={40 + i * 90}
            y2="900"
            stroke="#0a1f2e"
            strokeOpacity="0.035"
          />
        ))}

        <motion.path
          d="M80 640 C 280 620, 320 420, 520 400 S 780 520, 920 340 S 1180 180, 1360 220"
          fill="none"
          stroke="url(#route)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#softGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.path
          d="M120 720 C 340 700, 400 540, 600 560 S 860 680, 1040 500 S 1240 360, 1400 400"
          fill="none"
          stroke="#0a1f2e"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, delay: 0.25, ease: 'easeOut' }}
        />

        {[
          [520, 400],
          [920, 340],
          [1360, 220],
        ].map(([cx, cy], i) => (
          <motion.g
            key={`${cx}-${cy}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1 + i * 0.22, type: 'spring', stiffness: 220 }}
          >
            <circle cx={cx} cy={cy} r="7" fill="#0a1f2e" />
            <circle cx={cx} cy={cy} r="3.5" fill={i === 2 ? '#f4a261' : '#2ec4b6'} />
            <motion.circle
              cx={cx}
              cy={cy}
              r="7"
              fill="none"
              stroke={i === 2 ? '#f4a261' : '#2ec4b6'}
              strokeWidth="1.5"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.4, opacity: 0 }}
              transition={{
                duration: 2.2,
                delay: 1.4 + i * 0.35,
                repeat: Infinity,
                repeatDelay: 1.2,
              }}
            />
          </motion.g>
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent" />
    </div>
  )
}
