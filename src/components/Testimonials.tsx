import { motion } from 'motion/react'
import { Quotes } from '@phosphor-icons/react'
import { testimonials } from '../data/testimonials'

const offsets = ['md:translate-y-3 md:-rotate-1', 'md:-translate-y-2', 'md:translate-y-4 md:rotate-1']

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[26ch] font-display text-[clamp(26px,3.2vw,36px)] font-semibold leading-[1.15] tracking-tight"
        >
          Clientes que confiam, resultados que comprovam
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-[var(--radius-md)] bg-surface p-7 shadow-md transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-hover ${offsets[i]}`}
            >
              <Quotes size={26} weight="fill" className="text-accent-dim" />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-text">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-[13.5px]">
                <span className="font-medium text-text">{t.name}</span>
                <span className="text-text-muted"> - {t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
