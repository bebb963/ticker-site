'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const NOT_DOING = [
  "Não vendemos pacotes fechados.",
  "Não começamos pela execução.",
  "Não atendemos quem quer resultado sem processo.",
  "Não tratamos marketing como uma lista de entregas."
]

export default function OQueNaoFaz() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refList = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="o-que-nao-faz" 
      aria-label="O Que Não Fazemos" 
      className="section-massive"
      style={{ 
        background: '#0E1011', 
        color: '#FFFFFF'
      }}
    >
      <div className="grid-split container-content">
        {/* Coluna Esquerda */}
        <div ref={refHeader} className="sticky-col reveal">
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
              color: 'rgba(255,255,255,0.4)',
            }}>
              (Foco e limites)
            </span>
            <span style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '32px',
              lineHeight: 1,
              color: 'var(--accent)',
            }}>
              (08)
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(60px, 8vw, 120px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '-1px',
            color: '#FFFFFF',
            margin: '0 0 32px'
          }}>
            O que não<br/>fazemos.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            margin: 0
          }}>
            Saber com clareza o que recusamos é o que nos dá precisão sobre o que fazemos.
          </p>
        </div>

        {/* Coluna Direita */}
        <div ref={refList} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column' }}>
          {NOT_DOING.map((item, i) => (
            <div 
              key={i} 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '48px 0',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: i === NOT_DOING.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                ['--index' as string]: i 
              } as React.CSSProperties}
            >
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(28px, 3vw, 40px)',
                letterSpacing: '-1px',
                lineHeight: 1.3,
                margin: 0,
                color: '#FFFFFF'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '24px' }}>x</span>
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
