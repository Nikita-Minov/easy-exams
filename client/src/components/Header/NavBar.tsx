import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
  return (
    <Wrapper>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>
      <Link to='/login'>Вход</Link>
      <Link to='/register'>Регистрация</Link>
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

const Link = styled(NavLink)`
  background: #2DD700;
  border: 3px solid #2DD700;
  border-radius: 15px;
  font-family: "Ubuntu", sans-serif;
  padding: 1px 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    background-color: #ffffff;
    border-color: #0D56A6;
    border-width: 3px;
    color: #0D56A6;
  }
`;
