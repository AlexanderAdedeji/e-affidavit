import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";



const SelectDropDown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Filter By");



  return (
    <Dropdown
      isOpen={open}
      toggle={() => setOpen(!open)}
      className="dropdown mr-2"
    >
        {children}
    
    </Dropdown>
  );
};

export default SelectDropDown;
