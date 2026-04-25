'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quotes } from '@phosphor-icons/react'

const testimonials = [
  {
    quote:
      'Franca non ci ha solo ridisegnato il brand — ha ribaltato il nostro posizionamento di mercato. I risultati parlano da soli.',
    name: 'Riccardo Servi',
    role: 'CEO, Bottega Minerva',
    image: 'https://picsum.photos/seed/test-riccardo-s/200/200',
    featured: true,
  },
  {
    quote:
      'Il loro approccio allo storytelling B2B è diverso da tutto quello che abbiamo visto. Rigoroso, strategico, genuinamente creativo. Zero cliché.',
    name: 'Valentina Croci',
    role: 'Partner, Terraferma Capital',
    image: 'https://picsum.photos/seed/test-valentina-c/200/200',
    featured: false,
  },
  {
    quote:
      'Siamo passati dai tavoli vuoti il mercoledì sera a una lista d\'attesa di tre mesi. Questo è quello che ha fatto Franca.',
    name: 'Chef Andrea Lombardo',
    role: 'Titolare, Osteria di San Marco',
    image: 'https://picsum.photos/seed/test-andrea-l/200/200',
    featured: false,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#090909]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-5 block">
            Cosa dicono i clienti
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
            I risultati parlano da soli<span style={{ color: '#ff462e' }}>.</span>
          </h2>
        </motion.div>

        {/* Featured quote — full width */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="border-t border-white/10 pt-12 pb-12 mb-0"
        >
          <Quotes size={28} weight="fill" className="text-[#ff462e] mb-7" />
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#eaeaea] leading-snug max-w-4xl mb-10">
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className="w-11 h-11 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-bold text-[#eaeaea]">{testimonials[0].name}</div>
              <div className="text-xs text-[#6b6b6b] mt-0.5">{testimonials[0].role}</div>
            </div>
          </div>
        </motion.div>

        {/* Two smaller quotes side by side */}
        <div className="border-t border-white/10 grid grid-cols-1 md:grid-cols-2 md:divide-x divide-white/10">
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 + i * 0.1 }}
              className="pt-10 pb-10 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              <Quotes size={20} weight="fill" className="text-[#ff462e] mb-5" />
              <blockquote className="text-[#6b6b6b] leading-relaxed mb-8 text-[0.92rem] max-w-[44ch]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-bold text-[#eaeaea]">{t.name}</div>
                  <div className="text-[0.72rem] text-[#6b6b6b] mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
