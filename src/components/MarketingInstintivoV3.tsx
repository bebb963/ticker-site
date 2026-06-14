'use client'

import { useState } from 'react'
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

// ─── Pilar card com hover ────────────────────────────────────────────────────
function PilarCard({ pilar, index }: { pilar: typeof PILARES[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#FFFFFF' : '#0E1011',
        border: '1px solid rgba(255,255,255,0.08)',
        borderColor: hovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
        padding: '32px 28px',
        cursor: 'default',
        transition: 'all 0.35s ease',
        transitionDelay: `${index * 0.05}s`,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '16px',
      }}
    >
      <span style={{
        fontFamily: "'DM Serif Text', serif",
        fontStyle: 'italic',
        fontSize: '14px',
        color: hovered ? 'rgba(14,16,17,0.3)' : 'rgba(255,255,255,0.25)',
        transition: 'color 0.35s ease',
      }}>
        ({pilar.num})
      </span>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: '20px',
        color: hovered ? '#0E1011' : '#FFFFFF',
        transition: 'color 0.35s ease',
        letterSpacing: '-0.3px',
      }}>
        {pilar.label}
      </span>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: 1.6,
        color: hovered ? 'rgba(14,16,17,0.5)' : 'rgba(255,255,255,0.35)',
        transition: 'color 0.35s ease',
      }}>
        {pilar.desc}
      </span>
    </div>
  )
}

// ─── Pergunta item ───────────────────────────────────────────────────────────
function PerguntaItem({ item, index }: { item: typeof PERGUNTAS[0]; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal mi-v3-pergunta-item"
      style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
    >
      {/* Número grande */}
      <span className="mi-v3-pergunta-num">
        {item.num}
      </span>

      {/* Conteúdo */}
      <div>
        <h3 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(20px, 2vw, 28px)',
          letterSpacing: '-0.5px',
          lineHeight: 1.2,
          color: '#FFFFFF',
          margin: '0 0 12px',
        }}>
          {item.titulo}
        </h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '15px',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.45)',
          margin: 0,
          maxWidth: '420px',
        }}>
          {item.texto}
        </p>
      </div>
    </div>
  )
}

// ─── Componente principal ────────────────────────────────────────────────────
export default function MarketingInstintivoV3() {
  const refHeader  = useScrollReveal<HTMLDivElement>()
  const refPilares = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="marketing-instintivo"
      aria-label="Instinto e Metodologia"
      style={{ background: '#0E1011', color: '#FFFFFF' }}
    >
      {/* ─── HEADER ─────────────────────────────────────────────────────── */}
      <div
        ref={refHeader}
        className="reveal"
        style={{ padding: '80px 96px 48px' }}
      >
        {/* Tag */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '32px',
        }}>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '20px',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.3)',
          }}>
            (Marketing Instintivo)
          </span>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '20px',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.3)',
          }}>
            (02)
          </span>
        </div>

        {/* Título + descrição */}
        <div className="mi-v3-header-row">
          <h2 style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 0.95,
            letterSpacing: '-2px',
            color: '#FFFFFF',
            margin: 0,
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
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '440px',
            margin: 0,
          }}>
            O Marketing Instintivo orienta a compreensão profunda do negócio.
            É a partir dessa observação que respondemos às 8 perguntas da nossa metodologia.
          </p>
        </div>
      </div>

      {/* ─── 4 PILARES ──────────────────────────────────────────────────── */}
      <div
        ref={refPilares}
        className="reveal"
        style={{ padding: '0 96px 64px' }}
      >
        <div className="mi-v3-pilares-grid">
          {PILARES.map((pilar, i) => (
            <PilarCard key={i} pilar={pilar} index={i} />
          ))}
        </div>
      </div>

      {/* ─── DIVISOR + LABEL ────────────────────────────────────────────── */}
      <div style={{
        padding: '0 96px',
        marginBottom: '56px',
      }}>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.25)',
          }}>
            As 8 perguntas
          </span>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
          }} />
        </div>
      </div>

      {/* ─── 8 PERGUNTAS — Grid 2 colunas ───────────────────────────────── */}
      <div style={{ padding: '0 96px 80px' }}>
        <div className="mi-v3-perguntas-grid">
          {PERGUNTAS.map((item, i) => (
            <PerguntaItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '56px', textAlign: 'center' }}>
          <a
            href="#contato"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              textDecoration: 'none',
              color: '#FFFFFF',
              borderBottom: '2px solid rgba(255,255,255,0.4)',
              paddingBottom: '4px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Quero as minhas 8 respostas
          </a>
        </div>
      </div>
    </section>
  )
}
