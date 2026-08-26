import { motion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { WHATSAPP_MESSAGES, buildWhatsappHref } from '../../lib/whatsapp'

export default function SiteExpressHero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[720px] px-6 text-center"
      >
        <h1 className="font-display text-[clamp(32px,5vw,54px)] font-semibold leading-[1.08] tracking-tight">
          Seu site pronto em 2 dias, por R$350
        </h1>
        <p className="mx-auto mt-5 max-w-[48ch] text-[17px] leading-relaxed text-text-muted">
          Site profissional, sob medida pro seu negócio — sem enrolação, sem contrato longo.
        </p>

        <a
          href={buildWhatsappHref(WHATSAPP_MESSAGES.siteExpress)}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[15px] font-semibold text-white shadow-[0_14px_36px_-10px_rgba(125,75,233,0.6)] transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Quero meu site
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            <ArrowRight size={13} weight="bold" />
          </span>
        </a>
      </motion.div>
    </section>
  )
}
