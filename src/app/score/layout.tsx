import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ticker Score | Diagnóstico de Maturidade Comercial e Digital',
  description:
    'Descubra o nível de maturidade comercial e digital da sua empresa. Responda 12 perguntas e receba um diagnóstico personalizado imediato. Ferramenta gratuita da Ticker.',
  keywords: [
    'ticker score',
    'diagnóstico comercial',
    'maturidade digital',
    'avaliação de marketing',
    'diagnóstico empresarial',
    'consultoria de marketing',
    'Ticker',
  ],
  openGraph: {
    title: 'Ticker Score | Diagnóstico de Maturidade Comercial e Digital',
    description:
      'Descubra o nível de maturidade comercial e digital da sua empresa. Diagnóstico gratuito e imediato.',
    url: 'https://www.tickermkt.com/score',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ticker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ticker Score | Diagnóstico de Maturidade Comercial e Digital',
    description:
      'Descubra o nível de maturidade comercial e digital da sua empresa. Diagnóstico gratuito e imediato.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ScoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
