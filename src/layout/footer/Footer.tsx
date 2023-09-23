import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Sergey</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIcon>
                            <Icon height={'26px'} width={'26px'} viewBox={'0 0 26px 26px'} iconId={'instagram'}/>
                        </SocialIcon>
                    </SocialItem>
                    <SocialItem>
                        <SocialIcon>
                            <Icon height={'26px'} width={'26px'} viewBox={'0 0 26px 26px'} iconId={'telegram'}/>
                        </SocialIcon>
                    </SocialItem>
                    <SocialItem>
                        <SocialIcon>
                            <Icon height={'26px'} width={'26px'} viewBox={'0 0 26px 26px'} iconId={'vk'}/>
                        </SocialIcon>
                    </SocialItem>
                    <SocialItem>
                        <SocialIcon>
                            <Icon height={'26px'} width={'26px'} viewBox={'0 0 26px 26px'} iconId={'linkedin'}/>
                        </SocialIcon>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Sergey Sidorenko, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #fccccc;
  min-height: 20vh;
`
const Name = styled.span`

`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`

`
const SocialIcon = styled.a`

`
const Copyright = styled.small`

`