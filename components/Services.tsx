'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const services = [
  {
    number: '01',
    title: 'Perché scegliere voi?',
    subtitle: 'Identità di Brand',
    description: 'La maggior parte delle aziende non sa rispondere a questa domanda in modo convincente. Noi costruiamo la risposta — quella che le persone danno di voi quando non siete nella stanza. Un\'identità che si riconosce, si ricorda e si sceglie.',
    tags: ['Posizionamento', 'Naming', 'Identità Visiva', 'Tono di Voce', 'Messaggistica'],
    bg: '#ff462e',
    text: 'white',
  },
  {
    number: '02',
    title: 'Contenuti che fermano lo scroll',
    subtitle: 'Produzione Creativa',
    description: 'Non basta esserci. Bisogna essere ricordati. Film, fotografia, motion graphics e copywriting pensati per catturare l\'attenzione nei primi 3 secondi — e tenerla abbastanza a lungo da lasciare un segno.',
    tags: ['Film', 'Fotografia', 'Motion Graphics', 'Art Direction', 'Copywriting'],
    bg: '#090909',
    text: 'white',
  },
  {
    number: '03',
    title: 'Budget che torna indietro',
    subtitle: 'Performance Marketing',
    description: 'La pubblicità non funziona quando ottimizzi solo il costo per clic. Funziona quando ottimizzi il messaggio dietro al clic. Paid search, paid social e media buying guidati da chi capisce i numeri e le persone — insieme.',
    tags: ['Google Ads', 'Meta Ads', 'Programmatic', 'Analytics', 'CRO'],
    bg: '#ff462e',
    text: 'white',
  },
  {
    number: '04',
    title: 'Presenti dove conta, con costanza',
    subtitle: 'Strategia Editoriale',
    description: 'Il social non si improvvisa. Si costruisce con una strategia, un piano e la disciplina di eseguire ogni settimana. Contenuti pensati per il vostro pubblico — non per accontentare l\'algoritmo.',
    tags: ['SEO', 'Piano Editoriale', 'Social Media', 'Newsletter', 'Thought Leadership'],
    bg: '#090909',
    text: 'white',
  },
]

function ServiceRow({
  service,
  isActive,
  onEnter,
  onLeave,
  onToggle,
}: {
  service: typeof services[0]
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
  onToggle: () => void
}) {
  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onToggle}
      animate={{ backgroundColor: isActive ? service.bg : '#ffffff' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-pointer border-b border-[#eaeaea]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header row */}
        <div className="flex items-center gap-6 md:gap-10 py-7 md:py-9">
          <motion.span
            animate={{ color: isActive ? 'rgba(255,255,255,0.45)' : '#ff462e' }}
            transition={{ duration: 0.4 }}
            className="text-[0.65rem] font-bold tracking-[0.2em] shrink-0 hidden md:block"
          >
            {service.number}
          </motion.span>

          <div className="flex-1 min-w-0">
            <motion.div
              animate={{ color: isActive ? 'rgba(255,255,255,0.5)' : '#6b6b6b' }}
              transition={{ duration: 0.4 }}
              className="text-[0.68rem] font-medium tracking-[0.14em] uppercase mb-1"
            >
              {service.subtitle}
            </motion.div>
            <motion.h3
              animate={{ color: isActive ? '#ffffff' : '#090909' }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold tracking-tighter leading-tight"
            >
              {service.title}
            </motion.h3>
          </div>

          <motion.div
            animate={{
              rotate: isActive ? 45 : 0,
              color: isActive ? '#ffffff' : '#090909',
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <ArrowUpRight size={22} weight="bold" />
          </motion.div>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-10 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-16">
                <p className="text-white/75 leading-relaxed text-[0.95rem] max-w-[58ch]">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 content-start">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.68rem] bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full tracking-[0.04em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  )
}

export default function Services() {
  const [active, setActive] = useState<number | null>(null)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-white">

      {/* Header */}
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 28 }}
        animate={headInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16 border-b border-[#eaeaea]"
      >
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-end">
          <div>
            <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-5 block">
              Cosa facciamo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#090909] leading-tight">
              Un metodo<span style={{ color: '#3626A7' }}>.</span><br />Non un elenco di servizi.
            </h2>
          </div>
          <p className="text-[#6b6b6b] leading-relaxed text-[0.95rem]">
            Tutto ciò che facciamo è connesso. La strategia informa la creatività, la creatività informa il media, il media informa la strategia.
          </p>
        </div>
      </motion.div>

      {/* Service rows */}
      <div>
        {services.map((s, i) => (
          <ServiceRow
            key={s.number}
            service={s}
            isActive={active === i}
            onEnter={() => setActive(i)}
            onLeave={() => setActive(null)}
            onToggle={() => setActive(active === i ? null : i)}
          />
        ))}
      </div>

      {/* Bottom spacer */}
      <div className="pb-28" />

    </section>
  )
}
