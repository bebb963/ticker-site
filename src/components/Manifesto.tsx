'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── Frases do manifesto com trechos em destaque ────────────────────────────
// Cada frase é um array de segmentos: { text, highlight? }
// highlight = true → renderizado em Itálico para destaque
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

type Segment = { text: string; highlight?: boolean }

function ManifestoPhrase({
  segments,
  index,
}: {
  segments: Segment[]
  index: number
}) {
  const ref = useScrollReveal<HTMLDivElement>(0.2)

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
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
                color: '#FFFFFF',
              }}
            >
              {seg.text}
            </span>
          ) : (
            <span key={i} style={{ color: '#FFFFFF' }}>{seg.text}</span>
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
            width: '200px',
            height: '1px',
            background: 'rgba(255,255,255,0.1)',
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
