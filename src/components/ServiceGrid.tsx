import { motion } from 'motion/react'
import type { Service } from '../data/services'
import ServiceCard from './ServiceCard'

interface Props {
  id?: string
  eyebrow?: string
  title: string
  description: string
  services: Service[]
  onSelect: (service: Service) => void
}

export default function ServiceGrid({
  id,
  eyebrow,
  title,
  description,
  services,
  onSelect,
}: Props) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[52ch]"
        >
          {eyebrow && (
            <span className="mb-4 inline-block rounded-full bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted shadow-xs">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-[clamp(26px,3.2vw,36px)] font-semibold leading-[1.15] tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-text-muted">{description}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  )
}
