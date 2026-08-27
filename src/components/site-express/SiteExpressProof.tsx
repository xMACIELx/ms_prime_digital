import { motion } from 'motion/react'
import { siteExpressPortfolio } from '../../data/site-express-portfolio'

export default function SiteExpressProof() {
  return (
    <section id="prova" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="font-display text-[clamp(24px,3vw,32px)] font-semibold leading-[1.15] tracking-tight">
          Sites que já entregamos
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {siteExpressPortfolio.map((item, i) => (
            <motion.div
              key={item.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[360px] overflow-hidden rounded-[var(--radius-md)] bg-surface shadow-md transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-hover"
            >
              {item.screenshot ? (
                <img
                  src={item.screenshot}
                  alt={`Site de ${item.nome}`}
                  className="aspect-video w-full object-cover object-top"
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center border-b border-dashed border-border-strong text-[13px] text-text-faint">
                  aguardando screenshot
                </div>
              )}

              <div className="p-6">
                <h3 className="font-display text-[16px] font-medium">{item.nome}</h3>
                <p className="mt-1 text-[13px] text-text-muted">{item.setor}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[13.5px] font-medium text-accent-soft transition-colors duration-200 hover:text-accent"
                >
                  Visitar site →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
