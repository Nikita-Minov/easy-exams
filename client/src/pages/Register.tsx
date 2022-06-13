import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/Register/RegisterForm';

export default function Register() {
  return (
    <Wrapper>
      <Title>
        Регистрация
      </Title>
      <RegisterForm />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 90%;
  min-height: 100px;
  margin: auto;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 74px;
  color: #0D56A6;
  margin-bottom: 50px;
`;
