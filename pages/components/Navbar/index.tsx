import React from 'react';
import styled from 'styled-components';
import Burguer from './Burguer';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="logo">
        Webfour
      </div>

      <Burguer />
    </Nav>
  );
}

export default Navbar;