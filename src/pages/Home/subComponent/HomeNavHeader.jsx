import { useState } from "react";

import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Profile from "../../../assets/images/profile.svg";
import SelectDropdown from "../../../component/SelectDropdown";

// import { getUser } from "../helpers/storage";

const HomeNavHeader = () => {

  const navigate = useNavigate();
  return (
    <div id="navbar-header" className="mb-3 noprint">
      <aside className="navbar-left">
        <h4> E-AFFIDAVIT</h4>
      </aside>
      <aside className="navbar-right">
        <Link to="/home" className="navlinks">
          <small>Home</small>
        </Link>

        <SelectDropdown>
          <DropdownToggle color="transparent" className="">
            <img src={Profile} alt="" width="40" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-container">
            <DropdownItem
              className="dropdown-item"
              onClick={() => navigate("/auth")}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </SelectDropdown>
      </aside>
    </div>
  );

  
};

export default HomeNavHeader;
