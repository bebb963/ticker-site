'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'
import type { ScoreResultData, PillarResult } from '@/data/score-types'

interface ScoreResultProps {
  result: ScoreResultData
  onRestart: () => void
}

/* ─── Circular Score Indicator ────────────────────────────────── */
function CircularScore({ score }: { score: number }) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const radius = 90
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (animatedScore / 100) * circumference

  useEffect(() => {
    let frame: number
    const start = performance.now()
    const duration = 1800

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedScore(Math.round(eased * score))
      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [score])

  const color =
    score >= 70 ? '#22c55e' :
    score >= 40 ? '#eab308' :
    '#ef4444'

  return (
    <div className="score-circle">
      <svg viewBox="0 0 200 200" className="score-circle-svg">
        {/* Background ring */}
        <circle
          cx="100" cy="100" r={radius}
          fill="none"
          stroke="rgba(14,16,17,0.06)"
          strokeWidth="6"
        />
        {/* Progress ring */}
        <circle
          cx="100" cy="100" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: 'stroke-dashoffset 0.05s linear',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <div className="score-circle-value">
        <span className="score-circle-number">{animatedScore}</span>
        <span className="score-circle-total">/100</span>
      </div>
    </div>
  )
}

/* ─── Pillar Bar ──────────────────────────────────────────────── */
function PillarBar({ pillar }: { pillar: PillarResult }) {
  const statusColor: Record<string, string> = {
    green: '#22c55e',
    yellow: '#eab308',
    red: '#ef4444',
  }
  const statusLabel: Record<string, string> = {
    green: 'Consolidado',
    yellow: 'Em evolução',
    red: 'Oportunidade',
  }

  return (
    <div className="score-pillar">
      <div className="score-pillar-header">
        <span className="score-pillar-name">{pillar.name}</span>
        <span
          className="score-pillar-status"
          style={{ color: statusColor[pillar.status] }}
        >
          {statusLabel[pillar.status]}
        </span>
      </div>
      <div className="score-pillar-bar">
        <div
          className="score-pillar-fill"
          style={{
            width: `${pillar.score}%`,
            background: statusColor[pillar.status],
          }}
        />
      </div>
      <p className="score-pillar-desc">{pillar.description}</p>
    </div>
  )
}

/* ─── Main Result Component ───────────────────────────────────── */
export default function ScoreResult({ result, onRestart }: ScoreResultProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Acabei de fazer o Ticker Score e obtive ${result.score}/100. Gostaria de conversar com um especialista para aprofundar o diagnóstico.`
  )
  const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`

  return (
    <div className="score-result">
      <div className="score-result-inner">

        {/* 1 ── Score em destaque absoluto ──────────────────────── */}
        <section className="score-result-hero">
          <div className="score-badge">
            <span className="score-badge-dot" />
            <span>Seu Diagnóstico</span>
          </div>

          <CircularScore score={result.score} />

          <h1 className="score-result-title">{result.diagnosticTitle}</h1>
        </section>

        {/* 2 ── Diagnóstico / Resumo Executivo ─────────────────── */}
        <section className="score-result-section">
          <h2 className="score-section-title">Resumo Executivo</h2>
          <p className="score-result-summary">{result.diagnosticSummary}</p>
        </section>

        {/* 3 ── Pilares Avaliados ──────────────────────────────── */}
        <section className="score-result-section">
          <h2 className="score-section-title">Pilares Avaliados</h2>
          <div className="score-pillars-grid">
            {result.pillars.map((p) => (
              <PillarBar key={p.name} pillar={p} />
            ))}
          </div>
        </section>

        {/* 4a ── Pontos Fortes ──────────────────────────────────── */}
        {result.strengths.length > 0 && (
          <section className="score-result-section">
            <h2 className="score-section-title">Pontos Fortes</h2>
            <ul className="score-opp-list">
              {result.strengths.map((s, i) => (
                <li key={i} className="score-opp-item score-opp-strength">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 4b ── Oportunidades ─────────────────────────────────── */}
        {result.opportunities.length > 0 && (
          <section className="score-result-section">
            <h2 className="score-section-title">Oportunidades Identificadas</h2>
            <ul className="score-opp-list">
              {result.opportunities.map((opp, i) => (
                <li key={i} className="score-opp-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  <span>{opp}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 4c ── Pontos de Atenção ─────────────────────────────── */}
        {result.risks.length > 0 && (
          <section className="score-result-section">
            <h2 className="score-section-title">Pontos de Atenção</h2>
            <ul className="score-opp-list">
              {result.risks.map((risk, i) => (
                <li key={i} className="score-opp-item score-opp-attention">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 5 ── Prioridades ────────────────────────────────────── */}
        {result.priorities.length > 0 && (
          <section className="score-result-section">
            <h2 className="score-section-title">Próximos Passos Recomendados</h2>
            <ol className="score-priorities-list">
              {result.priorities.map((p, i) => (
                <li key={i} className="score-priority-item">
                  <span className="score-priority-num">{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* 6 ── CTA WhatsApp (destaque máximo) ─────────────────── */}
        <section className="score-result-cta">
          <h2 className="score-cta-title">
            Quer validar esse diagnóstico com um especialista da Ticker?
          </h2>
          <p className="score-cta-desc">
            Em uma conversa de aproximadamente 20 minutos conseguimos aprofundar este diagnóstico
            e mostrar como outras empresas estão estruturando sua operação comercial e digital.
          </p>

          {/* WhatsApp — AÇÃO PRINCIPAL */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="score-whatsapp-cta">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span>Falar com um especialista da Ticker</span>
          </a>

          {/* Ações secundárias */}
          <div className="score-secondary-actions">
            <button onClick={onRestart} className="score-cta-secondary">
              <RotateCcw size={16} />
              <span>Refazer avaliação</span>
            </button>

            <a href="/" className="score-cta-secondary">
              <ArrowRight size={16} />
              <span>Voltar ao site</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
