import { useRef } from 'react'
import { motion, useAnimationFrame, useReducedMotion } from 'motion/react'
import { Target, Browser, UsersFour, Sparkle } from '@phosphor-icons/react'

interface Node {
  id: string
  label: string
  icon?: typeof Target
  iconSrc?: string
  x: number
  y: number
}

const baseNodes: Node[] = [
  { id: 'trafego', label: 'Tráfego', icon: Target, x: 30, y: 14 },
  { id: 'site', label: 'Site', icon: Browser, x: 75, y: 19 },
  { id: 'crm', label: 'CRM', icon: UsersFour, x: 21, y: 76 },
  { id: 'ia', label: 'IA', icon: Sparkle, x: 76, y: 79 },
]

// PROTOTYPE (Option A only): 5th node for "Automações", real n8n mark.
const automationNode: Node = {
  id: 'automacoes',
  label: 'Automações',
  iconSrc: '/assets/n8n-icon.svg',
  x: 12,
  y: 48,
}

const center = { x: 48, y: 47 }

/** viewBox matches the panel's 4:5 aspect ratio so circles stay round and
 * lines stay proportional (a square viewBox stretched with preserveAspectRatio
 * "none" would squash the traveling dot into an ellipse). */
const VB_W = 80
const VB_H = 100
const toVB = (pct: { x: number; y: number }) => ({ x: (pct.x / 100) * VB_W, y: (pct.y / 100) * VB_H })

function curvePath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const a = toVB(from)
  const b = toVB(to)
  const midX = (a.x + b.x) / 2
  const midY = (a.y + b.y) / 2
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy) || 1
  const bend = 7
  const cx = midX + (-dy / len) * bend
  const cy = midY + (dx / len) * bend
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`
}

interface ConnectorProps {
  d: string
  delay: number
  duration: number
  animateDot: boolean
}

/** Fixed solid track (no dash movement) plus a small dot that travels along
 * the path in a loop, position driven every frame via path.getPointAtLength
 * (Motion's useAnimationFrame), not SMIL. */
function Connector({ d, delay, duration, animateDot }: ConnectorProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGCircleElement>(null)

  useAnimationFrame((t) => {
    if (!animateDot) return
    const path = pathRef.current
    const dot = dotRef.current
    if (!path || !dot) return
    const total = path.getTotalLength()
    const elapsed = t / 1000 - delay
    const progress = (((elapsed % duration) + duration) % duration) / duration
    const point = path.getPointAtLength(progress * total)
    dot.setAttribute('cx', point.x.toFixed(2))
    dot.setAttribute('cy', point.y.toFixed(2))
  })

  return (
    <g>
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="var(--accent)"
        strokeOpacity={0.5}
        strokeWidth="1.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {animateDot && <circle ref={dotRef} r={1.3} fill="var(--accent)" />}
    </g>
  )
}

interface HeroVisualProps {
  /** PROTOTYPE ONLY: lets us render both hub options side by side for
   * comparison. Remove this prop once one option is picked. */
  variant?: 'A' | 'B'
}

export default function HeroVisual({ variant = 'A' }: HeroVisualProps) {
  const reduceMotion = useReducedMotion()
  const nodes = variant === 'A' ? [...baseNodes, automationNode] : baseNodes

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[calc(var(--radius-lg)-8px)] bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] bg-[radial-gradient(ellipse_120%_75%_at_50%_0%,rgba(125,75,233,0.3),transparent_65%)]">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {nodes.map((node, i) => (
          <Connector
            key={node.id}
            d={curvePath(node, center)}
            delay={i * 0.5}
            duration={2.4}
            animateDot={!reduceMotion}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-surface px-3.5 py-2.5 shadow-md"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5 + i * 0.4, ease: 'easeInOut', repeat: Infinity, delay: i * 0.3 }}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-soft">
            {node.iconSrc ? (
              <img src={node.iconSrc} alt="" className="h-3 w-3" />
            ) : node.icon ? (
              <node.icon size={13} weight="light" />
            ) : null}
          </span>
          <span className="whitespace-nowrap text-[12px] font-medium text-text">
            {node.label}
          </span>
        </motion.div>
      ))}

      <div
        style={{ left: `${center.x}%`, top: `${center.y}%` }}
        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-2xl"
      />
      <motion.div
        style={{ left: `${center.x}%`, top: `${center.y}%` }}
        className="absolute z-20 flex w-[168px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-[var(--radius-md)] bg-surface px-6 py-6 text-center shadow-lg"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6.4, ease: 'easeInOut', repeat: Infinity }}
      >
        {variant === 'A' ? (
          <span className="font-display text-[19px] font-semibold leading-snug tracking-tight text-accent-soft">
            Tudo em um só lugar
          </span>
        ) : (
          <>
            <span className="font-display text-[15px] font-semibold leading-snug tracking-tight text-text">
              Como ajudamos [Cliente]
            </span>
            <span className="mt-2.5 w-full rounded-[10px] border border-dashed border-text-faint/50 py-3 text-[10.5px] leading-snug text-text-faint">
              Logo ou depoimento real em breve
            </span>
          </>
        )}
      </motion.div>
    </div>
  )
}
