import React from "react";

interface SelectAnswerButtonProps {
  callback: () => void;
}
const SelectAnswerButton: React.FC<SelectAnswerButtonProps> = ({
  callback,
}: SelectAnswerButtonProps) => {
  return (
    <button
      className="bg-teal-500 text-white  font-bold py-2 px-4 rounded-md"
      onClick={() => callback()}
    >
      SELECT ANSWER
    </button>
  );
};

export default SelectAnswerButton;
