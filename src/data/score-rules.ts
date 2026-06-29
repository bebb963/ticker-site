/* ── Ticker Score — Diagnostic Engine ─────────────────────────── */

import type {
  ScoreQuestion,
  DiagnosticRule,
  PillarResult,
  PillarStatus,
  ScoreResultData,
} from './score-types'

/* ─── Regras de Diagnóstico ───────────────────────────────────── */
const RULES: DiagnosticRule[] = [
  // Descoberta
  { questionId: 'q1', triggerAnswerIds: ['q1a'], type: 'risk', message: 'Dependência exclusiva de indicações — sem canais digitais estruturados', suggestedProduct: 'Presença Digital' },
  { questionId: 'q1', triggerAnswerIds: ['q1c'], type: 'strength', message: 'Canais de aquisição ativos gerando demanda recorrente' },
  { questionId: 'q2', triggerAnswerIds: ['q2a'], type: 'risk', message: 'Ausência de posicionamento diferenciado — comunicação genérica', suggestedProduct: 'Branding' },
  { questionId: 'q2', triggerAnswerIds: ['q2c'], type: 'strength', message: 'Posicionamento de marca definido e aplicado consistentemente' },

  // Percepção
  { questionId: 'q3', triggerAnswerIds: ['q3a'], type: 'opportunity', message: 'Definir personas e perfil de cliente ideal com base em dados', suggestedProduct: 'Ticker Research' },
  { questionId: 'q4', triggerAnswerIds: ['q4a'], type: 'opportunity', message: 'Implantar sistema de monitoramento de satisfação (NPS)', suggestedProduct: 'CRM' },

  // Relacionamento
  { questionId: 'q5', triggerAnswerIds: ['q5a'], type: 'risk', message: 'Sem estratégia de pós-venda — risco de perda silenciosa de clientes', suggestedProduct: 'CRM' },
  { questionId: 'q5', triggerAnswerIds: ['q5a', 'q5b'], type: 'opportunity', message: 'Estruturar fluxo de relacionamento e nutrição de base', suggestedProduct: 'E-mail Marketing' },

  // Atendimento
  { questionId: 'q6', triggerAnswerIds: ['q6a'], type: 'risk', message: 'Atendimento sem processo — experiência inconsistente', suggestedProduct: 'WhatsApp Business' },
  { questionId: 'q6', triggerAnswerIds: ['q6a', 'q6b'], type: 'opportunity', message: 'Automatizar pré-atendimento e criar scripts de qualificação', suggestedProduct: 'Chatbot' },

  // Comercial
  { questionId: 'q7', triggerAnswerIds: ['q7a'], type: 'risk', message: 'Processo comercial desorganizado — vendas reativas', suggestedProduct: 'Pipeline Comercial' },
  { questionId: 'q7', triggerAnswerIds: ['q7a', 'q7b'], type: 'opportunity', message: 'Estruturar CRM e pipeline de vendas com indicadores de conversão', suggestedProduct: 'CRM' },
  { questionId: 'q7', triggerAnswerIds: ['q7c'], type: 'strength', message: 'Processo comercial estruturado com CRM ativo' },
  { questionId: 'q8', triggerAnswerIds: ['q8a'], type: 'risk', message: 'Faturamento imprevisível — ausência de indicadores comerciais', suggestedProduct: 'BI' },
  { questionId: 'q8', triggerAnswerIds: ['q8a', 'q8b'], type: 'opportunity', message: 'Estruturar indicadores comerciais e dashboards de previsibilidade', suggestedProduct: 'Ticker OS' },

  // Tecnologia
  { questionId: 'q9', triggerAnswerIds: ['q9a'], type: 'risk', message: 'Stack tecnológico primitivo — planilhas e WhatsApp pessoal', suggestedProduct: 'Ticker OS' },
  { questionId: 'q9', triggerAnswerIds: ['q9b'], type: 'opportunity', message: 'Integrar ferramentas existentes em um fluxo unificado', suggestedProduct: 'Integração de Sistemas' },
  { questionId: 'q9', triggerAnswerIds: ['q9c'], type: 'strength', message: 'Stack tecnológico integrado e funcional' },

  // Conteúdo
  { questionId: 'q10', triggerAnswerIds: ['q10a'], type: 'opportunity', message: 'Produzir conteúdo institucional e educativo de forma recorrente', suggestedProduct: 'Ticker Creators' },
  { questionId: 'q10', triggerAnswerIds: ['q10a', 'q10b'], type: 'opportunity', message: 'Implantar newsletter para nutrição da base de contatos', suggestedProduct: 'Ticker News' },

  // Inteligência
  { questionId: 'q11', triggerAnswerIds: ['q11a'], type: 'risk', message: 'Decisões por intuição — sem cultura de dados', suggestedProduct: 'Analytics' },
  { questionId: 'q11', triggerAnswerIds: ['q11c'], type: 'strength', message: 'Cultura data-driven com KPIs definidos' },
  { questionId: 'q12', triggerAnswerIds: ['q12a'], type: 'opportunity', message: 'Implantar ciclos de teste e experimentação em marketing', suggestedProduct: 'Ticker Research' },
]

