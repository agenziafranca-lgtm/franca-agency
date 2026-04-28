'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import TextReveal from './TextReveal'

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

const founders = [
  {
    name: 'Alessandro Viappiani',
    role: 'Web & Strategia Digitale',
    bio: 'Costruisce sistemi che funzionano, misura quello che conta, traduce la tecnologia in vantaggio competitivo.',
  },
  {
    name: 'Matteo Novelli',
    role: 'ADV, Content & Social',
    bio: 'Sa cosa spinge le persone a fermarsi, tornare, comprare. Campagne ADV, content strategy, crescita organica.',
  },
]

function Block({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const manifestoRef = useRef(null)
  const manifestoInView = useInView(manifestoRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-start">

          {/* ── Left column ─────────────────────────────── */}
          <div>
            <Block>
              <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-6 block">
                Chi è Franca
              </span>
              <TextReveal
                as="h2"
                className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tighter text-[#090909] leading-tight mb-10"
                suffix={<span style={{ color: '#3626A7' }}>.</span>}
              >
                {`La nostra\ndichiarazione\ndi indipendenza`}
              </TextReveal>
            </Block>

            <Block delay={0.05}>
              <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed max-w-[56ch]">
                Franca nasce dalla frustrazione di Alessandro e Matteo per un modo di fare marketing che aveva perso il senso. Eseguire compiti meccanicamente, senza capirne lo scopo.
              </p>
            </Block>

            {/* Pull-out quote — diagnosi */}
            <Block delay={0.1} className="my-12 lg:my-14">
              <div className="border-l-[3px] border-[#ff462e] pl-6">
                <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-3">
                  La diagnosi
                </p>
                <p className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tighter text-[#090909] leading-[1.05] italic">
                  Il pilota automatico<br />professionale<span style={{ color: '#ff462e' }}>.</span>
                </p>
              </div>
            </Block>

            {/* Founder cards */}
            <Block delay={0.05}>
              <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-5">
                Chi siamo
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[56ch]">
                {founders.map((f) => (
                  <motion.div
                    key={f.name}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#f5f5f5] hover:bg-white border border-transparent hover:border-[#eaeaea] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] rounded-xl p-5 transition-all duration-300 cursor-default"
                  >
                    <div className="text-[0.62rem] font-bold text-[#ff462e] tracking-[0.15em] uppercase mb-2">
                      Founder
                    </div>
                    <div className="text-[0.88rem] font-bold text-[#090909] mb-0.5">{f.name}</div>
                    <div className="text-[0.72rem] text-[#ff462e] font-medium mb-2">{f.role}</div>
                    <p className="text-[0.78rem] text-[#6b6b6b] leading-snug">{f.bio}</p>
                  </motion.div>
                ))}
              </div>
            </Block>

            {/* Closing paragraphs */}
            <Block delay={0.05} className="mt-12">
              <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-5">
                Come lavoriamo davvero
              </p>
              <div className="space-y-5 text-[0.95rem] text-[#6b6b6b] leading-relaxed max-w-[56ch]">
                <p>
                  Siamo in due. Lavoriamo da ovunque. Seguiamo pochi clienti alla volta — quelli con cui ha senso lavorare — e mettiamo la faccia su ogni cosa che firmiamo.
                </p>
                <p>
                  Franca non vuole essere simpatica a tutti. Franca sceglie, ha un suo gusto e una sua filosofia.
                </p>
              </div>
            </Block>
          </div>

          {/* ── Right column — sticky ───────────────────── */}
          <div className="lg:sticky lg:top-28">
            <Block delay={0.1}>
              <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-8 block">
                Come lavoriamo
              </span>
              <div className="divide-y divide-[#eaeaea] border-t border-[#eaeaea]">
                {values.map((v, i) => (
                  <ValueRow key={v.label} value={v} index={i} />
                ))}
              </div>
            </Block>
          </div>

        </div>

        {/* ── Manifesto closer ────────────────────────── */}
        <div ref={manifestoRef} className="mt-24 lg:mt-32 pt-12 border-t border-[#eaeaea]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-8 lg:gap-16 items-end">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={manifestoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase block"
            >
              In una frase
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={manifestoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[clamp(2.4rem,6vw,5rem)] font-bold tracking-tighter text-[#090909] leading-[1.02]"
            >
              Non è per tutti<span style={{ color: '#ff462e' }}>.</span><br />
              <span className="italic font-medium">E va benissimo così</span>
              <span style={{ color: '#3626A7' }}>.</span>
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  )
}

function ValueRow({ value, index }: { value: typeof values[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.1 }}
      className="py-7 flex gap-5 group"
    >
      <span className="text-[0.6rem] font-bold text-[#ff462e] tracking-[0.1em] mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110 origin-left">
        0{index + 1}
      </span>
      <div>
        <div className="text-[0.85rem] font-bold text-[#090909] mb-2">
          {value.label}
        </div>
        <p className="text-[0.82rem] text-[#6b6b6b] leading-relaxed">{value.text}</p>
      </div>
    </motion.div>
  )
}
