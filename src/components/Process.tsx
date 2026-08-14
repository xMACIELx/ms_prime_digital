import { motion } from 'motion/react'
import { processSteps } from '../data/stats'

export default function Process() {
  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[26ch] font-display text-[clamp(26px,3.2vw,36px)] font-semibold leading-[1.15] tracking-tight"
        >
          Como o projeto avança, do primeiro contato aos ajustes finais
        </motion.h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-border md:block" />
          {processSteps.map((step, i) => (
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
              <h3 className="mt-5 font-display text-[19px] font-medium">{step.title}</h3>
              <p className="mt-2.5 max-w-[36ch] text-[14.5px] leading-relaxed text-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
