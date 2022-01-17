import React from "react";

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  className,
  onChange,
  onClick,
}) => {
  return (
    <>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        onClick={onClick}
      />
    </>
  );
};

export default Input;
