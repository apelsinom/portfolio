import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme";

const items = ['home', 'skills', 'my-works', 'about-me', 'contact']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <div>
                        <HeaderMenu menuItems={items}/>
                        <MobileMenu menuItems={items}/>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: rgba(40, 44, 51, 0.8);
  white-space: nowrap;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  ${FlexWrapper} {
    max-width: 1100px;
    width: 100%;
  }
  
  @media ${theme.media.tablet} {
    padding: 10px 0;
  }
  
  @media ${theme.media.mobile} {
    padding: 5px 0;
  }
`