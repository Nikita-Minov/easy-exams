import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Logo() {
  return (
    <LogoLink to='/' >
      EasyExams
    </LogoLink>
  );
}

const LogoLink = styled(Link)`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #0D56A6;
  text-decoration: none;
  &:hover {
    font-size: 36px;
    color: #2DD700;
  }
`;
