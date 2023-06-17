import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SelectDropDown from "../../component/SelectDropdown";
import JurisdictionLayout from "./layout/JurisdictionLayout";

const Jurisdiction = () => {
  let { id } = useParams();
  const location = useLocation()
  console.log(location)
  const [jurisdictionState, setJurisdictionState] = useState({
    state: "",
    jurisdiction: "",
    court: "",
  });

  return (
    <div id="jurisdiction">
      <JurisdictionLayout
        jurisdictionState={jurisdictionState}
        setJurisdictionState={setJurisdictionState}
        id={id}
      />

    </div>
  );
};

export default Jurisdiction;
