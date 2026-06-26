'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// ─── Frases do manifesto com trechos em destaque ────────────────────────────
const MANIFESTO_PHRASES = [
  [
    { text: 'A Ticker nasceu da ' },
    { text: 'admiração', highlight: true },
    { text: ' por quem decide construir um negócio.' },
  ],
  [
    { text: 'Vimos de perto o que ' },
    { text: 'não funciona:', highlight: true },
    { text: ' empresas recebendo soluções genéricas, atendidas sem a compreensão real de seu modelo de negócio.' },
  ],
  [
    { text: 'Por isso a gente começa ' },
    { text: 'por dentro.', highlight: true },
    { text: ' Observa as pessoas, a cultura, o mercado e quem compra, antes de mover qualquer peça.' },
  ],
  [
    { text: 'O maior ' },
    { text: 'desperdício', highlight: true },
    { text: ' nos negócios é uma boa empresa que ninguém ' },
    { text: 'encontra.', highlight: true },
  ],
]

// ─── Hook: opacidade progressiva baseada na posição no viewport ─────────────
function useProgressiveReveal<T extends HTMLElement>(offset = 0.3) {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const windowH = window.innerHeight

    // Começa a revelar quando o elemento entra no viewport inferior
    // Totalmente revelado quando chega no centro
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

function ManifestoPhrase({
  segments,
  index,
}: {
  segments: Segment[]
  index: number
}) {
  const { ref, progress } = useProgressiveReveal<HTMLDivElement>(0.35)

  // Transforma o progresso em opacidade e translateY
  const opacity = Math.max(0.15, progress) // Mantém pelo menos 15% visível para não ficar sumido no load
  const translateY = (1 - progress) * 40

  return (
    <div
      ref={ref}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
        paddingBottom: '56px',
        position: 'relative',
      }}
    >
      {/* Índice numérico */}
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

      {/* Texto */}
      <h2
        style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(32px, 5vw, 72px)',
          letterSpacing: '-1.5px',
          lineHeight: 1.15,
          color: 'var(--color-text-inverse)',
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
                backgroundImage:
                  'linear-gradient(transparent 85%, rgba(255,255,255,0.15) 85%)',
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

      {/* Linha divisória */}
      {index < MANIFESTO_PHRASES.length - 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: `${progress * 100}%`,
            maxWidth: '200px',
            height: '1px',
            background: 'rgba(255,255,255,0.1)',
            transition: 'width 0.8s ease-out',
          }}
        />
      )}
    </div>
  )
}

// ─── Componente principal ───────────────────────────────────────────────────
export default function Manifesto() {
  return (
    <section
      id="manifesto"
      aria-label="Manifesto"
      className="section-massive"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-inverse)',
        // Aumentado para garantir que a rolagem seja longa o suficiente 
        // para dar o espaçamento necessário entre os parágrafos
        paddingTop: '150px',
        paddingBottom: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container-content" style={{ width: '100%' }}>
        {/* Rótulo e Índice da seção */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '96px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
            <span
              style={{
                fontFamily: "'Anantason Expanded Italic', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(24px, 2.5vw, 32px)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              (O Manifesto)
            </span>
            <div
              style={{
                flex: 1,
                height: '1px',
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, transparent 100%)',
                maxWidth: '200px',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Anantason Expanded Italic', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              lineHeight: 1,
              color: 'var(--accent)',
            }}
          >
            (08)
          </span>
        </div>

        {/* Frases */}
        {MANIFESTO_PHRASES.map((segments, index) => (
          <ManifestoPhrase key={index} segments={segments} index={index} />
        ))}

        {/* CTA sutil ao final */}
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '1px',
              background: 'rgba(255,255,255,0.3)',
            }}
          />
          <span
            style={{
              fontFamily: "'Anantason Expanded Italic', serif",
              fontStyle: 'italic',
              fontSize: '20px',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Isso é a Ticker.
          </span>
        </div>
      </div>
    </section>
  )
}
