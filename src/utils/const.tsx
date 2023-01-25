import { ReactComponent as IconSunny } from 'assets/img/weather/icon-sunny.svg';
import { ReactComponent as IconParticularyCloudly } from 'assets/img/weather/icon-particulary-cloudly.svg';
import { ReactComponent as IconOvercast } from 'assets/img/weather/icon-overcast.svg';
import { ReactComponent as IconFoggy } from 'assets/img/weather/icon-foggy.svg';
import { ReactComponent as IconDepositingRimeFog } from 'assets/img/weather/icon-depositing-rime-fog.svg';
import { ReactComponent as IconLightDrizzle } from 'assets/img/weather/icon-light-drizzle.svg';
import { ReactComponent as IconModerateDrizzle } from 'assets/img/weather/icon-moderate-drizzle.svg';
import { ReactComponent as IconDenseIntensityDrizzle } from 'assets/img/weather/icon-dense-intensity-drizzle.svg';
import { ReactComponent as IconFreezingRain } from 'assets/img/weather/icon-freezing-rain.svg';
import { ReactComponent as IconSlightRain } from 'assets/img/weather/icon-slight-rain.svg';
import { ReactComponent as IconModerateRain } from 'assets/img/weather/icon-moderate-rain.svg';
import { ReactComponent as IconLightSnow } from 'assets/img/weather/icon-light-snow.svg';
import { ReactComponent as IconIntenseSnow } from 'assets/img/weather/icon-heavy-snow.svg';
import { ReactComponent as IconThunderstorm } from 'assets/img/weather/icon-thunderstorm.svg';
import { ReactComponent as IconHail } from 'assets/img/weather/icon-hail.svg';

enum status {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail',
}

enum thunkStatus {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

enum DaysOfWeek {
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
}

enum WeatherTypes {
  'Clear sky',
  'Mainly clear',
  'Partly cloudly',
  'Overcast',
  'Fog' = 45,
  'Depositing rime fog' = 48,
  'Light drizzle' = 51,
  'Moderate drizzle' = 53,
  'Dense intensity drizzle' = 55,
  'Light freezing drizzle',
  'Dense intensity freezing drizzle',
  'Slight rain' = 61,
  'Moderate rain' = 63,
  'Dense intensity rain' = 65,
  'Light freezing rain',
  'Heavy intensity freezing rain',
  'Slight snow fall' = 71,
  'Moderate snow fall' = 73,
  'Heavy intensity snow fall' = 75,
  'Snow grains' = 77,
  'Slight rain showers' = 80,
  'Moderate rain showers',
  'Violent rain showers',
  'Slight snow showers' = 85,
  'Heavy snow showers',
  'Thunderstorm' = 95,
  'Thunderstorm with slight hail',
  'Thunderstorm with heavy hail' = 99,
}

const weatherIcons: { [index: number]: any } = {
  0: <IconSunny />,
  1: <IconParticularyCloudly />,
  2: <IconParticularyCloudly />,
  3: <IconOvercast />,
  45: <IconFoggy />,
  48: <IconDepositingRimeFog />,
  51: <IconLightDrizzle />,
  53: <IconModerateDrizzle />,
  55: <IconDenseIntensityDrizzle />,
  56: <IconFreezingRain />,
  57: <IconFreezingRain />,
  61: <IconSlightRain />,
  63: <IconModerateRain />,
  65: <IconModerateRain />,
  66: <IconFreezingRain />,
  67: <IconFreezingRain />,
  71: <IconLightSnow />,
  73: <IconIntenseSnow />,
  75: <IconIntenseSnow />,
  77: <IconIntenseSnow />,
  80: <IconLightDrizzle />,
  81: <IconModerateDrizzle />,
  82: <IconModerateRain />,
  85: <IconLightSnow />,
  86: <IconIntenseSnow />,
  95: <IconThunderstorm />,
  96: <IconHail />,
  99: <IconHail />,
};

const units = {
  temperature: {
    celsius: '°C',
    fahrenheit: '°F',
  },
  windSpeed: {
    kmh: 'km/h',
    mph: 'm/h',
    kn: 'kn',
  },
  precipitation: {
    mm: 'mm',
    inch: '″',
  },
};

export {
  status,
  thunkStatus,
  months,
  DaysOfWeek,
  WeatherTypes,
  weatherIcons,
  units,
};
