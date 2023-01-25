interface ILocationResult {
  id?: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code?: string;
  country_code?: string;
  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  admin4_id?: number;
  timezone?: string;
  population?: number;
  postcodes?: string[];
  country_id?: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3?: string;
  admin4?: string;
}

interface IStep {
  id: number;
  slug: string;
  title: string;
  completed: boolean;
}

interface ILocation {
  latitude: string;
  longitude: string;
}

interface ISearchPreparedLocation {
  id: number;
  name: string;
  admin1?: string;
  admin2?: string;
  code: string;
  label: string;
  value: string | number;
  location: ILocation;
}

interface ICurrentWeather {
  temperature: number;
  units: { temperatureUnit: string; windSpeedUnit: string };
  unixTime: number;
  dayOfWeek: string;
  date: string;
  weatherType: string;
  weatherCode: number;
  windDirection: number;
  windSpeed: number;
  sunrise: number;
  sunset: number;
}

export type {
  ILocation,
  ILocationResult,
  IStep,
  ISearchPreparedLocation,
  ICurrentWeather,
};
