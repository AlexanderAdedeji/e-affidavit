import { useEffect } from "react";
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




  useEffect(()=>{
    if(searchKeyWord){
      setHeaderTab("search")
    }
  },[searchKeyWord])
  const searchItemsArr = (keyword, itemsArr) => {
    return itemsArr.filter((items) =>
      items.name.toLowerCase().includes(keyword.toLowerCase())
    );
  };
  const value = { searchKeyWord, searchItemsArr, setSearchKeyWord,updateHeaderTab,headerTab };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
