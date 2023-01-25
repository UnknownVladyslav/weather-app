import { format, getDay } from 'date-fns';
import { createSlice } from '@reduxjs/toolkit';

import {
  ICurrentWeather,
  ILocationResult,
  ISearchPreparedLocation,
} from 'types';
import { thunks } from './thunks';
import { selectors } from './selectors';
import { searchLocationModel } from 'models/searchLocation';
import { currentWeatherModel } from 'models/currentWeather';
import { DaysOfWeek, status, units, WeatherTypes } from 'utils/const';
import config from '../../api/modules/general/config';

interface ICurrentPlace extends ISearchPreparedLocation {}

interface IGeneralState {
  currentWeatherData: ICurrentWeather | null;
  currentPlace: ICurrentPlace;
  locationResults: ISearchPreparedLocation[];
  getForecastStatus: status;
  searchLocationStatus: status;
}

const initialState: IGeneralState = {
  currentWeatherData: null,
  currentPlace: searchLocationModel(),
  locationResults: [],
  getForecastStatus: status.IDLE,
  searchLocationStatus: status.IDLE,
};

const slice = createSlice({
  name: 'general',
  initialState: { ...initialState },
  reducers: {
    SET_CURRENT_PLACE: (state, { payload }) => {
      state.currentPlace = payload;
    },
    SET_CURRENT_PLACE_FROM_NAVIGATION: (state, { payload }) => {
      state.currentPlace.name = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getForecast.pending, (state) => {
        state.getForecastStatus = status.PENDING;
      })
      .addCase(thunks.getForecast.fulfilled, (state, { payload }) => {
        console.log(payload);
        const { temperature, time, weathercode, winddirection, windspeed } =
          payload.current_weather;
        const { daily } = payload;
        const dayOfWeek = DaysOfWeek[getDay(time * 1000)];
        const date = format(time * 1000, 'dd MMM yyyy');
        const weatherType = WeatherTypes[weathercode];
        state.currentWeatherData = currentWeatherModel(
          {
            temperatureUnit: units.temperature[config.temperature_unit],
            windSpeedUnit: units.windSpeed[config.windspeed_unit],
          },
          daily?.sunrise[0],
          daily?.sunset[0],
          temperature,
          time,
          dayOfWeek,
          date,
          weatherType,
          weathercode,
          winddirection,
          Math.round(windspeed)
        );
        state.getForecastStatus = status.SUCCESS;
      })
      .addCase(thunks.getForecast.rejected, (state) => {
        state.getForecastStatus = status.FAIL;
      })
      .addCase(thunks.searchLocation.pending, (state) => {
        state.searchLocationStatus = status.PENDING;
      })
      .addCase(thunks.searchLocation.fulfilled, (state, { payload }) => {
        state.locationResults = payload.results?.map(
          ({
            id,
            name,
            country,
            country_code,
            admin1,
            admin2,
            latitude,
            longitude,
          }: ILocationResult) => {
            return searchLocationModel(
              id,
              name,
              country,
              country_code,
              admin1,
              admin2,
              String(latitude),
              String(longitude)
            );
          }
        );
        state.searchLocationStatus = status.SUCCESS;
      })
      .addCase(thunks.searchLocation.rejected, (state) => {
        state.searchLocationStatus = status.FAIL;
      });
  },
});

const general = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { general };
export default slice.reducer;
