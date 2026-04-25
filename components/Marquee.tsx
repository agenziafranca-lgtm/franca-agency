'use client'

const items = [
  'Social Management',
  'Siti Web & E-commerce',
  'ADV & Performance',
  'Brand Strategy',
  'Produzione Contenuti',
  'Esse-CI Avvocati',
  'Landscape Barber',
  'Loft',
  'Miramonti',
  'Mondo in Altalena',
  'Theraflux',
  'Trail della Pietra',
  'Pro Loco Felina',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="border-y border-[#1a1a1a] py-[1.1rem] overflow-hidden bg-[#090909] select-none">
      <div className="flex marquee-track whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 mx-5 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[#6b6b6b]"
          >
            {item}
            <span className="w-[3px] h-[3px] rounded-full bg-[#ff462e] inline-block flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
