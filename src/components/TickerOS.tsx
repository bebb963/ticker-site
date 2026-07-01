'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function TickerOS() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="ticker-os"
      className="section-massive"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-inverse)',
      }}
    >
      <div ref={ref} className="reveal container-content">
        <div className="tf-os-block">
          <div className="tf-os-text">
            <h3 style={{
              fontFamily: "'Anantason Expanded', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: '24px',
              color: '#FFFFFF'
            }}>
              Voce no controle, <br />
              sem microgerenciar.
            </h3>
            <p style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '24px'
            }}>
              Voce nao precisa gerenciar o marketing. Precisa entender o que esta
              acontecendo e confiar no sistema.
            </p>
            <p style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.7)'
            }}>
              No <strong style={{ color: 'var(--accent)' }}>Ticker OS</strong>,
              voce acompanha cada etapa, aprova entregas e ve os resultados em tempo real.
            </p>
            
            <a href="#contato" className="cta-primary" style={{ marginTop: '40px', display: 'inline-block', color: '#FFFFFF' }}>
              Vamos conversar
            </a>
          </div>
          
          <div className="tf-os-media">
            {/* TODO: Asset real do Ticker OS */}
            <div className="tf-os-placeholder">
              <span>[ Tela do Ticker OS ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
