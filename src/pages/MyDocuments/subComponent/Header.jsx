import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate("/home");
  return (
    <div id="header" className="w-100">
      <div id="top">
        <h4>My Documents</h4>

        <div className="filter-by-container d-flex">
          <button className="btn btn-outline-dark" onClick={navigateHandler}>
            Create New
          </button>
        </div>
      </div>

      <div id="bottom">
        <div className="left"></div>
      </div>
    </div>
  );
};

export default Header;
