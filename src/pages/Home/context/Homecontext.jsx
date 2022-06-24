import { useState, createContext } from "react";

export const HomeContext = createContext({
  searchKeyWord: "",
  setSearchKeyWord: () => "",
  searchItemsArr: () => [],
});

export const HomeProvider = ({ children }) => {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const searchItemsArr = (keyword, itemsArr) => {
    return itemsArr.filter((items) =>
      items.name.toLowerCase().includes(keyword)
    );
  };
  const value = { searchKeyWord, searchItemsArr, setSearchKeyWord };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
