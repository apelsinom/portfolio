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
                <FlexWrapper>
                    <FonWrapper>
                        <PointsLeft src={points} alt=""/>
                        <PointsRight src={points} alt=""/>
                        <Figure src={figure} alt=""/>
                        <SquareLittle src={square} alt=""/>
                        <SquareBig src={square} alt=""/>
                    </FonWrapper>
                    <SkillWrapper>
                        <div>
                            <Skill iconId={'code'}
                                   title={'HTML5'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, '}/>
                        </div>
                        <div>
                            <Skill iconId={'css'}
                                   title={'CSS3'}
                                   description={'Lorem ipsum dolor sit amet, '}/>
                            <Skill iconId={'react'}
                                   title={'React'}
                                   description={'Lorem ipsum dolor sit amet, consectetur '}/>
                        </div>
                        <div>
                            <Skill iconId={'typescript'}
                                   title={'TypeScript'}
                                   description={'Lorem ipsum dolor sit amet'}/>
                            <Skill iconId={'styled'}
                                   title={'Styled components'}
                                   description={'Lorem ipsum dolor sit amet, consectetur '}/>
                            <Skill iconId={'figma'}
                                   title={'Web design'}
                                   description={'Lorem ipsum dolor sit amet, consectetur '}/>
                        </div>
                    </SkillWrapper>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`

`
const FonWrapper = styled.div`
  position: relative;
  width: 40%;
`
const SkillWrapper =styled.div`
  display: flex;
  width: 60%;
  
  div {
    width: 95%;
  }
`
const PointsLeft = styled.img`
  width: 13%;
  position: absolute;
  top: 50px;
  left: 30px;
`
const PointsRight = styled.img`
  width: 13%;
  position: absolute;
  top: 150px;
  left: 200px;
`
const Figure = styled.img`
  width: 25%;
  position: absolute;
  top: 200px;
  left: 50px;
`
const SquareLittle = styled.img`
  width: 10%;
  position: absolute;
  top: 200px;
  left: 300px;
`
const SquareBig = styled.img`
  width: 18%;
  position: absolute;
  top: 10px;
  left: 250px;
`
