'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  value: string
  duration?: number
  className?: string
}

export default function Counter({ value, duration = 1500, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState<string>(value)

  // Estrae numero leading e suffisso
  const match = value.match(/^(\d+)(.*)$/)
  const targetNumber = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (!inView || targetNumber === null) {
      setDisplay(value)
      return
    }

    const startTime = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(1, elapsed / duration)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(targetNumber * eased)
      setDisplay(`${current}${suffix}`)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, targetNumber, suffix, duration, value])

  return <span ref={ref} className={className}>{display}</span>
}
