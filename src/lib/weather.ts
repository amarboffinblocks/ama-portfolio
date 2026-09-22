export type LiveWeather = {
  city: string;
  temperatureC: number;
  isDay: boolean;
  timeZone: string;
};

type GeocodeResult = {
  results?: Array<{
    name: string;
    latitude: number;
    longitude: number;
    timezone?: string;
    country?: string;
    admin1?: string;
  }>;
};

type ForecastResult = {
  timezone?: string;
  current?: {
    temperature_2m?: number;
    is_day?: number;
  };
};

export function formatTemperatureC(value: number) {
  return `${Math.round(value)}°C`;
}

export async function fetchLiveWeather(city: string): Promise<LiveWeather> {
  const query = city.trim();
  if (!query) {
    throw new Error("City is required");
  }

  const geoUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
  geoUrl.searchParams.set("name", query);
  geoUrl.searchParams.set("count", "1");
  geoUrl.searchParams.set("language", "en");
  geoUrl.searchParams.set("format", "json");

  const geoRes = await fetch(geoUrl);
  if (!geoRes.ok) {
    throw new Error("Failed to look up city");
  }

  const geoData = (await geoRes.json()) as GeocodeResult;
  const place = geoData.results?.[0];
  if (!place) {
    throw new Error(`City not found: ${query}`);
  }

  const forecastUrl = new URL("https://api.open-meteo.com/v1/forecast");
  forecastUrl.searchParams.set("latitude", String(place.latitude));
  forecastUrl.searchParams.set("longitude", String(place.longitude));
  forecastUrl.searchParams.set("current", "temperature_2m,is_day");
  forecastUrl.searchParams.set("timezone", place.timezone ?? "auto");

  const forecastRes = await fetch(forecastUrl);
  if (!forecastRes.ok) {
    throw new Error("Failed to fetch weather");
  }

  const forecast = (await forecastRes.json()) as ForecastResult;
  const temperature = forecast.current?.temperature_2m;
  if (typeof temperature !== "number") {
    throw new Error("Weather unavailable");
  }

  return {
    city: place.name,
    temperatureC: temperature,
    isDay: forecast.current?.is_day === 1,
    timeZone: forecast.timezone ?? place.timezone ?? "UTC",
  };
}
