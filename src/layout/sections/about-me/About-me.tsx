import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import photoSecond from "../../../assets/images/myPhotoSecond.webp";
import points from "../../../assets/images/pointsFon.svg"
import {theme} from "../../../styles/Theme";
import square from "../../../assets/images/squareFon.svg";

export const AboutMe = () => {
    return (
        <StyledAboutMy>
            <Container>
                <SectionTitle>about-me</SectionTitle>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <MyTextWrapper>
                        <MyText>
                            <p>Hello, i’m Sergey!</p>
                            <p>I’m a self-taught front-end developer based in, Mogilev, Belarus. I can develop responsive
                                websites from scratch and raise them into modern user-friendly web experiences.</p>
                            <p>Transforming my creativity and knowledge into a websites has been my passion for over a
                                year.
                                I have been helping various clients to establish their presence online. I always strive
                                to
                                learn about the newest technologies and frameworks.</p>
                        </MyText>
                        <Button type={'submit'}>Read more</Button>
                    </MyTextWrapper>
                    <MyPhotoWrapper>
                        <DecorWrapper>
                            <PhotoSecond src={photoSecond} alt=""/>
                        </DecorWrapper>
                    </MyPhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledAboutMy>
    );
};

const StyledAboutMy = styled.section`
  position: relative;

  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    min-width: 65px;
    min-height: 80px;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 100px;
    right: 0;
  }
  
  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    min-width: 120px;
    min-height: 120px;
    background-image: url(${square});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 200px;
    left: -50px;
  }
`
const MyTextWrapper = styled.div`
`
const MyText = styled.div`
  p {
    margin-bottom: 40px;
  }
`
const MyPhotoWrapper = styled.div`
  max-width: 200px;
  position: relative;
  z-index: 0;
  
  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    min-width: 60px;
    min-height: 60px;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 180px;
    right: 230px;
    z-index: 1;
  }

  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    min-width: 60px;
    min-height: 35px;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 60px;
    right: 0;
    z-index: 1;
  }
`
const PhotoSecond = styled.img`
  height: 350px;
  object-fit: cover;
`
const DecorWrapper = styled.div`
  position: relative;
  z-index: 0;
  
  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    position: absolute;
    width: 90%;
    height: 2px;
    background-color: ${theme.colors.accent};
    bottom: 3px;
  }
`