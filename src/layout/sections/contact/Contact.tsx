import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import points from "../../../assets/images/pointsFon.svg"

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <FlexWrapper justify={'space-between'}>
                        <Field placeholder={'Your Name'}/>
                        <Field placeholder={'Your Email'}/>
                    </FlexWrapper>
                    <Field placeholder={'Title'}/>
                    <Field placeholder={'Message'} as={'textarea'}/>
                    <FlexWrapper>
                        <Button type={'submit'}>Send message</Button>
                        <Button type={'reset'}>Reset</Button>
                    </FlexWrapper>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};
const StyledContact = styled.section`
  position: relative;
  
  &::before {
    content: ""; /* Обязательное свойство для отображения псевдоэлемента */
    display: inline-block; /* Иконка будет отображаться в виде блока, чтобы можно было управлять ее размерами */
    min-width: 65px;
    min-height: 100px;
    background-image: url(${points});
    background-size: cover; /* Размер изображения будет подстраиваться под размеры псевдоэлемента */
    position: absolute;
    bottom: 100px;
    left: 0;
  }
`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0 auto;

  ${FlexWrapper} {
    gap: 14px;
  }

  ${Button} {
    align-self: flex-start;
    //display: inline-block;
  }

  textarea {
    resize: none;
    height: 150px;
  }
`
const Field = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid ${theme.colors.font};
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.font};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.05em;
  
   &:focus-visible {
     outline: 2px solid;
   }
`