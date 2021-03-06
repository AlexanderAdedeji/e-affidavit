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

const NavBarHeader = ({
  setSearch,
  search,
  getDocument,
  btnLoader,
  profile,
}) => {
  // const user = getUser();

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div id="navbar-header" className="noprint">
      <aside className="navbar-left">
        <h4> E-AFFIDAVIT</h4>
      </aside>
      <aside className="navbar-right">
        <Link to="/commissionerHome" className="navlinks">
          <small>Home</small>
        </Link>

        {profile || (
          <>
            <input
              type="search"
              className=""
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              onClick={() => {
                getDocument(search);
              }}
            >
              {btnLoader ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                <span>Search</span>
              )}
            </button>
          </>
        )}

        <SelectDropdown>
          <DropdownToggle color="transparent" className="">
            <img src={Profile} alt="" width="40" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-container">
            <DropdownItem
              className="dropdown-item"
              onClick={() => navigate("/updateProfile")}
            >
              Profile
            </DropdownItem>
            <DropdownItem
              className="dropdown-item"
              onClick={() => navigate("/commissionerLogin")}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </SelectDropdown>
      </aside>
    </div>
  );
};

export default NavBarHeader;
