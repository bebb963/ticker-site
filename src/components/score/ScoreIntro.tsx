'use client'

import { ArrowRight } from 'lucide-react'

interface ScoreIntroProps {
  onStart: () => void
}

export default function ScoreIntro({ onStart }: ScoreIntroProps) {
  return (
    <div className="score-intro">
      <div className="score-intro-inner">
        {/* Badge */}
        <div className="score-badge">
          <span className="score-badge-dot" />
          <span>Ticker Score</span>
        </div>

        {/* Title */}
        <h1 className="score-intro-title">
          Descubra o nível de maturidade comercial e digital da sua empresa.
        </h1>

        {/* Subtitle */}
        <p className="score-intro-subtitle">
          Responda algumas perguntas e receba imediatamente um diagnóstico personalizado
          mostrando o quanto sua empresa está preparada para crescer de forma previsível.
        </p>

        {/* Meta info */}
        <div className="score-intro-meta">
          <div className="score-intro-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>2 a 3 minutos</span>
          </div>
          <div className="score-intro-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>12 perguntas</span>
          </div>
          <div className="score-intro-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>Resultado imediato</span>
          </div>
        </div>

        {/* CTA */}
        <button onClick={onStart} className="score-cta-btn">
          <span>Iniciar avaliação</span>
          <ArrowRight size={20} />
        </button>

        {/* Trust */}
        <p className="score-intro-trust">
          Seus dados são tratados com sigilo. Diagnóstico 100% gratuito.
        </p>
      </div>
    </div>
  )
}
