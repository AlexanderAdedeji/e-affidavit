import { useContext } from "react";
import { useState } from "react";
import { HomeContext } from "../context/Homecontext";

const Header = () => {
  const { setSearchKeyWord, searchKeyWord, headerTab, updateHeaderTab } =
    useContext(HomeContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchKeyWord(e.target.value);
  };

  return (
    <div id="header">
      <div id="top">
        <h4>Affidavit Categories</h4>

        <div className="filter-by-container d-flex">
          <input
            type="search"
            placeholder="Search Affidavit..."
            value={searchKeyWord}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div id="bottom">
        <div className="left">
          <span
            className={`header-tab ${headerTab === "personal" && "active"}`}
            onClick={() => {
              updateHeaderTab("personal");
            }}
          >
            Personal
          </span>
          <span
            className={`header-tab ${headerTab === "property" && "active"}`}
            onClick={() => {
              updateHeaderTab("property");
            }}
          >
            Property
          </span>
          <span
            className={`header-tab ${headerTab === "business" && "active"}`}
            onClick={() => {
              updateHeaderTab("business");
            }}
          >
            Business
          </span>
          {headerTab === "search" && (
            <span
              className={`header-tab ${headerTab === "search" && "active"}`}
              onClick={() => {
                updateHeaderTab("search");
              }}
            >
              Search
            </span>
          )}
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
