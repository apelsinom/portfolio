import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
  font-size: 18px;
  font-weight: 400;
  padding: 10px;
  transition: transform 0.3s ease, border 0.3s ease;
  display: inline-block;
  
  &:hover {
    transform: scale(1.1);
    font-weight: 500;
    color: ${theme.colors.fonthover};
    border: 2px solid ${theme.colors.accent};
  }
`