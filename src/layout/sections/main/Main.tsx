import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/myPhoto.webp';
import iconSquare from '../../../assets/images/icon-square.svg'
import figure from '../../../assets/images/figureFon.svg';
import quotes from '../../../assets/images/quotes.svg'
import points from '../../../assets/images/pointsFon.svg'
import square from '../../../assets/images/squareFon.svg'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <MainWrapper>
                        <MainTextWrapper>
                            <SmallText>Hi!</SmallText>
                            <Name>Sergey is a</Name> <MainTitle>Web Developer</MainTitle>
                            <Description>I'm not a magician, I'm just learning</Description>
                            <Button type={'submit'}>Contact me</Button>
                        </MainTextWrapper>
                        <MainPhotoWrapper>
                            <PhotoWrapper>
                                <Photo src={photo} alt=""/>
                            </PhotoWrapper>
                            <UnderPhoto>Currently working on <span>Portfolio</span></UnderPhoto>
                        </MainPhotoWrapper>
                    </MainWrapper>
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
  margin-top: 80px;
  max-height: 100vh;
  display: flex;
  height: 100%;
  position: relative;

  &::before {
    content: "";
    background-image: url(${square});
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 0;
    right: 0;

    @media ${theme.media.tablet} {
      display: none;
    }
  }
`
const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media ${theme.media.mobile} {
    justify-content: center;

    // ${Button} {
    //   display: none;
    // }
  }
`
const MainTextWrapper = styled.div`
  max-width: 470px;
  width: 241px;
  flex-grow: 1;
`
const MainPhotoWrapper = styled.div`
  max-width: 320px;
  width: 306px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin: 0;
  padding: 0;

  &::before {
    content: "";
    background-image: url(${figure});
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    width: 45%;
    height: 36%;
    position: absolute;
    top: 40%;
    left: -8%;
    z-index: -1;
  }

  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 21%;
    height: 16.5%;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 15%;
    right: 11%;
    z-index: 1;
  }
`
const Photo = styled.img`
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
  font-size: 31px;
  font-weight: 600;
`
const Name = styled.h2`
  display: inline-block;
  color: white;
  font-size: 31px;
  font-weight: 600;
`
const Description = styled.p`
  margin: 30px 0;
  font-size: 16px;
  font-weight: 400;

  @media ${theme.media.mobile} {
    margin: 10px 0;
  }
`
const UnderPhoto = styled.div`
  border: 1px solid rgba(171, 178, 191, 1);
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  position: relative;
  bottom: 4px;

  span {
    color: white;
    font-weight: 600;
  }

  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 14px; /* Ширина иконки */
    height: 14px; /* Высота иконки */
    background-image: url(${iconSquare});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    margin-right: 5px; /* Расстояние между иконкой и текстом */
  }
`
const Quote = styled.blockquote`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 20px;
  color: ${theme.colors.fonthover};
  position: relative;
  margin: 10px;

  @media ${theme.media.mobile} {
    display: none;
  }

  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 25px; /* Ширина иконки */
    height: 20px; /* Высота иконки */
    background-image: url(${quotes});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    top: -7%;
    left: 3%;
  }

  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 25px; /* Ширина иконки */
    height: 20px; /* Высота иконки */
    background-image: url(${quotes});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 35%;
    right: 3%;
  }

`
const QuoteText = styled.p`
  border: 1px solid ${theme.colors.font};
  font-weight: 500;
  height: 30px;
  display: block;
  padding: 20px 30px;
  box-sizing: content-box;
`
const QuoteAuthor = styled.span`
  border: 1px solid ${theme.colors.font};
  border-top: none;
  font-weight: 400;
  height: 30px;
  display: inline-block;
  padding: 10px;
  box-sizing: content-box;
`