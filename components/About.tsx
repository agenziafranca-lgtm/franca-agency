'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    label: 'Storie come veicolo di emozioni',
    text: 'Il cervello non elabora elenchi puntati. Elabora narrazioni. Ogni cosa che creiamo parte da una storia — quella del vostro brand, non dal nostro template.',
  },
  {
    label: 'Emozione prima dell\'informazione',
    text: 'Prima di creare qualsiasi cosa ci chiediamo: "Cosa voglio che questa persona senta?". Non cosa voglio che sappia. L\'emozione è la strategia.',
  },
  {
    label: 'Empatia nel marketing',
    text: 'Non siete un numero. Il nostro successo è legato al vostro — e non vi diremo sempre di sì. Il nostro giudizio è il vostro primo risparmio.',
  },
]

const metrics = [
  { value: '15+', label: 'Brand costruiti' },
  { value: '100k+', label: 'Follower organici senza ads' },
  { value: '6', label: 'Settori diversi' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start" ref={ref}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-6 block">
              Chi è Franca
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tighter text-[#090909] leading-tight mb-8">
              La nostra<br />dichiarazione<br />di indipendenza<span style={{ color: '#3626A7' }}>.</span>
            </h2>

            <div className="space-y-5 text-[#6b6b6b] leading-relaxed text-[0.95rem] max-w-[56ch]">
              <p>
                Franca nasce dalla frustrazione di Alessandro Viappiani e Matteo Novelli per un modo di fare marketing che aveva perso il senso. Eseguire compiti meccanicamente, senza capirne lo scopo. Il pilota automatico professionale.
              </p>
              <p>
                Alessandro viene dal mondo del web e della strategia digitale: anni a costruire sistemi che funzionano, misurare quello che conta, tradurre la tecnologia in vantaggio competitivo. Matteo dalla parte creativa e media — campagne ADV, content strategy, social. Sa cosa spinge le persone a fermarsi, tornare, comprare.
              </p>
              <p>
                Siamo in due. Lavoriamo da ovunque. Seguiamo pochi clienti alla volta — quelli con cui ha senso lavorare — e mettiamo la faccia su ogni cosa che firmiamo.
              </p>
              <p>
                Franca non vuole essere simpatica a tutti. Franca sceglie, ha un suo gusto e una sua filosofia. <strong className="text-[#090909]">Non è per tutti — e va benissimo così.</strong>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#eaeaea] grid grid-cols-3 gap-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-2xl md:text-3xl font-bold tracking-tighter text-[#090909]">
                    {m.value}
                  </div>
                  <div className="text-[0.7rem] text-[#6b6b6b] mt-1.5 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: valori */}
          <div className="space-y-0 border-t border-[#eaeaea]">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.1 }}
                className="border-b border-[#eaeaea] py-8"
              >
                <div className="text-[0.85rem] font-bold text-[#090909] mb-2">
                  {v.label}<span style={{ color: '#ff462e' }}>.</span>
                </div>
                <p className="text-[0.85rem] text-[#6b6b6b] leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
