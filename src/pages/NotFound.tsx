import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <img src="/assets/logo-mark.png" alt="MS Digital Prime" className="h-9 w-auto" />

      <span className="mt-8 font-display text-[clamp(64px,12vw,140px)] font-semibold leading-none tracking-tight text-accent-dim">
        404
      </span>
      <h1 className="mt-4 font-display text-[clamp(22px,3vw,30px)] font-semibold tracking-tight">
        Página não encontrada
      </h1>
      <p className="mx-auto mt-3 max-w-[42ch] text-[14.5px] leading-relaxed text-text-muted">
        A página que você tentou acessar não existe ou foi movida.
      </p>

      <Link
        to="/"
        className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[15px] font-semibold text-white shadow-[0_14px_36px_-10px_rgba(125,75,233,0.6)] transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
      >
        Voltar para a Home
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
          <ArrowRight size={13} weight="bold" />
        </span>
      </Link>
    </main>
  )
}
