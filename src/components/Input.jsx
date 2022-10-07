import React from "react";

const Input = ({ name, label, placeholder, type }) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control form-control-lg"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
