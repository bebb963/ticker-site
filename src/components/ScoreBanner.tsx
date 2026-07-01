'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ScoreBanner() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      aria-label="Ticker Score Diagnostic Section"
      style={{
        background: '#070809',
        color: '#FFFFFF',
        padding: '120px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Tech Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255, 90, 0, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 90, 0, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center',
        pointerEvents: 'none',
        opacity: 0.8,
        zIndex: 0,
      }} />

      {/* Cybernetic Scanline Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to bottom, rgba(255,90,0,0) 0%, var(--accent) 50%, rgba(255,90,0,0) 100%)',
        opacity: 0.15,
        animation: 'scanline 8s linear infinite',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container-content" ref={ref} style={{ position: 'relative', zIndex: 2 }}>
        {/* Layout split on desktop, stacked on mobile */}
        <div className="reveal diagnostic-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '64px',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          
          {/* Cybernetic Panel / Glass Box */}
          <div className="cyber-panel" style={{
            background: 'rgba(14, 16, 17, 0.75)',
            border: '1px solid rgba(255, 90, 0, 0.15)',
            padding: '48px 40px',
            borderRadius: '16px',
            position: 'relative',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8), 0 0 50px rgba(255,90,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}>
            {/* Cyber Ticks/Corners */}
            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '16px', height: '16px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
            <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '16px', height: '16px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />
            <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '16px', height: '16px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
            <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '16px', height: '16px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />

            {/* Diagnostic Code Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: "'Open Sauce One', monospace",
                fontSize: '11px',
                color: 'var(--accent)',
                letterSpacing: '2px',
                fontWeight: 700,
                textTransform: 'uppercase',
                background: 'rgba(255,90,0,0.08)',
                padding: '6px 14px',
                border: '1px solid rgba(255,90,0,0.2)',
                borderRadius: '4px',
              }}>
                [ SYSTEM DIAGNOSTIC v2.0 ]
              </span>
              <span style={{
                fontFamily: "'Open Sauce One', monospace",
                fontSize: '11px',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '1px',
              }}>
                STATUS: DEPLOYED_ON_CORE
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily: "'Anantason Expanded', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1.15,
              margin: 0,
              color: '#FFFFFF',
              letterSpacing: '-0.5px',
            }}>
              Mapeie o potencial real da sua operação.
            </h2>

            {/* Description */}
            <p style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)',
              margin: 0,
              maxWidth: '680px',
            }}>
              O Ticker Score audita as principais alavancas do seu negócio em menos de 5 minutos. Descubra os gargalos invisíveis que estão limitando o seu CAC, LTV e escalabilidade.
            </p>

            {/* Tech Specs Indicator */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              width: '100%',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '24px',
              marginTop: '8px',
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: "'Open Sauce One', sans-serif", textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Tempo estimado</span>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', fontFamily: "'Anantason Expanded', sans-serif" }}>4 Minutos</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: "'Open Sauce One', sans-serif", textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Áreas analisadas</span>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', fontFamily: "'Anantason Expanded', sans-serif" }}>8 Pilares Operacionais</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: "'Open Sauce One', sans-serif", textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Entregável</span>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', fontFamily: "'Anantason Expanded', sans-serif" }}>Relatório Completo</span>
              </div>
            </div>

            {/* Button */}
            <div style={{ paddingTop: '16px', alignSelf: 'stretch', display: 'flex', justifyContent: 'flex-start' }}>
              <Link 
                href="/score" 
                className="cta-primary cyber-cta"
                style={{
                  color: '#0E1011',
                  background: 'var(--accent)',
                  fontSize: '15px',
                  fontWeight: 700,
                  padding: '16px 36px',
                  border: 'none',
                  borderRadius: '4px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 0 30px rgba(255, 90, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <span>Iniciar Diagnóstico</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cyber-arrow">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Decorative cyber neon radial glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255, 90, 0, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255, 90, 0, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Embedded CSS for animations and layout overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        
        .cyber-cta:hover {
          background: #FFFFFF !important;
          box-shadow: 0 0 40px rgba(255, 90, 0, 0.5) !important;
          transform: translateY(-2px);
        }
        .cyber-cta:hover .cyber-arrow {
          transform: translateX(4px);
        }
        .cyber-arrow {
          transition: transform 0.3s ease;
        }

        @media (min-width: 1024px) {
          .diagnostic-layout {
            grid-template-columns: 1fr;
          }
          .cyber-panel {
            padding: 64px 80px !important;
          }
        }
      `}} />
    </section>
  )
}
