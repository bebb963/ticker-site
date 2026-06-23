'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const HUMANOS = [
  {
    titulo: 'O fundador',
    linhaDeApoio: 'A visão que deu origem ao negócio e as premissas sobre as quais ele foi construído.',
  },
  {
    titulo: 'O time',
    linhaDeApoio: 'A cultura e os processos que determinam como as decisões são tomadas no dia a dia.',
  },
  {
    titulo: 'O produto',
    linhaDeApoio: 'A tradução do modelo de negócio em uma oferta concreta para o mercado.',
  },
  {
    titulo: 'O consumidor',
    linhaDeApoio: 'O comportamento real de compra, incluindo as motivações que antecedem a decisão racional.',
  },
]

export default function MarketingInstintivo() {
  const refTitle = useScrollReveal<HTMLDivElement>()
  const refGrid = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="marketing-instintivo" 
      aria-label="Marketing Instintivo" 
      className="section-massive"
      style={{ 
        background: '#F8F8F8', 
        color: '#0E1011'
      }}
    >
      <div className="grid-split container-content">
        {/* Coluna Esquerda: Sticky */}
        <div ref={refTitle} className="sticky-col reveal">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '32px',
          }}>
            <span style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              lineHeight: 1,
              color: 'rgba(14,16,17,0.6)',
            }}>
              (Marketing Instintivo)
            </span>
            <span style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              lineHeight: 1,
              color: 'var(--accent)',
            }}>
              (02)
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(60px, 8vw, 120px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '-2px',
            color: '#0E1011',
            margin: '0 0 32px'
          }}>
            Marketing<br/>Instintivo
          </h2>
          
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            lineHeight: 1.7,
            color: 'rgba(14,16,17,0.7)',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            <p style={{ margin: 0 }}>
              Todo negócio opera sobre um conjunto de relações humanas. O Marketing Instintivo é o método da Ticker para mapear as motivações que influenciam cada uma delas.
            </p>
            <p style={{ margin: 0 }}>
              Quando a visão do fundador, a cultura da equipe, o produto e a percepção do comprador operam de forma alinhada, o crescimento deixa de depender de impulso e passa a ser estrutural.
            </p>
          </div>

          {/* CTA abaixo da descrição */}
          <a href="#mapa" className="cta-secondary" style={{
            display: 'inline-block',
            marginTop: '48px',
            color: '#0E1011',
            fontSize: '22px',
          }}>
            Conheça o Mapa
          </a>
        </div>

        {/* Coluna Direita: Cards dos 4 Humanos */}
        <div ref={refGrid} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '16px' }}>
          {HUMANOS.map((humano, i) => (
            <div 
              key={i} 
              style={{
                background: '#FFFFFF',
                padding: '48px 64px',
                border: '1px solid rgba(14,16,17,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                ['--index' as string]: i 
              } as React.CSSProperties}
            >
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '24px',
                letterSpacing: '-0.5px',
                margin: 0,
                color: '#0E1011'
              }}>
                {humano.titulo}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                lineHeight: 1.6,
                color: 'rgba(14,16,17,0.6)',
                margin: 0
              }}>
                - {humano.linhaDeApoio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
