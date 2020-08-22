import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface NavProps {
  open: boolean
}

const Ul = styled.ul<NavProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a {
      color: #fff;
    }
  }
`;

const RightNav:React.FC<NavProps> = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/cadastro'><a>Contato</a></Link></li>
    </Ul>
  )
}

export default RightNav