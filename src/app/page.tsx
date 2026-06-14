import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Manifesto from '@/components/Manifesto'
import MarketingInstintivo from '@/components/MarketingInstintivo'
import OMapa from '@/components/OMapa'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import TrabalheConosco from '@/components/TrabalheConosco'
import OQueNaoFaz from '@/components/OQueNaoFaz'
import QuemSomos from '@/components/QuemSomos'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header variant="small" />
      <Hero />
      <Partners />
      <Manifesto />
      <MarketingInstintivo />
      {/* <OMapa /> */}
      <Services />
      {/* <Projects /> */}
      <Testimonials />
      {/* <TrabalheConosco /> */}
      {/* <OQueNaoFaz /> */}
      <QuemSomos />
      <Contato />
      <Footer variant="dark" />
    </main>
  )
}
