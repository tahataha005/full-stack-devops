import React, { FC, useState } from "react";
import "./style.css";

interface Props {
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  validationError?: () => string;
}

const PlaceHolderInput: FC<Props> = ({
  type,
  onChange,
  placeholder,
  validationError,
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(true);

  return (
    <div className="full-width input-container">
      <input
        onInput={onChange}
        className={`placeholder-input rounded`}
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (value !== "") setIsFocused(false);
        }}
      />
      {isFocused && value === "" ? (
        <label htmlFor="input">{placeholder}</label>
      ) : (
        <label className="placeholder primary-text" htmlFor="input">
          {placeholder}
        </label>
      )}

      {!isFocused && validationError && (
        <p className="red-txt validationError">{validationError()}</p>
      )}
    </div>
  );
};

export default PlaceHolderInput;
