import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

interface Props {
  value: string
  duration?: number
  className?: string
}

function parseValue(value: string) {
  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(\D*)$/)
  if (!match) return { prefix: '', target: 0, decimals: 0, suffix: value }
  const [, prefix, numberStr, suffix] = match
  const decimals = numberStr.includes('.') ? numberStr.split('.')[1].length : 0
  return { prefix, target: parseFloat(numberStr), decimals, suffix }
}

export default function CountUp({ value, duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const { prefix, target, decimals, suffix } = parseValue(value)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(target)
      return
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [inView, target, duration, reduceMotion])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
