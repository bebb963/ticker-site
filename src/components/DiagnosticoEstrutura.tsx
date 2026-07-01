'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Link from 'next/link'

const QUESTIONS = [
  {
    id: 'oportunidade',
    axis: 'Oportunidade',
    text: 'Como sua empresa identifica e dimensiona novas oportunidades de mercado hoje?',
    options: [
      { label: 'De forma orgânica e intuitiva, sem pesquisa estruturada', score: 0 },
      { label: 'Analisamos a concorrência e tendências esporadicamente', score: 50 },
      { label: 'Temos processos de pesquisa, mapeamento de persona e dados.', score: 100 }
    ]
  },
  {
    id: 'presenca',
    axis: 'Presenca',
    text: 'Quão clara e consistente é a mensagem da sua marca nos canais digitais?',
    options: [
      { label: 'Inconsistente. A comunicação não reflete o real valor.', score: 0 },
      { label: 'Temos identidade, mas a mensagem varia e nem sempre converte.', score: 50 },
      { label: 'Posicionamento claro, com comunicação unificada e autoridade.', score: 100 }
    ]
  },
  {
    id: 'captacao',
    axis: 'Captacao',
    text: 'Como funciona a estrutura de atração de novos clientes (Mídia, Conteúdo)?',
    options: [
      { label: 'Dependemos quase que 100% de indicações (boca-a-boca).', score: 0 },
      { label: 'Fazemos anúncios e posts, mas a geração de leads oscila muito.', score: 50 },
      { label: 'Máquina previsível. Canais validados gerando demanda recorrente.', score: 100 }
    ]
  },
  {
    id: 'conversao',
    axis: 'Conversao',
    text: 'Qual é o nível de maturidade do seu processo comercial e de vendas?',
    options: [
      { label: 'Cada vendedor faz de um jeito. Não temos um funil claro.', score: 0 },
      { label: 'Temos CRM e pipeline, mas a taxa de conversão poderia ser melhor.', score: 50 },
      { label: 'Processo documentado, cadências automatizadas e alta conversão.', score: 100 }
    ]
  },
  {
    id: 'capacidade',
    axis: 'Capacidade',
    text: 'A sua infraestrutura atual suportaria triplicar de tamanho amanhã?',
    options: [
      { label: 'Não. Nossa operação quebraria (processos, time ou ferramentas).', score: 0 },
      { label: 'Sim, mas com muito atrito e necessidade de ajustes urgentes.', score: 50 },
      { label: 'Sim. A estrutura de dados e processos já está pronta para escala.', score: 100 }
    ]
  }
]

type Phase = 'intro' | 'quiz' | 'lead' | 'result'

