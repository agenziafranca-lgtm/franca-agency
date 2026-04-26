import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termini di Servizio',
  description: 'Termini e condizioni di utilizzo del sito agenziafranca.it.',
  robots: { index: false, follow: false },
}

export default function TerminiPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="fixed top-5 left-5 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#eaeaea] text-[#090909] text-xs font-medium px-4 py-2.5 rounded-full shadow-sm hover:bg-[#090909] hover:text-white hover:border-[#090909] transition-all duration-300"
        >
          <ArrowLeft size={12} weight="bold" />
          Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 pb-24">
        <span className="text-[0.65rem] text-[#ff462e] font-bold tracking-[0.2em] uppercase block mb-4">
          Documento legale
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#090909] leading-tight mb-4">
          Termini di Servizio
        </h1>
        <p className="text-[0.85rem] text-[#6b6b6b] mb-16">
          Ultimo aggiornamento: aprile 2026
        </p>

        <div className="space-y-12">

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">1. Accettazione</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              Accedendo e utilizzando il sito <strong className="text-[#090909]">agenziafranca.it</strong> accetti integralmente i presenti Termini di Servizio. Se non li accetti, ti invitiamo a non utilizzare il sito. Franca si riserva il diritto di modificarli in qualsiasi momento; le modifiche avranno effetto dalla data di pubblicazione.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">2. Proprietà intellettuale</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              Tutti i contenuti presenti su questo sito — testi, immagini, loghi, video, grafiche e codice sorgente — sono di proprietà esclusiva di Franca (Alessandro Viappiani e Matteo Novelli) o dei rispettivi aventi diritto, e sono protetti dalla normativa italiana ed europea sul diritto d'autore.
            </p>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mt-4">
              È vietata qualsiasi riproduzione, distribuzione, modifica o utilizzo commerciale dei contenuti senza previa autorizzazione scritta. È consentita la consultazione personale e non commerciale.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">3. Utilizzo del sito</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mb-4">L'utente si impegna a utilizzare il sito in modo lecito e a non:</p>
            <ul className="space-y-2 text-[0.95rem] text-[#6b6b6b]">
              {[
                'Trasmettere contenuti illegali, diffamatori o offensivi',
                'Tentare di accedere senza autorizzazione a sistemi o dati',
                'Utilizzare il sito per inviare comunicazioni commerciali non richieste (spam)',
                'Interferire con il corretto funzionamento del sito o dei server',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">4. Limitazione di responsabilità</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              Franca si impegna a mantenere il sito aggiornato e funzionante, ma non garantisce la disponibilità continua del servizio né l'assenza di errori nei contenuti. Non si assume responsabilità per danni diretti o indiretti derivanti dall'utilizzo — o dall'impossibilità di utilizzo — del sito.
            </p>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mt-4">
              I link a siti esterni sono forniti a solo scopo informativo. Franca non è responsabile dei contenuti di siti terzi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">5. Privacy e cookie</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              Il trattamento dei dati personali è disciplinato dalla <Link href="/privacy" className="text-[#ff462e] hover:underline">Privacy Policy</Link>. L'uso dei cookie è descritto nella <Link href="/cookie" className="text-[#ff462e] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">6. Legge applicabile e foro competente</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall'utilizzo del sito, le parti concordano sulla competenza esclusiva del Foro di Reggio Emilia, salvo diversa disposizione di legge inderogabile a tutela del consumatore.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">7. Contatti</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              Per qualsiasi domanda relativa ai presenti Termini scrivi a <a href="mailto:mail@agenziafranca.it" className="text-[#ff462e] hover:underline">mail@agenziafranca.it</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
