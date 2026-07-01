'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState, useEffect, useCallback } from 'react'

const HUMANS = [
  {
    id: 'fundador',
    label: 'Fundador',
    phrase: 'Uma visao, um incomodo, uma conviccao sobre o que o mundo precisa.',
    image: null as string | null,
  },
  {
    id: 'time',
    label: 'Time',
    phrase: 'Carrega a cultura viva da empresa todos os dias.',
    image: null as string | null,
  },
  {
    id: 'produto',
    label: 'Produto',
    phrase: 'Nascido da intencao de resolver, transformar ou criar valor.',
    image: null as string | null,
  },
  {
    id: 'consumidor',
    label: 'Consumidor',
    phrase: 'Movido por desejos que muitas vezes precedem a razao.',
    image: null as string | null,
  },
]

export default function MarketingInstintivo() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleKeyDown = useCallback((e: React.KeyboardEvent, i: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (i + 1) % HUMANS.length
      setActiveIndex(next)
      document.getElementById(`mi-human-${next}`)?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = (i - 1 + HUMANS.length) % HUMANS.length
      setActiveIndex(prev)
      document.getElementById(`mi-human-${prev}`)?.focus()
    }
  }, [])

  return (
    <section
      id="marketing-instintivo"
      aria-label="Marketing Instintivo"
      className="section-massive"
      style={{
        background: 'var(--color-bg-muted)',
        color: 'var(--color-text-default)',
      }}
    >
      <div ref={ref} className="reveal container-content">
        
        {/* ─── TOPO ──────────────────────────────────────────────────────── */}
        <div>
          <span className="section-label">(Marketing Instintivo)</span>
          <h2 className="section-statement" style={{ maxWidth: '900px', marginTop: '16px' }}>
            Todo negocio e, antes de tudo, um sistema de humanos.
          </h2>
          <p className="section-support" style={{ marginTop: '24px' }}>
            O Marketing Instintivo e o estudo do que move cada um deles,
            num nivel mais profundo do que conseguem verbalizar.
          </p>
        </div>

        {/* ─── INTERATIVO (Lista Vertical + Imagem) ──────────────────────── */}
        <div className="mi-interactive-grid">
          
          {/* Lista Esquerda */}
          <div className="mi-humans-list" role="tablist" aria-label="Os quatro humanos">
            {HUMANS.map((human, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={human.id}
                  id={`mi-human-${i}`}
                  role="tab"
                  aria-selected={isActive}
                  className={`mi-human-btn ${isActive ? 'mi-human-btn--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  tabIndex={isActive ? 0 : -1}
                >
                  <h3 className="mi-human-label">{human.label}</h3>
                  <div className="mi-human-phrase-wrapper">
                    <p className="mi-human-phrase">{human.phrase}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Painel de Imagem Direita */}
          <div className="mi-human-image-panel" aria-live="polite">
            {HUMANS.map((human, i) => {
              const isActive = i === activeIndex
              return (
                <div 
                  key={`img-${human.id}`} 
                  className={`mi-human-image-slot ${isActive ? 'active' : ''}`}
                  aria-hidden={!isActive}
                >
                  {human.image ? (
                    <img 
                      src={human.image} 
                      alt="" 
                      className="protected-asset" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  ) : (
                    <div className="mi-human-image-fallback">
                      <span>{human.label.charAt(0)}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

        {/* ─── FECHO ─────────────────────────────────────────────────────── */}
        <div style={{ marginTop: '120px', textAlign: 'center' }}>
          <h3 
            className="section-statement" 
            style={{ 
              fontSize: 'clamp(32px, 5vw, 64px)', 
              maxWidth: '1000px', 
              margin: '0 auto',
              color: 'var(--color-text-default)',
            }}
          >
            Marketing, no fundo, e o estudo da evolucao humana.
          </h3>
        </div>

      </div>
    </section>
  )
}
