'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

interface Props {
  image: string
  category: string
  client: string
  tagline: string
  liveUrl?: string
}

export default function CaseStudyHero({ image, category, client, tagline, liveUrl }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax: immagine si muove più lenta del contenuto
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.4])

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden">
      {/* Image con ken-burns iniziale + parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={image}
          alt={`Caso studio ${client}, ${category}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/85 via-[#090909]/30 to-transparent" />

      {/* Contenuto con stagger reveal */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute bottom-0 left-0 right-0 p-10 md:p-16 max-w-7xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase block mb-4"
        >
          {category}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-none mb-4"
        >
          {client}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="text-lg md:text-xl text-white/75 font-medium max-w-2xl"
        >
          {tagline}
        </motion.p>

        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="inline-flex items-center gap-2 mt-6 bg-white/10 hover:bg-white border border-white/30 hover:border-white text-white hover:text-[#090909] backdrop-blur-md text-xs font-bold tracking-[0.05em] px-5 py-3 rounded-full transition-all duration-300 group"
          >
            Visita il sito
            <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        )}
      </motion.div>
    </section>
  )
}
