import { motion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { WHATSAPP_MESSAGES, buildWhatsappHref } from '../../lib/whatsapp'

const installments = ['50% no início (confirmação do pedido)', '50% na entrega']

export default function SiteExpressPricing() {
  return (
    <section id="preco" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[440px] rounded-[var(--radius-lg)] bg-surface p-10 text-center shadow-lg"
        >
          <p className="font-display text-[clamp(48px,7vw,72px)] font-semibold leading-none tracking-tight">
            R$ 350
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
            Site completo, pronto em até 2 dias úteis
          </p>

          <div className="mt-8 border-t border-border pt-8">
            <ul className="space-y-2">
              {installments.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-2 text-[14px] text-text-muted"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[13px] text-text-faint">Pix ou cartão de crédito</p>
          </div>

          <a
            href={buildWhatsappHref(WHATSAPP_MESSAGES.siteExpress)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[15px] font-semibold text-white shadow-[0_14px_36px_-10px_rgba(125,75,233,0.6)] transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Quero meu site
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
              <ArrowRight size={13} weight="bold" />
            </span>
          </a>
        </motion.div>

        <p className="mx-auto mt-6 max-w-[440px] text-center text-[13px] leading-relaxed text-text-faint">
          Hospedagem do site: R$ 39,90/mês (site no ar, SSL e suporte inclusos)
        </p>
      </div>
    </section>
  )
}
