import { ArrowUpRight } from '@phosphor-icons/react'
import type { Service } from '../data/services'

interface Props {
  service: Service
  onSelect: (service: Service) => void
}

export default function ServiceCard({ service, onSelect }: Props) {
  const Icon = service.icon

  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      aria-haspopup="dialog"
      className={`group flex w-full items-start justify-between gap-4 rounded-[var(--radius-md)] bg-surface p-6 text-left shadow-sm transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-hover sm:p-7 ${
        service.span === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-soft transition-colors duration-300 group-hover:bg-accent/15">
          <Icon size={20} weight="light" />
        </span>
        <div>
          <h3 className="font-display text-[17px] font-medium">{service.title}</h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-text-muted">{service.summary}</p>
        </div>
      </div>
      <span className="mt-2 shrink-0 text-text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft">
        <ArrowUpRight size={16} />
      </span>
    </button>
  )
}
