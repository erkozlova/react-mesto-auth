import React from "react";
import { withRouter } from 'react-router-dom'
import Form from "./Form";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    props.handleLoginUser(password, email);
  }

  return (
    <section>
      <Form
        name={"login"}
        title={"Вход"}
        email={email}
        password={password}
        submit={"Войти"}
        onSubmit={handleLoginSubmit}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />
    </section>
  );
}
export default withRouter(Login);
