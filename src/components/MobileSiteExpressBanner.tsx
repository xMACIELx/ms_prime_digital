import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { X } from '@phosphor-icons/react'

const DISMISS_KEY = 'site-express-banner-dismissed'
const MOBILE_QUERY = '(max-width: 767px)'
const SCROLL_TRIGGER_RATIO = 0.15

interface Props {
  onVisibleChange?: (visible: boolean) => void
}

export default function MobileSiteExpressBanner({ onVisibleChange }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return
    if (!window.matchMedia(MOBILE_QUERY).matches) return

    let ticking = false

    const checkScroll = () => {
      ticking = false
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0
      if (ratio >= SCROLL_TRIGGER_RATIO) {
        setVisible(true)
        window.removeEventListener('scroll', onScroll)
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(checkScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    onVisibleChange?.(visible)
  }, [visible, onVisibleChange])

  if (!visible) return null

  const handleClose = () => {
    sessionStorage.setItem(DISMISS_KEY, '1')
    setVisible(false)
  }

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ willChange: 'transform' }}
      className="fixed inset-x-3 bottom-3 z-[60] rounded-[var(--radius-lg)] bg-accent px-5 py-4 shadow-lg md:hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="min-w-0 truncate text-[14px] font-medium text-white">
          Site pronto em 2 dias, R$350
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/site-express"
            className="rounded-full bg-white px-4 py-2.5 text-[12.5px] font-semibold text-accent-soft transition-transform duration-200 ease-out active:scale-[0.97]"
          >
            Conhecer
          </Link>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/70"
          >
            <X size={14} weight="bold" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
