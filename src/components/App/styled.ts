import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset};

  h1 {
    color: #292727;
    text-align: center;
    font-family: 'HelveticaNeueBold';
  }

  body {
    background: url('../assets/image/header.jpg') no-repeat top left;
    width: 100%;
  }
`
