'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Contato() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refForm = useScrollReveal<HTMLFormElement>()

  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim() || !mensagem.trim()) {
      alert('Por favor, preencha os campos obrigatórios (Nome e Mensagem).')
      return
    }

    if (loading) return
    setLoading(true)

    const leadData = { nome, email: '', empresa: '', mensagem }

    // Captura via /api/lead em best-effort
    try {
      await Promise.race([
        fetch('/api/lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 2000))
      ])
    } catch (err) {
      console.warn('API Lead capture failed or timed out (best-effort):', err)
    }

    // WhatsApp Message
    const formattedMessage = `Olá Ticker!\n\nEstou entrando em contato através do formulário do site.\n\n*Nome:* ${nome}\n*Mensagem:* ${mensagem}`
    const whatsappNumber = '5511999999999' // TODO: Substituir pelo número real
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`

    window.location.href = waUrl
    setLoading(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(14,16,17,0.15)',
    padding: '16px 0',
    fontFamily: "'Open Sauce One', sans-serif",
    fontSize: '26px',
    color: 'var(--color-text-default)',
    outline: 'none',
  }

  return (
    <section
      id="contato"
      aria-label="Contato"
      className="section-massive"
      style={{
        background: 'var(--ds-white)',
        color: 'var(--color-text-default)',
      }}
    >
      <div className="container-content">
        <div className="grid-split">
          {/* Coluna Esquerda */}
          <div ref={refHeader} className="reveal" style={{ paddingRight: '96px' }}>
            <span className="section-label">(Contato)</span>

            <h2 className="section-statement" style={{ color: 'var(--color-text-default)' }}>
              Vamos conversar sobre o seu negocio.
            </h2>
          </div>

          {/* Coluna Direita (Formulário) */}
          <form ref={refForm} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column', gap: '64px', paddingTop: '16px' }} onSubmit={handleSubmit}>
            <div style={{ ['--index' as string]: 0 } as React.CSSProperties}>
              <input
                type="text"
                placeholder="Nome"
                aria-label="Seu Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottom = '1px solid rgba(14,16,17,0.6)')}
                onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(14,16,17,0.15)')}
              />
            </div>

            <div style={{ ['--index' as string]: 1 } as React.CSSProperties}>
              <textarea
                placeholder="Como podemos ajudar?"
                  aria-label="Sua mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderBottom = '1px solid rgba(14,16,17,0.6)')}
                  onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(14,16,17,0.15)')}
                />
              </div>
  
              <div style={{ ['--index' as string]: 3 } as React.CSSProperties}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--color-text-default)',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '2px solid var(--accent)',
                    padding: '0 0 4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'inline-block',
                    transition: 'opacity 0.2s ease',
                    opacity: loading ? 0.5 : 1
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = '0.7' }}
                  onMouseLeave={(e) => { if (!loading) e.currentTarget.style.opacity = '1' }}
                >
                  {loading ? 'Processando...' : 'Falar no WhatsApp'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}
