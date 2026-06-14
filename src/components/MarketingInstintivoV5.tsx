'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── As 8 perguntas ──────────────────────────────────────────────────────────
const PERGUNTAS = [
  { num: '01', titulo: 'Qual é o projeto?',   texto: 'Modelo de negócio, mercado, posicionamento e proposta de valor.' },
  { num: '02', titulo: 'Quem é o cliente?',   texto: 'Quem compra de verdade e o que move essa decisão.' },
  { num: '03', titulo: 'Onde?',               texto: 'Canais, territórios e contextos em que a empresa precisa estar.' },
  { num: '04', titulo: 'Como atrair?',        texto: 'Aquisição realista para o contexto e custo ideal por cliente.' },
  { num: '05', titulo: 'Como converter?',     texto: 'Funis que constroem confiança antes da oferta.' },
  { num: '06', titulo: 'Como reter?',         texto: 'CRM, comunidade e experiência para o cliente voltar.' },
  { num: '07', titulo: 'Como monetizar?',     texto: 'Marketing e comercial com previsibilidade de receita.' },
  { num: '08', titulo: 'Como gerenciar?',     texto: 'Ritmo, prioridade e evolução contínua.' },
]

// ─── Linha de pergunta ───────────────────────────────────────────────────────
function PerguntaRow({ item }: { item: typeof PERGUNTAS[0] }) {
  const [hovered, setHovered] = useState(false)
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal mi-v5-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#0E1011' : 'transparent',
      }}
    >
      <span
        className="mi-v5-row-num"
        style={{ color: hovered ? 'rgba(255,255,255,0.15)' : 'rgba(14,16,17,0.12)' }}
      >
        {item.num}
      </span>

      <span
        className="mi-v5-row-titulo"
        style={{ color: hovered ? '#FFFFFF' : '#0E1011' }}
      >
        {item.titulo}
      </span>

      <span
        className="mi-v5-row-texto"
        style={{
          color: hovered ? 'rgba(255,255,255,0.4)' : 'rgba(14,16,17,0.4)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-12px)',
        }}
      >
        {item.texto}
      </span>

      <span
        className="mi-v5-row-arrow"
        style={{
          color: hovered ? '#FFFFFF' : 'rgba(14,16,17,0.15)',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        }}
      >
        →
      </span>
    </div>
  )
}

// ─── Componente principal ────────────────────────────────────────────────────
export default function MarketingInstintivoV5() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refMeta   = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="marketing-instintivo"
      aria-label="Instinto e Metodologia"
      style={{ background: '#F8F8F8' }}
    >
      {/* ─── HEADER ─────────────────────────────────────────────────────── */}
      <div
        ref={refHeader}
        className="reveal"
        style={{ padding: '80px 96px 0' }}
      >
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
            color: 'rgba(14,16,17,0.3)',
          }}>
            (Marketing Instintivo)
          </span>
        </div>

        <div className="mi-v5-header">
          <h2 className="mi-v5-title">
            Instinto e Metodologia
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            lineHeight: 1.7,
            color: 'rgba(14,16,17,0.5)',
            maxWidth: '400px',
            margin: 0,
            flexShrink: 0,
          }}>
            Antes de qualquer ação, observamos quem fundou, quem trabalha,
            o que se vende e quem consome. Depois, respondemos.
          </p>
        </div>
      </div>

      {/* ─── PILARES — compactos ────────────────────────────────────────── */}
      <div
        ref={refMeta}
        className="reveal"
        style={{ padding: '48px 96px 56px' }}
      >
        <div className="mi-v5-pilares">
          {['O Fundador', 'O Time', 'O Produto', 'O Consumidor'].map((label, i) => (
            <span key={i} className="mi-v5-pilar-tag">
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ─── DIVISOR ────────────────────────────────────────────────────── */}
      <div style={{ padding: '0 96px' }}>
        <div style={{ height: '1px', background: 'rgba(14,16,17,0.08)' }} />
      </div>

      {/* ─── 8 PERGUNTAS — full width rows ──────────────────────────────── */}
      <div style={{ padding: '0 96px 80px' }}>
        {PERGUNTAS.map((item, i) => (
          <PerguntaRow key={i} item={item} />
        ))}
      </div>
    </section>
  )
}
