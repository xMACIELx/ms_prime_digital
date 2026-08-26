interface PlaceholderSectionProps {
  id: string
  step: string
  title: string
  note: string
}

export default function PlaceholderSection({ id, step, title, note }: PlaceholderSectionProps) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="rounded-[var(--radius-lg)] border border-dashed border-border-strong px-6 py-16 text-center">
          <span className="font-display text-[13px] font-medium uppercase tracking-wide text-text-faint">
            {step}
          </span>
          <h2 className="mt-2 font-display text-[22px] font-semibold tracking-tight">{title}</h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[14px] leading-relaxed text-text-muted">
            {note}
          </p>
        </div>
      </div>
    </section>
  )
}
