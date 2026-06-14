'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const NOT_DOING = [
  "Não fazemos apostas; desenhamos sistemas.",
  "Não operamos sem entender a direção.",
  "Não somos agência de post; somos parceiros de crescimento.",
  "Não seguimos tendências vazias; buscamos o que converte e se sustenta."
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
      <div className="grid-split">
        {/* Coluna Esquerda */}
        <div ref={refHeader} className="sticky-col reveal">
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.4)',
            display: 'block',
            marginBottom: '32px',
          }}>
            (Foco e Limites)
          </span>
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
            maxWidth: '600px'
          }}>
            Ter limites claros sobre o que não somos nos dá a precisão absurda sobre aquilo que somos.
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
