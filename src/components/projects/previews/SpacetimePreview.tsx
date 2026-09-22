export function SpacetimePreview() {
  return (
    <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f14] to-black p-8 text-white">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative z-10 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/60">
          <div className="h-2 w-2 rounded-full bg-cyan-400" />
        </div>
        <span className="text-xs font-semibold tracking-wider text-neutral-200">
          Spacetime <span className="font-light text-neutral-400">Pictures</span>
        </span>
      </div>
      <div className="relative z-10 mt-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-xs">
          <h4 className="text-xl font-bold leading-tight tracking-tight text-white">
            A new home <span className="font-normal text-neutral-400">for astrophotography data.</span>
          </h4>
        </div>
        <div className="flex -space-x-4">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/30 bg-indigo-950/80 shadow-lg shadow-cyan-500/10">
            <div className="h-10 w-10 rotate-45 scale-90 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-300 blur-[1px]" />
          </div>
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-purple-500/30 bg-purple-950/80 shadow-lg shadow-purple-500/10">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-rose-500 via-indigo-500 to-cyan-300 blur-[2px]" />
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-[9px] text-neutral-400">
        <span>Explore calibrated high-resolution FITS files</span>
        <span className="text-cyan-400">Join beta →</span>
      </div>
    </div>
  );
}
