'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── CONTEÚDO — /base-de-conhecimento verificada ─────────────────────────────
// Depoimentos textuais: NÃO encontrados nos docs.
// ⚠️ O usuário autorizou Lorem Ipsum nesta seção (mensagem de 26/03/2026).
// Substituir todos os itens abaixo por depoimentos reais quando disponíveis.
//
// Fonte para o cabeçalho:
//   Título e subtítulo extraídos de Posicionamento e Comunicação.md
//   (território "Do Real" + propósito "revelar o potencial real de cada negócio")
// ─────────────────────────────────────────────────────────────────────────────

interface Testimonial {
  id: string
  quote: string   // Título/frase-chave do depoimento
  text: string    // Texto completo
  name: string    // Nome do cliente
  company: string // Empresa
}

// ── Cabeçalho ─────────────────────────────────────────────────────────────
// Fonte: Estratégia Ticker.md:172 — "Clareza sobre quem a marca é..."
const SECTION_TITLE = 'O que dizem\nquem passou\npelo processo.'
const SECTION_SUBTITLE =
  'Resultados não estão só nos números, mas na clareza, na direção e na confiança de quem sabia exatamente o que estava construindo.'

// ── Depoimentos (6 — Lorem Ipsum autorizado) ──────────────────────────────
// ⚠️ Substituir por depoimentos reais quando disponíveis
const TESTIMONIALS: Testimonial[] = [
  {
    id: '01',
    quote: '"Direção, clareza e ritmo. A Ticker mudou nosso jogo."',
    text: 'A parceria com a Ticker transformou nossa estratégia de marketing em uma máquina previsível e eficiente. Ter o acompanhamento direto deles nos deu a tranquilidade para focar no que fazemos de melhor.',
    name: 'Jeff Beuting',
    company: 'Neres',
  },
  {
    id: '02',
    quote: '"Eles finalmente entenderam nossa essência."',
    text: 'O que mais impressionou foi a capacidade da Ticker de decodificar não só o que vendíamos, mas a nossa marca e o impacto que causamos. O mapa nos deu uma rota clara que vamos seguir por anos.',
    name: 'Luana Santos',
    company: 'Be Fancy',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

function TestimonialCard({ item, isLast }: { item: Testimonial; isLast: boolean }) {
  return (
    <div
      style={{
        padding: '32px',
        borderRight: isLast ? 'none' : '1px solid rgba(14,16,17,0.12)',
        borderBottom: '1px solid rgba(14,16,17,0.12)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Aspas abertas */}
      <span
        aria-hidden
        style={{
          fontFamily: "'Anton SC', sans-serif",
          fontSize: '64px',
          lineHeight: 0.8,
          color: '#0E1011',
          display: 'block',
          marginBottom: '16px',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </span>

      {/* Título do depoimento */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: 1.4,
          color: '#0E1011',
          margin: '0 0 12px',
        }}
      >
        {item.quote}
      </p>

      {/* Texto do depoimento */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: 1.7,
          color: 'rgba(14,16,17,0.6)',
          margin: '0 0 24px',
          flexGrow: 1,
        }}
      >
        {item.text}
      </p>

      {/* Separador */}
      <div
        style={{
          borderTop: '1px solid rgba(14,16,17,0.08)',
          marginBottom: '16px',
        }}
      />

      {/* Nome + Empresa */}
      <div>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '13px',
            color: '#0E1011',
            display: 'block',
            lineHeight: 1.4,
          }}
        >
          {item.name}
        </span>
        <span
          style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '13px',
            color: 'rgba(14,16,17,0.6)',
            lineHeight: 1.4,
          }}
        >
          {item.company}
        </span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const COLS = 3 // linha com 3 colunas
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refGrid   = useScrollReveal<HTMLDivElement>()

  return (
    <section id="depoimentos" aria-label="Depoimentos" style={{ background: '#F8F8F8' }}>

      {/* ─── CABEÇALHO ──────────────────────────────────────────────────── */}
      <div style={{ padding: '96px 96px 80px' }} className="testimonials-header-wrap reveal" ref={refHeader}>

        {/* Linha superior */}
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
            (Depoimentos)
          </span>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            lineHeight: 1,
            color: 'rgba(14,16,17,0.6)',
          }}>
            (03)
          </span>
        </div>

        {/* Título principal — Anton SC 80px */}
        <h2 className="testimonials-title">
          {SECTION_TITLE}
        </h2>

        {/* Subtítulo */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '22px',
          lineHeight: 1.7,
          color: 'rgba(14,16,17,0.65)',
          maxWidth: '768px',
          margin: '32px 0 0',
        }}>
          {SECTION_SUBTITLE}
        </p>

      </div>

      {/* ─── GRID DE CARDS ──────────────────────────────────────────────── */}
      <div
        className="testimonials-grid stagger reveal" ref={refGrid}
        style={{ borderTop: '1px solid rgba(14,16,17,0.12)' }}
      >
        {TESTIMONIALS.map((item, index) => {
          // O último da linha não tem border-right
          const posInRow = index % COLS
          const isLastInRow = posInRow === COLS - 1
          return (
            <TestimonialCard
              key={item.id}
              item={item}
              isLast={isLastInRow}
            />
          )
        })}
      </div>

    </section>
  )
}
