export type WeatherParamsType = {
  search?: string;
};

export type WeatherItemType = {
  id: number;
  city: string;
  temperature: number;
  weather_description: string;
};
