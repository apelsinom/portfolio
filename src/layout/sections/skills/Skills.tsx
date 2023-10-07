import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import points from '../../../assets/images/pointsFon.svg';
import figure from '../../../assets/images/figureFon.svg';
import square from '../../../assets/images/squareFon.svg';
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <FlexWrapper justify={'space-between'} >
                    <FonWrapper>
                        <PointsLeft src={points} alt="points"/>
                        <PointsRight src={points} alt="points"/>
                        <Figure src={figure} alt="figure"/>
                        <SquareLittle src={square} alt="square"/>
                        <SquareBig src={square} alt="square"/>
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
  
  gap: 10px;

  @media ${theme.media.tablet} {
    width: 100%;
  }
  
  @media ${theme.media.mobile} {
    width: 60%;
    flex-direction: column;
    margin: 0 auto;
  }
`
const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  & + & {
    //margin-left: 10px;
  }
`
const FonWrapper = styled.div`
  position: relative;
  width: 40%;
  
  @media ${theme.media.tablet} {
    display: none;
  }
`
const PointsLeft = styled.img`
  width: 15%; 
  position: absolute;
  top: 10%;
  left: 5%;
`
const PointsRight = styled.img`
  width: 15%;
  position: absolute;
  top: 40%;
  left: 50%;
`
const Figure = styled.img`
  width: 30%;
  position: absolute;
  top: 60%;
  left: 10%;
`
const SquareLittle = styled.img`
  width: 15%;
  position: absolute;
  top: 65%;
  left: 80%;
`
const SquareBig = styled.img`
  width: 25%;
  position: absolute;
  top: -5%;
  left: 60%;
`
