'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// ─── Frases do manifesto com trechos em destaque ────────────────────────────
// Cada frase é um array de segmentos: { text, highlight? }
// highlight = true → renderizado em DM Serif Text Italic (contraste tipográfico)
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

// ─── Hook: opacidade progressiva baseada na intersecção (mais robusto) ────────
function useProgressiveReveal<T extends HTMLElement>(offset = 0.3) {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback de segurança se IO não estiver disponível
    if (typeof IntersectionObserver === 'undefined') {
      setProgress(1)
      return
    }

    // Criamos 100 thresholds para ter uma animação fluida (0 a 1)
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100)

    const observer = new IntersectionObserver(
      ([entry]) => {
        // intersectionRatio vai de 0 (fora) a 1 (totalmente visível)
        // Multiplicamos por um fator (ex: 1.5) para atingir 100% de opacidade antes de ficar totalmente visível
        let p = entry.intersectionRatio * 1.5
        if (p > 1) p = 1
        setProgress(p)
      },
      {
        root: null, // viewport
        // offset ajusta a margem para começar a revelar (ex: -10% da margem inferior)
        rootMargin: '-10% 0px -10% 0px',
        threshold: thresholds
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, progress }
}

// ─── Componente de frase ────────────────────────────────────────────────────
type Segment = { text: string; highlight?: boolean }

function ManifestoPhrase({
  segments,
  index,
}: {
  segments: Segment[]
  index: number
}) {
  const { ref, progress } = useProgressiveReveal<HTMLDivElement>(0.35)

  // Transforma o progresso (0→1) em opacidade e translateY
  // Mantém opacidade mínima de 0.15 para garantir que nunca fique 100% invisível
  const opacity = Math.max(0.15, progress)
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
                // Underline decorativa sutil
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

      {/* Linha divisória com animação */}
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
        minHeight: '100vh',
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
            marginBottom: '48px',
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
