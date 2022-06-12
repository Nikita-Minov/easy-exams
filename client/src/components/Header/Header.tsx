import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Logo from './Logo';

export default function Header() {
  return (
    <>
      <Wrapper>
        <Logo />
        <NavBar />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  width: 90%;
  margin: auto;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
