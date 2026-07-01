'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// ─── Frases do manifesto com trechos em destaque ────────────────────────────
const MANIFESTO_PHRASES = [
  [
    { text: 'Existe algo ' },
    { text: 'admiravel', highlight: true },
    { text: ' em quem decide construir um negocio.' },
  ],
  [
    { text: 'Exige ' },
    { text: 'coragem', highlight: true },
    { text: ', disposicao e uma boa dose de ' },
    { text: 'teimosia.', highlight: true }
  ],
  [
    { text: 'A Ticker nasceu da ' },
    { text: 'admiracao', highlight: true },
    { text: ' por quem escolhe esse caminho.' },
  ],
  [
    { text: 'Existimos para que boas empresas sejam vistas, ouvidas e ' },
    { text: 'encontradas', highlight: true },
    { text: ' por quem mais precisa delas.' },
  ],
  [
    { text: 'E para aperfeicoar as ' },
    { text: 'decisoes', highlight: true },
    { text: ' que moldam empresas e mercados.' },
  ]
]

// ─── Hook: opacidade progressiva baseada na posicao no viewport ─────────────
function useProgressiveReveal<T extends HTMLElement>(offset = 0.3) {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const windowH = window.innerHeight

    const start = windowH * (1 - offset)
    const end = windowH * offset

    if (rect.top >= start) {
      setProgress(0)
    } else if (rect.top <= end) {
      setProgress(1)
    } else {
      const p = 1 - (rect.top - end) / (start - end)
      setProgress(Math.max(0, Math.min(1, p)))
    }
  }, [offset])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  return { ref, progress }
}

type Segment = { text: string; highlight?: boolean }

function ManifestoPhrase({ segments, index }: { segments: Segment[], index: number }) {
  const { ref, progress } = useProgressiveReveal<HTMLDivElement>(0.4)

  const opacity = Math.max(0.15, progress) 
  const translateY = (1 - progress) * 40

  return (
    <div
      ref={ref}
      className="manifesto-phrase-item"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
        position: 'relative',
      }}
    >
      <span
        style={{
          fontFamily: "'Anantason Expanded Italic', serif",
          fontStyle: 'italic',
          fontSize: '18px',
          color: 'rgba(255,255,255,0.2)',
          display: 'block',
          marginBottom: '24px',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <h2
        className="manifesto-phrase-text"
        style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 600,
          color: '#FFFFFF',
          margin: 0,
          maxWidth: '1100px',
        }}
      >
        {segments.map((seg, i) =>
          seg.highlight ? (
            <span
              key={i}
              style={{
                fontFamily: "'Anantason Expanded Italic', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.95)',
                backgroundImage: 'linear-gradient(transparent 85%, rgba(255,255,255,0.15) 85%)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${progress * 100}% 100%`,
                transition: 'background-size 0.6s ease-out',
              }}
            >
              {seg.text}
            </span>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </h2>
    </div>
  )
}

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      aria-label="Manifesto"
      className="manifesto-section section-fold"
      style={{
        background: 'var(--color-bg-primary)',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container-content" style={{ width: '100%', padding: '0 24px' }}>
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.4)' }}>
            (Manifesto)
          </span>
        </div>

        <div className="manifesto-phrases-container">
          {MANIFESTO_PHRASES.map((segments, index) => (
            <ManifestoPhrase key={index} segments={segments} index={index} />
          ))}
        </div>

        {/* CTA sutil ao final */}
        <div style={{ marginTop: '64px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
          <span style={{ fontFamily: "'Anantason Expanded Italic', serif", fontStyle: 'italic', fontSize: '20px', color: 'rgba(255,255,255,0.3)' }}>
            Isso e a Ticker.
          </span>
        </div>
      </div>
    </section>
  )
}
