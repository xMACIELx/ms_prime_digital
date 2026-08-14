import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProofStrip from './components/ProofStrip'
import ServiceGrid from './components/ServiceGrid'
import ServiceOverlay from './components/ServiceOverlay'
import NarrativeTransition from './components/NarrativeTransition'
import Process from './components/Process'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { marketingServices, automationServices } from './data/services'
import type { Service } from './data/services'

export default function App() {
  const [activeService, setActiveService] = useState<Service | null>(null)

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <ServiceGrid
          id="servicos"
          eyebrow="Serviços"
          title="Presença que atrai e converte"
          description="Tráfego pago, Google Ads, redes sociais e um site construído para vender. A base para o seu negócio ser encontrado pelas pessoas certas."
          services={marketingServices}
          onSelect={setActiveService}
        />
        <NarrativeTransition />
        <ServiceGrid
          title="Operação que sustenta o crescimento"
          description="Automações, CRM, inteligência artificial, software sob medida e chatbots. Enquanto o marketing traz gente nova, a operação garante que ninguém se perca no caminho."
          services={automationServices}
          onSelect={setActiveService}
        />
        <Process />
        <Results />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ServiceOverlay service={activeService} onClose={() => setActiveService(null)} />
    </>
  )
}
