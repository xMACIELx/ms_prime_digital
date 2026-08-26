import { motion } from 'motion/react'
import { Check, X } from '@phosphor-icons/react'

const included = [
  '1 página, com até 5 seções',
  'Site 100% personalizado, sob medida — não é template genérico',
  'Formulário de contato + botão de WhatsApp',
  'SSL, site responsivo e no ar',
  '1 ajuste grátis (texto, cor ou imagem) em até 48h após a entrega',
]

const notIncluded = [
  'Domínio (você precisa ter ou registrar o seu)',
  'Integração do formulário com CRM, e-mail ou automação',
  'Mudanças estruturais após o ajuste grátis (nova seção, reorganizar layout)',
  'Escopo fora de site básico (loja virtual, agendamento, sistema com login)',
]

export default function SiteExpressIncluded() {
  return (
    <section id="inclui" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(24px,3vw,32px)] font-semibold leading-[1.15] tracking-tight"
        >
          O que está incluso / o que não está
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[var(--radius-md)] bg-surface p-7 shadow-sm sm:p-8"
          >
            <h3 className="font-display text-[17px] font-medium">Incluso</h3>
            <ul className="mt-5 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-text">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-soft">
                    <Check size={11} weight="bold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[var(--radius-md)] bg-surface p-7 shadow-sm sm:p-8"
          >
            <h3 className="font-display text-[17px] font-medium">Não incluso</h3>
            <ul className="mt-5 space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-text">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-text-faint/15 text-text-faint">
                    <X size={11} weight="bold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
