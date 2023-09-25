import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/myPhoto.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi!</span>
                    <Name>Sergey is a Web Developer</Name>
                    <MainTitle>I'm not a magician, I'm just learning</MainTitle>
                </div>
                <FlexWrapper direction={'column'}>
                    <Photo src={photo} alt=""/>
                    <UnderPhoto>Currently working on Portfolio</UnderPhoto>
                </FlexWrapper>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #f6e0e0;
`

const Photo = styled.img`
  //width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`

`
const UnderPhoto = styled.span`
  border: 1px solid rgba(171, 178, 191, 1);
  padding: 5px;
  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 16px; /* Ширина иконки */
    height: 16px; /* Высота иконки */
    background-image: url("../../../assets/images/icon-square.svg"); /* Путь к изображению иконки */
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    margin-right: 5px; /* Расстояние между иконкой и текстом */
  }
`
