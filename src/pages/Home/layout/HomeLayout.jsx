import React from "react";
import NameChange from "../views/NameChange";
import Header from "../subComponent/Header"
import HomeNavHeader from "../subComponent/HomeNavHeader";
import Property from "../views/Property";
import Business from "../views/Business";


const HomeLayout = ({ homeState, setHomeState }) => {
  return (
    <div id="user-layout">
      <HomeNavHeader />

      <div id="body">
        <Header homeState={homeState} setHomeState={setHomeState} />
        {homeState.headerTabs === "personal" && <NameChange />}
        {homeState.headerTabs === "property" && <Property />}
        {homeState.headerTabs === "business" && <Business />}
      </div>
    </div>
  );
};

export default HomeLayout;
