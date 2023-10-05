import { createContext } from "react";

const MyDocumentsContext = () =>
  createContext({
    headerTab: "",
    updateHeaderTab: () => {},
  });

export const MyDocumentsProvider = ({ children }) => {


    
  return <MyDocumentsContext.Provider>{children}</MyDocumentsContext.Provider>;
};
