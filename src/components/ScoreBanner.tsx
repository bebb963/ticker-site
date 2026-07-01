'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ScoreBanner() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      aria-label="Ticker Score Banner"
      style={{
        background: '#0E1011',
        color: '#FFFFFF',
        padding: '96px 0',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-content" ref={ref}>
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto', gap: '32px' }}>
          
          <span style={{
            display: 'inline-block',
            padding: '6px 12px',
            border: '1px solid var(--accent)',
            borderRadius: '100px',
            fontSize: '12px',
            fontWeight: 600,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            Diagnóstico Gratuito
          </span>

          <h2 style={{
            fontFamily: "'Anantason Expanded', sans-serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.1,
            margin: 0,
          }}>
            Descubra o potencial oculto da sua operação.
          </h2>

          <p style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.7)',
            margin: 0,
            maxWidth: '600px',
          }}>
            O Ticker Score é a nossa ferramenta de diagnóstico proprietária. Responda a algumas perguntas e receba um raio-x do seu momento atual e os próximos passos para escalar.
          </p>

          <div style={{ paddingTop: '16px' }}>
            <Link 
              href="/score" 
              className="cta-primary" 
              style={{
                color: '#FFFFFF',
                fontSize: '18px',
                padding: '16px 32px',
              }}
            >
              Fazer o Ticker Score Agora
            </Link>
          </div>

        </div>
      </div>

      {/* Decorative gradient blur */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
    </section>
  )
}
