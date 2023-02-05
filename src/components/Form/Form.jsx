import React from "react";
import Input from "../Input/Input";
import "./form.css";

const Form = () => {
  return (
    <>
      <div className="form">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
      </div>
    </>
  );
};

export default Form;
