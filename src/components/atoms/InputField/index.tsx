import { FC } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const InputField: FC<Props> = (props) => {
  return (
    <input
      {...props}
      className="rounded border border-solid border-gray-400 bg-white h-10 px-4 w-full"
    />
  );
};

export default InputField;
