import React from 'react';
import styled from 'styled-components';
import {NavBarProps} from '../../types/components/Header/navbar.types';

export default function NavBar({links}: NavBarProps) {
  return (
    <Wrapper>
      {links}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
