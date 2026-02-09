import { useState } from "react";
import { TextInput } from "flowbite-react";
import { FiSearch, FiX } from "react-icons/fi";

export default function InputSearch({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  inputClassName = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <TextInput
        placeholder={placeholder}
        icon={FiSearch}
        value={value}
        onChange={onChange}
        className={`text-white! custom-input-2 ${inputClassName}`}
      />

      {value && (
        <FiX
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
          onClick={() =>
            onChange({ target: { value: "" } })
          }
        />
      )}
    </div>
  );
}
