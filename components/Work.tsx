'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { cases as allCases } from '@/lib/cases'

export default function Work() {
  const trackRef = useRef<HTMLDivElement>(null)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    const cardWidth = card?.offsetWidth ?? track.offsetWidth * 0.7
    const gap = 24
    track.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
  }

  return (
    <section id="work" className="py-24 md:py-28 bg-[#eaeaea] overflow-hidden">

      {/* Header + nav buttons */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 md:mb-16 flex items-end justify-between gap-6">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-5 block">
            Lavori selezionati
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#090909] leading-tight">
            Lavori che ci<br />somigliano<span style={{ color: '#3626A7' }}>.</span>
          </h2>
        </motion.div>

        {/* Prev/Next — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="hidden md:flex gap-2 shrink-0 pb-2"
        >
          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="Caso studio precedente"
            className="w-12 h-12 rounded-full bg-white border border-[#dcdcdc] hover:bg-[#090909] hover:text-white hover:border-[#090909] transition-all duration-300 flex items-center justify-center active:scale-[0.95]"
          >
            <ArrowLeft size={16} weight="bold" />
          </button>
          <button
            onClick={() => scrollByAmount(1)}
            aria-label="Caso studio successivo"
            className="w-12 h-12 rounded-full bg-[#090909] text-white hover:bg-[#ff462e] transition-all duration-300 flex items-center justify-center active:scale-[0.95]"
          >
            <ArrowRight size={16} weight="bold" />
          </button>
        </motion.div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="hide-scrollbar flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-4 px-6 md:px-10 touch-pan-x overscroll-x-contain"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {allCases.map((c, i) => (
          <CaseCard key={c.slug} item={c} index={i} />
        ))}
        {/* Spacer per permettere all'ultima card di scorrere correttamente */}
        <div aria-hidden="true" className="shrink-0 w-2 md:w-6" />
      </div>


    </section>
  )
}

function CaseCard({ item, index }: { item: typeof allCases[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: Math.min(index * 0.06, 0.4) }}
      className="shrink-0 snap-start w-[78vw] sm:w-[68vw] md:w-[58vw] lg:w-[52vw] xl:w-[640px] max-w-[720px]"
    >
      <Link href={`/work/${item.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#dcdcdc]">
          <img
            src={item.cardImage}
            alt={item.client}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/70 via-[#090909]/10 to-transparent" />

          {/* Top right: arrow circle */}
          <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] scale-90 group-hover:scale-100 shadow-lg">
            <ArrowUpRight size={18} weight="bold" className="text-[#090909]" />
          </div>

          {/* Bottom: meta */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="text-[0.65rem] text-white/65 tracking-[0.18em] uppercase font-bold block mb-3">
              {item.category}
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-tight mb-2">
              {item.client}
            </h3>
            <p className="text-[0.85rem] md:text-[0.95rem] text-white/85 max-w-[34ch] leading-snug">
              {item.tagline}
            </p>
          </div>
        </div>

        {/* Counter index */}
        <div className="mt-4 flex items-center justify-between text-[0.7rem] text-[#6b6b6b] font-medium tracking-[0.12em] uppercase">
          <span>0{index + 1} / 0{allCases.length}</span>
          <span className="text-[#ff462e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
            Scopri il caso <ArrowUpRight size={11} weight="bold" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
