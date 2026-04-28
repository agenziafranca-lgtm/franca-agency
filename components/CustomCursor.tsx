'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type HoverState = 'default' | 'interactive' | 'card'
type BgMode = 'light' | 'dark' | 'orange'

function detectBgMode(el: HTMLElement | null): BgMode {
  let current: HTMLElement | null = el
  while (current && current !== document.body) {
    const style = window.getComputedStyle(current)
    const bg = style.backgroundColor
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
    if (match) {
      const r = parseInt(match[1])
      const g = parseInt(match[2])
      const b = parseInt(match[3])
      const a = match[4] ? parseFloat(match[4]) : 1
      if (a > 0.4) {
        // Arancione brand-ish (high red, low green/blue)
        if (r > 200 && g < 150 && b < 110) return 'orange'
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
        return luminance < 0.45 ? 'dark' : 'light'
      }
    }
    current = current.parentElement
  }
  return 'light'
}

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoverState, setHoverState] = useState<HoverState>('default')
  const [bgMode, setBgMode] = useState<BgMode>('light')
  const [isOnPage, setIsOnPage] = useState(true)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const ringX = useSpring(dotX, { damping: 28, stiffness: 220, mass: 0.5 })
  const ringY = useSpring(dotY, { damping: 28, stiffness: 220, mass: 0.5 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mq.matches) return

    setIsVisible(true)
    document.documentElement.classList.add('custom-cursor-active')

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    let bgTimeout: ReturnType<typeof setTimeout> | null = null

    const checkHover = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (!target || !target.closest) return

      // Hover state
      if (target.closest('a[href^="/work/"]')) {
        setHoverState('card')
      } else if (target.closest('a, button, [role="button"], summary')) {
        setHoverState('interactive')
      } else {
        setHoverState('default')
      }

      // Bg detection — immediato + ritardato (per hover transitions)
      setBgMode(detectBgMode(target))
      if (bgTimeout) clearTimeout(bgTimeout)
      bgTimeout = setTimeout(() => {
        setBgMode(detectBgMode(target))
      }, 275)
    }

    const onEnter = () => setIsOnPage(true)
    const onLeave = () => setIsOnPage(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', checkHover)
    document.documentElement.addEventListener('mouseenter', onEnter)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', checkHover)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      if (bgTimeout) clearTimeout(bgTimeout)
    }
  }, [dotX, dotY])

  if (!isVisible) return null

  const ringSize = hoverState === 'card' ? 84 : 32
  const dotSize = hoverState === 'interactive' ? 8 : 6

  // Color mapping basato su bg + hover state
  let dotColor = '#090909'
  let ringColor = 'rgba(9,9,9,0.35)'

  if (hoverState === 'interactive') {
    if (bgMode === 'orange') {
      dotColor = '#ffffff'
      ringColor = '#ffffff'
    } else {
      dotColor = '#ff462e'
      ringColor = '#ff462e'
    }
  } else {
    if (bgMode === 'dark') {
      dotColor = '#ffffff'
      ringColor = 'rgba(255,255,255,0.55)'
    } else if (bgMode === 'orange') {
      dotColor = '#ffffff'
      ringColor = 'rgba(255,255,255,0.6)'
    } else {
      dotColor = '#090909'
      ringColor = 'rgba(9,9,9,0.35)'
    }
  }

  return (
    <>
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY, opacity: isOnPage ? 1 : 0 }}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        transition={{ opacity: { duration: 0.2 } }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 relative rounded-full"
          animate={{
            width: ringSize,
            height: ringSize,
            borderWidth: hoverState === 'card' ? 0 : 1.5,
            borderColor: ringColor,
            backgroundColor: hoverState === 'card' ? '#ff462e' : 'transparent',
          }}
          transition={{
            width: { type: 'spring', stiffness: 280, damping: 22 },
            height: { type: 'spring', stiffness: 280, damping: 22 },
            borderColor: { duration: 0.2 },
            backgroundColor: { duration: 0.2 },
            borderWidth: { duration: 0.2 },
          }}
          style={{ borderStyle: 'solid' }}
        >
          {hoverState === 'card' && (
            <span className="absolute inset-0 flex items-center justify-center text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white whitespace-nowrap">
              Scopri →
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, opacity: isOnPage ? 1 : 0 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        <motion.div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: dotSize,
            height: dotSize,
            backgroundColor: dotColor,
            opacity: hoverState === 'card' ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  )
}
