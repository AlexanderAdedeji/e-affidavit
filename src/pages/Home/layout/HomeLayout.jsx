import React from "react";
import NameChange from "../views/NameChange";
import Header from "../subComponent/Header";
import HomeNavHeader from "../subComponent/HomeNavHeader";
import Property from "../views/Property";
import Business from "../views/Business";
import { useContext } from "react";
import { HomeContext } from "../context/Homecontext";
import Search from "../views/Search";

const HomeLayout = () => {
  const { headerTab } = useContext(HomeContext);
  return (
    <div id="user-layout">
      <HomeNavHeader />

      <div id="body">
        <Header />
        {headerTab === "personal" && <NameChange />}
        {headerTab === "property" && <Property />}
        {headerTab === "business" && <Business />}
        {headerTab === "search" && <Search />}
      </div>
    </div>
  );
};

export default HomeLayout;
