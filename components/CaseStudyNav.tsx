'use client'

import { useEffect, useState } from 'react'

interface Chapter {
  id: string
  label: string
}

export default function CaseStudyNav({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [chapters])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Indice del case study"
      className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-6 xl:right-10 z-40"
    >
      <ul className="space-y-4">
        {chapters.map(({ id, label }) => {
          const isActive = active === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="flex items-center justify-end gap-3 group cursor-pointer"
              >
                <span
                  className={`text-[0.6rem] tracking-[0.18em] uppercase font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'text-[#ff462e] opacity-100 translate-x-0'
                      : 'text-[#090909] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
                >
                  {label}
                </span>
                <span className="flex justify-end w-10 shrink-0">
                  <span
                    className={`block h-px transition-all duration-300 ${
                      isActive
                        ? 'w-10 bg-[#ff462e]'
                        : 'w-5 bg-[#090909]/40 group-hover:w-8 group-hover:bg-[#090909]'
                    }`}
                  />
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
