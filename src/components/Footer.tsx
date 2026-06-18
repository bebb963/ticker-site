'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUp, MapPin, Mail } from 'lucide-react'

// ── Social SVG Icons (not available in lucide-react) ────────────────────────
function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconLinkedIn({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function IconYouTube({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

// ─── CONTEÚDO ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Marketing Instintivo', href: '#marketing-instintivo' },
  { label: 'O Mapa',               href: '#mapa' },
  { label: 'Serviços',             href: '#servicos' },
  { label: 'Quem Somos',           href: '#quem-somos' },
  { label: 'Manifesto',            href: '#manifesto' },
  { label: 'Contato',              href: '#contato' },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/', Icon: IconInstagram },
  { label: 'LinkedIn',  href: 'https://linkedin.com/',  Icon: IconLinkedIn },
  { label: 'YouTube',   href: 'https://youtube.com/',   Icon: IconYouTube },
]

const CONTACT_EMAIL = 'bruno@tickermkt.com.br'
// ⚠️ Substituir pelo endereço real quando disponível
const BUSINESS_ADDRESS = 'São Paulo, SP'
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
    iconColor:    'rgba(255,255,255,0.4)',
    iconHover:    '#FFFFFF',
    accentLine:   'rgba(255,255,255,0.08)',
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
    iconColor:    'rgba(14,16,17,0.4)',
    iconHover:    '#0E1011',
    accentLine:   'rgba(14,16,17,0.08)',
  },
}

export default function Footer({ variant = 'dark' }: FooterProps) {
  const t = TOKENS[variant]

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      aria-label="Rodapé"
      style={{ background: t.bg }}
      className="footer-root"
    >
      <div className="container-content">
      {/* ─── LOGO — acima do grid ─────────────────────────────────────── */}
      <Image
        src="/images/logo-TICKER.png"
        alt="Ticker"
        width={180}
        height={45}
        style={{
          filter: variant === 'dark' ? 'brightness(0) invert(1)' : 'none',
          marginBottom: '40px',
        }}
        priority
      />

      {/* ─── BLOCO PRINCIPAL — 3 colunas ──────────────────────────────── */}
      <div className="footer-main-grid">
        {/* ── Coluna 1: Descrição + Contato ─────────────────────────────── */}
        <div className="footer-brand-col">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: 1.7,
              color: t.label,
              maxWidth: '320px',
              margin: '0 0 32px',
            }}
          >
            Marketing com direção. Construímos marcas que crescem com propósito.
          </p>

          {/* ── Localização ──────────────────────────────────────────── */}
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
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: 1.5,
                color: t.link,
              }}
            >
              {BUSINESS_ADDRESS}
            </span>
          </div>

          {/* ── Email ────────────────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
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
                fontFamily: "'Inter', sans-serif",
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
        </div>

        {/* ── Coluna 2: Navegação ─────────────────────────────────────── */}
        <div>
          <span
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '14px',
              lineHeight: 1,
              color: t.label,
              display: 'block',
              marginBottom: '20px',
            }}
          >
            (Navegação)
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
                  fontFamily: "'Inter', sans-serif",
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

        {/* ── Coluna 3: Redes Sociais ─────────────────────────────────── */}
        <div>
          {/* Ocultado temporariamente pois não há perfis sociais reais da Ticker
          <span
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '14px',
              lineHeight: 1,
              color: t.label,
              display: 'block',
              marginBottom: '20px',
            }}
          >
            (Conecte-se)
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: "'Inter', sans-serif",
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
                <social.Icon size={16} />
                {social.label}
              </a>
            ))}
          </div>
          */}

          {/* ── Utilidades ────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Link
              href="#privacidade"
              style={{
                fontFamily: "'Inter', sans-serif",
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
              Política de Privacidade
            </Link>
            <Link
              href="#termos"
              style={{
                fontFamily: "'Inter', sans-serif",
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
      </div>

      {/* ─── SEPARADOR ────────────────────────────────────────────────── */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: t.separator,
          margin: '48px 0 24px',
        }}
      />

      {/* ─── BARRA INFERIOR ───────────────────────────────────────────── */}
      <div className="footer-bottom">
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
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
            fontFamily: "'Inter', sans-serif",
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
    </footer>
  )
}
