import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MarketingInstintivo from '@/components/MarketingInstintivo'

/* Below-the-fold components — lazy loaded for faster initial paint */
const OMapa = dynamic(() => import('@/components/OMapa'))
const Services = dynamic(() => import('@/components/Services'))
const QuemSomos = dynamic(() => import('@/components/QuemSomos'))
const Manifesto = dynamic(() => import('@/components/Manifesto'))
const Contato = dynamic(() => import('@/components/Contato'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main>
      <Header variant="small" />
      <Hero />
      <MarketingInstintivo />
      <OMapa />

      <Services />
      <QuemSomos />
      <Manifesto />
      <Contato />
      <Footer variant="dark" />
    </main>
  )
}
