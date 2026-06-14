import { NextResponse } from 'next/server'

// ─── CAPTURA DE LEADS ────────────────────────────────────────────────────────
//
// Objetivo: armazenar o lead do formulário de contato ANTES de o visitante ser
// redirecionado para o WhatsApp — sem perder dado e sem travar a conversão.
//
// Estratégia de integração (à prova de futuro):
//   Os dados são encaminhados para um webhook configurável via variável de
//   ambiente LEAD_WEBHOOK_URL. Esse webhook pode ser, hoje, uma planilha do
//   Google (Apps Script) — a forma mais simples e durável de guardar os leads —
//   e, no futuro, RD Station, Make, Zapier ou qualquer CRM, SEM alterar o site.
//   Basta trocar a URL na variável de ambiente.
//
//   Se LEAD_WEBHOOK_URL não estiver definida, o lead é registrado no log do
//   servidor (visível, por ex., nos logs da Vercel) e a requisição ainda
//   retorna sucesso — porque a conversão (redirect para o WhatsApp) nunca pode
//   depender da gravação.
// ─────────────────────────────────────────────────────────────────────────────

interface LeadPayload {
  nome?: string
  empresa?: string
  mensagem?: string
}

export async function POST(request: Request) {
  let data: LeadPayload

  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const nome = (data.nome ?? '').trim()
  const empresa = (data.empresa ?? '').trim()
  const mensagem = (data.mensagem ?? '').trim()

  if (!nome || !mensagem) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 422 })
  }

  const lead = {
    nome,
    empresa,
    mensagem,
    source: 'site-formulario-contato',
    createdAt: new Date().toISOString(),
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      })
    } catch (err) {
      // Não bloqueia a conversão: registra e segue.
      console.error('[lead] falha ao enviar para o webhook:', err)
    }
  } else {
    console.log('[lead] (sem LEAD_WEBHOOK_URL) novo lead:', lead)
  }

  return NextResponse.json({ ok: true })
}
