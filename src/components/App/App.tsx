import React from 'react';
import { GlobalStyle } from './styled';

export type AppContextType = {};

export const AppContext = React.createContext<AppContextType>({});

export const App = () => {
  const context = {};

  return (
    <AppContext.Provider value={context}>
      <GlobalStyle>ZERO App</GlobalStyle>
    </AppContext.Provider>
  )
}
