import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>s!ope</NavLink>
        <NavIcon onClick={toggle}>
          <p>
            <Bars  />
          </p>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
