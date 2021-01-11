import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: calc(100vw / 1920 * 10);
  }

  h1 {
    color: #292727;
    text-align: center;
    font-family: 'HelveticaNeueBold';
  }

  body {
    background: url('../assets/image/header.jpg') no-repeat top left;
    width: 100%;
  }
`;
