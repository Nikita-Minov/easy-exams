import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default function NavBarContainer() {
  const links = [
    {name: 'Главная', url: '/'},
    {name: 'О нас', url: '/about'},
    {name: 'Регистрация', url: '/register'},
    {name: 'Авторизация', url: '/login'},
  ];
  const mappedLinks = links.map((el, id) => {
    return (
      <Link key={id} to={el.url}>{el.name}</Link>
    );
  });
  return (
    <NavBar links={mappedLinks} />
  );
}

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

