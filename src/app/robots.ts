import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Bloquear bots de scraping/IA conhecidos
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'CCBot', 'anthropic-ai', 'Omgilibot', 'Omgili'],
        disallow: '/',
      },
    ],
    sitemap: 'https://tickermkt.com.br/sitemap.xml',
  }
}
