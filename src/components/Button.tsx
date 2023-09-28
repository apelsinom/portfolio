import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${theme.colors.accent};
  
  &:hover {
    font-weight: 600;
  }
  
`