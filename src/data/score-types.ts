/* ── Ticker Score — Types ──────────────────────────────────────── */

export interface ScoreAnswer {
  id: string
  text: string
  /** 0 = menos maduro, 50 = intermediário, 100 = mais maduro */
  value: number
}

export interface ScoreQuestion {
  id: string
  /** Pilar ao qual pertence */
  category: string
  /** Texto da pergunta */
  text: string
  answers: ScoreAnswer[]
  /** Peso relativo (1 = normal, 2 = peso duplo) */
  weight: number
  /** Produtos Ticker relacionados a esta dimensão */
  relatedProducts: string[]
}

export interface ScoreQuestionnaire {
  version: string
  questions: ScoreQuestion[]
}

export type PillarStatus = 'green' | 'yellow' | 'red'

export interface PillarResult {
  name: string
  score: number
  status: PillarStatus
  description: string
}

export interface DiagnosticRule {
  /** ID da pergunta-gatilho */
  questionId: string
  /** IDs das respostas que ativam a regra */
  triggerAnswerIds: string[]
  /** Tipo de sinal */
  type: 'risk' | 'opportunity' | 'strength'
  /** Descrição para o diagnóstico */
  message: string
  /** Produto sugerido, se houver */
  suggestedProduct?: string
}

export interface ScoreResultData {
  score: number
  pillars: PillarResult[]
  risks: string[]
  opportunities: string[]
  strengths: string[]
  suggestedProducts: string[]
  diagnosticTitle: string
  diagnosticSummary: string
  priorities: string[]
}

export interface LeadData {
  name: string
  company: string
  role: string
  email: string
  whatsapp: string
}

export interface ScoreSubmission {
  lead: LeadData
  score: number
  answers: Record<string, string>
  pillars: PillarResult[]
  opportunities: string[]
  risks: string[]
  suggestedProducts: string[]
  /** Metadados de analytics */
  meta: {
    date: string
    origin: string
    utm: Record<string, string>
    device: string
    timeSpentSeconds: number
  }
}
