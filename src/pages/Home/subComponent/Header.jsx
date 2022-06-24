import { useContext } from "react";
import { useState } from "react";
import { HomeContext } from "../context/Homecontext";

const Header = ({ homeState, setHomeState }) => {
  const { setSearchKeyWord } = useContext(HomeContext);

  const handleChange = (e) => {
    setSearchKeyWord(e.target.value);
  };
  return (
    <div id="header">
      <div id="top">
        <h4>Categories</h4>

        <div className="filter-by-container d-flex">
          <input type="search" onChange={handleChange} />
        </div>
      </div>

      <div id="bottom">
        <div className="left">
          <span
            className={`header-tab ${
              homeState.headerTabs === "personal" && "active"
            }`}
            onClick={() => {
              setHomeState((prevState) => ({
                ...prevState,
                headerTabs: "personal",
              }));
            }}
          >
            Personal
          </span>
          <span
            className={`header-tab ${
              homeState.headerTabs === "property" && "active"
            }`}
            onClick={() => {
              setHomeState((prevState) => ({
                ...prevState,
                headerTabs: "property",
              }));
            }}
          >
            Property
          </span>
          <span
            className={`header-tab ${
              homeState.headerTabs === "business" && "active"
            }`}
            onClick={() => {
              setHomeState((prevState) => ({
                ...prevState,
                headerTabs: "business",
              }));
            }}
          >
            Business
          </span>
        </div>

        {/* <div className="right mb-2">
          <button
            className="user-add-btn btn btn-success"
            onClick={() => {
              setUsersState((prevState) => ({
                ...prevState,
                openSideModal: true,
              }));
            }}
          >
            Add
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
