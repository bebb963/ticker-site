'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Premissa() {
  const refReveal = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="premissa"
      aria-label="O ponto de partida"
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
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            (O ponto de partida)
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
            (01)
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
          Quase todo marketing ruim começa pela mesma coisa: pressa para agir antes de entender.
        </h2>

        {/* Três observações empilhadas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(18px, 2vw, 22px)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
            }}
          >
            Você investe em conteúdo, tráfego e campanha, mas a conta nunca fecha do jeito que deveria.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(18px, 2vw, 22px)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
            }}
          >
            Marketing e comercial trabalham muito, cada um puxando para um lado.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(18px, 2vw, 22px)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
            }}
          >
            Quando o resultado não vem, a culpa cai no anúncio, no post, na agência. Quase nunca em quem nunca entendeu o negócio de verdade.
          </p>
        </div>

        {/* Divisor decorativo */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }} />

        {/* Frase de transição */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(18px, 2vw, 24px)',
            lineHeight: 1.5,
            color: '#FFFFFF',
            margin: 0,
            maxWidth: '900px',
          }}
        >
          A Ticker começa onde a maioria pula: entender o que move o negócio antes de mover qualquer peça.
        </p>
      </div>
    </section>
  )
}
