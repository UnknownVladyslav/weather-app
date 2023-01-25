import { RootState } from '../index';

const selectors = {
  currentWeatherData: (state: RootState) => state.general.currentWeatherData,
  currentPlace: (state: RootState) => state.general.currentPlace,
  locationResults: (state: RootState) => state.general.locationResults,
  getForecastStatus: (state: RootState) => state.general.getForecastStatus,
  searchLocationStatus: (state: RootState) =>
    state.general.searchLocationStatus,
};

export { selectors };
