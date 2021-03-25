import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  flex-direction:row
  justify-content: center;
  font-weight: 700;
  position: static;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left:70px;
  text-decoration: none !important;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 0;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 2rem;
  transform: translate(-50%, -15%);

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fdc500;
  }
`;
