'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Servizi', href: '#services' },
  { label: 'Lavori', href: '#work' },
  { label: 'Chi siamo', href: '#about' },
  { label: 'Contatti', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── Floating bubble ───────────────────────────────── */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center bg-white/90 backdrop-blur-xl border border-black/[0.07] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.13)]"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-[#090909] pl-5 pr-4 py-2.5 text-[1rem] tracking-tight shrink-0"
          >
            Franca<span style={{ color: '#3626A7' }}>.</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center">
            <span className="w-px h-4 bg-black/[0.09] mx-1 shrink-0" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.8rem] text-[#6b6b6b] hover:text-[#090909] px-3.5 py-2.5 rounded-full hover:bg-black/[0.04] transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block ml-1 pr-1.5">
            <Link
              href="#contact"
              className="inline-block text-[0.8rem] font-bold bg-[#090909] text-white px-4 py-2 rounded-full hover:bg-[#ff462e] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap"
            >
              Inizia un progetto
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden px-4 py-2.5 text-[#090909]"
            aria-label="Apri menu"
          >
            <List size={20} weight="bold" />
          </button>
        </motion.div>
      </header>

      {/* ── Mobile fullscreen overlay ──────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#ff462e] flex flex-col px-8 pt-8 pb-10"
          >
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
                aria-label="Chiudi menu"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 flex-1 justify-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-[clamp(2.8rem,12vw,4rem)] font-bold text-white tracking-tighter leading-tight hover:text-white/60 transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-white text-[#090909] font-bold px-6 py-4 rounded-full text-sm hover:bg-[#090909] hover:text-white transition-all duration-300"
            >
              Inizia un progetto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
