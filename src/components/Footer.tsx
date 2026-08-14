import { InstagramLogo } from '@phosphor-icons/react'
import { contact } from '../data/stats'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src="/assets/logo-mark.png" alt="MS Digital Prime" className="h-6 w-auto shrink-0" />
          <span className="font-display text-[14px] font-medium">Digital Prime</span>
        </div>

        <a
          href={contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-[13.5px] font-medium text-text-muted shadow-sm transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:text-accent-soft hover:shadow-hover"
        >
          <InstagramLogo size={16} className="text-[#E1306C]" />
          {contact.instagramHandle}
        </a>
      </div>
      <p className="mt-8 text-center text-[12px] text-text-faint">
        © 2026 MS Digital Prime. Todos os direitos reservados.
      </p>
    </footer>
  )
}
