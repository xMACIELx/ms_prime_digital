import { motion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { contact } from '../data/stats'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-accent py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-white/10 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-[720px] px-6 text-center"
      >
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-tight text-white">
          Pronto para colocar isso pra rodar no seu negócio?
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-[15.5px] leading-relaxed text-on-accent-muted">
          Fale com a gente e receba uma proposta de marketing e automação sob medida para o
          momento atual da sua empresa.
        </p>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-9 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-accent-soft shadow-lg transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
        >
          {contact.whatsappLabel}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            <ArrowRight size={13} weight="bold" />
          </span>
        </a>
      </motion.div>
    </section>
  )
}
