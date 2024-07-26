import React from "react";
import Input from "../Regular";

const SearchInput = () => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log(event.currentTarget.value);
    }
  };

  return (
    <Input
      placeholder={"Search ..."}
      onChange={handleSearch}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
