import { FC } from "react";

import { WeatherItemType } from "../../../constants/types";

import WeatherItem from "../../atoms/WeatherItem";

type Props = {
  data: WeatherItemType[];
};

const WeatherList: FC<Props> = ({ data }) => {
  return data?.length > 0 ? (
    <div className="flex flex-col gap-2 w-full">
      {data.map((record, index) => (
        <WeatherItem key={`weather-item-${record.id}-${index}`} data={record} />
      ))}
    </div>
  ) : (
    <div className="w-full flex justify-center items-center mt-6">
      <span>No result! Please try with other keyword</span>
    </div>
  );
};

export default WeatherList;
