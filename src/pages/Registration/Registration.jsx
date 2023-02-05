import React from "react";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import "./registration.css";

const Registration = () => {
  return (
    <>
      <form className="registration">
        <Heading title="Регистрация" />
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm password" type="password" />
        <Button cls="solid" text="Регистрация" />
        <p>
          Есть аккаунт?
          <a href="#">Войти</a>
        </p>
      </form>
    </>
  );
};

export default Registration;
