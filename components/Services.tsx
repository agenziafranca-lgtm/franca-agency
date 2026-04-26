'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Identità di Brand',
    description:
      'Prima di creare, dobbiamo capire. Lavoriamo insieme per trovare la vostra storia, i vostri valori, il vostro punto di vista. L\'obiettivo: rispondere a "Perché esistete?" in modo autentico.',
    tags: ['Posizionamento', 'Naming', 'Identità Visiva', 'Tono di Voce', 'Messaggistica'],
    bg: '#ff462e',
  },
  {
    number: '02',
    title: 'Produzione Creativa',
    description:
      'Film, fotografia, motion graphics e contenuti editoriali pensati per fermare lo scroll — e tenere l\'attenzione abbastanza a lungo da lasciare un segno.',
    tags: ['Film', 'Fotografia', 'Motion Graphics', 'Art Direction', 'Copywriting'],
    bg: '#090909',
  },
  {
    number: '03',
    title: 'Performance Marketing',
    description:
      'La maggior parte delle agenzie ottimizza il budget. Noi ottimizziamo il messaggio — e poi il budget segue. Paid search, paid social e media pensati da chi sa che dietro ogni clic c\'è una persona.',
    tags: ['Google Ads', 'Meta Ads', 'Programmatic', 'Analytics', 'CRO'],
    bg: '#ff462e',
  },
  {
    number: '04',
    title: 'Strategia Editoriale',
    description:
      'Contenuti costruiti su ciò che il vostro pubblico cerca davvero — non su quello che suona bene in un brief. Costruiamo fedeltà, non follower.',
    tags: ['SEO', 'Piano Editoriale', 'Social Media', 'Newsletter', 'Thought Leadership'],
    bg: '#090909',
  },
]

const CARD_PEEK = 64   // px di ogni card visibile sotto quella superiore
const NAVBAR_H = 80    // altezza floating navbar

function ServiceCard({
  service,
  index,
  sectionProgress,
}: {
  service: (typeof services)[0]
  index: number
  sectionProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const total = services.length
  const cardStart = index / total
  const cardEnd = (index + 1) / total

  // La card scala leggermente verso il basso mentre la successiva la copre
  const scale = useTransform(
    sectionProgress,
    [cardStart, cardEnd],
    [1, index < total - 1 ? 0.92 : 1]
  )
  // Oscuramento progressivo della card sepolta
  const brightness = useTransform(
    sectionProgress,
    [cardStart, cardEnd],
    [1, index < total - 1 ? 0.6 : 1]
  )

  return (
    <div
      className="sticky overflow-hidden px-4 md:px-8"
      style={{
        top: `${NAVBAR_H + index * CARD_PEEK}px`,
        zIndex: index + 1,
        paddingBottom: index < total - 1 ? `${CARD_PEEK}px` : '0',
      }}
    >
      <motion.div
        style={{
          scale,
          backgroundColor: service.bg,
          filter: useTransform(brightness, (v) => `brightness(${v})`),
        }}
        className="relative rounded-xl overflow-hidden min-h-[50vh] lg:min-h-[65vh] flex flex-col justify-between shadow-[0_-8px_48px_rgba(0,0,0,0.18)]"
      >
        {/* Watermark number — decorativo, solo desktop */}
        <span
          aria-hidden="true"
          className="hidden lg:block absolute select-none pointer-events-none font-bold tracking-tighter leading-none text-white"
          style={{
            fontSize: 'clamp(10rem, 22vw, 18rem)',
            opacity: 0.06,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {service.number}
        </span>

        <div className="p-8 lg:p-14 relative">
          <span className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-white/40">
            {service.number}
          </span>
        </div>
        <div className="p-8 lg:p-14 relative">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-tight mb-5">
            {service.title}
          </h3>
          <p className="text-white/70 leading-relaxed text-[0.95rem] max-w-[52ch] mb-8">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2">
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
    </div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative"
      style={{ minHeight: `calc(100vh + ${services.length * 100}vh)` }}
    >
      {/* Header — sticky finché le card non la coprono */}
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 28 }}
        animate={headInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky z-0 bg-white pt-28 pb-16 border-b border-[#eaeaea]"
        style={{ top: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
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
              La strategia informa la creatività. La creatività informa il media. Il media informa la strategia. Il ciclo non si ferma mai.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="pt-8">
        {services.map((service, i) => (
          <ServiceCard
            key={service.number}
            service={service}
            index={i}
            sectionProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
