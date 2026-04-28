import Link from 'next/link'

const year = new Date().getFullYear()

const columns = {
  Servizi: [
    { label: 'Identità di Brand', href: '/#services' },
    { label: 'Produzione Creativa', href: '/#services' },
    { label: 'Siti Web & E-commerce', href: '/#services' },
    { label: 'Performance Marketing', href: '/#services' },
    { label: 'Strategia Editoriale', href: '/#services' },
  ],
  Agenzia: [
    { label: 'Chi siamo', href: '/#about' },
    { label: 'Lavori', href: '/#work' },
    { label: 'Contatti', href: '/#contact' },
  ],
}

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie' },
  { label: 'Termini di Servizio', href: '/termini' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#eaeaea] bg-[#eaeaea] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">
          <div>
            <img
              src="/mascot-trasparente.png"
              alt="Franca."
              className="h-14 w-auto mb-4"
            />
            <div className="text-[1.9rem] font-bold tracking-tight mb-4">
              <span style={{ color: '#ff462e' }}>Franca</span><span style={{ color: '#3626A7' }}>.</span>
            </div>
            <p className="text-[0.85rem] text-[#6b6b6b] leading-relaxed max-w-[28ch]">
              Marketing che parte dalla strategia, non dal template.
            </p>
          </div>

          {Object.entries(columns).map(([section, items]) => (
            <div key={section}>
              <div className="text-[0.68rem] text-[#6b6b6b] tracking-[0.16em] uppercase mb-5">
                {section}
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[0.85rem] text-[#090909]/70 hover:text-[#090909] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#090909]/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-[0.72rem] text-[#6b6b6b]">
            &copy; {year} Franca. Tutti i diritti riservati. P.IVA IT12847193501
          </div>
          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[0.72rem] text-[#6b6b6b] hover:text-[#090909] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
