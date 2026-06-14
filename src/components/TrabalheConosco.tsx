'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const STEPS = [
  { step: '01', title: 'Primeiro Contato', desc: 'Identificamos o seu momento de negócio e as alavancas de crescimento.' },
  { step: '02', title: 'O Mapa', desc: 'Construção do diagnóstico e arquitetura do seu sistema de marketing.' },
  { step: '03', title: 'Direcionamento', desc: 'Apresentação executiva e escolha do modelo ideal de atuação (BPO ou Consultoria).' },
  { step: '04', title: 'Estruturação', desc: 'Setup das ferramentas de mídia, CRM, dados e fluxo operacional.' },
  { step: '05', title: 'Operação', desc: 'A Ticker entra como parceiro de direção e execução contínua.' },
]

export default function TrabalheConosco() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refList = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="trabalhe-conosco" 
      aria-label="Trabalhe Conosco" 
      className="section-massive"
      style={{ 
        background: '#F8F8F8', 
        color: '#0E1011'
      }}
    >
      <div className="grid-split">
        {/* Coluna Esquerda: Título Sticky */}
        <div ref={refHeader} className="sticky-col reveal">
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            lineHeight: 1,
            color: 'rgba(14,16,17,0.6)',
            display: 'block',
            marginBottom: '32px',
          }}>
            (O Processo)
          </span>
          <h2 style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(60px, 8vw, 120px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '-1px',
            color: '#0E1011',
            margin: '0 0 32px'
          }}>
            Como<br/>Trabalhamos
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: 1.7,
            color: 'rgba(14,16,17,0.7)',
            maxWidth: '600px'
          }}>
            Um processo sequencial e fundamentado para que nenhuma etapa seja construída sobre achismos.
          </p>
        </div>

        {/* Coluna Direita: Steps */}
        <div ref={refList} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column' }}>
          {STEPS.map((item, i) => (
            <div 
              key={i} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                padding: '64px 0',
                borderTop: '1px solid rgba(14,16,17,0.1)',
                borderBottom: i === STEPS.length - 1 ? '1px solid rgba(14,16,17,0.1)' : 'none',
                ['--index' as string]: i 
              } as React.CSSProperties}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                <span style={{
                  fontFamily: "'DM Serif Text', serif",
                  fontStyle: 'italic',
                  fontSize: '24px',
                  color: 'rgba(14,16,17,0.4)',
                }}>
                  (Passo {item.step})
                </span>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '32px',
                  letterSpacing: '-1px',
                  margin: 0,
                  color: '#0E1011'
                }}>
                  {item.title}
                </h3>
              </div>
              <p className="trabalhe-desc" style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: 1.7,
                color: 'rgba(14,16,17,0.6)',
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
