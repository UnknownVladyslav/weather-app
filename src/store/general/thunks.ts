import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from 'api';
import { handleServerErrors } from 'utils/serverErrors';
import { ILocation } from 'types';
import config from 'api/modules/general/config';

const getForecast = createAsyncThunk(
  'auth/getForecast',
  async ({
    formData,
    params,
  }: {
    formData: ILocation;
    params?: Record<string, any>;
  }) => {
    const { data } = await api.general.getForecast(formData, {
      ...params,
      ...config,
    });
    try {
      return data;
    } catch (err: any) {
      handleServerErrors(err);
      throw err;
    }
  }
);

const searchLocation = createAsyncThunk(
  'auth/searchLocation',
  async (name: string | null) => {
    try {
      const { data } = await api.general.searchLocation({ name });
      return data;
    } catch (err: any) {
      handleServerErrors(err);
      throw err;
    }
  }
);

const thunks = {
  getForecast,
  searchLocation,
};

export { thunks };
