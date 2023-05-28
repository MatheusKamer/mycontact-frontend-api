import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor}; /* "theme" é uma props do ThemeProvider criado no arquivo App.js */
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
