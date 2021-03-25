import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarAccount,
  SidebarLink,
  LoginBtn,
  SignupBtn,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, history }) => {
  const val = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    history.push("/");
  };

  if (val === "true") {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink onClick={() => history.push("/")}>Home</SidebarLink>
          <SidebarLink onClick={() => history.push("/Meals")}>
            Full Menu
          </SidebarLink>
          <SidebarLink onClick={() => history.push("/Cart")}>Cart</SidebarLink>
        </SidebarMenu>
        <SidebarAccount>
          <LoginBtn onClick={logout}>Log out</LoginBtn>
        </SidebarAccount>
      </SidebarContainer>
    );
  } else {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink onClick={() => history.push("/")}>Home</SidebarLink>
          <SidebarLink onClick={() => history.push("/Meals")}>
            Full Menu
          </SidebarLink>
          <SidebarLink onClick={() => history.push("/Cart")}>Cart</SidebarLink>
        </SidebarMenu>
        <SidebarAccount>
          <LoginBtn onClick={() => history.push("/Login")}>Login</LoginBtn>
          <SignupBtn onClick={() => history.push("/Signup")}>Sign Up</SignupBtn>
        </SidebarAccount>
      </SidebarContainer>
    );
  }
};

export default Sidebar;
