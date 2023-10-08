import {Icon} from "./icon/Icon";
import React from "react";
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SocialList = () => {
    return (
        <StyledSocialList>
            <SocialItem>
                <SocialIcon>
                    <Icon height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'} iconId={'instagram'}/>
                </SocialIcon>
            </SocialItem>
            <SocialItem>
                <SocialIcon>
                    <Icon height={'22px'} width={'22px'} viewBox={'0 0 22px 22px'} iconId={'telegram'}/>
                </SocialIcon>
            </SocialItem>
            <SocialItem>
                <SocialIcon>
                    <Icon height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'} iconId={'vk'}/>
                </SocialIcon>
            </SocialItem>
            <SocialItem>
                <SocialIcon>
                    <Icon height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'} iconId={'linkedin'}/>
                </SocialIcon>
            </SocialItem>
        </StyledSocialList>
    );
};
const StyledSocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 2% 0;
  flex-direction: row;
`
const SocialItem = styled.li`

`
const SocialIcon = styled.a`
  background-color: rgba(250, 250, 250, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.accent};
  transition: transform 0.3s ease;

  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    transform: translateY(-5px);
  }
`
