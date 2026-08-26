import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from '@phosphor-icons/react'

const faqs = [
  {
    question: 'E se eu não gostar do resultado?',
    answer:
      'Você tem 1 ajuste grátis (texto, cor ou imagem) em até 48h após a entrega. Mudanças estruturais além disso, como nova seção ou reorganizar o layout, são orçadas à parte.',
  },
  {
    question: 'Preciso ter domínio próprio?',
    answer:
      'Sim, o domínio não está incluso — você precisa ter ou registrar o seu. Te orientamos no processo se precisar.',
  },
  {
    question: 'Quanto tempo demora?',
    answer:
      '2 dias úteis, contados a partir do pagamento da entrada e do envio de todo o material (textos, fotos, referências) combinado na reunião.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: '50% no início (confirmação do pedido) e 50% na entrega, via Pix ou cartão de crédito.',
  },
  {
    question: 'E se eu desistir depois de pagar a entrada?',
    answer:
      'A entrada não é reembolsável, já que cobre o tempo reservado e o trabalho iniciado. Se por algum motivo não entregarmos o site, a entrada é devolvida integralmente.',
  },
  {
    question: 'Depois de pronto, fico preso à hospedagem de vocês?',
    answer:
      'Não. A hospedagem custa R$ 39,90/mês (site no ar, SSL e suporte inclusos), mas se quiser levar o site pra outro lugar, te entregamos o arquivo zipado.',
  },
]

export default function SiteExpressFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(24px,3vw,32px)] font-semibold leading-[1.15] tracking-tight"
        >
          Perguntas frequentes
        </motion.h2>

        <div className="mx-auto mt-10 max-w-[760px] divide-y divide-border rounded-[var(--radius-lg)] bg-surface shadow-sm">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[15.5px] font-medium">{faq.question}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-soft transition-transform duration-300 ease-[var(--ease-out-soft)] ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus size={13} weight="bold" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14px] leading-relaxed text-text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
