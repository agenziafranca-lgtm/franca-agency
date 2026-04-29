import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sull\'uso dei cookie sul sito di Franca.',
  robots: { index: false, follow: false },
}

export default function CookiePage() {
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
          Cookie Policy
        </h1>
        <p className="text-[0.85rem] text-[#6b6b6b] mb-16">
          Ultimo aggiornamento: aprile 2026
        </p>

        <div className="space-y-12">

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">Cosa sono i cookie</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo durante la navigazione. Servono a far funzionare il sito correttamente, a ricordare le tue preferenze e, in alcuni casi, ad analizzare come viene utilizzato il sito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-6">Cookie utilizzati su questo sito</h2>
            <div className="space-y-6">

              <div className="border border-[#eaeaea] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[0.65rem] font-bold bg-[#090909] text-white px-2.5 py-1 rounded-full tracking-[0.1em] uppercase">Necessari</span>
                </div>
                <h3 className="text-[0.95rem] font-bold text-[#090909] mb-2">Cookie tecnici</h3>
                <p className="text-[0.88rem] text-[#6b6b6b] leading-relaxed">
                  Indispensabili per il corretto funzionamento del sito. Non raccolgono dati personali identificabili e non richiedono il tuo consenso. Esempi: gestione della sessione, preferenze di visualizzazione.
                </p>
              </div>

              <div className="border border-[#eaeaea] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[0.65rem] font-bold bg-[#6b6b6b] text-white px-2.5 py-1 rounded-full tracking-[0.1em] uppercase">Analitici</span>
                </div>
                <h3 className="text-[0.95rem] font-bold text-[#090909] mb-2">Cookie statistici (Google Analytics)</h3>
                <p className="text-[0.88rem] text-[#6b6b6b] leading-relaxed">
                  Utilizzati per raccogliere informazioni anonime sull'utilizzo del sito (pagine visitate, tempo di permanenza, provenienza geografica). I dati sono aggregati e non consentono di identificare singoli utenti. L'indirizzo IP viene anonimizzato prima della trasmissione a Google.
                </p>
                <p className="text-[0.8rem] text-[#6b6b6b] mt-3">
                  Gestore: Google LLC · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ff462e] hover:underline">Privacy Policy Google</a>
                </p>
              </div>

              <div className="border border-[#eaeaea] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[0.65rem] font-bold bg-[#eaeaea] text-[#090909] px-2.5 py-1 rounded-full tracking-[0.1em] uppercase">Non utilizzati</span>
                </div>
                <h3 className="text-[0.95rem] font-bold text-[#090909] mb-2">Cookie di profilazione</h3>
                <p className="text-[0.88rem] text-[#6b6b6b] leading-relaxed">
                  Questo sito <strong className="text-[#090909]">non utilizza</strong> cookie di profilazione o di remarketing. Non vengono installati cookie di terze parti a fini pubblicitari.
                </p>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">Come gestire i cookie</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mb-4">
              Puoi controllare e disabilitare i cookie attraverso le impostazioni del tuo browser. Tieni presente che disabilitare i cookie tecnici potrebbe compromettere il funzionamento del sito.
            </p>
            <ul className="space-y-2 text-[0.88rem] text-[#6b6b6b]">
              {[
                { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                { name: 'Firefox', url: 'https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie' },
                { name: 'Safari', url: 'https://support.apple.com/it-it/guide/safari/sfri11471/mac' },
                { name: 'Edge', url: 'https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
              ].map((b) => (
                <li key={b.name} className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff462e] shrink-0" />
                  <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-[#ff462e] hover:underline">{b.name}</a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#090909] mb-4">Contatti</h2>
            <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed">
              Per qualsiasi domanda relativa all'uso dei cookie scrivi a <a href="mailto:mail@agenziafranca.it" className="text-[#ff462e] hover:underline">mail@agenziafranca.it</a>. Per informazioni sul trattamento dei dati personali consulta la nostra <Link href="/privacy" className="text-[#ff462e] hover:underline">Privacy Policy</Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
