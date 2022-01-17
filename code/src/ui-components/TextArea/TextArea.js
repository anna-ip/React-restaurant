import React from "react";

const TextArea = ({ label, name, placeholder, value, rows, onChange }) => {
  return (
    <>
      {label && <label htmlFor="input-field">{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;
