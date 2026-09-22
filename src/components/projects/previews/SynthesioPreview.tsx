export function SynthesioPreview() {
  return (
    <div className="flex min-h-[300px] flex-col justify-between bg-gradient-to-b from-white to-slate-50 p-6">
      <div className="flex items-center justify-between gap-2 overflow-hidden border-b border-neutral-100 pb-3">
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-xs font-extrabold tracking-wider text-blue-600">Ipsos</span>
          <span className="text-xs font-semibold text-neutral-700">Synthesio</span>
        </div>
        <div className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[10px] text-neutral-500">
          <span>About Us</span>
          <span>Use Cases</span>
          <span>Products</span>
          <span className="ml-1 rounded bg-teal-500 px-2.5 py-1 text-[9px] font-medium text-white">
            Get a demo
          </span>
        </div>
      </div>
      <div className="my-4 text-center">
        <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[9px] font-medium text-teal-600">
          AI-powered consumer intelligence
        </span>
        <h4 className="mt-2 text-base font-bold leading-tight text-neutral-900">
          Turn social conversations into actionable market insights
        </h4>
        <div className="mt-4 flex justify-center gap-2">
          <div className="flex h-16 w-24 flex-col justify-between rounded border border-neutral-200 bg-white p-1.5 shadow-sm">
            <div className="h-1.5 w-6 rounded bg-blue-500" />
            <div className="flex h-6 w-full items-end gap-0.5 rounded bg-blue-50 px-1">
              <div className="h-3 w-2 rounded-t bg-blue-400" />
              <div className="h-5 w-2 rounded-t bg-blue-600" />
              <div className="h-4 w-2 rounded-t bg-teal-400" />
            </div>
          </div>
          <div className="flex h-16 w-24 flex-col justify-between rounded border border-neutral-200 bg-white p-1.5 shadow-sm">
            <div className="h-1.5 w-6 rounded bg-purple-500" />
            <div className="flex h-6 w-full items-center justify-center rounded bg-purple-50">
              <span className="text-[8px] font-bold text-purple-600">+84.2%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around border-t border-neutral-100 pt-3 text-[8px] text-neutral-400">
        <span>95M+ Data Sources</span>
        <span>80+ Languages</span>
        <span>Global Coverage</span>
      </div>
    </div>
  );
}
