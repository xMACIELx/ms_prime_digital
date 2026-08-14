import { motion } from 'motion/react'
import { proofStats } from '../data/stats'
import CountUp from './CountUp'

export default function ProofStrip() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {proofStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-1.5 py-8 text-center sm:py-10"
          >
            <CountUp
              value={stat.value}
              className="font-display text-[32px] font-semibold tracking-tight text-accent-soft sm:text-[38px]"
            />
            <span className="text-[13.5px] text-text-muted">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
