import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Sergey</Name>
                <SocialList>
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
                </SocialList>
                <Copyright>© 2023 Sergey Sidorenko, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  margin: 60px 0 20px;
`
const Name = styled.span`
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 3px;
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 20px 0;
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
const Copyright = styled.small`
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`