'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// ─── CONTEUDO ──────────────────────────────────────────────────────────────
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
    <section
      aria-label="Hero"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#0E1011',
        overflow: 'hidden'
      }}
    >
      {/* ─── VIDEOS (BACKGROUND) ────────────────────────────────────────── */}
      <div style={{ flex: 1, position: 'relative', minHeight: '60vh', overflow: 'hidden' }}>
        <div className="hero-video-desktop" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <video
            ref={desktopVideoRef}
            autoPlay={shouldPlay}
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            className="protected-asset"
            onContextMenu={(e) => e.preventDefault()}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-video-mobile" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <video
            ref={mobileVideoRef}
            autoPlay={shouldPlay}
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            className="protected-asset"
            onContextMenu={(e) => e.preventDefault()}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ─── BOTOES DE INICIATIVAS ─────────────────────────── */}
      <div className="hero-initiatives">
        {[
          { label: 'ACESSE O APP', title: 'TICKER OS' },
          { label: 'NEWSLETTER', title: 'TICKER NEWS' },
          { label: 'PORTAL DE INFLUENCERS', title: 'TICKER CREATORS' },
          { label: 'PESQUISA DE MERCADO', title: 'TICKER RESEARCH' },
        ].map((item, idx) => (
          <button
            key={idx}
            className="hero-pill-btn"
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '8px', fontWeight: 600, color: 'rgba(14,16,17,0.5)', letterSpacing: '0.5px' }}>
                {item.label}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#0E1011' }}>
                {item.title}
              </span>
            </div>
            <div className="hero-pill-arrow" style={{ width: '20px', height: '20px', fontSize: '11px' }}>
              ↗
            </div>
          </button>
        ))}
      </div>

      {/* ─── FAIXA PRETA INFERIOR (HEAD + SUBHEAD + CTA) ──────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: '#0E1011',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
        className="hero-bottom-strip"
      >
        <div className="container-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          
          {/* Head & Subhead */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h1
              className="section-statement"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(28px, 3vw, 48px)',
                margin: 0,
              }}
            >
              O marketing que vive seu negócio.
            </h1>
            <p
              style={{
                fontFamily: "'Open Sauce One', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.2vw, 18px)',
                color: 'rgba(255,255,255,0.6)',
                margin: 0,
                maxWidth: '600px'
              }}
            >
              Construímos sistemas de marketing, baseados no estudo profundo de cada negócio.
            </p>
          </div>

          {/* CTA */}
          <div style={{ flexShrink: 0 }}>
            <a href="#contato" className="cta-primary" style={{ color: '#FFFFFF', fontSize: '18px' }}>
              Vamos conversar
            </a>
          </div>

        </div>
      </div>

      {/* ─── FAIXA DE LOGOS DOS CLIENTES ──────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flexShrink: 0,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '16px 0',
          background: '#0E1011',
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
                      opacity: 0.4,
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
  )
}
