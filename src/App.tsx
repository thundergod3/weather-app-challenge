import { useCallback, useEffect, useState } from "react";

import { WeatherItemType } from "./constants/types";
import useDebounce from "./hooks/common/useDebounce";
import weatherServices from "./services/weather.services";

import SearchField from "./components/molecules/SearchField";
import WeatherList from "./components/molecules/WeatherList";
import Loading from "./components/atoms/Loading";

const App = () => {
  const [weathers, setWeathers] = useState<WeatherItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  const debouncedKeyword = useDebounce(keyword);

  const handleGetWeatherList = useCallback(async () => {
    setLoading(true);

    try {
      const data = await weatherServices.getWeathersList({
        search: debouncedKeyword,
      });

      setWeathers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [debouncedKeyword]);

  const renderLayout = useCallback(() => {
    if (loading) {
      return (
        <div className="w-full flex justify-center items-center mt-6">
          <Loading />
        </div>
      );
    }

    return (
      <div className="mb-4">
        <WeatherList data={weathers} />
      </div>
    );
  }, [loading, weathers]);

  useEffect(() => {
    handleGetWeatherList();
  }, [debouncedKeyword, handleGetWeatherList]);

  return (
    <div className="mx-auto max-w-xl mt-6 flex flex-col gap-4 px-4">
      <SearchField keyword={keyword} onKeywordChange={setKeyword} />
      {renderLayout()}
    </div>
  );
};

export default App;
