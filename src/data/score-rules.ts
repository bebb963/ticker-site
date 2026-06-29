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
  { questionId: 'q1', triggerAnswerIds: ['q1a'], type: 'risk', message: 'A aquisição de clientes concentra-se em indicações, o que pode limitar o crescimento previsível', suggestedProduct: 'Presença Digital' },
  { questionId: 'q1', triggerAnswerIds: ['q1c'], type: 'strength', message: 'Canais de aquisição ativos e diversificados gerando demanda recorrente' },
  { questionId: 'q2', triggerAnswerIds: ['q2a'], type: 'risk', message: 'O posicionamento de marca ainda está em construção, o que pode dificultar a diferenciação no mercado', suggestedProduct: 'Branding' },
  { questionId: 'q2', triggerAnswerIds: ['q2c'], type: 'strength', message: 'Posicionamento de marca definido e aplicado de forma consistente em todos os canais' },

  // Percepção
  { questionId: 'q3', triggerAnswerIds: ['q3a'], type: 'opportunity', message: 'Formalizar o perfil de cliente ideal a partir de dados e pesquisa de mercado', suggestedProduct: 'Ticker Research' },
  { questionId: 'q4', triggerAnswerIds: ['q4a'], type: 'opportunity', message: 'Implementar um sistema contínuo de monitoramento de satisfação (NPS ou similar)', suggestedProduct: 'CRM' },

  // Relacionamento
  { questionId: 'q5', triggerAnswerIds: ['q5a'], type: 'risk', message: 'A ausência de uma estratégia de pós-venda pode resultar em perda gradual de clientes', suggestedProduct: 'CRM' },
  { questionId: 'q5', triggerAnswerIds: ['q5a', 'q5b'], type: 'opportunity', message: 'Estruturar um fluxo contínuo de relacionamento e nutrição da base de clientes', suggestedProduct: 'E-mail Marketing' },

  // Atendimento
  { questionId: 'q6', triggerAnswerIds: ['q6a'], type: 'risk', message: 'A falta de padronização no atendimento pode gerar experiências inconsistentes para o cliente', suggestedProduct: 'WhatsApp Business' },
  { questionId: 'q6', triggerAnswerIds: ['q6a', 'q6b'], type: 'opportunity', message: 'Automatizar o pré-atendimento e criar roteiros de qualificação para a equipe', suggestedProduct: 'Chatbot' },

  // Comercial
  { questionId: 'q7', triggerAnswerIds: ['q7a'], type: 'risk', message: 'A operação comercial em formato orgânico pode dificultar a escalabilidade e o controle', suggestedProduct: 'Pipeline Comercial' },
  { questionId: 'q7', triggerAnswerIds: ['q7a', 'q7b'], type: 'opportunity', message: 'Estruturar CRM e pipeline de vendas com indicadores claros de conversão', suggestedProduct: 'CRM' },
  { questionId: 'q7', triggerAnswerIds: ['q7c'], type: 'strength', message: 'Processo comercial estruturado com CRM ativo e indicadores acompanhados' },
  { questionId: 'q8', triggerAnswerIds: ['q8a'], type: 'risk', message: 'A oscilação no faturamento sugere uma oportunidade de criar indicadores de previsibilidade', suggestedProduct: 'BI' },
  { questionId: 'q8', triggerAnswerIds: ['q8a', 'q8b'], type: 'opportunity', message: 'Implantar dashboards comerciais para projeções de faturamento baseadas em dados', suggestedProduct: 'Ticker OS' },

  // Tecnologia
  { questionId: 'q9', triggerAnswerIds: ['q9a'], type: 'risk', message: 'A operação baseada em ferramentas básicas pode limitar a eficiência e a escalabilidade', suggestedProduct: 'Ticker OS' },
  { questionId: 'q9', triggerAnswerIds: ['q9b'], type: 'opportunity', message: 'Integrar as ferramentas existentes em um fluxo operacional unificado', suggestedProduct: 'Integração de Sistemas' },
  { questionId: 'q9', triggerAnswerIds: ['q9c'], type: 'strength', message: 'Stack tecnológico integrado e funcional suportando a operação' },

  // Conteúdo
  { questionId: 'q10', triggerAnswerIds: ['q10a'], type: 'opportunity', message: 'Iniciar uma produção recorrente de conteúdo institucional e educativo', suggestedProduct: 'Ticker Creators' },
  { questionId: 'q10', triggerAnswerIds: ['q10a', 'q10b'], type: 'opportunity', message: 'Implantar newsletter para nutrição contínua da base de contatos', suggestedProduct: 'Ticker News' },

  // Inteligência
  { questionId: 'q11', triggerAnswerIds: ['q11a'], type: 'risk', message: 'Decisões baseadas principalmente em percepção podem limitar a assertividade estratégica', suggestedProduct: 'Analytics' },
  { questionId: 'q11', triggerAnswerIds: ['q11c'], type: 'strength', message: 'Cultura orientada a dados com KPIs definidos e acompanhados' },
  { questionId: 'q12', triggerAnswerIds: ['q12a'], type: 'opportunity', message: 'Implantar ciclos de teste e experimentação para validar hipóteses de marketing', suggestedProduct: 'Ticker Research' },
]

