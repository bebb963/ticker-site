'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Premissa() {
  const refSection = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="premissa"
      aria-label="A Premissa"
      className="section-massive"
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

        {/* ─── COLUNA DIREITA: Asset Visual ─────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
          <div 
            className="protected-asset"
            style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '1/1',
              border: '1px dashed rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, rgba(255,90,0,0.15) 0%, rgba(255,90,0,0) 70%)',
            }}
          >
            {/* TODO: Substituir pelo asset final (ilustração ou gráfico) */}
            <span style={{ 
              fontFamily: "'Anantason Expanded Italic', serif", 
              color: 'rgba(255,255,255,0.3)',
              fontSize: '14px',
              letterSpacing: '1px'
            }}>
              [ Elemento Visual / Grafico ]
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
