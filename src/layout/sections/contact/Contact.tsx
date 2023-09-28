import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={'name'}/>
                <Field placeholder={'subject'}/>
                <Field placeholder={'message'} as={'textarea'}/>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};
const StyledContact = styled.section`
  min-height: 50vh;
  background-color: rgba(250, 249, 182, 0.85);
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  
  ${Button} {
    display: inline-block;
  }
`
const Field = styled.input`

`