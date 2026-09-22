export function MotsclesPreview() {
  return (
    <div className="flex min-h-[300px] flex-col justify-between bg-white p-6">
      <div>
        <div className="mb-4 rounded bg-blue-50 py-1 text-center text-[9px] font-medium text-blue-600">
          We are hiring junior consultants for internships.{" "}
          <span className="underline">Apply here!</span>
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-neutral-100 pb-3">
          <span className="whitespace-nowrap text-xs font-black tracking-tighter text-blue-900">
            MOTS-CLÉS
          </span>
          <div className="flex gap-3 overflow-hidden whitespace-nowrap text-[10px] text-neutral-600">
            <span>About us</span>
            <span>Works</span>
            <span>The Lab</span>
            <span>Blog</span>
            <span className="text-neutral-400">Join us</span>
          </div>
        </div>
        <div className="mt-2 max-w-xs">
          <h4 className="text-lg font-bold leading-tight text-blue-950">
            Illuminating and guiding the world&apos;s transformations through a perspective on words
          </h4>
          <div className="mt-3 flex gap-2 text-[9px] text-neutral-500">
            <span className="rounded bg-stone-100 px-1.5 py-0.5">Identity</span>
            <span className="rounded bg-stone-100 px-1.5 py-0.5">Editorial</span>
            <span className="rounded bg-stone-100 px-1.5 py-0.5">Campaign</span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 border-t border-neutral-100 pt-6">
        <div className="rounded border border-neutral-200/60 bg-neutral-100 p-1.5 text-center shadow-sm">
          <div className="flex h-10 items-center justify-center rounded bg-rose-500 text-[10px] font-black text-white">
            MET&apos;
          </div>
          <span className="mt-1 block text-[7px] text-neutral-400">Magazine</span>
        </div>
        <div className="rounded border border-neutral-200/60 bg-neutral-100 p-1.5 text-center shadow-sm">
          <div className="flex h-10 items-center justify-center rounded bg-neutral-800 text-[9px] text-white">
            27 yrs
          </div>
          <span className="mt-1 block text-[7px] text-neutral-400">Annual report</span>
        </div>
        <div className="rounded border border-neutral-200/60 bg-neutral-100 p-1.5 text-center shadow-sm">
          <div className="flex h-10 items-center justify-center rounded bg-red-600 text-[9px] font-bold text-white">
            Édurénov
          </div>
          <span className="mt-1 block text-[7px] text-neutral-400">Program</span>
        </div>
        <div className="rounded border border-neutral-200/60 bg-neutral-100 p-1.5 text-center shadow-sm">
          <div className="flex h-10 items-center justify-center rounded bg-teal-600 text-[8px] font-bold text-white">
            ADAPTER
          </div>
          <span className="mt-1 block text-[7px] text-neutral-400">Action booklet</span>
        </div>
      </div>
    </div>
  );
}
