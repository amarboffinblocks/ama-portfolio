export function BoffinblocksPreview() {
  return (
    <div className="relative min-h-[280px] overflow-hidden bg-[#0b1f4d] p-5 text-white sm:min-h-[300px] sm:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 48%, rgba(255,255,255,0.08) 49%, rgba(255,255,255,0.08) 51%, transparent 52%)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative z-10 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold tracking-tight">Boffinblocks</span>
        <span className="rounded-full bg-[#f5c518] px-3 py-1 text-[10px] font-semibold text-[#0b1f4d]">
          Book a call
        </span>
      </div>
      <div className="relative z-10 mt-8 max-w-md">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#f5c518]/90">
          Agentic AI & Automation
        </p>
        <h4 className="mt-2 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
          AI agents and automations for{" "}
          <span className="text-[#f5c518]">modern businesses</span>
        </h4>
        <p className="mt-3 text-[11px] leading-relaxed text-white/70">
          Intelligent workflows, custom AI systems, and scalable web platforms —
          built to remove repetitive work.
        </p>
      </div>
      <div className="relative z-10 mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ["24/7", "Operations"],
          ["10x", "Efficiency"],
          ["100+", "Processes"],
          ["99%", "Reliability"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-sm"
          >
            <div className="text-sm font-bold">{value}</div>
            <div className="mt-0.5 text-[9px] text-white/55">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
