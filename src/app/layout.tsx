import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ticker — O marketing que vive o seu negócio.',
  description:
    'A Ticker constrói sistemas de marketing personalizados baseados no estudo profundo do seu negócio, conectando sua empresa às pessoas que precisam dela.',
  keywords: [
    'agência de marketing',
    'marketing estratégico',
    'marketing instintivo',
    'BPO de marketing',
    'sistemas de marketing',
    'Ticker',
  ],
  authors: [{ name: 'Ticker' }],
  metadataBase: new URL('https://www.tickermkt.com'),
  openGraph: {
    title: 'Ticker — O marketing que vive o seu negócio.',
    description:
      'Construímos sistemas de marketing personalizados para conectar boas empresas às pessoas que precisam delas.',
    url: 'https://www.tickermkt.com',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ticker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ticker — O marketing que vive o seu negócio.',
    description:
      'Construímos sistemas de marketing personalizados para conectar boas empresas às pessoas que precisam delas.',
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
