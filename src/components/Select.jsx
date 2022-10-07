import React from "react";

const Select = ({ label, options, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select form-select-lg"
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      >
        <option value="">SELECCIONA</option>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