/* ─── Descrições dos Pilares ──────────────────────────────────── */
const PILLAR_DESCRIPTIONS: Record<PillarStatus, Record<string, string>> = {
  green: {
    'Descoberta': 'Os canais de aquisição estão ativos e gerando demanda de forma consistente e diversificada.',
    'Percepção': 'O público está mapeado e a percepção da marca é monitorada com indicadores reais.',
    'Relacionamento': 'Existem estratégias ativas de pós-venda, nutrição e incentivo à recompra.',
    'Atendimento': 'O atendimento segue processos documentados com indicadores de performance.',
    'Comercial': 'O processo comercial é estruturado, com previsibilidade e CRM ativo.',
    'Tecnologia': 'O stack tecnológico está integrado e funcional, suportando a operação.',
    'Conteúdo': 'A produção de conteúdo é recorrente, com estratégia e métricas de resultado.',
    'Inteligência': 'As decisões são orientadas por dados, com cultura de testes e experimentação.',
  },
  yellow: {
    'Descoberta': 'Há presença digital estabelecida, com oportunidade de consolidar a estratégia de aquisição.',
    'Percepção': 'Existe uma percepção do público, com espaço para formalização e pesquisa estruturada.',
    'Relacionamento': 'Comunicações pontuais acontecem, com oportunidade de criar um fluxo contínuo.',
    'Atendimento': 'Canais de atendimento estão ativos, com espaço para padronização e metas de SLA.',
    'Comercial': 'Etapas de venda estão definidas, com oportunidade de implantar ferramentas e acompanhamento.',
    'Tecnologia': 'Ferramentas especializadas estão em uso, com oportunidade de integração.',
    'Conteúdo': 'Publicações acontecem com frequência, com espaço para calendário editorial e estratégia.',
    'Inteligência': 'Métricas básicas são acompanhadas, com oportunidade de análise mais profunda.',
  },
  red: {
    'Descoberta': 'A aquisição depende principalmente de indicações — há espaço para diversificar os canais digitais.',
    'Percepção': 'O mapeamento do público e o monitoramento de satisfação estão em fase inicial.',
    'Relacionamento': 'O relacionamento pós-venda é uma oportunidade ainda a ser estruturada.',
    'Atendimento': 'O atendimento opera de forma flexível, com oportunidade de padronização.',
    'Comercial': 'O processo comercial funciona de forma orgânica, com grande potencial de estruturação.',
    'Tecnologia': 'A operação utiliza ferramentas básicas — há espaço para evoluir o stack tecnológico.',
    'Conteúdo': 'A produção de conteúdo está em fase inicial, com grande potencial de crescimento.',
    'Inteligência': 'As decisões se apoiam na experiência da equipe — há espaço para incorporar dados.',
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
  const summaryParts: string[] = []

  // Título e abertura baseados na faixa de score
  if (score >= 80) {
    title = 'Maturidade Avançada'
    summaryParts.push('Sua empresa demonstra um nível avançado de maturidade comercial e digital, com processos bem definidos e uma operação consistente.')
  } else if (score >= 60) {
    title = 'Maturidade em Consolidação'
    summaryParts.push('Sua empresa possui uma base sólida e já demonstra avanços importantes. Existem oportunidades concretas para consolidar e escalar a operação.')
  } else if (score >= 40) {
    title = 'Maturidade em Desenvolvimento'
    summaryParts.push('Sua empresa está construindo seus fundamentos comerciais e digitais. Há uma base relevante com espaço significativo para evolução estruturada.')
  } else {
    title = 'Maturidade em Fase Inicial'
    summaryParts.push('Sua empresa está no início da jornada de estruturação comercial e digital — um ponto de partida com grande potencial de crescimento.')
  }

  // Forças
  if (strengths.length > 0) {
    summaryParts.push(`Pontos fortes identificados: ${strengths.slice(0, 2).join('; ').toLowerCase()}.`)
  }

  // Oportunidades (antes dos riscos, para manter tom positivo)
  if (opportunities.length > 0) {
    summaryParts.push(`As oportunidades mais relevantes incluem: ${opportunities.slice(0, 3).join('; ').toLowerCase()}.`)
  }

  // Riscos (com linguagem consultiva)
  if (risks.length > 0) {
    summaryParts.push(`Pontos que merecem atenção: ${risks.slice(0, 2).join('; ').toLowerCase()}.`)
  }

  // Pilares com espaço para evolução = prioridade
  const redPillars = pillars.filter((p) => p.status === 'red')
  const yellowPillars = pillars.filter((p) => p.status === 'yellow')

  const priorities: string[] = []
  for (const p of redPillars) {
    priorities.push(`Priorizar: ${p.name} — ${p.description}`)
  }
  for (const p of yellowPillars.slice(0, 2)) {
    priorities.push(`Evoluir: ${p.name} — ${p.description}`)
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
