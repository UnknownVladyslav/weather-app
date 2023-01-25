interface IConfig {
  timeformat: 'iso8601' | 'unixtime';
  current_weather: boolean;
  hourly: string[] | null;
  temperature_unit: 'celsius' | 'fahrenheit';
  windspeed_unit: 'kmh' | 'mph' | 'kn';
  precipitation_unit: 'mm' | 'inch';
  timezone: 'auto' | 'GMT';
  past_days: 0 | 1 | 2;
  daily: string[] | null;
}

const config: IConfig = {
  timeformat: 'unixtime',
  current_weather: true,
  hourly: null,
  temperature_unit: 'celsius',
  windspeed_unit: 'kmh',
  precipitation_unit: 'inch',
  timezone: 'GMT',
  past_days: 2,
  daily: [
    'weathercode',
    'sunrise',
    'sunset',
    'precipitation_sum',
    'winddirection_10m_dominant',
  ],
};

export default config;
