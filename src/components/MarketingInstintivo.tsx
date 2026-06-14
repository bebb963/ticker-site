'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const PERGUNTAS = [
  {
    num: '01',
    titulo: 'Qual é o projeto?',
    texto: 'Análise do modelo de negócio e do mercado inserido. Posicionamento, JTBD e PUV e mais.',
  },
  {
    num: '02',
    titulo: 'Quem é o cliente?',
    texto: 'Quem é o seu cliente de verdade e o que move a decisão dele.',
  },
  {
    num: '03',
    titulo: 'Onde?',
    texto: 'Em quais canais, territórios e contextos a sua empresa precisa estar presente.',
  },
  {
    num: '04',
    titulo: 'Como atrair?',
    texto: 'Estratégias de aquisição realistas para o seu contexto e o seu custo ideal por cliente.',
  },
  {
    num: '05',
    titulo: 'Como converter?',
    texto: 'Funis que constroem confiança antes da oferta — porque ninguém compra de quem não acredita.',
  },
  {
    num: '06',
    titulo: 'Como reter?',
    texto: 'CRM, comunidade e experiência para o cliente ficar, voltar e gastar mais.',
  },
  {
    num: '07',
    titulo: 'Como monetizar?',
    texto: 'Marketing e comercial jogando o mesmo jogo, com previsibilidade de receita.',
  },
  {
    num: '08',
    titulo: 'Como gerenciar?',
    texto: 'Ritmo, prioridade e evolução contínua — para a estratégia não morrer no papel.',
  },
]

export default function MarketingInstintivo() {
  const refTitle = useScrollReveal<HTMLDivElement>()
  const refGrid = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="marketing-instintivo" 
      aria-label="Instinto e Metodologia" 
      className="section-massive"
      style={{ 
        background: '#F8F8F8', 
        color: '#0E1011'
      }}
    >
      <div className="grid-split">
        {/* Coluna Esquerda: Sticky */}
        <div ref={refTitle} className="sticky-col reveal">
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            lineHeight: 1,
            color: 'rgba(14,16,17,0.6)',
            display: 'block',
            marginBottom: '32px',
          }}>
            (Marketing Instintivo)
          </span>
          <h2 style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(60px, 10vw, 160px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '-2px',
            color: '#0E1011',
            margin: '0 0 32px'
          }}>
            Instinto e<br/>Metodologia
          </h2>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: 1.7,
            color: 'rgba(14,16,17,0.7)',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#0E1011' }}>O fundador:</strong> a visão, o propósito e a convicção que deram origem ao negócio.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#0E1011' }}>O time:</strong> a cultura viva que sustenta e faz tudo funcionar no dia a dia.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#0E1011' }}>O produto:</strong> a tradução prática daquilo em que o negócio acredita e do que o mercado precisa.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#0E1011' }}>O consumidor:</strong> movido por desejos e instintos que muitas vezes antecedem a razão.
            </p>
            <p style={{ margin: 0, marginTop: '8px' }}>
              O Marketing Instintivo orienta a compreensão profunda do negócio.
            </p>
            <p style={{ margin: 0 }}>
              É a partir dessa observação que respondemos às perguntas que compõem nossa metodologia de crescimento.
            </p>
          </div>

          {/* CTA abaixo da descrição */}
          <a href="#contato" style={{
            display: 'inline-block',
            marginTop: '48px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '22px',
            fontWeight: 600,
            textDecoration: 'none',
            color: '#0E1011',
            borderBottom: '2px solid #0E1011',
            paddingBottom: '4px',
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Quero as minhas 8 respostas
          </a>
        </div>

        {/* Coluna Direita: Cards das 8 Perguntas (scroll vertical) */}
        <div ref={refGrid} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '16px' }}>
          {PERGUNTAS.map((item, i) => (
            <div 
              key={i} 
              style={{
                background: '#FFFFFF',
                padding: '64px',
                border: '1px solid rgba(14,16,17,0.05)',
                ['--index' as string]: i 
              } as React.CSSProperties}
            >
              <div style={{ display: 'flex', gap: '20px', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{
                  fontFamily: "'DM Serif Text', serif",
                  fontStyle: 'italic',
                  fontSize: '28px',
                  color: 'rgba(14,16,17,0.25)',
                }}>
                  ({item.num})
                </span>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '40px',
                  letterSpacing: '-1px',
                  margin: 0,
                  color: '#0E1011'
                }}>
                  {item.titulo}
                </h3>
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: 1.7,
                color: 'rgba(14,16,17,0.6)',
                margin: 0
              }}>
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
