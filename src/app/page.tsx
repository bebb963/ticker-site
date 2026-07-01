import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Premissa from '@/components/Premissa'
import MarketingInstintivo from '@/components/MarketingInstintivo'

const ComoOlhamos = dynamic(() => import('@/components/ComoOlhamos'))
const OMapa = dynamic(() => import('@/components/OMapa'))
const TresFases = dynamic(() => import('@/components/TresFases'))
const FormasDeTrabalho = dynamic(() => import('@/components/FormasDeTrabalho'))
const TickerOS = dynamic(() => import('@/components/TickerOS'))
const PorOndeComecar = dynamic(() => import('@/components/PorOndeComecar'))
const DiagnosticoEstrutura = dynamic(() => import('@/components/DiagnosticoEstrutura'))
const Manifesto = dynamic(() => import('@/components/Manifesto'))
const Contato = dynamic(() => import('@/components/Contato'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main>
      <Header variant="small" />
      <Hero />
      <Premissa />
      <MarketingInstintivo />
      <ComoOlhamos />
      <OMapa />
      <TresFases />
      <FormasDeTrabalho />
      <TickerOS />
      <PorOndeComecar />
      <DiagnosticoEstrutura />
      <Manifesto />
      <Contato />
      <Footer variant="dark" />
    </main>
  )
}
