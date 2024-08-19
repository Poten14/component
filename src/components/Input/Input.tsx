import React from "react";
import { ExtraSize } from "types/type";

type InputVariant = "outlined" | "filled";

interface InputProps {
  size?: ExtraSize;
  variant?: InputVariant;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeClasses = {
  xs: "py-1 px-2 text-xs",
  small: "py-1.5 px-3 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-4 text-lg",
  xl: "py-4 px-5 text-lg",
};

const variantClasses = {
  outlined: "border border-Primary bg-white",
  filled: "bg-Basic text-white placeholder-white border-none",
};

const Input: React.FC<InputProps> = ({
  size = "medium",
  variant = "outlined",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      className={`focus:border-basic rounded-md ${variantClasses[variant]} ${sizeClasses[size]} md:w-1/4 lg:w-2/3 xl:w-3/5`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;