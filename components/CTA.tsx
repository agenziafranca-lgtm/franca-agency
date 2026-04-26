'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-32 border-t border-[#eaeaea]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-6xl xl:text-[4.5rem] font-bold tracking-tighter text-[#090909] leading-none mb-10">
              Non cerchiamo clienti. Cerchiamo brand in cui credere<span style={{ color: '#3626A7' }}>.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="mailto:mail@agenziafranca.it"
                className="inline-flex items-center gap-2.5 bg-[#090909] text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-[#ff462e] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] group"
              >
                Inizia un progetto
                <ArrowRight
                  size={15}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="mailto:mail@agenziafranca.it"
                className="text-sm text-[#6b6b6b] hover:text-[#090909] transition-colors duration-200"
              >
                mail@agenziafranca.it
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
          >
            <div className="text-[0.7rem] text-[#6b6b6b] tracking-[0.18em] uppercase mb-5">
              Di solito rispondiamo entro
            </div>
            <div className="text-5xl font-bold tracking-tighter text-[#090909] mb-5">
              24 ore<span style={{ color: '#ff462e' }}>.</span>
            </div>
            <p className="text-[0.88rem] text-[#6b6b6b] leading-relaxed max-w-[36ch]">
              Seguiamo da 4 a 6 nuovi clienti all'anno. Non eseguiamo ordini — costruiamo partnership. Se vuoi crescere davvero, parliamoci prima che si esaurisca la disponibilità.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
