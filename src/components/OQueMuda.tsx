'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function OQueMuda() {
  const refReveal = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="o-que-muda"
      aria-label="O que muda"
      className="section-massive"
      style={{
        background: '#0E1011',
        color: '#FFFFFF',
      }}
    >
      <div ref={refReveal} className="reveal container-content" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {/* Rótulo e Índice */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <span
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              lineHeight: 1,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            (O que muda)
          </span>
          <span
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              lineHeight: 1,
              color: 'var(--accent)',
            }}
          >
            (05)
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-1.5px',
            lineHeight: 1.15,
            color: '#FFFFFF',
            margin: 0,
            maxWidth: '1100px',
          }}
        >
          Quando o marketing parte de um diagnóstico preciso, a empresa deixa de depender de tentativa e erro e passa a operar com direção.
        </h2>

        {/* CTA centralizado no final */}
        <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="#contato"
            className="cta-primary"
            style={{
              color: '#FFFFFF',
              fontSize: '22px',
            }}
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  )
}
