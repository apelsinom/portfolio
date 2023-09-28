import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import points from '../../../assets/images/pointsFon.svg';
import figure from '../../../assets/images/figureFon.svg';
import square from '../../../assets/images/squareFon.svg';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <FlexWrapper justify={'space-between'} >
                    <FonWrapper>
                        <Figure src={figure} alt=""/>
                        <SquareLittle src={square} alt=""/>
                        <SquareBig src={square} alt=""/>
                    </FonWrapper>
                    <SkillWrapper>
                        <BoxColumn>
                            <Skill iconId={'code'}
                                   title={'HTML5'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, '}/>
                        </BoxColumn>
                        <BoxColumn>
                            <Skill iconId={'css'}
                                   title={'CSS3'}
                                   description={'Lorem ipsum dolor sit amet, '}/>
                            <Skill iconId={'react'}
                                   title={'React'}
                                   description={'Lorem ipsum dolor sit amet, consectetur '}/>
                        </BoxColumn>
                        <BoxColumn>
                            <Skill iconId={'typescript'}
                                   title={'TypeScript'}
                                   description={'Lorem ipsum dolor sit amet'}/>
                            <Skill iconId={'styled'}
                                   title={'Styled components'}
                                   description={'Lorem ipsum dolor sit amet, consectetur '}/>
                            <Skill iconId={'figma'}
                                   title={'Web design'}
                                   description={'Lorem ipsum dolor sit amet, consectetur '}/>
                        </BoxColumn>
                    </SkillWrapper>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`

`
const SkillWrapper = styled.div`
  display: flex;
  width: 60%;
`
const BoxColumn = styled.div`
  & + & {
    margin-left: 10px;
  }
`
const FonWrapper = styled.div`
  position: relative;
  width: 40%;

  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    min-width: 70px; /* Ширина иконки */
    min-height: 70px;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    top: 50px;
    left: 30px;
  }

  &::after {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    min-width: 70px; /* Ширина иконки */
    min-height: 70px;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    top: 140px;
    left: 200px;
  }
`
const Figure = styled.img`
  width: 30%;
  position: absolute;
  top: 200px;
  left: 50px;
`
const SquareLittle = styled.img`
  width: 15%;
  position: absolute;
  top: 200px;
  left: 300px;
`
const SquareBig = styled.img`
  width: 25%;
  position: absolute;
  top: 0;
  left: 250px;
`
