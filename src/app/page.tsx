import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Manifesto from '@/components/Manifesto'
import ManifestoV2 from '@/components/ManifestoV2'
import MarketingInstintivo from '@/components/MarketingInstintivo'
import MarketingInstintivoV2 from '@/components/MarketingInstintivoV2'
import MarketingInstintivoV3 from '@/components/MarketingInstintivoV3'
import MarketingInstintivoV4 from '@/components/MarketingInstintivoV4'
import MarketingInstintivoV5 from '@/components/MarketingInstintivoV5'
import OMapa from '@/components/OMapa'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import TrabalheConosco from '@/components/TrabalheConosco'
import OQueNaoFaz from '@/components/OQueNaoFaz'
// import QuemSomos from '@/components/QuemSomos'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import Premissa from '@/components/Premissa'
import ComoOlhamos from '@/components/ComoOlhamos'
import OQueMuda from '@/components/OQueMuda'
import ParaQuemE from '@/components/ParaQuemE'

export default function Home() {
  return (
    <main>
      <Header variant="small" />
      <Hero />

      <Premissa />

      {/* <Partners /> - reativar quando houver logos reais */}

      <MarketingInstintivo />
      {/* <MarketingInstintivoV2 /> */}
      {/* <MarketingInstintivoV3 /> */}
      {/* <MarketingInstintivoV4 /> */}
      {/* <MarketingInstintivoV5 /> */}

      <ComoOlhamos />
      <OMapa />
      <OQueMuda />

      <Services />

      {/* <ParaQuemE /> */}
      {/* <OQueNaoFaz /> */}

      {/* <QuemSomos /> */}

      {/* <Manifesto /> */}
      <ManifestoV2 />

      {/* <Testimonials /> - reativar quando houver depoimentos reais */}

      <Contato />
      <Footer variant="dark" />
    </main>
  )
}
