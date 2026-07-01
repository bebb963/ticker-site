'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react'

// ─── CONTEUDO ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Marketing Instintivo', href: '#marketing-instintivo' },
  { label: 'O Mapa',               href: '#mapa' },
  { label: 'As tres fases',        href: '#fases' },
  { label: 'Diagnostico',          href: '#diagnostico' },
  { label: 'Contato',              href: '#contato' },
]

const CONTACT_EMAIL = 'bruno@tickermkt.com.br'
const CONTACT_PHONE = '19 97428-2887'
// Substituir pelo endereco real quando disponivel
const BUSINESS_ADDRESS = 'Campinas, SP'
const TICKER_TAPE_TEXT = 'O marketing que vive seu negocio.'
// ─────────────────────────────────────────────────────────────────────────────

interface FooterProps {
  variant?: 'dark' | 'light'
}

const TOKENS = {
  dark: {
    bg:           '#000000',
    separator:    'rgba(255,255,255,0.08)',
    label:        'rgba(255,255,255,0.4)',
    link:         'rgba(255,255,255,0.7)',
    linkHover:    '#FFFFFF',
    heading:      '#FFFFFF',
    copyright:    'rgba(255,255,255,0.3)',
    backToTop:    'rgba(255,255,255,0.4)',
    backHover:    'rgba(255,255,255,0.8)',
    seletividade: 'rgba(255,255,255,0.25)',
    tape:         'rgba(255,255,255,0.06)',
    tapeText:     'rgba(255,255,255,0.12)',
  },
  light: {
    bg:           '#FFFFFF',
    separator:    'rgba(14,16,17,0.08)',
    label:        'rgba(14,16,17,0.4)',
    link:         'rgba(14,16,17,0.6)',
    linkHover:    '#0E1011',
    heading:      '#0E1011',
    copyright:    'rgba(14,16,17,0.3)',
    backToTop:    'rgba(14,16,17,0.4)',
    backHover:    'rgba(14,16,17,0.8)',
    seletividade: 'rgba(14,16,17,0.25)',
    tape:         'rgba(14,16,17,0.04)',
    tapeText:     'rgba(14,16,17,0.08)',
  },
}

export default function Footer({ variant = 'dark' }: FooterProps) {
  const t = TOKENS[variant]

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /* Repetimos o texto do ticker tape para preencher a largura */
  const tapeRepeat = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="footer-tape-item" aria-hidden={i > 0 ? 'true' : undefined}>
      {TICKER_TAPE_TEXT}
      <span className="footer-tape-dot">·</span>
    </span>
  ))

  return (
    <footer
      aria-label="Rodape"
      style={{ background: t.bg }}
      className="footer-root"
    >
      {/* ─── TICKER TAPE (quebra de secao, topo do footer) ──────────── */}
      <div
        className="footer-tape-track"
        style={{
          background: t.bg,
        }}
        aria-label="O marketing que vive seu negocio."
      >
        <div className="footer-tape-scroll" style={{ color: 'rgba(255,255,255,0.35)' }}>
          {tapeRepeat}
          {/* Duplicado para loop continuo */}
          {tapeRepeat}
        </div>
      </div>

      <div className="footer-inner">
        <div className="container-content">

        {/* ─── BLOCO PRINCIPAL — 3 colunas ────────────────────────────── */}
        <div className="footer-main-grid">

          {/* ── Coluna 1: Contato ─────────────────────────────────────── */}
          <div className="footer-brand-col">
            <Image
              src="/images/logo-TICKER.png"
              alt="Ticker"
              width={140}
              height={35}
              style={{
                filter: variant === 'dark' ? 'brightness(0) invert(1)' : 'none',
                marginBottom: '32px',
              }}
              priority
            />
            <span
              style={{
                fontFamily: "'Anantason Expanded Italic', serif",
                fontStyle: 'italic',
                fontSize: '14px',
                lineHeight: 1,
                color: t.label,
                display: 'block',
                marginBottom: '20px',
              }}
            >
              (Contato)
            </span>
            {/* Localizacao */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <MapPin
                size={16}
                strokeWidth={1.5}
                style={{ color: t.label, flexShrink: 0, marginTop: '2px' }}
              />
              <span
                style={{
                  fontFamily: "'Open Sauce One', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: 1.5,
                  color: t.link,
                }}
              >
                {BUSINESS_ADDRESS}
              </span>
            </div>

            {/* Email */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <Mail
                size={16}
                strokeWidth={1.5}
                style={{ color: t.label, flexShrink: 0 }}
              />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{
                  fontFamily: "'Open Sauce One', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: 1.5,
                  color: t.link,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = t.linkHover
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = t.link
                }}
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Telefone */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Phone
                size={16}
                strokeWidth={1.5}
                style={{ color: t.label, flexShrink: 0 }}
              />
              <a
                href={`tel:+5519974282887`}
                style={{
                  fontFamily: "'Open Sauce One', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: 1.5,
                  color: t.link,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = t.linkHover
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = t.link
                }}
              >
                {CONTACT_PHONE}
              </a>
            </div>
          </div>

          {/* ── Coluna 2: Navegacao ─────────────────────────────────────── */}
          <div>
            <span
              style={{
                fontFamily: "'Anantason Expanded Italic', serif",
                fontStyle: 'italic',
                fontSize: '14px',
                lineHeight: 1,
                color: t.label,
                display: 'block',
                marginBottom: '20px',
              }}
            >
              (Navegacao)
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: 1,
                    color: t.link,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = t.linkHover
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = t.link
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Coluna 3: Utilidades + Mapa ───────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <span
                style={{
                  fontFamily: "'Anantason Expanded Italic', serif",
                  fontStyle: 'italic',
                  fontSize: '14px',
                  lineHeight: 1,
                  color: t.label,
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                (Legal)
              </span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Link
                  href="#privacidade"
                  style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: 1,
                    color: t.label,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = t.link
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = t.label
                  }}
                >
                  Politica de Privacidade
                </Link>
                <Link
                  href="#termos"
                  style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: 1,
                    color: t.label,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = t.link
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = t.label
                  }}
                >
                  Termos de Uso
                </Link>
              </div>
            </div>

            {/* Mapa transferido da seção de Contato */}
            <div style={{ 
              width: '100%', 
              maxWidth: '300px',
              aspectRatio: '16/9', 
              background: variant === 'dark' ? 'rgba(255,255,255,0.05)' : '#E5E5E5',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '16px'
            }}>
              {/* Fallback image style */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,16,17,0.05)' }} />
              <span style={{ 
                position: 'relative',
                fontFamily: "'Open Sauce One', sans-serif", 
                fontSize: '12px', 
                color: 'rgba(14,16,17,0.8)',
                fontWeight: 600,
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: '6px 10px',
                borderRadius: '4px'
              }}>
                Campinas, SP
              </span>
            </div>
          </div>
        </div>



        {/* ─── SEPARADOR ────────────────────────────────────────────────── */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: t.separator,
            margin: '32px 0 24px',
          }}
        />

        {/* ─── BARRA INFERIOR ───────────────────────────────────────────── */}
        <div className="footer-bottom">
          <span
            style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: 1,
              color: t.copyright,
            }}
          >
            © 2026 Ticker. Todos os direitos reservados.
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: 1,
              color: t.backToTop,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              padding: 0,
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = t.backHover
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = t.backToTop
            }}
          >
            Voltar ao topo
            <ArrowUp size={12} strokeWidth={2.5} />
          </button>
        </div>
      </div>
      </div>
    </footer>
  )
}
