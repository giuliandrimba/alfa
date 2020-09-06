import React from 'react';
import Logo from 'Assets/image/alfa.jpg'

export type AppContextType = {};

export const AppContext = React.createContext<AppContextType>({});

export default () => {
  const context = {};
  return (
    <AppContext.Provider value={context}>
      <h1>Alfa APP</h1>
      <img src={Logo} />
    </AppContext.Provider>
  )
}
