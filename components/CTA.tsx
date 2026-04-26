'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import Link from 'next/link'

const serviziOptions = [
  'Identità di Brand',
  'Produzione Creativa',
  'Performance Marketing',
  'Strategia Editoriale',
  'Non so ancora',
]

const budgetOptions = [
  'Meno di €500/mese',
  '€500 – €1.500/mese',
  '€1.500 – €3.000/mese',
  'Oltre €3.000/mese',
  'Da definire insieme',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({
    nome: '',
    email: '',
    azienda: '',
    sito: '',
    servizi: [] as string[],
    budget: '',
    sfida: '',
    privacy: false,
  })
  const [status, setStatus] = useState<Status>('idle')

  const set = (field: string, value: string | boolean | string[]) =>
    setForm((f) => ({ ...f, [field]: value }))

  const toggleServizio = (s: string) =>
    set('servizi', form.servizi.includes(s)
      ? form.servizi.filter((x) => x !== s)
      : [...form.servizi, s]
    )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.privacy) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 border-t border-[#eaeaea]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[0.7rem] text-[#ff462e] font-bold tracking-[0.18em] uppercase mb-5 block">
            Inizia un progetto
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end">
            <h2 className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold tracking-tighter text-[#090909] leading-tight">
              Parliamoci<span style={{ color: '#3626A7' }}>.</span>
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed text-[0.95rem]">
              Raccontaci dove sei e dove vuoi arrivare. Ti risponderemo entro 24 ore — senza impegno, senza presentazioni da 80 slide.
            </p>
          </div>
        </motion.div>

        {/* Success state */}
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#f5f5f5] rounded-2xl p-12 text-center"
          >
            <CheckCircle size={48} weight="fill" className="text-[#ff462e] mx-auto mb-5" />
            <h3 className="text-2xl font-bold tracking-tighter text-[#090909] mb-3">
              Messaggio ricevuto<span style={{ color: '#3626A7' }}>.</span>
            </h3>
            <p className="text-[#6b6b6b] text-[0.95rem] max-w-[44ch] mx-auto">
              Ti risponderemo entro 24 ore. Intanto dai un'occhiata ai nostri lavori — forse trovi già qualcosa che ti somiglia.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-8"
          >
            {/* Row 1: Nome + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nome *">
                <input
                  type="text"
                  required
                  placeholder="Mario Rossi"
                  value={form.nome}
                  onChange={(e) => set('nome', e.target.value)}
                />
              </Field>
              <Field label="Email *">
                <input
                  type="email"
                  required
                  placeholder="mario@azienda.it"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                />
              </Field>
            </div>

            {/* Row 2: Azienda + Sito */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Azienda">
                <input
                  type="text"
                  placeholder="Nome dell'azienda"
                  value={form.azienda}
                  onChange={(e) => set('azienda', e.target.value)}
                />
              </Field>
              <Field label="Sito web">
                <input
                  type="url"
                  placeholder="https://tuoazienda.it"
                  value={form.sito}
                  onChange={(e) => set('sito', e.target.value)}
                />
              </Field>
            </div>

            {/* Servizi */}
            <div>
              <label className="block text-[0.75rem] font-bold text-[#090909] tracking-[0.08em] uppercase mb-3">
                Cosa ti interessa?
              </label>
              <div className="flex flex-wrap gap-2">
                {serviziOptions.map((s) => {
                  const selected = form.servizi.includes(s)
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleServizio(s)}
                      className={`px-4 py-2 rounded-full text-[0.8rem] font-medium border transition-all duration-200 ${
                        selected
                          ? 'bg-[#ff462e] border-[#ff462e] text-white'
                          : 'bg-transparent border-[#eaeaea] text-[#6b6b6b] hover:border-[#090909] hover:text-[#090909]'
                      }`}
                    >
                      {s}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Budget */}
            <Field label="Budget indicativo">
              <select
                value={form.budget}
                onChange={(e) => set('budget', e.target.value)}
              >
                <option value="">Seleziona un range</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>

            {/* Sfida */}
            <Field label="La tua sfida principale *">
              <textarea
                required
                rows={5}
                placeholder="Raccontaci la situazione attuale e cosa vorresti ottenere. Più sei specifico, meglio possiamo aiutarti."
                value={form.sfida}
                onChange={(e) => set('sfida', e.target.value)}
              />
            </Field>

            {/* Privacy + Submit */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    required
                    checked={form.privacy}
                    onChange={(e) => set('privacy', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                    form.privacy ? 'bg-[#ff462e] border-[#ff462e]' : 'bg-white border-[#c0c0c0] group-hover:border-[#090909]'
                  }`}>
                    {form.privacy && (
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[0.8rem] text-[#6b6b6b] leading-snug">
                  I dati che inserisci sono riservati e non vengono condivisi con terzi.{' '}
                  <Link href="/privacy" className="text-[#090909] underline hover:text-[#ff462e] transition-colors">
                    Leggi l'informativa
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={status === 'loading' || !form.privacy}
                className="inline-flex items-center gap-2.5 bg-[#090909] text-white px-7 py-4 rounded-full text-sm font-bold hover:bg-[#ff462e] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 group active:scale-[0.98]"
              >
                {status === 'loading' ? 'Invio in corso…' : 'Invia la richiesta'}
                {status !== 'loading' && (
                  <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                )}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-[0.82rem] text-red-600">
                Qualcosa è andato storto. Scrivici direttamente a{' '}
                <a href="mailto:mail@agenziafranca.it" className="underline">mail@agenziafranca.it</a>.
              </p>
            )}
          </motion.form>
        )}

      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactElement }) {
  return (
    <div>
      <label className="block text-[0.75rem] font-bold text-[#090909] tracking-[0.08em] uppercase mb-2">
        {label}
      </label>
      <div className="[&_input]:w-full [&_input]:bg-[#f5f5f5] [&_input]:border [&_input]:border-[#eaeaea] [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-3 [&_input]:text-[0.9rem] [&_input]:text-[#090909] [&_input]:placeholder-[#c0c0c0] [&_input]:outline-none [&_input]:transition-all [&_input]:duration-200 [&_input:focus]:border-[#090909] [&_input:focus]:bg-white [&_textarea]:w-full [&_textarea]:bg-[#f5f5f5] [&_textarea]:border [&_textarea]:border-[#eaeaea] [&_textarea]:rounded-xl [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-[0.9rem] [&_textarea]:text-[#090909] [&_textarea]:placeholder-[#c0c0c0] [&_textarea]:outline-none [&_textarea]:transition-all [&_textarea]:duration-200 [&_textarea:focus]:border-[#090909] [&_textarea:focus]:bg-white [&_textarea]:resize-none [&_select]:w-full [&_select]:bg-[#f5f5f5] [&_select]:border [&_select]:border-[#eaeaea] [&_select]:rounded-xl [&_select]:px-4 [&_select]:py-3 [&_select]:text-[0.9rem] [&_select]:text-[#090909] [&_select]:outline-none [&_select]:transition-all [&_select]:duration-200 [&_select:focus]:border-[#090909] [&_select:focus]:bg-white [&_select]:appearance-none">
        {children}
      </div>
    </div>
  )
}
