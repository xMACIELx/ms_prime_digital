import { contact } from '../data/stats'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#depoimentos', label: 'Depoimentos' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4">
      <div className="mt-6 flex w-max max-w-full items-center gap-6 rounded-full bg-surface/90 py-2.5 pl-5 pr-2.5 shadow-lg backdrop-blur-md sm:gap-9">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <img src="/assets/logo-mark.png" alt="MS Digital Prime" className="h-7 w-auto shrink-0" />
          <span className="hidden font-display text-[15px] font-semibold tracking-tight sm:inline">
            Digital Prime
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[13.5px] text-text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors duration-200 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
        >
          {contact.whatsappLabel}
        </a>
      </div>
    </header>
  )
}
