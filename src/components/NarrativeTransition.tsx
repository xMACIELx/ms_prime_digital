import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NarrativeTransition() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineTwoRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !sectionRef.current || !lineTwoRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineTwoRef.current,
        { opacity: 1, color: 'var(--on-accent-dim)' },
        {
          color: '#ffffff',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: 0.6,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-accent py-24 md:py-32">
      <div className="mx-auto max-w-[760px] px-6 text-center">
        <p className="font-display text-[clamp(24px,3.6vw,38px)] font-medium leading-[1.3] tracking-tight text-white">
          Sua marca cresce com mais gente vendo, clicando e comprando.
        </p>
        <p
          ref={lineTwoRef}
          className="mt-3 font-display text-[clamp(24px,3.6vw,38px)] font-medium leading-[1.3] tracking-tight text-[color:var(--on-accent-dim)]"
        >
          Sua operação fica mais leve com processos que rodam sozinhos.
        </p>
      </div>
    </section>
  )
}
