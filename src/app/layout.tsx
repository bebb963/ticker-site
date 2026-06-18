import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ticker | Primeiro entender. Depois construir.',
  description:
    'A Ticker planeja e executa o marketing a partir do estudo de cada negócio, do que move o fundador ao que move quem compra.',
  keywords: [
    'consultoria de marketing',
    'sistemas de marketing',
    'marketing instintivo',
    'estratégia de marca',
    'Ticker',
    'marketing estratégico',
  ],
  authors: [{ name: 'Ticker' }],
  metadataBase: new URL('https://www.tickermkt.com'),
  openGraph: {
    title: 'Ticker | Primeiro entender. Depois construir.',
    description:
      'A Ticker planeja e executa o marketing a partir do estudo de cada negócio, do que move o fundador ao que move quem compra.',
    url: 'https://www.tickermkt.com',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ticker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ticker | Primeiro entender. Depois construir.',
    description:
      'A Ticker planeja e executa o marketing a partir do estudo de cada negócio, do que move o fundador ao que move quem compra.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton+SC&family=Inter:wght@400;600&family=DM+Serif+Text:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
