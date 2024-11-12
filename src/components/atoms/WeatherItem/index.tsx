import { FC } from "react";
import { WeatherItemType } from "../../../constants/types";

type Props = {
  data: WeatherItemType;
};

const WeatherItem: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-solid border-gray-400 p-4">
      <div className="flex items-center gap-1">
        <span className="text-lg font-medium">
          {data?.city} - <strong>{data?.temperature}&deg;C</strong>
        </span>
      </div>
      <span>{data?.weather_description}</span>
    </div>
  );
};

export default WeatherItem;
