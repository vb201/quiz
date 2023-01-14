import React from "react";
import SelectAnswerButton from "../SelectAnswerButton";

interface OptionProps {
  title: string;
  callback: () => void;
}
const Option: React.FC<OptionProps> = ({ title, callback }: OptionProps) => {
  return (
    <div className="my-3 ">
      <p className="text-lg text-gray-500 mb-2">{title}</p>
      <SelectAnswerButton callback={() => callback()} />
    </div>
  );
};

export default Option;
