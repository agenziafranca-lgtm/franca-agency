'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight } from '@phosphor-icons/react'

const stats = [
  { value: '15+', label: 'Clienti serviti' },
  { value: '8', label: 'Attivi ora' },
  { value: '100k+', label: 'Follower organici generati' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)
  const scrollProgress = useMotionValue(0)

  const indicatorOpacity = useTransform(scrollProgress, [0, 0.08], [1, 0])
  const barWidth = useTransform(scrollProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const update = () => {
      const rect = section.getBoundingClientRect()
      const maxScroll = section.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / maxScroll))

      scrollProgress.set(progress)

      if (video.readyState >= 2 && video.duration) {
        const t = progress * video.duration
        const v = video as HTMLVideoElement & { fastSeek?: (t: number) => void }
        if (typeof v.fastSeek === 'function') {
          v.fastSeek(t)
        } else {
          video.currentTime = t
        }
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [scrollProgress])

  return (
    <section ref={sectionRef} className="h-[200vh] lg:h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── MOBILE: stacked layout ────────────────────────
            Top half  → orange panel with wordmark + CTAs
            Bottom half → white panel with video           */}

        {/* Mobile top — orange */}
        <div className="lg:hidden absolute top-0 inset-x-0 h-1/2 bg-[#ff462e] flex flex-col justify-between px-6 pt-20 pb-5 z-10">
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
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold tracking-tighter text-white">{s.value}</div>
                <div className="text-[0.55rem] text-white/50 mt-0.5 tracking-[0.1em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile bottom + Desktop right — video panel */}
        <div className="
          absolute bottom-0 inset-x-0 h-1/2 bg-white
          lg:top-0 lg:h-full lg:left-[42%] lg:right-0
        ">
          <video
            ref={videoRef}
            src="/francahero2.mp4"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* ── DESKTOP: red left panel (42%) ─────────────── */}
        <div className="hidden lg:flex absolute inset-y-0 left-0 w-[42%] bg-[#ff462e] flex-col justify-between px-10 xl:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))] pt-28 pb-10">
          <p className="text-[0.68rem] text-white/55 font-bold tracking-[0.2em] uppercase">
            Agenzia di Marketing
          </p>

          <div>
            <h1 className="text-[clamp(4.5rem,8vw,9rem)] font-bold tracking-tighter leading-[0.88] mb-6">
              <span className="text-white">Franca</span>
              <span style={{ color: '#3626A7' }}>.</span>
            </h1>
            <p className="text-white/70 text-[1rem] leading-snug mb-10 max-w-[32ch]">
              Trasformiamo aziende in brand di cui innamorarsi.<br />
              Non facciamo compitini — costruiamo Brand.
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

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tracking-tighter text-white">{s.value}</div>
                <div className="text-[0.63rem] text-white/50 mt-1 tracking-[0.1em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop scroll indicator ───────────────────── */}
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

        {/* ── Progress bar ───────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#090909]/10 z-50">
          <motion.div
            style={{ width: barWidth }}
            className="h-full bg-[#ff462e] origin-left"
          />
        </div>

      </div>
    </section>
  )
}
