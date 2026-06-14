'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── Os 4 pilares (compactados como ícones/labels) ──────────────────────────
const PILARES = [
  { label: 'O Fundador',   desc: 'A visão e o propósito que deram origem ao negócio.' },
  { label: 'O Time',       desc: 'A cultura viva que sustenta o dia a dia.' },
  { label: 'O Produto',    desc: 'A tradução prática daquilo em que o negócio acredita.' },
  { label: 'O Consumidor', desc: 'Movido por desejos que antecedem a razão.' },
]

// ─── As 8 perguntas da metodologia ──────────────────────────────────────────
const PERGUNTAS = [
  {
    num: '01',
    titulo: 'Qual é o projeto?',
    texto: 'Análise do modelo de negócio e do mercado inserido. Posicionamento, JTBD e PUV.',
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
    texto: 'Estratégias de aquisição realistas para o seu contexto e custo ideal por cliente.',
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

// ─── Card de pergunta com hover reveal ──────────────────────────────────────
function PerguntaCard({ item, index }: { item: typeof PERGUNTAS[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '40px 32px',
        background: hovered ? '#0E1011' : '#FFFFFF',
        border: '1px solid rgba(14,16,17,0.06)',
        cursor: 'default',
        transition: 'background 0.35s ease, border-color 0.35s ease',
        borderColor: hovered ? '#0E1011' : 'rgba(14,16,17,0.06)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '220px',
      }}
    >
      {/* Número */}
      <span
        style={{
          fontFamily: "'DM Serif Text', serif",
          fontStyle: 'italic',
          fontSize: '16px',
          color: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(14,16,17,0.2)',
          transition: 'color 0.35s ease',
          marginBottom: '20px',
        }}
      >
        ({item.num})
      </span>

      {/* Título */}
      <h3
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(22px, 2.5vw, 32px)',
          letterSpacing: '-0.5px',
          lineHeight: 1.15,
          margin: '0 0 16px',
          color: hovered ? '#FFFFFF' : '#0E1011',
          transition: 'color 0.35s ease',
        }}
      >
        {item.titulo}
      </h3>

      {/* Descrição — aparece no hover */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '15px',
          lineHeight: 1.6,
          margin: 0,
          color: hovered ? 'rgba(255,255,255,0.6)' : 'rgba(14,16,17,0.45)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s, color 0.35s ease',
          maxWidth: '320px',
        }}
      >
        {item.texto}
      </p>

      {/* Linha inferior animada */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          background: '#FFFFFF',
          width: hovered ? '100%' : '0%',
          transition: 'width 0.4s ease',
        }}
      />
    </div>
  )
}

// ─── Componente principal ───────────────────────────────────────────────────
export default function MarketingInstintivoV2() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refPilares = useScrollReveal<HTMLDivElement>()
  const refGrid = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="marketing-instintivo"
      aria-label="Instinto e Metodologia"
      style={{
        background: '#F8F8F8',
        color: '#0E1011',
      }}
    >
      {/* ─── BLOCO 1: Header ─────────────────────────────────────────── */}
      <div
        ref={refHeader}
        className="reveal"
        style={{
          padding: '80px 96px 48px',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '20px',
              lineHeight: 1,
              color: 'rgba(14,16,17,0.4)',
              display: 'block',
              marginBottom: '32px',
            }}
          >
            (Marketing Instintivo)
          </span>

          {/* Título + frase lado a lado */}
          <div className="mi-v2-header-row">
            <h2
              style={{
                fontFamily: "'Anton SC', sans-serif",
                fontSize: 'clamp(48px, 8vw, 120px)',
                fontWeight: 400,
                textTransform: 'uppercase',
                lineHeight: 0.95,
                letterSpacing: '-2px',
                color: '#0E1011',
                margin: 0,
              }}
            >
              Instinto e{' '}
              <span
                style={{
                  fontFamily: "'DM Serif Text', serif",
                  fontStyle: 'italic',
                  textTransform: 'none',
                  letterSpacing: '-1px',
                }}
              >
                Metodologia
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.8vw, 22px)',
                lineHeight: 1.6,
                color: 'rgba(14,16,17,0.6)',
                maxWidth: '480px',
                margin: 0,
              }}
            >
              O Marketing Instintivo orienta a compreensão profunda do negócio.
              É a partir dessa observação que respondemos às 8 perguntas da nossa metodologia.
            </p>
          </div>
        </div>
      </div>

      {/* ─── BLOCO 2: Os 4 pilares — compactos ───────────────────────── */}
      <div
        ref={refPilares}
        className="reveal"
        style={{ padding: '0 96px 80px' }}
      >
        <div
          className="mi-v2-pilares-grid"
        >
          {PILARES.map((pilar, i) => (
            <div
              key={i}
              style={{
                padding: '32px 0',
                borderTop: '1px solid rgba(14,16,17,0.1)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#0E1011',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                {pilar.label}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: 1.5,
                  color: 'rgba(14,16,17,0.5)',
                }}
              >
                {pilar.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── BLOCO 3: Grid das 8 perguntas ───────────────────────────── */}
      <div
        ref={refGrid}
        className="reveal"
        style={{ padding: '0 96px 80px' }}
      >
        <div
          className="mi-v2-perguntas-grid"
        >
          {PERGUNTAS.map((item, i) => (
            <PerguntaCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
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