/* ─── Descrições dos Pilares ──────────────────────────────────── */
const PILLAR_DESCRIPTIONS: Record<PillarStatus, Record<string, string>> = {
  green: {
    'Descoberta': 'Seus canais de aquisição estão ativos e gerando demanda de forma consistente.',
    'Percepção': 'Você conhece seu público e monitora a percepção da marca com indicadores reais.',
    'Relacionamento': 'Sua empresa possui estratégias ativas de pós-venda e nutrição de clientes.',
    'Atendimento': 'O atendimento segue processos documentados com indicadores de performance.',
    'Comercial': 'Processo comercial estruturado com previsibilidade e CRM ativo.',
    'Tecnologia': 'Stack tecnológico integrado e funcional, suportando a operação.',
    'Conteúdo': 'Produção de conteúdo recorrente com estratégia e métricas de resultado.',
    'Inteligência': 'Decisões guiadas por dados com cultura de testes e experimentação.',
  },
  yellow: {
    'Descoberta': 'Há presença digital, mas ainda sem estratégia clara de aquisição.',
    'Percepção': 'Existe uma noção do público, mas falta formalização e pesquisa estruturada.',
    'Relacionamento': 'Comunicações pontuais existem, mas sem fluxo contínuo de relacionamento.',
    'Atendimento': 'Há canais de atendimento, mas sem processos padronizados nem SLA.',
    'Comercial': 'Etapas de venda definidas, porém sem ferramentas nem acompanhamento rigoroso.',
    'Tecnologia': 'Ferramentas existem, mas operam de forma isolada, sem integração.',
    'Conteúdo': 'Publicações nas redes existem, mas sem calendário editorial nem estratégia.',
    'Inteligência': 'Métricas básicas são observadas, mas sem análise profunda para decisão.',
  },
  red: {
    'Descoberta': 'Dependência total de indicações — nenhum canal digital estruturado.',
    'Percepção': 'Não há definição de público-alvo nem monitoramento de satisfação.',
    'Relacionamento': 'Sem nenhuma estratégia de pós-venda ou nutrição de clientes.',
    'Atendimento': 'Atendimento sem processo — cada interação é diferente e imprevisível.',
    'Comercial': 'Vendas reativas, sem funil, sem CRM e sem previsibilidade de faturamento.',
    'Tecnologia': 'Operação baseada em planilhas e ferramentas improvisadas.',
    'Conteúdo': 'Ausência quase total de produção de conteúdo recorrente.',
    'Inteligência': 'Decisões tomadas exclusivamente por intuição, sem base em dados.',
  },
}

/* ─── Funções do Motor ────────────────────────────────────────── */

function getStatus(score: number): PillarStatus {
  if (score >= 70) return 'green'
  if (score >= 40) return 'yellow'
  return 'red'
}

/**
 * Calcula o score global ponderado (0–100)
 */
export function calculateScore(
  questions: ScoreQuestion[],
  answers: Record<string, string>
): number {
  let totalWeight = 0
  let weightedSum = 0

  for (const q of questions) {
    const selectedId = answers[q.id]
    if (!selectedId) continue
    const answer = q.answers.find((a) => a.id === selectedId)
    if (!answer) continue
    weightedSum += answer.value * q.weight
    totalWeight += 100 * q.weight
  }

  return totalWeight === 0 ? 0 : Math.round((weightedSum / totalWeight) * 100)
}

/**
 * Calcula resultados por pilar
 */
