import React, { useState } from "react";
import { AccountCircleRounded, LockOpen } from "@material-ui/icons";
import {
  FormContainer,
  Form,
  Field,
  FieldText,
  FieldImg,
  LoginBtn,
  ActionBtns,
  SignupBtn,
  LoginContainer,
} from "./LoginElement";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const login = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        props.history.push("/Meals");
      } else {
        alert("Invalid Login Attempt");
      }
    });
  };

  return (
    <LoginContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} history={props.history} />
      <FormContainer>
        <Form>
          <h1>Login</h1>
          <Field>
            <FieldImg>
              <AccountCircleRounded />
            </FieldImg>
            <FieldText>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </FieldText>
          </Field>
          <Field>
            <FieldImg>
              <LockOpen />
            </FieldImg>
            <FieldText>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </FieldText>
          </Field>
          <h4>Forgot password ? Click here</h4>
          <ActionBtns>
            <LoginBtn onClick={login}>Login</LoginBtn>
            <p>Don't have an accoount ?</p>
            <SignupBtn to="/SignUp">Sign Up</SignupBtn>
          </ActionBtns>
        </Form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
