import React from "react";
import HomeNavHeader from "../../Home/subComponent/HomeNavHeader";
import SelectJurisdiction from "../subComponent/SelectJurisdiction";
import DefaultHeader from "../subComponent/DefaultHeader";

const JurisdictionLayout = ({
  jurisdictionState,
  setJurisdictionState,
  id,
}) => {
  return (
    <div id="jurisdiction-layout">
      <HomeNavHeader />

      <div id="body">
        <DefaultHeader />

        
        <SelectJurisdiction
          jurisdictionState={jurisdictionState}
          setJurisdictionState={setJurisdictionState}
          id={id}
        />
      </div>
    </div>
  );
};

export default JurisdictionLayout;
