import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: `https://api.open-meteo.com/v1/forecast/`,
});

export const geocodingInstance = axios.create({
  baseURL: `https://geocoding-api.open-meteo.com/v1/`,
});
