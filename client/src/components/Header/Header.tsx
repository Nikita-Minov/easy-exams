import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBarContainer from './NavBarContainer';

export default function Header() {
  return (
    <>
      <Wrapper>
        <Logo />
        <NavBarContainer />
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
