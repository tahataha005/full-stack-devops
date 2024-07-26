import React, { FC } from "react";
import "./style.css";

type Props = {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  costumize?: string;
  type?: string;
};

const Input: FC<Props> = ({
  placeholder,
  onChange,
  onKeyDown,
  defaultValue,
  costumize,
  type,
}) => {
  return (
    <input
      className={`flex rounded input ${costumize ?? costumize}`}
      type={type}
      onChange={(e) => onChange(e)}
      onKeyDown={(e) => {
        if (onKeyDown && e.key === "Enter") {
          onKeyDown(e);
        }
      }}
      placeholder={placeholder}
      value={
        (defaultValue! && defaultValue?.length > 0) || defaultValue
          ? defaultValue
          : ""
      }
    />
  );
};

export default Input;
