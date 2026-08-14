import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { X, Check } from '@phosphor-icons/react'
import type { Service } from '../data/services'

interface Props {
  service: Service | null
  onClose: () => void
}

export default function ServiceOverlay({ service, onClose }: Props) {
  useEffect(() => {
    if (!service) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [service, onClose])

  return createPortal(
    <AnimatePresence>
      {service && <Panel service={service} onClose={onClose} />}
    </AnimatePresence>,
    document.body,
  )
}

function Panel({ service, onClose }: { service: Service; onClose: () => void }) {
  const Icon = service.icon

  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#170a20]/55 p-4 backdrop-blur-md sm:p-8 md:p-12"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-overlay-title"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-full w-full max-w-[1040px] flex-col overflow-y-auto rounded-[var(--radius-lg)] bg-surface p-8 shadow-lg sm:p-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-muted shadow-sm transition-colors duration-200 hover:text-accent-soft"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 gap-10 pt-2 md:grid-cols-2 md:gap-14 md:pt-4">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent-soft">
              <Icon size={22} weight="light" />
            </span>
            <h3
              id="service-overlay-title"
              className="mt-6 max-w-[22ch] font-display text-[clamp(24px,3vw,32px)] font-semibold leading-[1.15] tracking-tight"
            >
              {service.title}
            </h3>
            <p className="mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-text-muted">
              {service.description}
            </p>
          </div>

          <ul className="flex flex-col gap-4 md:pt-[4.5rem]">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-soft">
                  <Check size={13} weight="bold" />
                </span>
                <span className="text-[14.5px] leading-relaxed text-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}
