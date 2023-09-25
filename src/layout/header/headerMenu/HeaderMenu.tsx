import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
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
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`
const Link = styled.a`
  
  font-size: 28px;
  font-weight: 400;
  word-wrap: break-word;
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
const  ListItem = styled.li`
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
      transform: skewX(10deg) translateX(3px);
      color: ${theme.colors.fonthover};
      
      & +  ${Mask} {
        transform: skewX(10deg) translateX(3px);
      }
    }
  }
`