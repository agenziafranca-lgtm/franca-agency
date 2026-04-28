'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MESSAGES = [
  '«Il logo più grande.»',
  '«Tipo Apple, ma diverso.»',
  '«Devo essere primo su Google.»',
]

const DURATION_MS = 4500

export default function Preloader() {
  const [shouldShow, setShouldShow] = useState<null | boolean>(null)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (sessionStorage.getItem('franca-preloader-seen')) {
      setShouldShow(false)
      return
    }
    setShouldShow(true)

    document.body.style.overflow = 'hidden'

    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(1, elapsed / DURATION_MS)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        sessionStorage.setItem('franca-preloader-seen', '1')
        setTimeout(() => setIsVisible(false), 350)
      }
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
    }
  }, [])

  // 3 fasi: 0-33%, 33-66%, 66-100%
  const messageIndex = Math.min(MESSAGES.length - 1, Math.floor((progress / 100) * MESSAGES.length))

  if (shouldShow === null || shouldShow === false) return null

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = ''
        document.documentElement.classList.remove('preloader-active')
      }}
    >
      {isVisible && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[10000] bg-[#090909] flex flex-col items-center justify-center px-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(5.5rem,15vw,11rem)] font-bold tracking-tighter leading-none"
          >
            <span className="text-white">Franca</span>
            <span style={{ color: '#3626A7' }}>.</span>
          </motion.div>

          {/* Loading status: messaggio + puntini animati + progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 w-full max-w-[360px] flex flex-col gap-5"
          >
            {/* Messaggio + puntini */}
            <div className="flex items-center justify-center gap-2 h-5 text-white/55 text-[0.65rem] tracking-[0.18em] uppercase font-bold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={messageIndex}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {MESSAGES[messageIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="flex gap-1 items-center pt-1">
                {[0, 0.15, 0.3].map((delay, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay,
                    }}
                    className="w-1 h-1 rounded-full bg-white/70"
                  />
                ))}
              </span>
            </div>

            {/* Barra + percentuale */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/15 overflow-hidden">
                <div
                  className="h-full bg-[#ff462e] origin-left"
                  style={{ transform: `scaleX(${progress / 100})` }}
                />
              </div>
              <span className="text-white/65 text-[0.7rem] font-bold tracking-[0.05em] tabular-nums w-9 text-right">
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
