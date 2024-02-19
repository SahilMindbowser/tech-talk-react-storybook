import React from "react";
import "./Input.css";

const Input = (props) => {
  const { variant = "small", ...rest } = props;

  return (
    <input
      type="text"
      className={`input ${variant}`}
      placeholder="Enter text here..."
      {...rest}
    />
  );
};

export default Input;
