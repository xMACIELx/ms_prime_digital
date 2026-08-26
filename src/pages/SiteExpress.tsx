import { useDocumentMeta } from '../lib/useDocumentMeta'
import SiteExpressHeader from '../components/site-express/SiteExpressHeader'
import SiteExpressHero from '../components/site-express/SiteExpressHero'
import SiteExpressProof from '../components/site-express/SiteExpressProof'
import SiteExpressHowItWorks from '../components/site-express/SiteExpressHowItWorks'
import SiteExpressIncluded from '../components/site-express/SiteExpressIncluded'
import SiteExpressPricing from '../components/site-express/SiteExpressPricing'
import SiteExpressFaq from '../components/site-express/SiteExpressFaq'
import SiteExpressFinalCta from '../components/site-express/SiteExpressFinalCta'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function SiteExpress() {
  useDocumentMeta({
    title: 'Site Express — Seu site pronto em 2 dias, R$350 | MS Digital Prime',
    description:
      'Site profissional, pronto em até 2 dias úteis, a partir de R$350. Sem contrato longo, sem enrolação — fale agora pelo WhatsApp.',
  })

  return (
    <>
      <SiteExpressHeader />
      <main>
        <SiteExpressHero />
        <SiteExpressProof />
        <SiteExpressHowItWorks />
        <SiteExpressIncluded />
        <SiteExpressPricing />
        <SiteExpressFaq />
        <SiteExpressFinalCta />
      </main>
      <WhatsAppFloat />
    </>
  )
}
