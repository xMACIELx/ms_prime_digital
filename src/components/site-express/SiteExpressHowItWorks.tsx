import { motion } from 'motion/react'

const steps = [
  {
    title: 'Reunião de 1 hora',
    description:
      'Você traz referências de sites que gosta, a gente mostra nosso portfólio e entende o que seu negócio precisa.',
  },
  {
    title: 'Você envia o material',
    description:
      'Textos, fotos e as referências discutidas — o prazo de entrega começa a contar a partir daqui.',
  },
  {
    title: 'Construção em até 2 dias úteis',
    description: 'Seu site é feito sob medida, sem template genérico.',
  },
  {
    title: 'Entrega + 1 ajuste grátis',
    description:
      'Você recebe o site no ar e tem 48h pra um ajuste pontual (texto, cor ou imagem) sem custo.',
  },
]

export default function SiteExpressHowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(24px,3vw,32px)] font-semibold leading-[1.15] tracking-tight"
        >
          Como funciona
        </motion.h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-border lg:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface font-display text-[13px] font-medium text-text-muted shadow-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-display text-[17px] font-medium">{step.title}</h3>
              <p className="mt-2.5 max-w-[36ch] text-[14px] leading-relaxed text-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
