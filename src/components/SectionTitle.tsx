import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  color: ${theme.colors.fonthover};
  font-size: 32px;
  font-weight: 500;
  position: relative;
  margin: 30px 0;
  
  &::before {
    content: "#";
    display: inline-block;
    color: ${theme.colors.accent};
    font-weight: 600;
  }
 
  &::after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 30%;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 17%;
    top: 50%;
  }
`