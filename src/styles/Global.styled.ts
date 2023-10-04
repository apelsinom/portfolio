import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;
    background-color: ${theme.colors.primaryBg};
    min-width: 375px;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid ${theme.colors.font};
    }
  }
  ul {
    list-style: none;
  }
  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.fonthover};
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    word-wrap: break-word;
  }
  ::selection {
    background-color: ${theme.colors.font}; /* Изменение цвета фона выделенного текста */
    color: ${theme.colors.primaryBg}; /* Изменение цвета текста выделенного текста */
  }
`

