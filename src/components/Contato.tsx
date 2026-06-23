'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Contato() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refForm = useScrollReveal<HTMLFormElement>()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [empresa, setEmpresa] = useState('')
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

    const leadData = { nome, email, empresa, mensagem }

    // Captura via /api/lead em best-effort não bloqueia o redirect.
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

    // WhatsApp Message creation
    const formattedMessage = `Olá Ticker!\n\nEstou entrando em contato através do formulário do site.\n\n*Nome:* ${nome}\n*E-mail:* ${email || 'Não informado'}\n*Empresa:* ${empresa || 'Não informado'}\n*Mensagem:* ${mensagem}`
    const whatsappNumber = '5511999999999' // TODO: Substituir pelo número de WhatsApp real da Ticker
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`

    window.location.href = waUrl
    setLoading(false)
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
      <div className="container-content">
        <div className="grid-split">
          {/* Coluna Esquerda */}
          <div ref={refHeader} className="reveal" style={{ paddingRight: '96px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '32px',
            }}>
              <span style={{
                fontFamily: "'DM Serif Text', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(24px, 2.5vw, 32px)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.7)',
              }}>
                (Contato)
              </span>
              <span style={{
                fontFamily: "'DM Serif Text', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(24px, 2.5vw, 32px)',
                lineHeight: 1,
                color: 'var(--accent)',
              }}>
                (08)
              </span>
            </div>
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
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              marginBottom: '48px'
            }}>
              Para iniciar uma conversa sobre o seu negócio, preencha o formulário abaixo.
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
                color: 'rgba(255,255,255,0.7)',
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
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  padding: '16px 0',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  color: '#FFFFFF',
                  outline: 'none',
                }}
                onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
                onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.15)')}
              />
            </div>

            <div style={{ ['--index' as string]: 1 } as React.CSSProperties}>
              <input 
                type="email" 
                placeholder="E-mail corporativo"
                aria-label="Seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  padding: '16px 0',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  color: '#FFFFFF',
                  outline: 'none',
                }}
                onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
                onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.15)')}
              />
            </div>

            <div style={{ ['--index' as string]: 2 } as React.CSSProperties}>
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
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  padding: '16px 0',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  color: '#FFFFFF',
                  outline: 'none',
                }}
                onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
                onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.15)')}
              />
            </div>

            <div style={{ ['--index' as string]: 3 } as React.CSSProperties}>
              <textarea 
                placeholder="Como podemos te ajudar?"
                aria-label="Sua mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
                rows={4}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  padding: '16px 0',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  color: '#FFFFFF',
                  outline: 'none',
                  resize: 'none'
                }}
                onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
                onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.15)')}
              />
            </div>

            <div style={{ ['--index' as string]: 4 } as React.CSSProperties}>
              <button 
                type="submit" 
                disabled={loading}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#FFFFFF',
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
