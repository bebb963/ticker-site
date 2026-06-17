'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function QuemSomos() {
  const refContent = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="quem-somos"
      aria-label="Por Trás da Ticker"
      className="qs-section"
    >
      {/* ── Grid 50/50: Foto + Conteúdo ──────────────────────── */}
      <div className="qs-grid">
        {/* Coluna Esquerda — Foto */}
        <div className="qs-image-col">
          <img
            src="/images/Bruno e Priscila.png"
            alt="Bruno Barroso e Priscila Lima — Sócios fundadores da Ticker"
            className="qs-image"
          />
        </div>

        {/* Coluna Direita — Conteúdo */}
        <div ref={refContent} className="reveal qs-content-col">
          <span className="qs-eyebrow">(Os Sócios)</span>

          <h2 className="qs-title">
            Por Trás<br />da Ticker
          </h2>

          <p className="qs-intro">
            A Ticker nasceu da união de duas visões que, juntas, ampliam
            a qualidade de cada decisão.
          </p>

          {/* ── Priscila ──────────────────────────────────── */}
          <div className="qs-card">
            <span className="qs-card-label">(Comunicação e Marca)</span>
            <h3 className="qs-card-name">Priscila Lima</h3>
            <p className="qs-card-desc">
              Marca, conteúdo e narrativa que fortalecem a percepção e criam
              conexão genuína com o público.
            </p>
          </div>

          {/* ── Bruno ─────────────────────────────────────── */}
          <div className="qs-card">
            <span className="qs-card-label">(Growth e Performance)</span>
            <h3 className="qs-card-name">Bruno Barroso</h3>
            <p className="qs-card-desc">
              Dados, vendas e gestão, garantindo que cada decisão tenha base
              sólida e gere resultado real.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
