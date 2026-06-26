import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Ticker | Marketing estruturado a partir do negócio',
  description:
    'A Ticker estrutura o marketing a partir de um estudo do negócio: modelo, público, produto e comportamento de compra.',
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
    title: 'Ticker | Marketing estruturado a partir do negócio',
    description:
      'A Ticker estrutura o marketing a partir de um estudo do negócio: modelo, público, produto e comportamento de compra.',
    url: 'https://www.tickermkt.com',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ticker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ticker | Marketing estruturado a partir do negócio',
    description:
      'A Ticker estrutura o marketing a partir de um estudo do negócio: modelo, público, produto e comportamento de compra.',
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
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

