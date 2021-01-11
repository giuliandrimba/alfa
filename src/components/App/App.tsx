import React from 'react';
import Logo from 'Assets/image/alfa.jpg'
import { GlobalStyle } from './styled';
import { ThemeProvider } from 'styled-components';
import theme from 'src/data/styles/themes/default'
import { TypeHeading, TypeHeadingSizes } from '../common/typography/TypeHeading';

export type AppContextType = {};

export const AppContext = React.createContext<AppContextType>({});

export default () => {
  const context = {};
  return (
    <AppContext.Provider value={context}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TypeHeading
          as='h1'
          size={TypeHeadingSizes.H1}
        >Alfa APP</TypeHeading>
        <img src={Logo} />
      </ThemeProvider>
    </AppContext.Provider>
  )
}
