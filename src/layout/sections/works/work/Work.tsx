import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    src: string
    title: string
    text: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button type={'submit'}>View project</Button>
            </ImageWrapper>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>

        </StyledWork>
    );
};

const StyledWork = styled.div`
  width: 268px;
  border: 1px solid ${theme.colors.font};
  flex-grow: 1;
  
  @media ${theme.media.desktop} {
    max-width: 360px;
  }
`
const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    ${Button} {
      opacity: 1;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(3px);
    }
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.colors.primaryBg};
    &:hover {
      transform: scale(1.1) translate(-45%, -45%);
    }
  }
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`
  border-top: 1px solid ${theme.colors.font};
  border-bottom: 1px solid ${theme.colors.font};
  padding: 10px;
  color: ${theme.colors.fonthover};
`
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
`
