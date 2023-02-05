import React from "react";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";

import "./signin.css";

const Signin = () => {
  return (
    <>
      <form className="signin">
        <Heading title="Войти" />
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <a href="#">Забыли пароль?</a>
        <Button cls="solid" text="Войти" />
      </form>
    </>
  );
};

export default Signin;
