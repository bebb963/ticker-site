import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MarketingInstintivo from '@/components/MarketingInstintivo'

import OMapa from '@/components/OMapa'
import Services from '@/components/Services'
import QuemSomos from '@/components/QuemSomos'
import Manifesto from '@/components/Manifesto'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'



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
