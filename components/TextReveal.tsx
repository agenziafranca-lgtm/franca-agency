'use client'

import { useRef, ReactNode, Fragment } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  suffix?: ReactNode
}

export default function TextReveal({
  children,
  className,
  delay = 0,
  as = 'h2',
  suffix,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Tag = motion[as]

  const lines = children.split('\n')
  const totalWords = lines.reduce((acc, l) => acc + l.split(' ').length, 0)

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, lineIdx) => {
        const isLastLine = lineIdx === lines.length - 1
        const words = line.split(' ')
        return (
          <span key={lineIdx} className="block">
            {words.map((word, wordIdx) => {
              const flatIndex =
                lines.slice(0, lineIdx).reduce((acc, l) => acc + l.split(' ').length, 0) + wordIdx
              const isLastWord = isLastLine && wordIdx === words.length - 1
              return (
                <Fragment key={`${lineIdx}-${wordIdx}`}>
                  <span className="inline-block overflow-hidden align-bottom">
                    <motion.span
                      initial={{ y: '100%', opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: delay + flatIndex * 0.06,
                      }}
                      className="inline-block"
                    >
                      {word}
                      {isLastWord && suffix && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                            delay: delay + totalWords * 0.06,
                          }}
                          className="inline-block"
                        >
                          {suffix}
                        </motion.span>
                      )}
                    </motion.span>
                  </span>
                  {wordIdx < words.length - 1 && ' '}
                </Fragment>
              )
            })}
          </span>
        )
      })}
    </Tag>
  )
}
