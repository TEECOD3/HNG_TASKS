import React from "react";
import "./input.scss";
import ErrorMessage from "./ErrorMessage";

const Inputfield = ({
  handleChange,
  type,
  id,
  label,
  value,
  classes,
  required,
  name,
  ...otherProps
}) => {
  return (
    <div className={`input-box ${classes}`}>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        type={type}
        id={id}
        value={value}
        name={name}
        required={required}
        onChange={handleChange}
        {...otherProps}
      />

      {required && <ErrorMessage type={type} label={label} />}
    </div>
  );
};

export default Inputfield;
