import { useState, createContext } from "react";

export const HomeContext = createContext({
  searchKeyWord: "",
  headerTab: "",
  setSearchKeyWord: () => "",
  searchItemsArr: () => [],
  updateHeaderTab: () => "",
});

export const HomeProvider = ({ children }) => {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [headerTab, setHeaderTab] = useState("personal");

  const updateHeaderTab = (tab) => {

    setSearchKeyWord("")
    setHeaderTab(tab);
  };
  const searchItemsArr = (keyword, itemsArr) => {
    return itemsArr.filter((items) =>
      items.name.toLowerCase().includes(keyword)
    );
  };
  const value = { searchKeyWord, searchItemsArr, setSearchKeyWord,updateHeaderTab,headerTab };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
