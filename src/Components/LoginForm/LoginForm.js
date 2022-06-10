import { useState } from "react";
import loginService from "../../services/axios-services";
import Button from "../Button/Button";
import { message } from "antd";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email.length === 0) {
      message.error("Please Enter Email Address");
      return;
    }
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      message.error("Enter Valid Email Address");
      return;
    }
    if (password.length === 0) {
      message.error("Please Enter Password");
      return;
    }
    try {
      const response = await loginService(email, password);
      message.success("Login Successful Token=" + response.data.token);
    } catch (err) {
      message.error("Incorrect Email or Password");
    }
  }

  return (
    <div className="LoginForm">
      <h1 className="Heading">Welcome Back</h1>
      <h2 className="SubHeading">Sub-title text goes here</h2>
      <div className="row form">
        <div className="col-12 formElement">
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="Email Address *"
              aria-describedby="inputGroupPrepend2"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-12 formElement">
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              id="validationDefaultPassword"
              placeholder="Password *"
              aria-describedby="inputGroupPrepend2"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-12 formElement">
          <Button className="login form-control btn-dark" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
      <div className="subform">
        <div className="checkbox contain">
          <input id="remPass" type="checkbox" className="check" />
          <span className="checkmark" />
          <label for="remPass" className="checkLabel">
            Remember Password
          </label>
        </div>
        <div className="forgotContainer">
          <a href="/" className="forgot">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
