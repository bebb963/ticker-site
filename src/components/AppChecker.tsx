'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function AppChecker() {
  const refContent = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="ticker-os"
      aria-label="Ticker OS"
      className="section-massive"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-inverse)',
        overflow: 'hidden',
      }}
    >
      <div ref={refContent} className="reveal container-content">
        <div className="grid-split" style={{ alignItems: 'center', gap: '64px' }}>
          <div style={{ paddingRight: '5%' }}>
            <span className="section-label section-label--inverse">(Tecnologia Proprietária)</span>

            <h2 className="section-statement" style={{ color: 'var(--color-text-inverse)', marginBottom: '24px' }}>
              Ticker OS.
            </h2>
            
            <p className="section-support section-support--inverse" style={{ marginBottom: '40px', fontSize: '26px', lineHeight: 1.4 }}>
              Esqueça a caixa preta. A sua operação inteira orquestrada, aprovada e documentada na palma da mão.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 48px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: '#fff' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'rgba(255, 90, 0, 0.1)', color: 'var(--accent)', borderRadius: '50%' }}>⚡</span>
                <strong>Login sem senha</strong> (Link mágico)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: '#fff' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'rgba(255, 90, 0, 0.1)', color: 'var(--accent)', borderRadius: '50%' }}>✓</span>
                <strong>Aprovações com 1 clique</strong> integrado ao Kanban
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: '#fff' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'rgba(255, 90, 0, 0.1)', color: 'var(--accent)', borderRadius: '50%' }}>❖</span>
                <strong>Repositório central</strong> (Mídia, Vetores e Relatórios)
              </li>
            </ul>

            <a href="#contato" className="cta-primary" style={{ display: 'inline-block' }}>
              Agendar Demonstração
            </a>
          </div>

          {/* Coluna Direita: Mockup SaaS com elementos flutuantes */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Brilho de fundo */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at 50% 50%, rgba(255, 90, 0, 0.15) 0%, rgba(14, 16, 17, 0) 60%)',
              zIndex: 0,
            }} />
            
            {/* O Mockup do celular */}
            <div style={{ position: 'relative', width: '80%', height: '90%', zIndex: 1, borderRadius: '48px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}>
              <Image 
                src="/images/ticker_os_mockup.png" 
                alt="Ticker OS Mockup" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }} 
              />
            </div>

            {/* Elemento flutuante 1: Notificação */}
            <div style={{
              position: 'absolute',
              top: '15%',
              right: '-5%',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              padding: '12px 20px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
              zIndex: 2,
              animation: 'float 6s ease-in-out infinite',
            }}>
              <div style={{ width: '8px', height: '8px', background: '#52c41a', borderRadius: '50%' }}></div>
              <span style={{ color: '#000', fontFamily: "'Open Sauce One', sans-serif", fontSize: '14px', fontWeight: 600 }}>Layout Aprovado</span>
            </div>

            {/* Elemento flutuante 2: Status Operacional */}
            <div style={{
              position: 'absolute',
              bottom: '25%',
              left: '-10%',
              background: 'rgba(14, 16, 17, 0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
              padding: '12px 20px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
              zIndex: 2,
              animation: 'float 8s ease-in-out infinite reverse',
            }}>
              <div style={{ width: '24px', height: '24px', background: 'var(--accent)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '12px' }}>↻</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Open Sauce One', sans-serif", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sync Kanban</span>
                <span style={{ color: '#fff', fontFamily: "'Open Sauce One', sans-serif", fontSize: '14px', fontWeight: 600 }}>Atualizado agora</span>
              </div>
            </div>

            {/* Linha de conexão decorativa (SVG) */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
              <path d="M 50 150 Q 150 100 200 200 T 350 150" fill="none" stroke="rgba(255,90,0,0.2)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 300 400 Q 200 450 150 350 T 50 300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Keyframes globais injetados para animação de floating */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  )
}
