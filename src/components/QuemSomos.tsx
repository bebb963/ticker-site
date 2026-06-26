'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState } from 'react'

// ─── DEPOIMENTOS (genéricos por enquanto — substituir por reais) ────
// TODO: substituir por depoimentos reais dos clientes
const TESTIMONIALS = [
  {
    quote: 'A Ticker entendeu em semanas o que agencias anteriores nao conseguiram em meses. O Mapa mudou a forma como a gente enxerga o proprio negocio.',
    name: 'Cliente 1',
    role: 'CEO',
    company: 'Empresa A',
  },
  {
    quote: 'Pela primeira vez, marketing e vendas falam a mesma lingua. Os resultados apareceram antes do esperado.',
    name: 'Cliente 2',
    role: 'Diretora de Marketing',
    company: 'Empresa B',
  },
  {
    quote: 'O diferencial e a profundidade. Eles mergulham no negocio antes de propor qualquer coisa. Isso muda tudo.',
    name: 'Cliente 3',
    role: 'Fundador',
    company: 'Empresa C',
  },
]

export default function QuemSomos() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="quem-somos"
      aria-label="Depoimentos"
      className="section-massive"
      style={{
        background: 'var(--color-bg-muted)',
        color: 'var(--color-text-default)',
      }}
    >
      <div ref={ref} className="reveal container-content">
        {/* Rótulo */}
        <span className="section-label">(Depoimentos)</span>

        {/* Statement */}
        <h2 className="section-statement" style={{ marginBottom: 'var(--space-4)' }}>
          Quem ja trabalhou com a Ticker.
        </h2>

        {/* Depoimento ativo — destaque grande */}
        <div className="depo-featured depo-featured--light" key={activeIndex}>
          {/* Aspas decorativas */}
          <span className="depo-quote-mark depo-quote-mark--light" aria-hidden="true">&ldquo;</span>

          <blockquote className="depo-quote">
            <p className="depo-quote-text--light">{TESTIMONIALS[activeIndex].quote}</p>
          </blockquote>

          <div className="depo-attribution">
            {/* Iniciais como avatar */}
            <div className="depo-avatar depo-avatar--light">
              {TESTIMONIALS[activeIndex].name.split(' ').map(w => w[0]).join('')}
            </div>
            <div>
              <cite className="depo-name depo-name--light">{TESTIMONIALS[activeIndex].name}</cite>
              <span className="depo-role depo-role--light">
                {TESTIMONIALS[activeIndex].role}, {TESTIMONIALS[activeIndex].company}
              </span>
            </div>
          </div>
        </div>

        {/* Navegação entre depoimentos */}
        <div className="depo-nav depo-nav--light" role="tablist" aria-label="Navegar depoimentos">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Depoimento de ${t.name}`}
              className={`depo-nav-btn depo-nav-btn--light ${activeIndex === i ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <span className="depo-nav-name depo-nav-name--light">{t.name}</span>
              <span className="depo-nav-company depo-nav-company--light">{t.company}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
