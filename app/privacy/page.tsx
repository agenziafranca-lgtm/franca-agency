import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sul trattamento dei dati personali di Franca.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-[0.85rem] text-[#6b6b6b] mb-16">
          Ultimo aggiornamento: aprile 2026
        </p>

        <div className="prose-custom space-y-12">

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">1. Titolare del trattamento</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              Il titolare del trattamento dei dati personali è <strong className="text-[#090909]">Franca</strong> (Alessandro Viappiani e Matteo Novelli), P.IVA IT12847193501, raggiungibile all'indirizzo email <a href="mailto:mail@agenziafranca.it" className="text-[#ff462e] hover:underline">mail@agenziafranca.it</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">2. Dati raccolti</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mb-4">
              Raccogliamo due categorie di dati:
            </p>
            <ul className="space-y-3 text-[0.95rem] text-[#6b6b6b]">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0 mt-2" />
                <span><strong className="text-[#090909]">Dati di navigazione</strong> — indirizzo IP, tipo di browser, pagine visitate, orario di accesso. Raccolti automaticamente dai sistemi informatici del sito.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0 mt-2" />
                <span><strong className="text-[#090909]">Dati di contatto</strong> — nome, indirizzo email e contenuto del messaggio forniti volontariamente dall'utente tramite il modulo di contatto o via email diretta.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">3. Finalità e base giuridica</h2>
            <div className="space-y-4 text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              <p>I dati vengono trattati per le seguenti finalità:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0 mt-2" />
                  <span><strong className="text-[#090909]">Rispondere alle richieste di contatto</strong> — base giuridica: consenso dell'interessato (Art. 6, lett. a, GDPR).</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0 mt-2" />
                  <span><strong className="text-[#090909]">Analisi statistica anonima</strong> della navigazione per migliorare il sito — base giuridica: interesse legittimo (Art. 6, lett. f, GDPR).</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">4. Conservazione dei dati</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              I dati di contatto sono conservati per un massimo di <strong className="text-[#090909]">24 mesi</strong> dalla data di ricezione, salvo obbligo di conservazione più lungo previsto dalla legge o necessità di difesa in giudizio. I dati di navigazione vengono eliminati entro 12 mesi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">5. Comunicazione a terzi</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              I dati personali non vengono ceduti a terzi per finalità commerciali. Possono essere condivisi con fornitori tecnici strettamente necessari al funzionamento del sito (es. hosting, analytics) che operano in qualità di responsabili del trattamento ai sensi dell'Art. 28 GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">6. Diritti dell'interessato</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mb-4">
              Ai sensi degli Art. 15–22 del GDPR, hai il diritto di:
            </p>
            <ul className="space-y-2 text-[0.95rem] text-[#6b6b6b]">
              {[
                'Accedere ai tuoi dati personali',
                'Rettificare dati inesatti o incompleti',
                'Richiedere la cancellazione ("diritto all\'oblio")',
                'Limitare il trattamento in determinati casi',
                'Ricevere i tuoi dati in formato leggibile (portabilità)',
                'Opporti al trattamento basato su interesse legittimo',
                'Proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)',
              ].map((right) => (
                <li key={right} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0 mt-2" />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mt-4">
              Per esercitare questi diritti scrivi a <a href="mailto:mail@agenziafranca.it" className="text-[#ff462e] hover:underline">mail@agenziafranca.it</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">7. Cookie</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              Per informazioni dettagliate sull'uso dei cookie consulta la nostra <Link href="/cookie" className="text-[#ff462e] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
