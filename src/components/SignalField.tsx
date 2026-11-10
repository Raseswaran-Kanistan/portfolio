/** Quiet atmospheric field — no route line cutting through content. */
export function SignalField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_12%,#d7ebe8_0%,transparent_48%),radial-gradient(ellipse_at_88%_20%,#c9d9e8_0%,transparent_42%),linear-gradient(165deg,#f3f7f9_0%,#e4eef3_52%,#d5e4ee_100%)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={60 + i * 70}
            x2="1440"
            y2={60 + i * 70}
            stroke="#0a1f2e"
            strokeOpacity="0.035"
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
            strokeOpacity="0.03"
          />
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper to-transparent" />
    </div>
  )
}
