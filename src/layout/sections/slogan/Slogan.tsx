import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Title>I Am Available For Freelance</Title>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  position: relative;
  
  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.font};
    bottom: -15%;
  }
`
const Title = styled.h2`
  color: ${theme.colors.fonthover};
  font-size: 32px;
  font-weight: 500;
  position: relative;
  margin: 100px 0;
  
  &:after {
    content: "";
    display: block;
    width: 10%;
    height: 2px;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
  }
`