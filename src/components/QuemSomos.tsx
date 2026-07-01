'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function QuemSomos() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="quem-somos"
      aria-label="Avaliações"
      className="section-massive"
      style={{
        background: 'var(--color-bg-muted)',
        color: 'var(--color-text-default)',
      }}
    >
      <div ref={ref} className="reveal container-content">
        {/* Rótulo */}
        <span className="section-label">(Avaliações)</span>

        {/* Statement */}
        <h2 className="section-statement" style={{ marginBottom: 'var(--space-3)' }}>
          O que dizem quem já trabalhou com a Ticker.
        </h2>

        <p className="section-support" style={{ marginBottom: 'var(--space-4)' }}>
          Avaliações reais de clientes no Google.
        </p>

        {/* Google Reviews Widget Container */}
        <div
          id="google-reviews-widget"
          style={{
            width: '100%',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            border: '1px dashed rgba(14,16,17,0.15)',
            background: 'rgba(14,16,17,0.02)',
            padding: '48px 32px',
          }}
        >
          {/* 
            TODO: Substituir este placeholder pelo widget de avaliações Google.
            Opções:
            - Elfsight: cole o script embed aqui
            - Google Places embed: cole o iframe aqui
            - Trustindex: cole o widget aqui
            
            Exemplo Elfsight:
            <Script src="https://static.elfsight.com/platform/platform.js" />
            <div className="elfsight-app-XXXXXXXX" data-elfsight-app-lazy />
          */}
          <div style={{
            textAlign: 'center',
            maxWidth: '400px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4px',
              marginBottom: '16px',
            }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <p style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(14,16,17,0.4)',
              margin: 0,
            }}>
              Widget de avaliações Google será integrado aqui.
            </p>
            <p style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 400,
              fontSize: '13px',
              color: 'rgba(14,16,17,0.3)',
              margin: '8px 0 0',
            }}>
              Configure o Elfsight, Trustindex ou embed do Google Business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
