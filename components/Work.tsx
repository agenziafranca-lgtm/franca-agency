'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'
import { cases as allCases } from '@/lib/cases'

const cases = allCases.map((c) => ({
  slug: c.slug,
  client: c.client,
  category: c.category,
  result: c.tagline,
  description: c.challenge.slice(0, 160) + '…',
  image: c.cardImage,
}))

function CaseCard({
  item,
  delay = 0,
}: {
  item: (typeof cases)[0]
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  // Tilt 3D — desktop only (controllato via canHover)
  const [canHover, setCanHover] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotX = useSpring(useTransform(mouseY, [-0.5, 0.5], ['5deg', '-5deg']), {
    stiffness: 300,
    damping: 30,
  })
  const rotY = useSpring(useTransform(mouseX, [-0.5, 0.5], ['-5deg', '5deg']), {
    stiffness: 300,
    damping: 30,
  })

  // Detect hover capability
  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: canHover ? rotX : 0, rotateY: canHover ? rotY : 0, transformPerspective: 1200 }}
      className="relative"
    >
      <Link href={`/work/${item.slug}`} className="group block overflow-hidden rounded-2xl bg-[#eaeaea] cursor-pointer">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={item.image}
            alt={item.client}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/65 via-[#090909]/10 to-transparent" />

          <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100">
            <ArrowUpRight size={18} weight="bold" className="text-[#090909]" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="text-[0.65rem] text-white/55 tracking-[0.15em] uppercase font-medium block mb-2">
              {item.category}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">{item.client}</h3>
          </div>
        </div>

        <div className="p-6 bg-[#eaeaea]">
          <p className="text-[0.85rem] text-[#6b6b6b] leading-relaxed mb-3">{item.description}</p>
          <div className="text-[0.8rem] font-bold text-[#ff462e]">{item.result}</div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Work() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="work" className="py-28 bg-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-5 block">
            Lavori selezionati
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#090909] leading-tight">
            Brand costruiti<br />insieme<span style={{ color: '#3626A7' }}>.</span>
          </h2>
        </motion.div>

        {/* Asymmetric bento grid — alternating [2fr 1fr] / [1fr 2fr] */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            <CaseCard item={cases[0]} delay={0} />
            <CaseCard item={cases[1]} delay={0.1} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
            <CaseCard item={cases[2]} delay={0.05} />
            <CaseCard item={cases[3]} delay={0.15} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            <CaseCard item={cases[4]} delay={0} />
            <CaseCard item={cases[5]} delay={0.1} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
            <CaseCard item={cases[6]} delay={0.05} />
            <CaseCard item={cases[7]} delay={0.15} />
          </div>
        </div>
      </div>
    </section>
  )
}
