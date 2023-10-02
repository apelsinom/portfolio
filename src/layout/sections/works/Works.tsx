import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from './../../../assets/images/Proj-1.webp'
import timerImg from './../../../assets/images/Proj-2.webp'
import listImg from './../../../assets/images/Proj-3.webp'
import square from './../../../assets/images/squareFon.svg'
import {Work} from "./work/Work";
import {Container} from "../../../components/Container";

const worksItems = ['all', 'landing page', 'react', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>my-works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper align={'flex-start'}>
                    <Work title={'social network'}
                          src={socialImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work title={'timer'}
                          src={timerImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
                    <Work title={'to-do list'}
                          src={listImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  position: relative;

  &::before {
    content: "";
    background-image: url(${square});
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    min-width: 60px;
    min-height: 120px;
    position: absolute;
    bottom: 200px;
    right: 0;
  }
`