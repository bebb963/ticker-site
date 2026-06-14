'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const QUESTIONS = [
  { p: 'Quem?', res: 'Entendemos quem é o cliente em relação ao produto e o que o move.' },
  { p: 'Onde?', res: 'Identificamos canais, territórios e contextos de influência.' },
  { p: 'Como atrair?', res: 'Definimos estratégias de aquisição alinhadas ao contexto e ao CAC ideal.' },
  { p: 'Como converter?', res: 'Construímos confiança antes da oferta, desenhando funis que geram valor.' },
  { p: 'Como reter?', res: 'Estruturamos CRM, comunidade e experiências que elevam LTV e NRR.' },
  { p: 'Como monetizar?', res: 'Unimos marketing e comercial para gerar previsibilidade de receita.' },
  { p: 'Como gerenciar?', res: 'Priorizamos ritmo e evolução contínua com metodologias ágeis.' }
]

export default function OMapa() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refList = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="mapa" 
      aria-label="O Mapa e as Sete Perguntas" 
      className="section-massive"
      style={{ 
        background: '#0E1011', 
        color: '#FFFFFF'
      }}
    >
      <div ref={refHeader} className="reveal" style={{ marginBottom: '128px' }}>
        <span style={{
          fontFamily: "'DM Serif Text', serif",
          fontStyle: 'italic',
          fontSize: '32px',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.4)',
          display: 'block',
          marginBottom: '32px',
        }}>
          (O Mapa)
        </span>
        <h2 style={{
          fontFamily: "'Anton SC', sans-serif",
          fontSize: 'clamp(60px, 12vw, 240px)',
          fontWeight: 400,
          textTransform: 'uppercase',
          lineHeight: 0.9,
          letterSpacing: '-2px',
          color: '#FFFFFF',
          margin: '0 0 48px'
        }}>
          As 7<br/>Perguntas
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '800px'
        }}>
          O ponto de partida de qualquer negócio que quer crescer. Estruturamos as respostas que dão direção e sentido ao seu sistema de marketing.
        </p>
      </div>

      <div ref={refList} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column' }}>
        {QUESTIONS.map((item, i) => (
          <div 
            key={i} 
            className="mapa-row"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              borderBottom: i === QUESTIONS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              ['--index' as string]: i 
            } as React.CSSProperties}
          >
            <div style={{ display: 'flex', gap: '32px', alignItems: 'baseline' }}>
              <span style={{
                fontFamily: "'DM Serif Text', serif",
                fontStyle: 'italic',
                fontSize: '32px',
                color: 'rgba(255,255,255,0.3)',
              }}>
                (0{i + 1})
              </span>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '40px',
                letterSpacing: '-1px',
                margin: 0,
                color: '#FFFFFF'
              }}>
                {item.p}
              </h3>
            </div>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              margin: 0
            }}>
              {item.res}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '128px', display: 'flex', justifyContent: 'center' }}>
        <a href="#contato" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '28px',
          fontWeight: 600,
          textDecoration: 'none',
          color: '#FFFFFF',
          borderBottom: '2px solid #FFFFFF',
          paddingBottom: '8px',
          transition: 'opacity 0.2s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Quero meu Mapa
        </a>
      </div>
    </section>
  )
}
