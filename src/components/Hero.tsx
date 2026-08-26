import { motion } from 'motion/react'
import { ArrowRight, Check } from '@phosphor-icons/react'
import { contact } from '../data/stats'
import { WHATSAPP_MESSAGES, buildWhatsappHref } from '../lib/whatsapp'
import HeroVisual from './HeroVisual'

const checklist = [
  'Site profissional',
  'Google Ads',
  'Meta Ads',
  'WhatsApp integrado',
  'Acompanhamento de resultados',
  'Automações',
  'Desenvolvimento de sistemas',
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-[18ch] font-display text-[clamp(32px,5vw,54px)] font-semibold leading-[1.08] tracking-tight"
          >
            Faça sua empresa receber mais clientes
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-text-muted"
          >
            Site, tráfego pago e automação trabalhando juntos pra você vender mais.
          </motion.p>

          <motion.ul
            custom={1.5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 grid max-w-[46ch] grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
          >
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[14px] text-text">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-soft">
                  <Check size={11} weight="bold" />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={buildWhatsappHref(WHATSAPP_MESSAGES.generico)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[15px] font-semibold text-white shadow-[0_14px_36px_-10px_rgba(125,75,233,0.6)] transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {contact.whatsappLabel}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                <ArrowRight size={13} weight="bold" />
              </span>
            </a>
            <a
              href="#servicos"
              className="rounded-full bg-surface px-7 py-4 text-[15px] font-semibold text-text shadow-sm transition-all duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-hover"
            >
              Ver serviços
            </a>
          </motion.div>
        </div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="lg:col-span-5"
        >
          <div className="rounded-[var(--radius-lg)] bg-surface p-2 shadow-lg">
            <HeroVisual />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
