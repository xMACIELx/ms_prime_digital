import { motion } from 'motion/react'
import { resultStats } from '../data/stats'
import CountUp from './CountUp'

const [featured, ...rest] = resultStats

export default function Results() {
  return (
    <section id="resultados" className="border-y border-border bg-surface/30 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-[clamp(26px,3.2vw,36px)] font-semibold leading-[1.15] tracking-tight">
            Crescimento que aparece
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-text-muted">
            Números de campanhas com foco em visibilidade, engajamento e geração de oportunidade
            real, acompanhados de perto para ajustar criativos e páginas de destino.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center rounded-[var(--radius-lg)] bg-surface p-10 shadow-lg lg:col-span-5"
          >
            <CountUp
              value={featured.value}
              className="font-display text-[clamp(48px,6vw,72px)] font-semibold leading-none tracking-tight text-accent-soft"
            />
            <span className="mt-3 text-[15px] text-text-muted">{featured.label}</span>
          </motion.div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] bg-border shadow-md sm:grid-cols-3 lg:col-span-7">
            {rest.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-center bg-surface p-7"
              >
                <CountUp
                  value={stat.value}
                  className="font-display text-[30px] font-semibold tracking-tight text-accent-muted"
                />
                <span className="mt-2 text-[13.5px] text-text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
