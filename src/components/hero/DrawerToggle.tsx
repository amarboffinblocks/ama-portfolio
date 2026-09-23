import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type DrawerToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function DrawerToggle({ isOpen, onToggle }: DrawerToggleProps) {
  return (
    <div className="z-0 w-[94%] max-w-full overflow-hidden rounded-b-xl bg-soft shadow-sm transition-colors hover:bg-soft-hover">
      <button
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between px-5 py-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.2em]"
        onClick={onToggle}
        type="button"
      >
        <span>{isOpen ? "THAT'S ENOUGH" : "LEARN MORE"}</span>
        <ChevronDownIcon
          className={cn(
            "h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-y-0.5",
            isOpen && "rotate-180",
          )}
        />
      </button>
    </div>
  );
}
