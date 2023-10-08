import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {SocialList} from "../../../components/SocialList";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }
    return (
        <StyleMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen}>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                    <MobileMenuSection>
                        {props.menuItems.map((item, index) => {
                            return <ListItem key={index}>
                                <Link href="">
                                    {item}
                                    <Mask>
                                <span>
                                    {item}
                                </span>
                                    </Mask>
                                    <Mask>
                                <span>
                                    {item}
                                </span>
                                    </Mask>
                                </Link>
                            </ListItem>
                        })}

                    </MobileMenuSection>
                    <SocialListWrapper>
                        <SocialList/>
                    </SocialListWrapper>
                </FlexWrapper>
            </MobileMenuPopup>
        </StyleMobileMenu>
    );
};

const StyleMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(40, 44, 51, 0.9);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 888;
  display: none;
  

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  `}
  ${FlexWrapper} {
    gap: 50px;
  }
`
const MobileMenuSection = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
`
const SocialListWrapper = styled.div`
  transform: translateX(5%) scale(1.5);
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: relative;
  height: 36px;
  width: 36px;
  z-index: 999;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.fonthover};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &:before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.fonthover};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &:after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.fonthover};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`
const Link = styled.a`

  font-size: 50px;
  font-weight: 400;
  text-align: center;
  color: transparent;

  &::before {
    content: "#";
    color: ${theme.colors.accent};
    font-weight: 600;
  }
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 20px;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.font};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const ListItem = styled.li`
  position: relative;


  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: 17px;
    right: -8px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {

    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transition: transform 0.2s ease;
      transform: skewX(12deg) translateX(4px);
      color: ${theme.colors.fonthover};

      & + ${Mask} {
        transition: transform 0.2s ease;
        transform: skewX(12deg) translateX(4px);
      }
    }
  }
`