import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

type WorkPropsType = {
    src: string
    title: string
    text: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  margin: 5px;
  border: 1px solid ${theme.colors.font};
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
