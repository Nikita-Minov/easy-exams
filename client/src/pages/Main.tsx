import React from 'react';
import styled from 'styled-components';
import mainImg from '../assets/img/Main/main-img.jpg';
import {Link} from 'react-router-dom';

export default function Main() {
  return (
    <Wrapper>
      <Block>
        <Title>
        EasyExams - это платформа, которая поможет тебе сдать
        экзамены без траты денег на репетиторов!
        </Title>
        <LinksBlock>
          <MainLink to='/about'>Ты о чём?!</MainLink>
          <MainLink to='/register'>Хочу попробовать!</MainLink>
        </LinksBlock>
      </Block>
      <Block>
        <Image src={mainImg} />
      </Block>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 90%;
  margin: auto;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 180px;
`;

const Block = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 74px;
  color: #0d56a6;
  margin-bottom: 60px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const LinksBlock = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainLink = styled(Link)`
  background: #2DD700;
  border: 3px solid #2DD700;
  border-radius: 15px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  padding: 15px 70px;
  text-decoration: none;
  &:hover {
    background-color: #ffffff;
    border-color: #0D56A6;
    border-width: 3px;
    color: #0D56A6;
  }
`;
