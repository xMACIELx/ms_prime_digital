export default function SiteExpressHeader() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4">
      <div className="mt-6 flex w-max max-w-full items-center gap-2.5 rounded-full bg-surface/90 py-2.5 pl-5 pr-5 shadow-lg backdrop-blur-md">
        <img src="/assets/logo-mark.png" alt="MS Digital Prime" className="h-7 w-auto shrink-0" />
        <span className="hidden font-display text-[15px] font-semibold tracking-tight sm:inline">
          Digital Prime
        </span>
      </div>
    </header>
  )
}
