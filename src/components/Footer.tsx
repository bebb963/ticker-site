'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import Logo from '@/components/Logo'

// ─── CONTEÚDO — extraído de /base-de-conhecimento ─────────────────────────────
//
// (Pages) — navegação principal extraída de Estratégia Ticker.md (estrutura do site)
// (CMS) — páginas de conteúdo inferidas da estratégia de comunicação
// (Utility Pages) — páginas utilitárias padrão
// (Socials) — NÃO encontradas nos docs.
//   ⚠️ Substituir os hrefs abaixo pelos links reais quando disponíveis.
//   Único dado de contato encontrado: bruno@tickermkt.com.br (apresentacao-comercial.md:12)
// ─────────────────────────────────────────────────────────────────────────────

const NAV_COLUMNS = [
  {
    label: '(Pages)',
    links: [
      { label: 'Manifesto',         href: '#manifesto' },
      { label: 'O Mapa',            href: '#mapa' },
      { label: 'Serviços',          href: '#servicos' },
      { label: 'Trabalhos',         href: '#cases' },
      { label: 'Trabalhe Conosco',  href: '#trabalhe-conosco' },
      { label: 'Quem Somos',        href: '#quem-somos' },
      { label: 'Contato',           href: 'mailto:bruno@tickermkt.com.br' },
    ],
  },
  {
    label: '(Conteúdo)',
    links: [
      { label: 'Marketing Instintivo', href: '#marketing-instintivo' },
      { label: 'O que não fazemos',    href: '#o-que-nao-faz' },
      { label: 'Depoimentos',          href: '#depoimentos' },
      { label: 'Newsletter',           href: '#newsletter' },
    ],
  },
  {
    label: '(Utilidades)',
    links: [
      { label: 'Política de Privacidade', href: '#privacidade' },
      { label: 'Termos de Uso',           href: '#termos' },
      { label: 'Página 404',              href: '/404' },
    ],
  },
  {
    label: '(Socials)',
    links: [
      { label: 'Instagram',  href: 'https://instagram.com/' },
      { label: 'LinkedIn',   href: 'https://linkedin.com/' },
      { label: 'YouTube',    href: 'https://youtube.com/' },
    ],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

interface FooterProps {
  variant?: 'dark' | 'light'
}

// ── tokens por variante ───────────────────────────────────────────────────────
const TOKENS = {
  dark: {
    bg:          '#0E1011',
    separator:   'rgba(255,255,255,0.08)',
    label:       'rgba(255,255,255,0.4)',
    link:        '#FFFFFF',
    copyright:   'rgba(255,255,255,0.3)',
    backToTop:   'rgba(255,255,255,0.5)',
    backHover:   'rgba(255,255,255,0.8)',
    borderColor: 'rgba(255,255,255,0.3)',
  },
  light: {
    bg:          '#FFFFFF',
    separator:   'rgba(14,16,17,0.08)',
    label:       'rgba(14,16,17,0.4)',
    link:        '#0E1011',
    copyright:   'rgba(14,16,17,0.3)',
    backToTop:   'rgba(14,16,17,0.5)',
    backHover:   'rgba(14,16,17,0.8)',
    borderColor: 'rgba(14,16,17,0.3)',
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
      {/* ─── BLOCO 1 — Logo gigante ──────────────────────────────────── */}
      <div
        style={{
          borderBottom: `1px solid ${t.separator}`,
          paddingBottom: '48px',
          marginBottom: '48px',
        }}
      >
        <Logo variant={variant === 'dark' ? 'footer' : 'light'} />
      </div>

      {/* ─── BLOCO 2 — Grid de navegação ────────────────────────────── */}
      <div
        style={{
          borderBottom: `1px solid ${t.separator}`,
          paddingBottom: '48px',
          marginBottom: '32px',
        }}
        className="footer-nav-grid"
      >
        {NAV_COLUMNS.map((col) => (
          <div key={col.label}>
            {/* Label da coluna */}
            <span
              style={{
                fontFamily: "'DM Serif Text', serif",
                fontStyle: 'italic',
                fontSize: '14px',
                lineHeight: 1,
                color: t.label,
                display: 'block',
                marginBottom: '16px',
              }}
            >
              {col.label}
            </span>

            {/* Links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {col.links.map((link) => (
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
                    transition: 'opacity 0.2s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.opacity = '0.6'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.opacity = '1'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ─── BLOCO 3 — Barra inferior ───────────────────────────────── */}
      <div className="footer-bottom">
        {/* Copyright */}
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

        {/* Voltar ao topo */}
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: 1,
            color: t.backToTop,
            background: 'none',
            border: 'none',
            borderBottom: `1px solid ${t.borderColor}`,
            paddingBottom: '2px',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
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
    </footer>
  )
}
