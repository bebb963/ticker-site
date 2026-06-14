'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useEffect, useRef } from 'react'

const MANIFESTO_PHRASES = [
  "A Ticker nasceu da admiração por quem decide construir um negócio.",
  "Acreditamos que grandes empresas são construídas sobre percepções que poucos se dedicam a observar.",
  "Por isso, escolhemos estar próximos. Das pessoas, dos clientes, da operação e da realidade que molda cada negócio todos os dias.",
  "A partir daí, transformamos conhecimento em direção."
]

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      id="manifesto" 
      aria-label="Manifesto" 
      className="section-massive"
      style={{ 
        background: '#0E1011', 
        color: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <span style={{
          fontFamily: "'DM Serif Text', serif",
          fontStyle: 'italic',
          fontSize: '32px',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.4)',
          display: 'block',
          marginBottom: '96px',
        }}>
          (O Manifesto)
        </span>

        {MANIFESTO_PHRASES.map((phrase, index) => (
          <ManifestoPhrase key={index} text={phrase} />
        ))}
      </div>
    </section>
  )
}

function ManifestoPhrase({ text }: { text: string }) {
  const ref = useScrollReveal<HTMLHeadingElement>()

  return (
    <h2
      ref={ref}
      className="reveal"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: 'clamp(40px, 6vw, 96px)',
        letterSpacing: '-2px',
        lineHeight: 1.1,
        color: '#FFFFFF',
        marginBottom: '96px',
        maxWidth: '1200px'
      }}
    >
      {text}
    </h2>
  )
}
