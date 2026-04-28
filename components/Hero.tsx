'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight } from '@phosphor-icons/react'

const TOTAL_FRAMES = 130

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const framesRef = useRef<HTMLImageElement[]>([])
  const loadedRef = useRef<boolean[]>(Array.from({ length: TOTAL_FRAMES }, () => false))
  const lastFrameRef = useRef(-1)
  const scrollProgress = useMotionValue(0)

  const indicatorOpacity = useTransform(scrollProgress, [0, 0.08], [1, 0])
  const barWidth = useTransform(scrollProgress, [0, 1], ['0%', '100%'])

  // Progressive reveal — mobile (legato allo scroll)
  const labelOpacity = useTransform(scrollProgress, [0.05, 0.20], [0, 1])
  const labelY = useTransform(scrollProgress, [0.05, 0.20], [12, 0])
  const subtitleOpacity = useTransform(scrollProgress, [0.18, 0.35], [0, 1])
  const subtitleY = useTransform(scrollProgress, [0.18, 0.35], [12, 0])
  const ctasOpacity = useTransform(scrollProgress, [0.30, 0.48], [0, 1])
  const ctasY = useTransform(scrollProgress, [0.30, 0.48], [12, 0])
  const mobileScrollHintOpacity = useTransform(scrollProgress, [0, 0.04], [1, 0])
  // Franca H1 — parte grande e si rimpicciolisce mentre gli altri elementi appaiono
  const mobileH1Scale = useTransform(scrollProgress, [0, 0.45], [1.55, 1])
  const desktopH1Scale = useTransform(scrollProgress, [0, 0.45], [1.35, 1])
  const desktopH1X = useTransform(scrollProgress, [0, 0.45], ['5vw', '0vw'])

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    const img = framesRef.current[index]
    if (!canvas || !img || !loadedRef.current[index]) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const cw = canvas.width
    const ch = canvas.height
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
    const sw = img.naturalWidth * scale
    const sh = img.naturalHeight * scale
    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh)
  }

  // Preload frames
  useEffect(() => {
    const frames: HTMLImageElement[] = []
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image()
      const num = String(i + 1).padStart(3, '0')
      img.src = `/frames/frame-${num}.webp`
      const idx = i
      img.onload = () => {
        loadedRef.current[idx] = true
        if (idx === 0) drawFrame(0)
      }
      frames.push(img)
    }
    framesRef.current = frames
  }, [])

  // Canvas size sync
  const syncCanvasSize = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr
  }

  // RAF scroll loop
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    syncCanvasSize()

    let running = true

    const tick = () => {
      if (!running) return
      const rect = section.getBoundingClientRect()
      const maxScroll = section.offsetHeight - window.innerHeight
      if (maxScroll > 0) {
        const progress = Math.max(0, Math.min(1, -rect.top / maxScroll))
        scrollProgress.set(progress)
        const frameIndex = Math.round(progress * (TOTAL_FRAMES - 1))
        if (frameIndex !== lastFrameRef.current) {
          drawFrame(frameIndex)
          lastFrameRef.current = frameIndex
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const onResize = () => {
      syncCanvasSize()
      drawFrame(Math.max(0, lastFrameRef.current))
    }
    window.addEventListener('resize', onResize)

    return () => {
      running = false
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [scrollProgress])

  return (
    <section ref={sectionRef} className="h-[200vh] lg:h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Mobile top — orange */}
        <div className="lg:hidden absolute top-0 inset-x-0 h-[62%] bg-[#ff462e] flex flex-col justify-center px-6 pt-16 pb-5 z-10">
          <motion.p
            style={{ opacity: labelOpacity, y: labelY }}
            className="text-[0.62rem] text-white/55 font-bold tracking-[0.2em] uppercase mb-6"
          >
            Agenzia di Marketing
          </motion.p>
          <motion.h1
            style={{ scale: mobileH1Scale, transformOrigin: '0% 50%' }}
            className="text-[clamp(3.8rem,16vw,5.5rem)] font-bold tracking-tighter leading-[0.88] mb-4"
          >
            <span className="text-white">Franca</span>
            <span style={{ color: '#3626A7' }}>.</span>
          </motion.h1>
          <motion.p
            style={{ opacity: subtitleOpacity, y: subtitleY }}
            className="text-white/70 text-[0.82rem] leading-snug mb-7 max-w-[28ch]"
          >
            La maggior parte del marketing si dimentica in 24 ore.<br />
            Noi facciamo marketing che resta.
          </motion.p>
          <motion.div
            style={{ opacity: ctasOpacity, y: ctasY }}
            className="flex gap-2.5"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-1.5 bg-white text-[#090909] px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#090909] hover:text-white transition-all duration-300 active:scale-[0.98]"
            >
              I nostri lavori <ArrowRight size={12} weight="bold" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-medium border border-white/30 text-white hover:bg-white/10 transition-all duration-300 active:scale-[0.98]"
            >
              Inizia un progetto
            </a>
          </motion.div>
        </div>

        {/* Mobile scroll hint */}
        <motion.div
          style={{ opacity: mobileScrollHintOpacity }}
          className="lg:hidden absolute left-1/2 -translate-x-1/2 bottom-[40%] flex flex-col items-center gap-1.5 text-white/70 z-20 pointer-events-none"
        >
          <span className="text-[0.55rem] tracking-[0.25em] uppercase font-bold">Scorri</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} weight="bold" />
          </motion.div>
        </motion.div>

        {/* Mobile bottom + Desktop right — canvas panel */}
        <div className="
          absolute bottom-0 inset-x-0 h-[38%] bg-[#090909]
          lg:top-0 lg:h-full lg:left-[42%] lg:right-0
        ">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Desktop: red left panel */}
        <div className="hidden lg:flex absolute inset-y-0 left-0 w-[42%] bg-[#ff462e] flex-col justify-center px-10 xl:px-14 pt-28 pb-10">
          <div>
            <motion.p
              style={{ opacity: labelOpacity, y: labelY }}
              className="text-[0.68rem] text-white/55 font-bold tracking-[0.2em] uppercase mb-8"
            >
              Agenzia di Marketing
            </motion.p>
            <motion.h1
              style={{ scale: desktopH1Scale, x: desktopH1X, transformOrigin: '50% 50%' }}
              className="text-[clamp(4.5rem,8vw,9rem)] font-bold tracking-tighter leading-[0.88] mb-6"
            >
              <span className="text-white">Franca</span>
              <span style={{ color: '#3626A7' }}>.</span>
            </motion.h1>
            <motion.p
              style={{ opacity: subtitleOpacity, y: subtitleY }}
              className="text-white/70 text-[1rem] leading-snug mb-10 max-w-[32ch]"
            >
              La maggior parte del marketing si dimentica in 24 ore.<br />
              Noi facciamo marketing che resta — nella testa e nel cuore delle persone.
            </motion.p>
            <motion.div
              style={{ opacity: ctasOpacity, y: ctasY }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-white text-[#090909] px-6 py-3.5 rounded-full text-sm font-bold hover:bg-[#090909] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] group"
              >
                Guarda i nostri lavori
                <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 rounded-full text-sm font-medium hover:border-white hover:bg-white/10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
              >
                Inizia un progetto
              </a>
            </motion.div>
          </div>
        </div>

        {/* Desktop scroll indicator — sul pannello arancione */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="hidden lg:flex absolute bottom-10 left-10 xl:left-14 flex-row items-center gap-3 text-white/80 z-20"
        >
          <span className="text-[0.6rem] tracking-[0.25em] uppercase font-bold">Scorri</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} weight="bold" />
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-50 hero-progress-track">
          <motion.div
            style={{ width: barWidth }}
            className="h-full origin-left hero-progress-fill"
          />
        </div>

      </div>
    </section>
  )
}
