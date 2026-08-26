import { useLocation } from 'react-router-dom'
import { WhatsappLogo } from '@phosphor-icons/react'
import { contact } from '../data/stats'
import { WHATSAPP_MESSAGES, buildWhatsappHref } from '../lib/whatsapp'

export default function WhatsAppFloat() {
  const { pathname } = useLocation()
  const message = pathname.startsWith('/site-express')
    ? WHATSAPP_MESSAGES.siteExpress
    : WHATSAPP_MESSAGES.generico

  return (
    <a
      href={buildWhatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contact.whatsappLabel}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-accent px-4 py-4 font-semibold text-white shadow-[0_16px_40px_-12px_rgba(125,75,233,0.65)] transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-[0.97] sm:px-5"
    >
      <WhatsappLogo weight="fill" size={20} />
      <span className="hidden text-[13.5px] sm:inline">{contact.whatsappLabel}</span>
    </a>
  )
}
