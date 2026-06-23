'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Image from 'next/image'

export default function QuemSomos() {
  const refContent = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="quem-somos" 
      aria-label="Quem Somos" 
      className="qs-section"
    >
      <div className="qs-grid">
        {/* Coluna Esquerda: Imagem */}
        <div className="qs-image-col">
          <Image 
            src="/images/Bruno e Priscila.png" 
            alt="Bruno Barroso e Priscila Lima" 
            fill 
            priority
            className="qs-image"
          />
        </div>

        {/* Coluna Direita: Informações */}
        <div ref={refContent} className="qs-content-col reveal">
          <div className="qs-content-wrapper">
            {/* Rótulo e Índice */}
            <div className="qs-eyebrow" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '32px' }}>
              <span>(Os Sócios)</span>
              <span style={{ color: 'var(--accent)' }}>(07)</span>
            </div>

            {/* Título Principal */}
            <h2 className="qs-title">
              Por trás<br />da Ticker
            </h2>

            {/* Subtítulo / Descrição Principal */}
            <p className="qs-intro" style={{ color: 'rgba(14,16,17,0.7)', maxWidth: '650px', marginBottom: '48px' }}>
              A Ticker une duas experiências complementares em marketing, marca e crescimento, estruturadas após anos de atuação direta no mercado.
            </p>

            {/* Cartão: Priscila Lima */}
            <div className="qs-card">
              <span className="qs-card-label" style={{ color: 'rgba(14,16,17,0.6)' }}>(Comunicação e Marca)</span>
              <h3 className="qs-card-name">Priscila Lima</h3>
              <p className="qs-card-desc" style={{ color: 'rgba(14,16,17,0.7)', lineHeight: 1.6 }}>
                Desenvolvimento de marca, conteúdo e posicionamento para alinhar a comunicação interna e externa ao objetivo de negócio.
              </p>
            </div>

            {/* Cartão: Bruno Barroso */}
            <div className="qs-card">
              <span className="qs-card-label" style={{ color: 'rgba(14,16,17,0.6)' }}>(Growth e Performance)</span>
              <h3 className="qs-card-name">Bruno Barroso</h3>
              <p className="qs-card-desc" style={{ color: 'rgba(14,16,17,0.7)', lineHeight: 1.6 }}>
                Estruturação de dados, processos de vendas e ferramentas para garantir a previsibilidade e a eficiência das operações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
