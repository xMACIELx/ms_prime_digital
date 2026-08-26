import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'

export default function SiteExpressTeaser() {
  return (
    <section id="site-express-teaser" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 rounded-[var(--radius-lg)] px-6 py-12 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="font-display text-[26px] font-semibold tracking-tight">
              Site Express
            </h2>
            <p className="mt-3 max-w-[42ch] text-[14.5px] leading-relaxed text-text-muted">
              Site profissional, pronto em 2 dias, a partir de R$ 350.
            </p>
            <Link
              to="/site-express"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[14px] font-semibold text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Conhecer o Site Express
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                <ArrowRight size={11} weight="bold" />
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-center rounded-[var(--radius-lg)] bg-surface p-10 shadow-md">
            <div className="text-center">
              <span className="inline-block rounded-full bg-bg px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted shadow-xs">
                Pronto em 2 dias
              </span>
              <p className="mt-5 font-display text-[clamp(48px,7vw,72px)] font-semibold leading-none tracking-tight">
                R$ 350
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
