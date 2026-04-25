import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cases, getCaseBySlug } from '@/lib/cases'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) return {}
  const url = `https://agenziafranca.it/work/${c.slug}`
  return {
    title: c.client,
    description: c.tagline,
    openGraph: {
      type: 'article',
      url,
      title: `${c.client} — Franca.`,
      description: c.tagline,
      images: [{ url: c.heroImage, width: 1200, height: 630, alt: c.client }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${c.client} — Franca.`,
      description: c.tagline,
      images: [c.heroImage],
    },
    alternates: { canonical: url },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) notFound()

  // Altri 3 casi studio correlati (esclude il corrente)
  const related = cases.filter((x) => x.slug !== c.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${c.client} — ${c.tagline}`,
    description: c.challenge.slice(0, 200),
    image: `https://agenziafranca.it${c.heroImage}`,
    author: { '@type': 'Organization', name: 'Franca.' },
    publisher: { '@type': 'Organization', name: 'Franca.', url: 'https://agenziafranca.it' },
    mainEntityOfPage: `https://agenziafranca.it/work/${c.slug}`,
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agenziafranca.it' },
      { '@type': 'ListItem', position: 2, name: 'Lavori', item: 'https://agenziafranca.it/#work' },
      { '@type': 'ListItem', position: 3, name: c.client, item: `https://agenziafranca.it/work/${c.slug}` },
    ],
  }

  return (
    <main className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── Back link ───────────────────────────────────── */}
      <div className="fixed top-5 left-5 z-50">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#eaeaea] text-[#090909] text-xs font-medium px-4 py-2.5 rounded-full shadow-sm hover:bg-[#090909] hover:text-white hover:border-[#090909] transition-all duration-300"
        >
          <ArrowLeft size={12} weight="bold" />
          Tutti i lavori
        </Link>
      </div>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={c.heroImage}
          alt={`Caso studio ${c.client} — ${c.category}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-[#090909]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 max-w-7xl mx-auto">
          <span className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase block mb-4">
            {c.category}
          </span>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-none mb-4">
            {c.client}
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl">
            {c.tagline}
          </p>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Services + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 py-20 border-b border-[#eaeaea]">
          <div>
            <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase mb-6">Servizi</p>
            <ul className="space-y-2">
              {c.services.map((s) => (
                <li key={s} className="text-[0.9rem] text-[#090909] font-medium flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase mb-6">Risultati</p>
            <div className="grid grid-cols-3 gap-8">
              {c.results.map((r) => (
                <div key={r.label}>
                  <div className="text-3xl md:text-4xl font-bold tracking-tighter text-[#090909] mb-1">{r.value}</div>
                  <div className="text-[0.72rem] text-[#6b6b6b] leading-snug">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 py-20 border-b border-[#eaeaea]">
          <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase">La sfida</p>
          <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed max-w-[62ch]">{c.challenge}</p>
        </div>

        {/* Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 py-20 border-b border-[#eaeaea]">
          <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase">L&apos;approccio</p>
          <div className="space-y-6">
            {c.approach.map((p, i) => (
              <p key={i} className="text-[1.05rem] text-[#6b6b6b] leading-relaxed max-w-[62ch]">{p}</p>
            ))}
          </div>
        </div>

        {/* Image gallery */}
        {c.images.length > 0 && (
          <div className="py-20 border-b border-[#eaeaea]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.images.map((src, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#eaeaea]">
                  <img
                    src={src}
                    alt={`${c.client} — immagine progetto ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Body sections */}
        <div className="py-20 space-y-0">
          {c.body.map((b) => (
            <div key={b.section} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 py-14 border-b border-[#eaeaea]">
              <h2 className="text-[1rem] font-bold text-[#090909]">
                {b.section}<span style={{ color: '#ff462e' }}>.</span>
              </h2>
              <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed max-w-[62ch]">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Related case studies — link interni */}
        {related.length > 0 && (
          <div className="py-20 border-t border-[#eaeaea]">
            <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase mb-10">
              Altri lavori
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/work/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-[#eaeaea]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={r.cardImage}
                      alt={`Caso studio ${r.client} — ${r.category}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-[0.6rem] text-white/55 tracking-[0.15em] uppercase font-medium block mb-1">{r.category}</span>
                      <span className="text-base font-bold text-white">{r.client}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="py-24 border-t border-[#eaeaea]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase mb-4">
                Vuoi un risultato simile?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#090909] leading-tight">
                Parliamoci<span style={{ color: '#3626A7' }}>.</span>
              </h2>
            </div>
            <a
              href="mailto:mail@agenziafranca.it"
              className="inline-flex items-center gap-2 bg-[#090909] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#ff462e] transition-all duration-300 shrink-0"
            >
              Inizia un progetto
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
