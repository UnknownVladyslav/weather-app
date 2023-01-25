export const currentWeatherModel = (
  units: { temperatureUnit: string; windSpeedUnit: string },
  sunrise: number,
  sunset: number,
  temperature: number = 0,
  unixTime: number = 960303600,
  dayOfWeek: string = '',
  date: string = '',
  weatherType: string = '',
  weatherCode: number = 1,
  windDirection: number = 0,
  windSpeed: number = 0
) => {
  return {
    sunrise,
    sunset,
    temperature,
    units,
    unixTime,
    dayOfWeek,
    date,
    weatherType,
    weatherCode,
    windDirection,
    windSpeed,
  };
};
