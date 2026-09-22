"use client";

import { useEffect, useState } from "react";
import {
  fetchLiveWeather,
  formatTemperatureC,
  type LiveWeather,
} from "@/lib/weather";

type LiveWeatherState = {
  label: string | null;
  isDay: boolean | null;
  timeZone: string | null;
  resolvedCity: string | null;
  status: "idle" | "loading" | "ready" | "error";
};

const REFRESH_MS = 10 * 60 * 1000;

export function useLiveWeather(city: string) {
  const [state, setState] = useState<LiveWeatherState>({
    label: null,
    isDay: null,
    timeZone: null,
    resolvedCity: null,
    status: "idle",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setState((current) => ({
        ...current,
        status: current.label ? "ready" : "loading",
      }));

      try {
        const weather: LiveWeather = await fetchLiveWeather(city);
        if (cancelled) {
          return;
        }

        setState({
          label: formatTemperatureC(weather.temperatureC),
          isDay: weather.isDay,
          timeZone: weather.timeZone,
          resolvedCity: weather.city,
          status: "ready",
        });
      } catch {
        if (cancelled) {
          return;
        }

        setState((current) => ({
          ...current,
          status: current.label ? "ready" : "error",
        }));
      }
    }

    void load();
    const id = window.setInterval(() => {
      void load();
    }, REFRESH_MS);

    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [city]);

  return state;
}
