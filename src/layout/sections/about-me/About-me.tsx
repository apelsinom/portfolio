import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
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
                <AboutWrapper>
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
                </AboutWrapper>
            </Container>
        </StyledAboutMy>
    );
};

const StyledAboutMy = styled.section`
  position: relative;
  width: 100%;

  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    min-width: 65px;
    min-height: 80px;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 150px;
    right: 0;

    @media screen and (max-width: 1220px){
      display: none;
    }
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

    @media screen and (max-width: 1220px){
      display: none;
    }
  }
`
const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  
  //     ${Button} {
  //       display: none;
  //     }
  //   }
  }
`
const MyTextWrapper = styled.div`
    max-width: 642px;
    width: 328px;
    flex-grow: 1;
`
const MyText = styled.div`
  p {
    margin-bottom: 5%;
  }
`
const MyPhotoWrapper = styled.div`
  align-self: flex-end;
  max-width: 428px;
  width: 219px;
  position: relative;
  z-index: 0;
  flex-grow: 1;
  
  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 20%;
    height: 19%;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 40%;
    left: 5%;
    z-index: 1;
  }

  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    width: 16%;
    height: 9%;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 15%;
    right: 0;
    z-index: 1;
  }
`
const PhotoSecond = styled.img`
  width: 100%;
  object-fit: cover;
  
`
const DecorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 0;
  width: 100%;
  
  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    position: absolute;
    width: 90%;
    height: 2px;
    background-color: ${theme.colors.accent};
    bottom: 0;
    right: 10%;
  }
`