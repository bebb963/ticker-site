'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState, useEffect, useRef } from 'react'

// ─── CONTEÚDO ──────────────────────────────────────────────────────────────
//
// Logos dos clientes — /public/images/clientes/
const CLIENT_LOGOS = [
  { file: '21.png', alt: 'Cliente 21' },
  { file: '18.png', alt: 'Cliente 18' },
  { file: '23.png', alt: 'Cliente 23' },
  { file: '16.png', alt: 'Cliente 16' },
  { file: '20.png', alt: 'Cliente 20' },
  { file: '17.png', alt: 'Cliente 17' },
  { file: '22.png', alt: 'Cliente 22' },
  { file: '19.png', alt: 'Cliente 19' },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const refContent = useScrollReveal<HTMLDivElement>()
  const [shouldPlay, setShouldPlay] = useState(true)
  const desktopVideoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldPlay(!mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldPlay(!e.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    if (shouldPlay) {
      desktopVideoRef.current?.play().catch(() => {})
      mobileVideoRef.current?.play().catch(() => {})
    } else {
      desktopVideoRef.current?.pause()
      mobileVideoRef.current?.pause()
    }
  }, [shouldPlay])

  return (
    <>
      {/* ─── SEÇÃO 1 — Vídeo fullscreen ──────────────────────────────── */}
      <section
        aria-label="Hero Video"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          background: '#0E1011',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Vídeo de fundo — Desktop (horizontal) */}
        <div className="hero-video-desktop" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <video
            ref={desktopVideoRef}
            autoPlay={shouldPlay}
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradiente escuro na base do vídeo para legibilidade */}
          <div style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '150px',
            background: 'linear-gradient(to top, rgba(14,16,17,0.4) 0%, rgba(14,16,17,0) 100%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Vídeo de fundo — Mobile (vertical) */}
        <div className="hero-video-mobile" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <video
            ref={mobileVideoRef}
            autoPlay={shouldPlay}
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradiente escuro na base do vídeo para legibilidade */}
          <div style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '150px',
            background: 'linear-gradient(to top, rgba(14,16,17,0.4) 0%, rgba(14,16,17,0) 100%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* CTA — barra horizontal combinada */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 0',
          background: 'rgba(14,16,17,0.85)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          zIndex: 10,
        }}
        className="hero-cta-bar"
        >
          <div className="container-content" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '32px' }}>
            {/* Coluna Esquerda: Texto e Status */}
            <div style={{ flex: '1 1 500px' }}>
              {/* Status Operacional */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                  <span style={{ position: 'absolute', width: '100%', height: '100%', background: '#52c41a', borderRadius: '50%', opacity: 0.8, animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
                  <span style={{ position: 'relative', width: '8px', height: '8px', background: '#52c41a', borderRadius: '50%' }} />
                </span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Open Sauce One', sans-serif", fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Sistema Ativo e Operacional
                </span>
              </div>
              
              <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, fontFamily: "'Anantason Expanded', sans-serif", margin: '0 0 8px', letterSpacing: '-0.5px' }}>
                Estratégia e Execução de Marketing.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(16px, 2vw, 20px)', fontFamily: "'Open Sauce One', sans-serif", margin: 0, maxWidth: '650px', lineHeight: 1.5 }}>
                A inteligência de uma consultoria premium aliada à velocidade de uma operação tática. Focado em crescimento e resultado.
              </p>
            </div>
            
            {/* Coluna Direita: CTA */}
            <div style={{ flexShrink: 0 }}>
              <a href="#contato" className="cta-primary" style={{ color: '#FFFFFF', fontSize: '20px', whiteSpace: 'nowrap' }}>
                Vamos conversar
              </a>
            </div>
          </div>
        </div>

        {/* Keyframe global para o pulse do ping */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ping {
            75%, 100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }
        `}} />

        {/* Faixa de logos dos clientes */}
        <div
          style={{
            flexShrink: 0,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '20px 0',
            background: 'rgba(14,16,17,0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <div style={{
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}>
            <div
              className="hero-logos-track"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '48px',
                width: 'max-content',
              }}
            >
              {[0, 1, 2].map((copy) => (
                <div
                  key={copy}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '48px',
                    flexShrink: 0,
                  }}
                  aria-hidden={copy > 0}
                >
                  {CLIENT_LOGOS.map((logo) => (
                    <Image
                      key={`${copy}-${logo.file}`}
                      src={`/images/clientes/${logo.file}`}
                      alt=""
                      width={100}
                      height={40}
                      style={{
                        objectFit: 'contain',
                        opacity: 0.6,
                        filter: 'grayscale(100%) invert(1)',
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 2 — Conteúdo Hero ─────────────────────────────────── */}
      <section
        aria-label="Hero"
        className="section-massive"
        style={{
          background: 'var(--color-bg-muted)',
          overflow: 'hidden',
        }}
      >
        <div ref={refContent} className="reveal container-content">
          <div className="grid-split" style={{ alignItems: 'center', gap: '64px' }}>
            {/* Coluna Esquerda: Texto */}
            <div>
              <h1 className="section-statement" style={{ color: 'var(--color-text-default)' }}>
                Entendemos o seu negócio antes de fazer o seu marketing.
              </h1>
    
              <p className="section-support" style={{ marginBottom: '48px', fontSize: '24px', textAlign: 'justify' }}>
                A Ticker le o que move a sua empresa, pessoas, mercado e marca, e transforma isso em direcao.
              </p>
    
              {/* CTAs */}
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                <a href="#contato" className="btn-text" style={{ color: 'var(--color-text-default)' }}>
                  Vamos conversar
                </a>
                <a href="#sistema-de-humanos" className="btn-text" style={{
                  color: 'var(--color-text-default)',
                  borderBottomColor: 'rgba(14,16,17,0.3)',
                }}>
                  Como funciona
                </a>
              </div>
            </div>

            {/* Mosaico Interativo */}
            <div className="hero-mosaic-container">
              {/* Foto 1 (Destaque grande) */}
              <div className="hero-mosaic-item">
                <Image src="/images/mosaic_1.png" alt="Reunião estratégica" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="hero-mosaic-img" />
                <div className="hero-mosaic-overlay">
                  <p className="hero-mosaic-caption">Imersao: Entendendo a cultura interna</p>
                </div>
              </div>
              {/* Foto 2 (Larga) */}
              <div className="hero-mosaic-item">
                <Image src="/images/mosaic_2.png" alt="Análise no PDV" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="hero-mosaic-img" />
                <div className="hero-mosaic-overlay">
                  <p className="hero-mosaic-caption">Analise de comportamento no PDV</p>
                </div>
              </div>
              {/* Foto 3 */}
              <div className="hero-mosaic-item">
                <Image src="/images/mosaic_3.png" alt="Mapeamento de jornada" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="hero-mosaic-img" />
                <div className="hero-mosaic-overlay">
                  <p className="hero-mosaic-caption">Mapeamento de jornada</p>
                </div>
              </div>
              {/* Foto 4 */}
              <div className="hero-mosaic-item">
                <Image src="/images/mosaic_4.png" alt="Entrevista com fundadores" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="hero-mosaic-img" />
                <div className="hero-mosaic-overlay">
                  <p className="hero-mosaic-caption">Entrevista com fundadores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
