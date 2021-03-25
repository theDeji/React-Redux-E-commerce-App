import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const SidebarAccount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 30px 30px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 30px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #e31837;
    text-decoration: none !important;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SidebarRoute = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`;

export const LoginBtn = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 10px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`;
export const SignupBtn = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 10px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`;
