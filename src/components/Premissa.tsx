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
          A maioria dos problemas de marketing começa no mesmo ponto: execução sem diagnóstico.
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
             Investimento em conteúdo, tráfego e campanhas existe, mas o retorno não se sustenta.
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
             Marketing e comercial operam com esforço, mas sem integração.
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
             Quando os resultados não aparecem, o foco se volta para o canal, o criativo ou o fornecedor. Raramente para a ausência de um diagnóstico.
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
           O trabalho da Ticker começa pelo diagnóstico: entender o modelo de negócio, o comportamento de compra e as variáveis do mercado antes de definir qualquer ação.
        </p>
      </div>
    </section>
  )
}
