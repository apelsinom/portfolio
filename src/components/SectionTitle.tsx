import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({weight: 500, Fmin: 28, Fmax: 32})};
  color: ${theme.colors.fonthover};
  position: relative;
  margin: 100px 0 30px;
  
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
    transform: translate(10px, -6px);
  }

    @media ${theme.media.mobile} {
      margin: 50px 0 20px;

    }
`