'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState } from 'react'

const PHASES = [
  {
    num: '01',
    title: 'Infraestrutura',
    promessa: 'preparar a empresa para crescer',
    ganho: 'base solida: posicionamento, presenca, processo, ferramentas e dados',
    fazemos: [
      'Diagnostico Estrategico (O Mapa)',
      'Estrutura Digital',
      'Estrutura Comercial',
      'Estrutura de Conteudo',
      'Estrutura de Dados'
    ]
  },
  {
    num: '02',
    title: 'Operacao',
    promessa: 'transformar a infraestrutura em um sistema operacional que gera movimento e historico',
    ganho: 'canais ativados e otimizados, e um ativo de dados que se acumula',
    fazemos: [
      'Comunicacao (design, midia, copy)',
      'Gestao dos canais',
      'Inteligencia de mercado',
      'Melhoria continua'
    ]
  },
  {
    num: '03',
    title: 'Growth Intelligence',
    promessa: 'usar os dados historicos para construir previsibilidade',
    ganho: 'previsibilidade real, sustentada por evidencia',
    fazemos: [
      'Forecasting',
      'Otimizacao pelos 5 eixos de restricao (Oportunidade, Presenca, Captacao, Conversao, Capacidade)',
      'Expansao de canais',
      'Inteligencia de mercado aplicada'
    ]
  }
]

export default function TresFases() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null)

  const togglePhase = (idx: number) => {
    setExpandedPhase(expandedPhase === idx ? null : idx)
  }

  return (
    <section
      id="fases"
      className="section-massive"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-inverse)',
      }}
    >
      <div ref={ref} className="reveal container-content">

        {/* ─── TOPO ──────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'var(--space-6)', maxWidth: '800px' }}>
          <span className="section-label section-label--inverse">(As tres fases)</span>
          <h2 className="section-statement">
            Um sistema de crescimento em tres fases.
          </h2>
          <p className="section-support section-support--inverse" style={{ marginTop: '16px' }}>
            Infraestrutura, operacao e growth. Cada fase constroi a base da proxima.
          </p>
        </div>

        {/* ─── STEPPER (LINHA DO TEMPO) ──────────────────────────────────── */}
        <div className="tf-stepper">
          {PHASES.map((phase, idx) => {
            const isExpanded = expandedPhase === idx
            return (
              <div key={idx} className="tf-step">
                {/* Linha conectora */}
                <div className="tf-step-connector" />

                <div className="tf-step-header" onClick={() => togglePhase(idx)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePhase(idx); }}}>
                  <div className="tf-step-marker">
                    <span style={{ color: 'var(--accent)', fontFamily: "'Anantason Expanded', sans-serif", fontSize: '24px' }}>
                      {phase.num}
                    </span>
                  </div>
                  <h3 className="tf-step-title">{phase.title}</h3>
                </div>

                <div className="tf-step-body">
                  <div className="tf-step-summary">
                    <p><strong>Promessa:</strong> {phase.promessa}.</p>
                    <p><strong>Ganho:</strong> {phase.ganho}.</p>
                  </div>

                  <button 
                    className="tf-expand-btn"
                    aria-expanded={isExpanded}
                    onClick={() => togglePhase(idx)}
                  >
                    {isExpanded ? 'Ocultar entregaveis -' : 'O que fazemos +'}
                  </button>

                  <div className={`tf-step-details ${isExpanded ? 'tf-step-details--expanded' : ''}`}>
                    <ul className="tf-deliverables-list">
                      {phase.fazemos.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ─── MENSAGEM CONDUZIR X EXECUTAR ──────────────────────────────── */}
        <div className="tf-execution-notice">
          <p>
            Em qualquer fase, a Ticker pode <strong style={{ color: 'var(--color-bg-white)' }}>conduzir o seu time interno</strong> ou{' '}
            <strong style={{ color: 'var(--color-bg-white)' }}>executar de ponta a ponta</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
