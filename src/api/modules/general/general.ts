import { WEB_API_ROUTES } from 'api/api-routes';
import { baseInstance, geocodingInstance } from '../../http';
import { ILocation } from 'types';

export const general = {
  getForecast({ latitude, longitude }: ILocation, params: Record<string, any>) {
    return baseInstance.get(
      WEB_API_ROUTES.general.getForecast
        .replace('_latitude', latitude)
        .replace('_longitude', longitude),
      { params }
    );
  },
  searchLocation(params: { name: string | null }) {
    return geocodingInstance.get(WEB_API_ROUTES.general.searchLocation, {
      params,
    });
  },
};
