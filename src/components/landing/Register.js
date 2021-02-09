import { Link } from "react-router-dom";

import React from "react";
import Form from "./Form";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    props.handleRegisterUser(password, email);
  }

  return (
    <section>
      <Form
        name={"register"}
        title={"Регистрация"}
        email={email}
        password={password}
        submit={"Зарегистрироваться"}
        onSubmit={handleRegisterSubmit}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      >
        <Link className="admission__sing-in-link" to="sign-in">Уже зарегистрированы? Войти</Link>
      </Form>
    </section>
  );
}
export default Register;
