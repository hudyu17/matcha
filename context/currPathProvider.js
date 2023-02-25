import { createContext, useContext, useState } from "react";

const Context = createContext();

export function CurrPathProvider({ children }) {
  const [currPath, setCurrPath] = useState(null);
  return (
    <Context.Provider value={[currPath, setCurrPath]}>{children}</Context.Provider>
  );
}

export function useCurrPathContext() {
  return useContext(Context);
}