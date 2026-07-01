'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Premissa() {
  const refSection = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="premissa"
      aria-label="A Premissa"
      className="section-massive section-fold"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-inverse)'
      }}
    >
      <div ref={refSection} className="reveal container-content grid-split" style={{ alignItems: 'center' }}>

        {/* ─── COLUNA ESQUERDA: Textos ──────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <span className="section-label section-label--inverse">
              <span style={{ color: 'var(--accent)', fontStyle: 'normal', marginRight: '8px' }}>01</span>
              (O ponto de partida)
            </span>
            <h2 className="section-statement" style={{ maxWidth: '900px' }}>
              A maioria das empresas tenta crescer explorando apenas parte do seu potencial.
            </h2>
          </div>

          <div style={{ maxWidth: '680px' }}>
            <p className="section-support section-support--inverse" style={{ marginBottom: '32px' }}>
              Antes de investir mais, identificamos os caminhos que podem gerar resultado
              para o seu negocio. Estruturamos esses canais, validamos sua capacidade de
              gerar demanda e so aceleramos aquilo que realmente funciona.
            </p>
            <p
              style={{
                fontFamily: "'Open Sauce One', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                lineHeight: 1.4,
                color: '#FFFFFF',
              }}
            >
              Estruturar e ampliar a capacidade do negocio de gerar resultado.
            </p>
          </div>
        </div>

        {/* ─── COLUNA DIREITA: Gráfico do potencial ─────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
          <div className="premissa-graphic" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Glow central */}
              <defs>
                <radialGradient id="premissa-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,90,0,0.20)" />
                  <stop offset="60%" stopColor="rgba(255,90,0,0.04)" />
                  <stop offset="100%" stopColor="rgba(255,90,0,0)" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="200" fill="url(#premissa-glow)" />

              {/* Anéis concêntricos — o potencial total do negócio */}
              <circle cx="200" cy="200" r="176" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="2 7" />
              <circle cx="200" cy="200" r="128" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 7" />
              <circle cx="200" cy="200" r="80"  fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

              {/* Arco em destaque — a parte hoje explorada (parcial) */}
              <circle
                cx="200" cy="200" r="176"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="290 815"
                strokeDashoffset="-70"
                transform="rotate(-90 200 200)"
              />

              {/* Nós no anel externo (rotação lenta) */}
              <g className="premissa-orbit">
                <circle cx="200" cy="24"  r="4" fill="var(--accent)" className="premissa-node-live" />
                <circle cx="345" cy="128" r="3" fill="rgba(255,255,255,0.35)" />
                <circle cx="55"  cy="272" r="3" fill="rgba(255,255,255,0.20)" />
                <circle cx="330" cy="290" r="2.5" fill="rgba(255,255,255,0.15)" />
              </g>

              {/* Nós no anel interno (rotação inversa) */}
              <g className="premissa-orbit-rev">
                <circle cx="200" cy="72"  r="3" fill="rgba(255,255,255,0.30)" />
                <circle cx="128" cy="200" r="2.5" fill="rgba(255,255,255,0.18)" />
                <circle cx="272" cy="200" r="2.5" fill="var(--accent)" opacity="0.7" />
              </g>

              {/* Núcleo — o negócio */}
              <circle cx="200" cy="200" r="6" fill="var(--accent)" />
              <circle cx="200" cy="200" r="14" fill="none" stroke="rgba(255,90,0,0.4)" strokeWidth="1" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  )
}