export default function DiagnosticoEstrutura() {
  const ref = useScrollReveal<HTMLDivElement>()

  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [lead, setLead] = useState({ nome: '', empresa: '', contato: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAnswer = (score: number) => {
    const q = QUESTIONS[currentQ]
    setAnswers(prev => ({ ...prev, [q.axis]: score }))
    
    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(prev => prev + 1)
      } else {
        setPhase('lead')
      }
    }, 300) // slight delay for visual feedback
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simula envio e processamento do resultado
    setTimeout(() => {
      setIsSubmitting(false)
      setPhase('result')
    }, 800)
  }

  const handleRestart = () => {
    setPhase('intro')
    setCurrentQ(0)
    setAnswers({})
    setLead({ nome: '', empresa: '', contato: '' })
  }

  const progressPercent = phase === 'quiz' 
    ? ((currentQ) / QUESTIONS.length) * 100 
    : phase === 'lead' || phase === 'result' ? 100 : 0

  return (
    <section
      id="diagnostico"
      aria-label="Diagnostico de estrutura"
      className="section-massive"
      style={{
        background: 'var(--color-bg-primary)',
        color: '#FFFFFF',
      }}
    >
      <div ref={ref} className="reveal container-content">
        
        <div className="diag-grid">
          {/* Coluna Esquerda: Cabecalho da secao */}
          <div style={{ maxWidth: '600px' }}>
            <span className="section-label">(Diagnostico de estrutura)</span>
            <h2 className="section-statement" style={{ marginTop: '16px', color: '#FFFFFF' }}>
              Onde esta o seu negocio hoje?
            </h2>
            <p className="section-support" style={{ marginTop: '24px', color: 'rgba(255,255,255,0.7)', maxWidth: '500px' }}>
              Um retrato rapido da maturidade da sua estrutura, dos seus canais, do comercial e do marketing. Em poucos minutos, voce enxerga onde estao as lacunas.
            </p>
          </div>

          {/* Coluna Direita: Ferramenta Interativa */}
          <div className="diag-tool-container">
            
            {/* Progress Bar Header */}
            <div className="diag-progress-bar">
              <div className="diag-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>

            <div className="diag-tool-body">
              
              {/* INTRO */}
              {phase === 'intro' && (
                <div className="diag-step-intro fade-in">
                  <h3 className="diag-title">Inicie sua analise de estrutura.</h3>
                  <p className="diag-desc">Responda 5 perguntas rapidas focadas nos eixos de restricao do seu negocio.</p>
                  <div style={{ marginTop: '32px' }}>
                    <button className="cta-primary" onClick={() => setPhase('quiz')}>
                      Fazer o diagnostico
                    </button>
                  </div>
                </div>
              )}

              {/* QUIZ */}
              {phase === 'quiz' && (
                <div className="diag-step-quiz fade-in" key={currentQ}>
                  <span className="diag-axis-label">Eixo {currentQ + 1}/5: {QUESTIONS[currentQ].axis}</span>
                  <h3 className="diag-title">{QUESTIONS[currentQ].text}</h3>
                  
                  <div className="diag-options">
                    {QUESTIONS[currentQ].options.map((opt, idx) => (
                      <button 
                        key={idx} 
                        className="diag-option-btn"
                        onClick={() => handleAnswer(opt.score)}
                      >
                        <span className="diag-opt-letter">{String.fromCharCode(65 + idx)}</span>
                        <span className="diag-opt-text">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* LEAD CAPTURE */}
              {phase === 'lead' && (
                <div className="diag-step-lead fade-in">
                  <h3 className="diag-title">Analise concluida.</h3>
                  <p className="diag-desc">Para onde devemos enviar o seu retrato de maturidade?</p>
                  
                  <form onSubmit={handleLeadSubmit} className="diag-form">
                    <div className="diag-input-group">
                      <input type="text" required placeholder="Seu nome" value={lead.nome} onChange={e => setLead({...lead, nome: e.target.value})} className="diag-input" />
                    </div>
                    <div className="diag-input-group">
                      <input type="text" required placeholder="Sua empresa" value={lead.empresa} onChange={e => setLead({...lead, empresa: e.target.value})} className="diag-input" />
                    </div>
                    <div className="diag-input-group">
                      <input type="text" required placeholder="WhatsApp ou E-mail" value={lead.contato} onChange={e => setLead({...lead, contato: e.target.value})} className="diag-input" />
                    </div>
                    
                    <div style={{ marginTop: '32px' }}>
                      <button type="submit" disabled={isSubmitting} className="cta-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        {isSubmitting ? 'Gerando retrato...' : 'Ver meu resultado'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* RESULT */}
              {phase === 'result' && (
                <div className="diag-step-result fade-in">
                  <h3 className="diag-title" style={{ marginBottom: '8px' }}>Seu Retrato de Maturidade</h3>
                  <p className="diag-desc" style={{ marginBottom: '32px' }}>Aqui esta a leitura da sua estrutura atual.</p>
                  
                  <div className="diag-result-grid">
                    {QUESTIONS.map(q => {
                      const score = answers[q.axis] || 0
                      let status = 'Baixa (Gargalo)'
                      let color = 'rgba(255,90,0,0.8)' // Accent
                      if (score === 50) { status = 'Media (Atenção)'; color = 'rgba(255,255,255,0.6)'; }
                      if (score === 100) { status = 'Alta (Otimizada)'; color = 'rgba(255,255,255,1)'; }
                      
                      return (
                        <div key={q.id} className="diag-result-item">
                          <div className="diag-result-header">
                            <span className="diag-result-axis">{q.axis}</span>
                            <span className="diag-result-status" style={{ color }}>{status}</span>
                          </div>
                          <div className="diag-result-bar-bg">
                            <div className="diag-result-bar-fill" style={{ width: `${score === 0 ? 15 : score}%`, background: color }} />
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="diag-result-actions">
                    <Link href="#contato" className="cta-primary">
                      Vamos conversar sobre o que encontramos
                    </Link>
                    <button onClick={handleRestart} className="cta-secondary" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'transparent', paddingLeft: 0 }}>
                      Refazer diagnostico
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
