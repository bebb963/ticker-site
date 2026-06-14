'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Número do WhatsApp da Ticker (formato internacional, só dígitos).
// Pode ser sobrescrito via NEXT_PUBLIC_WHATSAPP_NUMBER. Default: 19 97428-2887.
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5519974282887'

function buildWhatsappUrl(nome: string, empresa: string, mensagem: string) {
  const texto =
    `Olá, sou ${nome}.\n\n` +
    `Empresa: ${empresa}\n\n` +
    `Como podemos ajudar:\n${mensagem}\n\n` +
    `Acabei de enviar meus dados pelo site da Ticker e gostaria de conversar.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
}

export default function Contato() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refForm = useScrollReveal<HTMLFormElement>()

  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (sending) return
    if (!nome.trim() || !mensagem.trim()) return

    setSending(true)

    // Captura do lead (best-effort) — nunca bloqueia o redirecionamento.
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, empresa, mensagem }),
      })
    } catch {
      // Segue para o WhatsApp mesmo que a captura falhe.
    }

    window.location.href = buildWhatsappUrl(nome.trim(), empresa.trim(), mensagem.trim())
  }

  return (
    <section 
      id="contato" 
      aria-label="Contato" 
      className="section-massive"
      style={{ 
        background: '#0E1011', 
        color: '#FFFFFF'
      }}
    >
      <div className="grid-split">
        {/* Coluna Esquerda */}
        <div ref={refHeader} className="reveal" style={{ paddingRight: '96px' }}>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.4)',
            display: 'block',
            marginBottom: '32px',
          }}>
            (Contato)
          </span>
          <h2 style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(60px, 8vw, 120px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '-1px',
            color: '#FFFFFF',
            margin: '0 0 32px'
          }}>
            Vamos<br/>conversar.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            marginBottom: '48px'
          }}>
            Se você entende o valor de construir com base em direção, envie-nos uma mensagem.
          </p>

          <div>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '16px',
              color: '#FFFFFF',
              display: 'block',
              marginBottom: '8px'
            }}>
              Email
            </span>
            <a href="mailto:bruno@tickermkt.com.br" style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '24px',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none'
            }}>
              bruno@tickermkt.com.br
            </a>
          </div>
        </div>

        {/* Coluna Direita (Formulário) */}
        <form ref={refForm} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column', gap: '64px', paddingTop: '16px' }} onSubmit={handleSubmit}>
          <div style={{ ['--index' as string]: 0 } as React.CSSProperties}>
            <input
              type="text"
              placeholder="Nome"
              aria-label="Seu Nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: '#FFFFFF',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
              onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)')}
            />
          </div>

          <div style={{ ['--index' as string]: 1 } as React.CSSProperties}>
            <input
              type="text"
              placeholder="Nome da empresa"
              aria-label="Empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: '#FFFFFF',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
              onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)')}
            />
          </div>

          <div style={{ ['--index' as string]: 2 } as React.CSSProperties}>
            <textarea
              placeholder="Como podemos ajudar?"
              aria-label="Sua mensagem"
              rows={4}
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: '#FFFFFF',
                outline: 'none',
                resize: 'none'
              }}
              onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
              onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)')}
            />
          </div>

          <div style={{ ['--index' as string]: 3 } as React.CSSProperties}>
            <button type="submit" disabled={sending} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '22px',
              fontWeight: 600,
              color: '#FFFFFF',
              background: 'transparent',
              border: 'none',
              borderBottom: '2px solid #FFFFFF',
              padding: '0 0 4px',
              cursor: sending ? 'wait' : 'pointer',
              display: 'inline-block',
              opacity: sending ? 0.7 : 1,
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => { if (!sending) e.currentTarget.style.opacity = '0.7' }}
            onMouseLeave={(e) => { if (!sending) e.currentTarget.style.opacity = '1' }}
            >
              {sending ? 'Abrindo o WhatsApp…' : 'Falar no WhatsApp'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
