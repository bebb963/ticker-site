'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ParaQuemE() {
  const refTitle = useScrollReveal<HTMLDivElement>()
  const refContent = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="para-quem-e"
      aria-label="Para quem é a Ticker"
      className="section-massive"
      style={{
        background: '#F8F8F8',
        color: '#0E1011',
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
              fontSize: '32px',
              lineHeight: 1,
              color: 'rgba(14,16,17,0.6)',
            }}>
              (Para quem é)
            </span>
            <span style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '32px',
              lineHeight: 1,
              color: 'var(--accent)',
            }}>
              (07)
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
            Para quem<br />é a Ticker
          </h2>
          
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: 1.7,
            color: 'rgba(14,16,17,0.7)',
            maxWidth: '500px',
            margin: 0,
          }}>
            A Ticker não é para qualquer empresa. E isso é proposital.
          </p>
        </div>

        {/* Coluna Direita: Duas Listas */}
        <div
          ref={refContent}
          className="stagger reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '64px',
            paddingTop: '16px',
          }}
        >
          {/* Lista 1: É para você se */}
          <div>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '24px',
              color: '#0E1011',
              marginBottom: '24px',
            }}>
              É para você se:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'você entende que crescer com consistência exige estrutura.',
                'você quer se diferenciar pela percepção que constrói.',
                'você quer entender o próprio negócio em profundidade.',
                'você procura direção, método e um parceiro de verdade.'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                  <span style={{ color: 'rgba(14,16,17,0.4)', fontFamily: "'Inter', sans-serif" }}>-</span>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: 1.6,
                    color: 'rgba(14,16,17,0.7)',
                    margin: 0,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lista 2: Não é para você se */}
          <div>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '24px',
              color: '#0E1011',
              marginBottom: '24px',
            }}>
              Não é para você se:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'o seu critério principal é o preço.',
                'você espera resultado sem processo.',
                'você quer só execução rápida e volume de posts.',
                'você vê marketing como uma lista de entregas.'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                  <span style={{ color: 'rgba(14,16,17,0.4)', fontFamily: "'Inter', sans-serif" }}>-</span>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: 1.6,
                    color: 'rgba(14,16,17,0.7)',
                    margin: 0,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA após qualificação */}
          <div style={{ marginTop: '24px' }}>
            <a
              href="#contato"
              className="cta-primary"
              style={{
                color: '#0E1011',
                fontSize: '22px',
              }}
            >
              Acho que somos para você
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
