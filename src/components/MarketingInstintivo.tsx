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
    hint: 'A visao que deu origem ao negocio e o que a lideranca realmente pensa, antes dos crachas.',
    imageSrc: null as string | null,
  },
  {
    num: '02',
    title: 'Time',
    subtitle: 'Lente: Cultura',
    hint: 'Os rituais invisiveis, o tom de voz interno e como as decisoes de fato acontecem no dia a dia.',
    imageSrc: null as string | null,
  },
  {
    num: '03',
    title: 'Produto',
    subtitle: 'Lente: Mercado',
    hint: 'A oferta concreta confrontada com quem concorre, quem inspira e onde a atencao esta de verdade.',
    imageSrc: null as string | null,
  },
  {
    num: '04',
    title: 'Quem compra',
    subtitle: 'Lente: Dados',
    hint: 'O comportamento real antes da decisao. Cruzamos o que os numeros confirmam com o que eles escondem.',
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
        <span className="section-label">(Presença & Análise)</span>

        {/* Statement unificado */}
        <h2 className="section-statement">
          Todo negocio e um sistema de humanos. Para entende-lo, e preciso estar dentro.
        </h2>

        {/* Apoio unificado */}
        <p className="section-support" style={{ marginBottom: 'var(--space-4)' }}>
          Observamos de perto as pessoas, a cultura, o mercado e os dados. 
          Lemos o que move cada um, antes da razao entrar em cena.
        </p>

        {/* Grid de Pilares (Cards Premium Claros) */}
        <div className="mi-humans-grid">
          {PILLARS.map((pillar, i) => (
            <div key={i} className="mi-human-block" tabIndex={0} role="group" aria-label={pillar.title}>
              {/* Número / Imagem */}
              <div className="mi-human-media">
                {pillar.imageSrc ? (
                  <Image
                    src={pillar.imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  pillar.num
                )}
              </div>

              {/* Conteúdo do Card */}
              <div className="mi-human-content">
                <span style={{
                  display: 'block',
                  fontFamily: "'Anantason Expanded Italic', serif",
                  fontStyle: 'italic',
                  fontSize: '16px',
                  color: 'var(--accent)',
                  marginBottom: '4px',
                  transition: 'opacity 0.3s ease',
                }}>
                  {pillar.subtitle}
                </span>
                <h3 className="mi-human-title">{pillar.title}</h3>
                <p className="mi-human-hint">{pillar.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
