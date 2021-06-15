import { createContext } from 'react';

const AppContext = createContext({
  TotalProducts: 0,
  AccountStatus: null,
});


export default AppContext;
