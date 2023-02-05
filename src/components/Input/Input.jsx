import React from "react";
import "./input.css";

const Input = ({ placeholder, type = "text" }) => {
  return (
    <>
      <input type={`${type}`} placeholder={`${placeholder}`} />
    </>
  );
};

export default Input;
