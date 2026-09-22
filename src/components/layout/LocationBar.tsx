"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { useLiveWeather } from "@/hooks/useLiveWeather";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/constants";

type LocationBarProps = {
  /** City name used for live weather lookup (e.g. "Mohali", "Mumbai"). */
  location?: string;
  /** Optional override. Defaults to the timezone returned by weather, then SITE. */
  timeZone?: string;
  /** Fallback temperature shown while loading / if fetch fails. */
  weatherFallback?: string;
  label?: string;
  className?: string;
};

function formatLocalTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

function getHourInTimeZone(date: Date, timeZone: string) {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      hourCycle: "h23",
    }).format(date),
  );

  return Number.isFinite(hour) ? hour : date.getHours();
}

function isDaytime(date: Date, timeZone: string) {
  const hour = getHourInTimeZone(date, timeZone);
  return hour >= 6 && hour < 18;
}

export function LocationBar({
  location = SITE.location,
  timeZone,
  weatherFallback = SITE.weather,
  label = "Currently in",
  className,
}: LocationBarProps) {
  const [now, setNow] = useState(() => new Date());
  const live = useLiveWeather(location);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const resolvedTimeZone = timeZone ?? live.timeZone ?? SITE.timeZone;
  const weatherLabel = live.label ?? weatherFallback;
  const day =
    live.isDay !== null ? live.isDay : isDaytime(now, resolvedTimeZone);
  const time = formatLocalTime(now, resolvedTimeZone);
  const cityLabel = live.resolvedCity ?? location;

  return (
    <div
      className={cn(
        "hidden items-center gap-2 font-normal text-muted xl:flex",
        className,
      )}
    >
      <span>{label}</span>
      <span className="rounded-full bg-soft px-2.5 py-1 text-[11px] text-foreground/80">
        {cityLabel}
      </span>
      <span className="rounded-full bg-soft px-2.5 py-1 text-[11px] text-foreground/80">
        {time}
      </span>
      <div
        className="flex items-center gap-1 rounded-full bg-soft px-2.5 py-1 text-[11px] text-foreground/80"
        title={
          live.status === "ready"
            ? `Live weather for ${cityLabel}`
            : live.status === "loading"
              ? "Updating weather…"
              : "Weather unavailable"
        }
      >
        <span className={cn(live.status === "loading" && !live.label && "opacity-60")}>
          {weatherLabel}
        </span>
        {day ? (
          <SunIcon className="inline-block h-3 w-3 text-muted" />
        ) : (
          <MoonIcon className="inline-block h-3 w-3 text-muted" />
        )}
      </div>
    </div>
  );
}
