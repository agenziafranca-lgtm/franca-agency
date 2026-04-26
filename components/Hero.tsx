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
        <div className="lg:hidden absolute top-0 inset-x-0 h-[62%] bg-[#ff462e] flex flex-col justify-between px-6 pt-20 pb-5 z-10">
          <p className="text-[0.62rem] text-white/55 font-bold tracking-[0.2em] uppercase">
            Agenzia di Marketing
          </p>
          <div>
            <h1 className="text-[clamp(4rem,17vw,6rem)] font-bold tracking-tighter leading-[0.88] mb-6">
              <span className="text-white">Franca</span>
              <span style={{ color: '#3626A7' }}>.</span>
            </h1>
            <div className="flex gap-2.5">
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
            </div>
          </div>
        </div>

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
        <div className="hidden lg:flex absolute inset-y-0 left-0 w-[42%] bg-[#ff462e] flex-col justify-center px-10 xl:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))] pt-28 pb-10">
          <div>
            <p className="text-[0.68rem] text-white/55 font-bold tracking-[0.2em] uppercase mb-8">
              Agenzia di Marketing
            </p>
            <h1 className="text-[clamp(4.5rem,8vw,9rem)] font-bold tracking-tighter leading-[0.88] mb-6">
              <span className="text-white">Franca</span>
              <span style={{ color: '#3626A7' }}>.</span>
            </h1>
            <p className="text-white/70 text-[1rem] leading-snug mb-10 max-w-[32ch]">
              La maggior parte del marketing si dimentica in 24 ore.<br />
              Noi costruiamo brand che restano — nella testa e nel cuore delle persone.
            </p>
            <div className="flex flex-wrap gap-3">
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
            </div>
          </div>
        </div>

        {/* Desktop scroll indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="hidden lg:flex absolute bottom-10 right-10 flex-col items-center gap-2 text-[#090909]/35 z-20"
        >
          <span className="text-[0.58rem] tracking-[0.2em] uppercase font-medium">Scorri</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={13} />
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
