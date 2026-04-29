'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import TextReveal from './TextReveal'

const values = [
  {
    label: 'Vi diciamo cosa pensiamo davvero',
    text: 'Se la vostra idea ci sembra debole, ve lo diciamo. Se il budget non basta per fare bene, ve lo diciamo. Se non possiamo aiutarvi, ve lo diciamo. Il nostro giudizio è il vostro primo risparmio.',
  },
  {
    label: 'Strategia prima, esecuzione dopo',
    text: 'Non apriamo Photoshop o lanciamo una campagna senza prima sapere esattamente cosa vogliamo ottenere. Il marketing senza strategia è quello che si dimentica in 24 ore. Noi facciamo l\'altro.',
  },
  {
    label: 'Niente template, niente scorciatoie',
    text: 'Quello che vi consegniamo nasce dalle conversazioni con voi, non dai nostri archivi. Ogni progetto parte da zero per come la pensiamo noi. Per noi è più lavoro, per voi è più valore.',
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

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase block mb-6">
      {children}
    </span>
  )
}

export default function About() {
  const manifestoRef = useRef(null)
  const manifestoInView = useInView(manifestoRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── 1. Chi è Franca ────────────────────────── */}
        <Reveal className="pb-20 lg:pb-24">
          <Eyebrow>Chi è Franca</Eyebrow>
          <TextReveal
            as="h2"
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tighter text-[#090909] leading-tight mb-8"
            suffix={<span style={{ color: '#3626A7' }}>?</span>}
          >
            Chi è Franca
          </TextReveal>
          <p className="text-[1.1rem] text-[#6b6b6b] leading-relaxed max-w-[52ch]">
            Franca non è altro che il nostro modo di raffigurare i valori in cui crediamo. Una persona autentica, un po&apos; giudicante, espressiva e che non vede l&apos;ora di raccontarti una storia che l&apos;ha fatta emozionare.
          </p>
        </Reveal>

        {/* ── 2. Chi siamo ────────────────────────────── */}
        <div className="py-20 lg:py-24 border-t border-[#eaeaea]">
          <Reveal>
            <Eyebrow>Chi siamo</Eyebrow>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={0.08 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#f5f5f5] hover:bg-white border border-transparent hover:border-[#eaeaea] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] rounded-xl p-6 transition-all duration-300"
                >
                  <div className="text-[0.62rem] font-bold text-[#ff462e] tracking-[0.15em] uppercase mb-2">Founder</div>
                  <div className="text-[1rem] font-bold text-[#090909] mb-0.5">{f.name}</div>
                  <div className="text-[0.75rem] text-[#ff462e] font-medium mb-3">{f.role}</div>
                  <p className="text-[0.85rem] text-[#6b6b6b] leading-snug">{f.bio}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── 3. Come lavoriamo ────────────────────────── */}
        <div className="py-20 lg:py-24 border-t border-[#eaeaea]">
          <Reveal>
            <Eyebrow>Come lavoriamo</Eyebrow>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-2">
            {values.map((v, i) => (
              <Reveal key={v.label} delay={0.08 + i * 0.1}>
                <span className="text-[0.65rem] font-bold text-[#ff462e] tracking-[0.18em] block mb-4">
                  0{i + 1}
                </span>
                <h3 className="text-[1rem] font-bold text-[#090909] leading-tight mb-3">
                  {v.label}
                </h3>
                <p className="text-[0.88rem] text-[#6b6b6b] leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── 4. I patti ───────────────────────────────── */}
        <div className="py-20 lg:py-24 border-t border-[#eaeaea]">
          <Reveal>
            <Eyebrow>I patti</Eyebrow>
            <div className="space-y-5 text-[1rem] text-[#6b6b6b] leading-relaxed max-w-[56ch]">
              <p>
                Siamo in due. Lavoriamo da ovunque. Seguiamo pochi clienti alla volta — quelli con cui ha senso lavorare — e mettiamo la faccia su ogni cosa che firmiamo.
              </p>
              <p>
                Franca non vuole essere simpatica a tutti. Franca sceglie, ha un suo gusto e una sua filosofia.
              </p>
            </div>
          </Reveal>
        </div>

      </div>

      {/* ── Manifesto closer — full-bleed dark ───────── */}
      <div ref={manifestoRef} className="bg-[#090909] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
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
              className="text-[clamp(2.4rem,6vw,5rem)] font-bold tracking-tighter text-white leading-[1.02]"
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
