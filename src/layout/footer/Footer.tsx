import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/SocialList";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Sergey</Name>
                <SocialList/>
                <Copyright>© 2023 Sergey Sidorenko, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  margin: 5% 0 1%;
`
const Name = styled.span`
  ${font({weight: 600, Fmax: 22, Fmin: 16})};
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 3px;
`
const Copyright = styled.small`
  ${font({Fmax: 16, Fmin: 8})};
  text-align: center;
  opacity: 0.5;
`
