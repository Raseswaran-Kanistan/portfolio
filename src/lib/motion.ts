/** Shared motion tokens — keep section entrances aligned. */
export const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
}

export const sectionView = {
  once: true,
  margin: '-80px' as const,
}

export const sectionTransition = (delay = 0) => ({
  duration: 0.55,
  delay,
  ease: easeOut,
})
