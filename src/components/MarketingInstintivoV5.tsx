'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── Os 4 pilares do Instinto (Lentes Permanentes) ──────────────────────────
const PILARES = [
  {
    num: '01',
    label: 'Fundador',
    desc: 'A visão original, os valores e a convicção de quem deu início ao negócio.',
  },
  {
    num: '02',
    label: 'Time',
    desc: 'A cultura viva, a capacidade de execução e o alinhamento de quem faz acontecer.',
  },
  {
    num: '03',
    label: 'Produto',
    desc: 'A tradução prática e a experiência de valor que o negócio entrega ao mercado.',
  },
  {
    num: '04',
    label: 'Consumidor',
    desc: 'O comportamento, dores e desejos que guiam a decisão de compra real.',
  },
]

// ─── As 8 perguntas da Metodologia (Fluxo Lógico) ───────────────────────────
const PERGUNTAS = [
  { num: '01', titulo: 'Quem é o cliente?', texto: 'Quem compra de verdade e o que move essa decisão.' },
  { num: '02', titulo: 'Onde?', texto: 'Canais, territórios e contextos em que a empresa precisa estar.' },
  { num: '03', titulo: 'Como atrair?', texto: 'Aquisição realista para o contexto e custo ideal por cliente.' },
  { num: '04', titulo: 'Como converter?', texto: 'Funis que constroem confiança antes da oferta.' },
  { num: '05', titulo: 'Como reter?', texto: 'CRM, comunidade e experiência para o cliente voltar.' },
  { num: '06', titulo: 'Como monetizar?', texto: 'Marketing e comercial com previsibilidade de receita.' },
  { num: '07', titulo: 'Como gerenciar?', texto: 'Ritmo, prioridade e evolução contínua.' },
]

export default function MarketingInstintivoV5() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refInstinto = useScrollReveal<HTMLDivElement>()
  const refMetodo = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="marketing-instintivo"
      aria-label="Marketing Instintivo"
      className="mi-section"
    >
      {/* ─── HEADER ─────────────────────────────────────────────── */}
      <div ref={refHeader} className="reveal mi-header">
        <span className="mi-eyebrow">(Marketing Instintivo)</span>

        <div className="mi-header-row">
          <h2 className="mi-title">
            Marketing<br />Instintivo
          </h2>

          <p className="mi-intro">
            Antes de qualquer ação, observamos quem fundou, quem trabalha,
            o que se vende e quem consome. Depois, estruturamos.
          </p>
        </div>
      </div>

      {/* ─── O INSTINTO (4 Pilares — Layout editorial compacto) ── */}
      <div ref={refInstinto} className="reveal mi-block">
        <div className="mi-instinto-row">
          <span className="mi-sublabel">(O Instinto)</span>
          <div className="mi-pilares-flow">
            {PILARES.map((p, i) => (
              <div key={i} className="mi-pilar">
                <span className="mi-pilar-num">{p.num}</span>
                <h3 className="mi-pilar-title">{p.label}</h3>
              </div>
            ))}
          </div>
        </div>
        <p className="mi-instinto-desc">
          Todo negócio é, antes de tudo, um sistema de humanos. O Marketing Instintivo é o estudo do que move cada um deles, num nível mais profundo do que conseguem verbalizar.
          <br /><br />
          Estas são as quatro lentes permanentes pelas quais analisamos qualquer negócio: o fundador, o time, o produto e o consumidor.
        </p>
      </div>

      {/* ─── A METODOLOGIA (7 Perguntas — Lista editorial) ──────── */}
      <div ref={refMetodo} className="reveal mi-block mi-block-bottom">
        <span className="mi-sublabel">(A Metodologia: 7 perguntas que estruturam cada decisão)</span>

        <div className="mi-metodo-list">
          {PERGUNTAS.map((item, i) => (
            <div key={i} className="mi-metodo-item">
              <span className="mi-metodo-num">{item.num}</span>
              <div className="mi-metodo-content">
                <h3 className="mi-metodo-title">{item.titulo}</h3>
                <p className="mi-metodo-text">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
