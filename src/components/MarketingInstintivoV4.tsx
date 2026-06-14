'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── Os 4 pilares ────────────────────────────────────────────────────────────
const PILARES = [
  { num: '01', label: 'O Fundador',   desc: 'A visão e o propósito que deram origem ao negócio.' },
  { num: '02', label: 'O Time',       desc: 'A cultura viva que sustenta o dia a dia.' },
  { num: '03', label: 'O Produto',    desc: 'A tradução prática daquilo em que o negócio acredita.' },
  { num: '04', label: 'O Consumidor', desc: 'Movido por desejos que antecedem a razão.' },
]

// ─── As 8 perguntas ──────────────────────────────────────────────────────────
const PERGUNTAS = [
  { num: '01', titulo: 'Qual é o projeto?',   texto: 'Análise do modelo de negócio e do mercado inserido. Posicionamento, JTBD e PUV.' },
  { num: '02', titulo: 'Quem é o cliente?',   texto: 'Quem é o seu cliente de verdade e o que move a decisão dele.' },
  { num: '03', titulo: 'Onde?',               texto: 'Em quais canais, territórios e contextos a sua empresa precisa estar presente.' },
  { num: '04', titulo: 'Como atrair?',        texto: 'Estratégias de aquisição realistas para o seu contexto e custo ideal por cliente.' },
  { num: '05', titulo: 'Como converter?',     texto: 'Funis que constroem confiança antes da oferta — porque ninguém compra de quem não acredita.' },
  { num: '06', titulo: 'Como reter?',         texto: 'CRM, comunidade e experiência para o cliente ficar, voltar e gastar mais.' },
  { num: '07', titulo: 'Como monetizar?',     texto: 'Marketing e comercial jogando o mesmo jogo, com previsibilidade de receita.' },
  { num: '08', titulo: 'Como gerenciar?',     texto: 'Ritmo, prioridade e evolução contínua — para a estratégia não morrer no papel.' },
]

// ─── Componente principal ────────────────────────────────────────────────────
export default function MarketingInstintivoV4() {
  const refHeader    = useScrollReveal<HTMLDivElement>()
  const refPilares   = useScrollReveal<HTMLDivElement>()
  const refPerguntas = useScrollReveal<HTMLDivElement>()
  const refCta       = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="marketing-instintivo"
      aria-label="Instinto e Metodologia"
      style={{ background: '#F8F8F8', color: '#0E1011' }}
    >
      {/* ─── HEADER ─────────────────────────────────────────────────────── */}
      <div
        ref={refHeader}
        className="reveal"
        style={{ padding: '80px 96px 0' }}
      >
        {/* Label row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px',
        }}>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '20px',
            color: 'rgba(14,16,17,0.35)',
          }}>
            (Marketing Instintivo)
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Anton SC', sans-serif",
          fontSize: 'clamp(48px, 8vw, 120px)',
          fontWeight: 400,
          textTransform: 'uppercase',
          lineHeight: 0.95,
          letterSpacing: '-2px',
          color: '#0E1011',
          margin: '0 0 32px',
        }}>
          Instinto e{' '}
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            textTransform: 'none',
            letterSpacing: '-1px',
          }}>
            Metodologia
          </span>
        </h2>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(16px, 1.6vw, 20px)',
          lineHeight: 1.7,
          color: 'rgba(14,16,17,0.55)',
          maxWidth: '640px',
          margin: '0 0 64px',
        }}>
          O Marketing Instintivo orienta a compreensão profunda do negócio.
          Observamos 4 pilares e, a partir deles, respondemos às 8 perguntas
          da nossa metodologia.
        </p>
      </div>

      {/* ─── 4 PILARES — inline horizontal ──────────────────────────────── */}
      <div
        ref={refPilares}
        className="reveal"
        style={{ padding: '0 96px 64px' }}
      >
        <div className="mi-v4-pilares-row">
          {PILARES.map((pilar, i) => (
            <div key={i} className="mi-v4-pilar">
              <span className="mi-v4-pilar-num">{pilar.num}</span>
              <div>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#0E1011',
                  display: 'block',
                  marginBottom: '4px',
                }}>
                  {pilar.label}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: 1.5,
                  color: 'rgba(14,16,17,0.45)',
                }}>
                  {pilar.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── DIVISOR ────────────────────────────────────────────────────── */}
      <div style={{ padding: '0 96px' }}>
        <div style={{
          height: '1px',
          background: 'rgba(14,16,17,0.08)',
        }} />
      </div>

      {/* ─── 8 PERGUNTAS — lista editorial ──────────────────────────────── */}
      <div
        ref={refPerguntas}
        className="reveal"
        style={{ padding: '56px 96px 0' }}
      >
        <span style={{
          fontFamily: "'DM Serif Text', serif",
          fontStyle: 'italic',
          fontSize: '16px',
          color: 'rgba(14,16,17,0.3)',
          display: 'block',
          marginBottom: '40px',
        }}>
          As 8 perguntas
        </span>

        <div className="mi-v4-perguntas-list">
          {PERGUNTAS.map((item, i) => (
            <div key={i} className="mi-v4-pergunta">
              {/* Número */}
              <span className="mi-v4-pergunta-num">
                {item.num}
              </span>

              {/* Título */}
              <h3 className="mi-v4-pergunta-titulo">
                {item.titulo}
              </h3>

              {/* Descrição */}
              <p className="mi-v4-pergunta-texto">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <div
        ref={refCta}
        className="reveal"
        style={{
          padding: '48px 96px 80px',
          textAlign: 'center',
        }}
      >
        <a
          href="#contato"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '20px',
            fontWeight: 600,
            textDecoration: 'none',
            color: '#0E1011',
            borderBottom: '2px solid #0E1011',
            paddingBottom: '4px',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Quero as minhas 8 respostas
        </a>
      </div>
    </section>
  )
}
