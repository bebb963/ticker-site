'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState } from 'react'
import Image from 'next/image'

// ─── 4 PILARES UNIFICADOS ───────────────────────────────────────────
const PILLARS = [
  {
    num: '01',
    title: 'Fundador',
    subtitle: 'Lente: Pessoas',
    hint: 'A visão que deu origem ao negócio e o que a liderança realmente pensa, antes dos crachás.',
    imageSrc: null as string | null,
  },
  {
    num: '02',
    title: 'Time',
    subtitle: 'Lente: Cultura',
    hint: 'Os rituais invisíveis, o tom de voz interno e como as decisões de fato acontecem no dia a dia.',
    imageSrc: null as string | null,
  },
  {
    num: '03',
    title: 'Produto',
    subtitle: 'Lente: Mercado',
    hint: 'A oferta concreta confrontada com quem concorre, quem inspira e onde a atenção está de verdade.',
    imageSrc: null as string | null,
  },
  {
    num: '04',
    title: 'Quem compra',
    subtitle: 'Lente: Dados',
    hint: 'O comportamento real antes da decisão. Cruzamos o que os números confirmam com o que eles escondem.',
    imageSrc: null as string | null,
  },
]

export default function MarketingInstintivo() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="sistema-de-humanos"
      aria-label="Sistema de Humanos"
      className="section-massive"
      style={{
        background: 'var(--color-bg-muted)',
        color: 'var(--color-text-default)',
      }}
    >
      <div ref={ref} className="reveal container-content">
        {/* Rótulo */}
        <span className="section-label">(Marketing Instintivo)</span>

        {/* Statement unificado */}
        <h2 className="section-statement" style={{ maxWidth: '900px' }}>
          Todo negócio é um sistema de humanos. Para entendê-lo, é preciso estar dentro.
        </h2>

        {/* Apoio unificado */}
        <p className="section-support" style={{ marginBottom: '16px' }}>
          Observamos de perto as pessoas, a cultura, o mercado e os dados. 
          Lemos o que move cada um, antes da razão entrar em cena.
        </p>

        {/* PUV — Frase-âncora */}
        <p style={{
          fontFamily: "'Anantason Expanded Italic', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 2vw, 22px)',
          lineHeight: 1.6,
          color: 'var(--accent)',
          marginBottom: 'var(--space-4)',
          maxWidth: '800px',
        }}>
          Estudamos o que move o seu negócio para estruturar vias de crescimento que unem marketing, vendas e gestão.
        </p>

        {/* Grid de Pilares (Editorial List) */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'var(--space-4)' }}>
          {PILLARS.map((pillar, i) => (
            <div key={i} className="mi-editorial-row" style={{
              borderTop: '1px solid rgba(14,16,17,0.1)',
              borderBottom: i === PILLARS.length - 1 ? '1px solid rgba(14,16,17,0.1)' : 'none',
            }}>
              {/* Número Editorial */}
              <span style={{
                fontFamily: "'Anantason Expanded', sans-serif",
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 500,
                lineHeight: 1,
                color: 'rgba(14,16,17,0.1)',
                display: 'block'
              }}>
                {pillar.num}
              </span>

              {/* Conteúdo Editorial */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 700,
                    fontSize: '24px',
                    color: 'var(--ds-black)',
                    margin: 0
                  }}>
                    {pillar.title}
                  </h3>
                  <span style={{
                    fontFamily: "'Anantason Expanded Italic', serif",
                    fontStyle: 'italic',
                    fontSize: '15px',
                    color: 'var(--accent)',
                  }}>
                    ({pillar.subtitle})
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Open Sauce One', sans-serif",
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: 1.6,
                  color: 'rgba(14,16,17,0.6)',
                  maxWidth: '700px',
                  margin: 0
                }}>
                  {pillar.hint}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
