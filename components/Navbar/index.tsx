import React from 'react';
import styled from 'styled-components';
import Burguer from './Burguer';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    margin: 1rem;
    width: 5rem;
  }  

  .logo img {
    width: 100%;
  }
`

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="logo">
        <img src="/logo01.png" alt="WebFour"/>
      </div>

      <Burguer />
    </Nav>
  );
}

export default Navbar;