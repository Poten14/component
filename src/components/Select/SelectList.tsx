"use client";

import { useState } from "react";

interface SelectListProps {
  option: string[];
}

const SelectList = ({ option }: SelectListProps) => {
  const [selectValue, setSelectValue] = useState<string>("");

  const handleOptionClick = (item: string) => {
    setSelectValue(item);
  };

  return (
    <>
      <div className="w-1/5">
        <ul className="flex cursor-pointer justify-evenly divide-x divide-gray rounded-lg border border-gray text-center">
          {option.map((item, key) => (
            <li
              className={`w-full p-2 hover:bg-[#9AC5E5] hover:font-bold hover:text-[#fff] ${selectValue === item ? "rounded-lg bg-[#9AC5E5] font-bold text-[#fff]" : ""} `}
              key={key}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SelectList;
