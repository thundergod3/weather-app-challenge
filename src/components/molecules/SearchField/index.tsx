import { FC } from "react";

import InputField from "../../atoms/InputField";

type Props = {
  keyword?: string;
  onKeywordChange?: (value: string) => void;
};

const SearchField: FC<Props> = ({ keyword, onKeywordChange }) => {
  return (
    <InputField
      placeholder="Search weather by city"
      value={keyword}
      onChange={(event) => onKeywordChange?.(event.target.value)}
    />
  );
};

export default SearchField;
