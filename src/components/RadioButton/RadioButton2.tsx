"use client";

import React from "react";

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  description: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  color?: string;
}

const RadioButton2: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = "medium",
  color = "blue",
}) => {
  let sizeStyle = "w-4 h-4";
  if (size === "small") {
    sizeStyle = "w-3 h-3";
  } else if (size === "large") {
    sizeStyle = "w-5 h-5";
  }

  const colorClasses: { [key: string]: string } = {
    sky: "bg-[#9AC5E5] border-[#9AC5E5]",
    grey: "bg-[#DCDCDD] border-[#DCDCDD]",
    blue: "bg-[#558FFF] border-[#558FFF]",
    purple: "bg-[#C294F0] border-[#C294F0]",
    green: "bg-[#7EEFAF] border-[#7EEFAF]",
    yellow: "bg-[#EDCE7B] border-[#EDCE7B]",
    red: "bg-[#FF7676] border-[#FF7676]",
  };

  const selectedColorStyle =
    colorClasses[color] || `bg-blue-500 border-blue-500`;

  return (
    <label
      className={`flex items-start space-x-3 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      <div className="flex h-5 items-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`appearance-none rounded-full border-2 ${sizeStyle} ${
            checked ? selectedColorStyle : "border-gray-300 bg-white"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className="text-sm text-gray-500">{description}</span>
      </div>
    </label>
  );
};

export default RadioButton2;