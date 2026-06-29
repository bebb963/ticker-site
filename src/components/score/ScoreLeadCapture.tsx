'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { LeadData } from '@/data/score-types'

interface ScoreLeadCaptureProps {
  onSubmit: (lead: LeadData) => void
}

export default function ScoreLeadCapture({ onSubmit }: ScoreLeadCaptureProps) {
  const [form, setForm] = useState<LeadData>({
    name: '',
    company: '',
    role: '',
    email: '',
    whatsapp: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const isValid =
    form.name.trim().length > 0 &&
    form.company.trim().length > 0 &&
    form.email.trim().includes('@') &&
    form.whatsapp.trim().length >= 10

  const handleChange = (field: keyof LeadData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid || submitting) return
    setSubmitting(true)
    await onSubmit(form)
    setSubmitting(false)
  }

  return (
    <div className="score-lead">
      <div className="score-lead-inner">
        <div className="score-badge">
          <span className="score-badge-dot" />
          <span>Último passo</span>
        </div>

        <h2 className="score-lead-title">
          Para quem devemos enviar o diagnóstico?
        </h2>
        <p className="score-lead-subtitle">
          Seus dados serão utilizados exclusivamente para enviar o resultado e entrar em contato se você desejar.
        </p>

        <form onSubmit={handleSubmit} className="score-lead-form">
          <div className="score-input-group">
            <label htmlFor="score-name">Nome completo</label>
            <input
              id="score-name"
              type="text"
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange('name')}
              required
              autoComplete="name"
            />
          </div>

          <div className="score-input-group">
            <label htmlFor="score-company">Empresa</label>
            <input
              id="score-company"
              type="text"
              placeholder="Nome da empresa"
              value={form.company}
              onChange={handleChange('company')}
              required
              autoComplete="organization"
            />
          </div>

          <div className="score-input-group">
            <label htmlFor="score-role">Cargo</label>
            <input
              id="score-role"
              type="text"
              placeholder="Seu cargo"
              value={form.role}
              onChange={handleChange('role')}
              autoComplete="organization-title"
            />
          </div>

          <div className="score-input-row">
            <div className="score-input-group">
              <label htmlFor="score-email">E-mail</label>
              <input
                id="score-email"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange('email')}
                required
                autoComplete="email"
              />
            </div>

            <div className="score-input-group">
              <label htmlFor="score-whatsapp">WhatsApp</label>
              <input
                id="score-whatsapp"
                type="tel"
                placeholder="(11) 99999-9999"
                value={form.whatsapp}
                onChange={handleChange('whatsapp')}
                required
                autoComplete="tel"
              />
            </div>
          </div>

          <button
            type="submit"
            className="score-cta-btn"
            disabled={!isValid || submitting}
          >
            <span>{submitting ? 'Processando...' : 'Ver meu diagnóstico'}</span>
            <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}
