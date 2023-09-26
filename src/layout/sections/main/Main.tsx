import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/myPhoto.webp';
import square from '../../../assets/images/icon-square.svg'
import figureFon from '../../../assets/images/figureFon.svg';
import quotes from '../../../assets/images/quotes.svg'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={'column'} >
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <SmallText>Hi!</SmallText>
                        <Name>Sergey is a</Name> <MainTitle>Web Developer</MainTitle>
                        <Description>I'm not a magician, I'm just learning</Description>
                    </div>
                    <FlexWrapper direction={'column'} justify={'center'}>
                        <PhotoWrapper>
                            <Photo src={photo} alt=""/>
                        </PhotoWrapper>
                        <UnderPhoto>Currently working on <span>Portfolio</span></UnderPhoto>
                    </FlexWrapper>
                </FlexWrapper>
                <Quote>
                    <QuoteText>Just do it, don't talk about it.</QuoteText>
                    <QuoteAuthor>- M.Zuckerberg</QuoteAuthor>
                </Quote>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  height: 100%;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin: 0;
  padding: 0;

  &::before {
    content: "";
    background-image: url(${figureFon});
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block; 
    width: 50%; 
    height: 40%;
    position: absolute;
    top: 45%;
    left: -13%;
    z-index: -1;
  }
`
const Photo = styled.img`
  //width: 350px;
  height: 400px;
  object-fit: cover;
`
const SmallText = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 600;
`
const MainTitle = styled.h1`
  display: inline-block;
  color: ${theme.colors.accent};
  font-size: 32px;
  font-weight: 600;
`
const Name = styled.h2`
  display: inline-block;
  color: white;
  font-size: 32px;
  font-weight: 600;
`
const Description = styled.p`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 400;
`
const UnderPhoto = styled.span`
  border: 1px solid rgba(171, 178, 191, 1);
  padding: 5px;
  font-size: 16px;
  font-weight: 500;

  span {
    color: white;
    font-weight: 600;
  }

  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 14px; /* Ширина иконки */
    height: 14px; /* Высота иконки */
    background-image: url(${square});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    margin-right: 5px; /* Расстояние между иконкой и текстом */
  }
`
const Quote = styled.blockquote`
  font-size: 20px;
  color: ${theme.colors.fonthover};
  position: relative;
  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 25px; /* Ширина иконки */
    height: 20px; /* Высота иконки */
    background-image: url(${quotes});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 100px;
    left: 300px;
  }
  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 25px; /* Ширина иконки */
    height: 20px; /* Высота иконки */
    background-image: url(${quotes});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 60px;
    right: 350px;
  }
  
`
const QuoteText = styled.p`
  border: 1px solid ${theme.colors.font};
  font-weight: 500;
  height: 30px;
  display: block;
  padding: 20px;
  box-sizing: content-box;
  position: absolute;
  left: 299px;
  bottom: 51px;
`
const QuoteAuthor = styled.span`
  border: 1px solid ${theme.colors.font};
  border-top: none;
  font-weight: 400;
  height: 30px;
  display: inline-block;
  padding: 10px;
  box-sizing: content-box;
  position: relative;
  margin-left: 535px;
`