'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Paperclip } from 'lucide-react'

interface TrabalheConoscoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TrabalheConoscoModal({ isOpen, onClose }: TrabalheConoscoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [area, setArea] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Acessibilidade: fechar com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Acessibilidade: focus trap simples
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus()
              e.preventDefault()
            }
          }
        }
      }

      window.addEventListener('keydown', handleTab)
      // Auto-focus on first element
      setTimeout(() => firstElement?.focus(), 100)

      return () => window.removeEventListener('keydown', handleTab)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim() || !email.trim() || !area.trim()) return

    setLoading(true)

    const endpoint = process.env.NEXT_PUBLIC_CAREERS_ENDPOINT

    if (endpoint) {
      try {
        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('email', email)
        formData.append('area', area)
        if (file) formData.append('curriculo', file)

        await fetch(endpoint, {
          method: 'POST',
          body: formData,
        })
        setSuccess(true)
      } catch (err) {
        console.error('Failed to submit application:', err)
        alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    } else {
      // Fallback para mailto
      const subject = `Novo curriculo: ${nome} - ${area}`
      const body = `Nome: ${nome}\nE-mail: ${email}\nÁrea de Interesse: ${area}\n\n* O arquivo do currículo deve ser enviado em anexo nesta resposta (o navegador não anexa automaticamente via mailto).`
      window.location.href = `mailto:contato@tickermkt.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      setSuccess(true)
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    padding: '12px 0',
    fontFamily: "'Open Sauce One', sans-serif",
    fontSize: '16px',
    color: '#FFFFFF',
    outline: 'none',
    transition: 'border-color 0.2s ease'
  }

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 90, // Above header
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(4px)',
          animation: 'fade-in 0.2s ease'
        }}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Trabalhe conosco"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100,
          background: '#0E1011',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '48px',
          width: '90vw',
          maxWidth: '500px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
          animation: 'slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.5)',
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '32px 0', color: '#FFFFFF' }}>
            <h3 style={{ fontFamily: "'Anantason Expanded', sans-serif", fontSize: '24px', marginBottom: '16px' }}>Enviado!</h3>
            <p style={{ fontFamily: "'Open Sauce One', sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>
              Seu perfil foi recebido. Entraremos em contato se houver sinergia com nossas vagas.
            </p>
            <button
              onClick={onClose}
              className="cta-primary"
              style={{ marginTop: '32px' }}
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 style={{ fontFamily: "'Anantason Expanded', sans-serif", fontSize: '28px', color: '#FFFFFF', margin: '0 0 8px 0' }}>
                Trabalhe conosco
              </h3>
              <p style={{ fontFamily: "'Open Sauce One', sans-serif", fontSize: '15px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                Faça parte do time Ticker. Cadastre seu currículo.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <input
                type="text"
                placeholder="Seu nome completo"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)')}
              />

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)')}
              />

              <div style={{ position: 'relative' }}>
                <select
                  value={area}
                  onChange={e => setArea(e.target.value)}
                  required
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    color: area ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)')}
                >
                  <option value="" disabled hidden>Área de interesse</option>
                  <option value="Atendimento / CS" style={{ color: '#000' }}>Atendimento / CS</option>
                  <option value="Conteúdo / Social" style={{ color: '#000' }}>Conteúdo / Social</option>
                  <option value="Design / Direção de Arte" style={{ color: '#000' }}>Design / Direção de Arte</option>
                  <option value="Performance / Mídia" style={{ color: '#000' }}>Performance / Mídia</option>
                  <option value="Tecnologia / Dados" style={{ color: '#000' }}>Tecnologia / Dados</option>
                  <option value="Vendas / SDR" style={{ color: '#000' }}>Vendas / SDR</option>
                  <option value="Outros" style={{ color: '#000' }}>Outros</option>
                </select>
              </div>

              <div>
                <label 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '16px',
                    border: '1px dashed rgba(255,255,255,0.3)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.8)',
                    transition: 'all 0.2s',
                    background: file ? 'rgba(255,255,255,0.05)' : 'transparent'
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                >
                  <Paperclip size={18} />
                  {file ? file.name : 'Anexar currículo (PDF ou DOC)'}
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={e => setFile(e.target.files?.[0] || null)}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="cta-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'Enviando...' : 'Enviar candidatura'}
            </button>
          </form>
        )}

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translate(-50%, -45%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}} />
    </>
  )
}
