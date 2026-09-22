export function ExpeditionPreview() {
  return (
    <div className="relative flex min-h-[300px] flex-col items-center justify-center bg-gradient-to-b from-[#18181b] via-[#09090b] to-black p-8 text-center text-white">
      <span className="mb-2 font-mono text-[9px] uppercase tracking-widest text-amber-300">
        Sandfall Interactive, Betsy Giron &amp; Les Soudaines present
      </span>
      <h4 className="mb-2 font-serif text-2xl font-normal tracking-widest text-stone-100">
        CLAIR OBSCUR
      </h4>
      <p className="text-xs italic tracking-wider text-stone-400">
        Expedition 33 — A Painted Symphony
      </p>
      <div className="mt-8 flex h-8 items-center gap-1">
        <span className="h-3 w-0.5 animate-pulse rounded-full bg-amber-200/40" />
        <span className="h-6 w-0.5 animate-pulse rounded-full bg-amber-200/70" />
        <span className="h-8 w-0.5 rounded-full bg-amber-100" />
        <span className="h-4 w-0.5 rounded-full bg-amber-200/50" />
        <span className="h-7 w-0.5 animate-pulse rounded-full bg-amber-200/80" />
        <span className="h-3 w-0.5 rounded-full bg-amber-200/40" />
      </div>
    </div>
  );
}
