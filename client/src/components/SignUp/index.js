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
  SignupContainer,
} from "./SignupElements";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const signup = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/signup/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.status === 200) {
        props.history.push("/Login");
        alert("Account created!");
      }
    });
  };

  return (
    <SignupContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} history={props.history} />
      <FormContainer>
        <Form>
          <h1>Creat an Account</h1>
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
          <ActionBtns>
            <SignupBtn onClick={signup}>Sign Up</SignupBtn>
            <p>Already have an accoount ?</p>
            <LoginBtn to="/Login">Login</LoginBtn>
          </ActionBtns>
        </Form>
      </FormContainer>
    </SignupContainer>
  );
};

export default SignUp;