export function calculatePillars(
  questions: ScoreQuestion[],
  answers: Record<string, string>
): PillarResult[] {
  const pillarMap: Record<string, { sum: number; weight: number }> = {}

  for (const q of questions) {
    const selectedId = answers[q.id]
    if (!selectedId) continue
    const answer = q.answers.find((a) => a.id === selectedId)
    if (!answer) continue

    if (!pillarMap[q.category]) {
      pillarMap[q.category] = { sum: 0, weight: 0 }
    }
    pillarMap[q.category].sum += answer.value * q.weight
    pillarMap[q.category].weight += 100 * q.weight
  }

  // Ordem desejada dos pilares
  const order = [
    'Descoberta', 'Percepção', 'Relacionamento', 'Atendimento',
    'Comercial', 'Tecnologia', 'Conteúdo', 'Inteligência',
  ]

  return order
    .filter((name) => pillarMap[name])
    .map((name) => {
      const score = Math.round((pillarMap[name].sum / pillarMap[name].weight) * 100)
      const status = getStatus(score)
      return {
        name,
        score,
        status,
        description: PILLAR_DESCRIPTIONS[status][name] || '',
      }
    })
}

/**
 * Executa regras de diagnóstico contra as respostas
 */
export function runDiagnosticRules(
  answers: Record<string, string>
): { risks: string[]; opportunities: string[]; strengths: string[]; suggestedProducts: string[] } {
  const risks: string[] = []
  const opportunities: string[] = []
  const strengths: string[] = []
  const productsSet = new Set<string>()

  for (const rule of RULES) {
    const selectedId = answers[rule.questionId]
    if (!selectedId) continue
    if (!rule.triggerAnswerIds.includes(selectedId)) continue

    switch (rule.type) {
      case 'risk':
        risks.push(rule.message)
        break
      case 'opportunity':
        opportunities.push(rule.message)
        break
      case 'strength':
        strengths.push(rule.message)
        break
    }

    if (rule.suggestedProduct) {
      productsSet.add(rule.suggestedProduct)
    }
  }

  return {
    risks,
    opportunities,
    strengths,
    suggestedProducts: Array.from(productsSet),
  }
}

/**
 * Gera texto de diagnóstico baseado no score e nos resultados
 */
export function generateDiagnostic(
  score: number,
  pillars: PillarResult[],
  risks: string[],
  strengths: string[],
  opportunities: string[]
): { title: string; summary: string; priorities: string[] } {
  let title: string
  let summaryParts: string[] = []

  // Título baseado na faixa de score
  if (score >= 80) {
    title = 'Maturidade Avançada'
    summaryParts.push('Sua empresa demonstra um nível avançado de maturidade comercial e digital.')
  } else if (score >= 60) {
    title = 'Maturidade em Desenvolvimento'
    summaryParts.push('Sua empresa possui uma base sólida, mas há oportunidades concretas de evolução.')
  } else if (score >= 40) {
    title = 'Maturidade Intermediária'
    summaryParts.push('Sua empresa está em transição — existem fundamentos, mas os processos ainda são frágeis.')
  } else {
    title = 'Maturidade Inicial'
    summaryParts.push('Sua empresa opera de forma predominantemente reativa, com grande potencial de estruturação.')
  }

  // Forças
  if (strengths.length > 0) {
    summaryParts.push(`Pontos fortes identificados: ${strengths.slice(0, 2).join('; ').toLowerCase()}.`)
  }

  // Riscos
  if (risks.length > 0) {
    summaryParts.push(`Atenção para os riscos: ${risks.slice(0, 2).join('; ').toLowerCase()}.`)
  }

  // Oportunidades
  if (opportunities.length > 0) {
    summaryParts.push(`As oportunidades mais relevantes incluem: ${opportunities.slice(0, 3).join('; ').toLowerCase()}.`)
  }

  // Pilares vermelhos = prioridade
  const redPillars = pillars.filter((p) => p.status === 'red')
  const yellowPillars = pillars.filter((p) => p.status === 'yellow')

  const priorities: string[] = []
  for (const p of redPillars) {
    priorities.push(`Resolver: ${p.name} — ${p.description}`)
  }
  for (const p of yellowPillars.slice(0, 2)) {
    priorities.push(`Melhorar: ${p.name} — ${p.description}`)
  }

  return {
    title,
    summary: summaryParts.join(' '),
    priorities: priorities.slice(0, 5),
  }
}

/**
 * Função principal: gera o resultado completo do diagnóstico
 */
export function computeFullResult(
  questions: ScoreQuestion[],
  answers: Record<string, string>
): ScoreResultData {
  const score = calculateScore(questions, answers)
  const pillars = calculatePillars(questions, answers)
  const { risks, opportunities, strengths, suggestedProducts } = runDiagnosticRules(answers)
  const { title, summary, priorities } = generateDiagnostic(score, pillars, risks, strengths, opportunities)

  return {
    score,
    pillars,
    risks,
    opportunities,
    strengths,
    suggestedProducts,
    diagnosticTitle: title,
    diagnosticSummary: summary,
    priorities,
  }
}
