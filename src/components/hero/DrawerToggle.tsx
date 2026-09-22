import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type DrawerToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function DrawerToggle({ isOpen, onToggle }: DrawerToggleProps) {
  return (
    <div className="z-0 w-[94%] overflow-hidden rounded-b-xl bg-soft shadow-sm transition-colors hover:bg-soft-hover">
      <button
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
        onClick={onToggle}
        type="button"
      >
        <span>{isOpen ? "THAT'S ENOUGH" : "LEARN MORE"}</span>
        <ChevronDownIcon
          className={cn(
            "h-4 w-4 text-muted transition-transform duration-200 group-hover:translate-y-0.5",
            isOpen && "rotate-180",
          )}
        />
      </button>
    </div>
  );
}
