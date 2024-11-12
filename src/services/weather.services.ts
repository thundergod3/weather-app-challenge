import END_POINTS from "../constants/endpoints";
import { WeatherParamsType } from "../constants/types";
import requestHelpers from "./request-helpers";

const weatherServices = {
  getWeathersList: (params: WeatherParamsType) => {
    return requestHelpers.get(END_POINTS.GET_WEATHERS_LIST, params, true);
  },
};

export default weatherServices;
