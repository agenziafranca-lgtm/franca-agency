import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cases, getCaseBySlug } from '@/lib/cases'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Counter from '@/components/Counter'
import CaseStudyHero from '@/components/CaseStudyHero'
import ReadingProgress from '@/components/ReadingProgress'
import RevealSection from '@/components/RevealSection'
import CaseStudyNav from '@/components/CaseStudyNav'

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

  const related = cases.filter((x) => x.slug !== c.slug).slice(0, 3)

  const chapters = [
    { id: 'challenge', label: 'La sfida' },
    { id: 'approach', label: "L'approccio" },
    ...c.body.map((b, i) => ({ id: `body-${i}`, label: b.section })),
  ]

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

      <ReadingProgress />
      <CaseStudyNav chapters={chapters} />

      {/* ── Back link ──────────────────────────────────── */}
      <div className="fixed top-5 left-5 z-50">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#eaeaea] text-[#090909] text-xs font-medium px-4 py-2.5 rounded-full shadow-sm hover:bg-[#090909] hover:text-white hover:border-[#090909] transition-all duration-300"
        >
          <ArrowLeft size={12} weight="bold" />
          Tutti i lavori
        </Link>
      </div>

      {/* ── Hero ───────────────────────────────────────── */}
      <CaseStudyHero
        image={c.heroImage}
        category={c.category}
        client={c.client}
        tagline={c.tagline}
      />

      {/* ── Servizi + Risultati — bianco ──────────────── */}
      <section className="bg-white border-b border-[#eaeaea]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <RevealSection>
              <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase mb-6">Servizi</p>
              <ul className="space-y-2">
                {c.services.map((s) => (
                  <li key={s} className="text-[0.9rem] text-[#090909] font-medium flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </RevealSection>
          </div>
          <RevealSection delay={0.1}>
            <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase mb-6">Risultati</p>
            <div className="grid grid-cols-3 gap-8">
              {c.results.map((r) => (
                <div key={r.label}>
                  <Counter
                    value={r.value}
                    className="text-3xl md:text-4xl font-bold tracking-tighter text-[#090909] mb-1 block"
                  />
                  <div className="text-[0.72rem] text-[#6b6b6b] leading-snug">{r.label}</div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Sfida — grigio chiaro full-bleed ─────────── */}
      <section id="challenge" className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <RevealSection>
              <span className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase block mb-3">Capitolo 01</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#090909] leading-tight">
                La sfida<span style={{ color: '#ff462e' }}>.</span>
              </h2>
            </RevealSection>
          </div>
          <RevealSection delay={0.1}>
            <p className="text-[1.1rem] text-[#090909]/75 leading-relaxed max-w-[62ch]">{c.challenge}</p>
          </RevealSection>
        </div>
      </section>

      {/* ── Approccio — bianco con paragrafi numerati ── */}
      <section id="approach" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <RevealSection>
              <span className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase block mb-3">Capitolo 02</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#090909] leading-tight">
                L&apos;approccio<span style={{ color: '#ff462e' }}>.</span>
              </h2>
            </RevealSection>
          </div>
          <div className="space-y-10">
            {c.approach.map((p, i) => (
              <RevealSection key={i} delay={0.1 + i * 0.08}>
                <div className="flex gap-5 lg:gap-7 max-w-[62ch]">
                  <span className="text-[0.65rem] font-bold text-[#ff462e] tracking-[0.18em] mt-2 shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed">{p}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull quote — DARK full-bleed ──────────────── */}
      <section className="bg-[#090909] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-32 lg:py-40">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-8 lg:gap-16 items-start">
              <span className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase">In una frase</span>
              <div>
                <span className="text-[#ff462e] text-5xl lg:text-7xl font-bold leading-none block mb-4 italic">&ldquo;</span>
                <p className="text-[clamp(1.8rem,4.4vw,3.6rem)] font-bold tracking-tighter text-white leading-[1.08] italic">
                  {c.tagline}
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Body sections — bianco con chapter numbers ── */}
      {c.body.map((b, i) => (
        <section
          key={b.section}
          id={`body-${i}`}
          className={i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 border-b border-[#eaeaea]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <RevealSection>
                <span
                  className="text-[clamp(4.5rem,8vw,7rem)] font-bold tracking-tighter leading-none block"
                  style={{ color: 'rgba(255,70,46,0.18)' }}
                  aria-hidden="true"
                >
                  0{i + 3}
                </span>
                <span className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase block mt-3 mb-2">
                  Capitolo 0{i + 3}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-[#090909] leading-tight">
                  {b.section}<span style={{ color: '#ff462e' }}>.</span>
                </h2>
              </RevealSection>
            </div>
            <RevealSection delay={0.1}>
              <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed max-w-[62ch]">{b.text}</p>
            </RevealSection>
          </div>
        </section>
      ))}

      {/* ── Related case studies — grigio ─────────────── */}
      {related.length > 0 && (
        <section className="bg-[#f5f5f5]">
          <RevealSection className="max-w-7xl mx-auto px-6 md:px-10 py-24">
            <p className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase mb-10">
              Altri lavori
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/work/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white"
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
          </RevealSection>
        </section>
      )}

      {/* ── CTA — bianco ───────────────────────────────── */}
      <section className="bg-white border-t border-[#eaeaea]">
        <RevealSection className="max-w-7xl mx-auto px-6 md:px-10 py-24">
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
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#090909] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#ff462e] transition-all duration-300 shrink-0"
            >
              Inizia un progetto
            </a>
          </div>
        </RevealSection>
      </section>

    </main>
  )
}
