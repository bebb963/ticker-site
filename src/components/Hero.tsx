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

        {/* CTA — barra horizontal */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 96px',
          background: 'rgba(14,16,17,0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        className="hero-cta-bar"
        >
          <div />
          <a href="#contato" className="cta-primary" style={{ color: '#FFFFFF', fontSize: '20px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Vamos conversar
          </a>
        </div>

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
          background: '#F8F8F8',
          overflow: 'hidden',
        }}
      >
        <div ref={refContent} className="hero-content reveal container-content">
          <div className="hero-text-col">
            <h1 className="hero-name">
              Primeiro entender<span style={{ color: 'var(--accent)' }}>.</span><br />
              Depois construir<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>

            <div style={{
              width: '100%', height: '1px',
              background: 'rgba(14,16,17,0.12)',
              margin: '32px 0',
            }} />

            <p className="hero-tagline" style={{ marginBottom: '40px' }}>
              A Ticker planeja e executa o marketing a partir do estudo de cada negócio, do que move o fundador ao que move quem compra.
            </p>

            {/* ── CTAs ── */}
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <a href="#contato" className="cta-primary" style={{ color: '#0E1011', fontSize: '22px' }}>
                Vamos conversar
              </a>
              <a href="#marketing-instintivo" className="cta-secondary" style={{ color: '#0E1011', fontSize: '22px' }}>
                Como funciona
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <Image
              src="/images/captação.jpg"
              alt="Ticker Marketing - Captação"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </section>

    </>
  )
}
