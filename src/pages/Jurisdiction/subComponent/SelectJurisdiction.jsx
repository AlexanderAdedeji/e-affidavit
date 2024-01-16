import { useNavigate, Link } from "react-router-dom";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SelectDropDown from "../../../component/SelectDropdown";
import Back from "../../../assets/images/back.svg";

import {nigerianStates,nigeriaCourtsLocations, nigeriaCourts } from '../../../data'

const SelectJurisdiction = ({
  id,
  jurisdictionState,
  setJurisdictionState,
  price

}) => {
  const navigate = useNavigate();


  console.log({"courts": nigeriaCourts.length, "state":nigerianStates.length,"locations":nigeriaCourtsLocations.length})
  const filteredCourtLocations = nigeriaCourtsLocations.filter(court => court.state === jurisdictionState.state);
  const filteredCourts = nigeriaCourts.filter(court => court.state === jurisdictionState.state);


  console.log({filteredCourtLocations,filteredCourts})



const courtsInNigeria = [
  "Magistrate Court", 
  "High Court", 
  "Supreme Court",
  `Sharia Court of Appeal` 
];


  return (
    <div className="select-jurisdiction">
      <div className="go-back" onClick={() => navigate("/home")}>
        <img src={Back} alt="" />
        <span>Go back</span>
      </div>
      <div id="form-body">
        <div className="mb-3 form-field">
          <label htmlFor="state" className="form-label">
            State
          </label>

          <SelectDropDown>
            <DropdownToggle
              color="transparent"
              className="border px-3 dropdown-toggle "
              caret
            >
              <span className="pr-5 dropdown-toggle-text">
                {jurisdictionState.state === ""
                  ? " Select State"
                  : jurisdictionState.state}
              </span>
            </DropdownToggle>
            <DropdownMenu className="dropdown-container">
              {nigerianStates.map((state, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() =>
                    setJurisdictionState((prevState) => ({
                      ...prevState,
                      state: state,
                    }))
                  }
                >
                  {state}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </SelectDropDown>
        </div>
        <div className="mb-3 form-field">
          <label htmlFor="city" className="form-label">
            Jurisdiction
          </label>

          <SelectDropDown>
            <DropdownToggle
              color="transparent"
              className="border px-3 dropdown-toggle "
              caret
            >
              <span className="pr-5 dropdown-toggle-text">
                {jurisdictionState.jurisdiction === ""
                  ? " Select Jurisdiction"
                  : jurisdictionState.jurisdiction}
              </span>
            </DropdownToggle>
            <DropdownMenu className="dropdown-container">
              {filteredCourtLocations.map((court, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() =>
                    setJurisdictionState((prevState) => ({
                      ...prevState,
                      jurisdiction: court.courtsLocation,
                    }))
                  }
                >
                  {court.courtsLocation}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </SelectDropDown>
        </div>
        <div className="mb-3 form-field">
          <label htmlFor="court" className="form-label">
            Court
          </label>

          <SelectDropDown>
            <DropdownToggle
              color="transparent"
              className="border px-3 dropdown-toggle "
              caret
            >
              <span className="pr-5 dropdown-toggle-text">
                {jurisdictionState.court === ""
                  ? "Select Court"
                  : jurisdictionState.court}
              </span>
            </DropdownToggle>
            <DropdownMenu className="dropdown-container">
              {filteredCourts[0]?.jurisdictions.map(
                (court, idx) => (
                  <DropdownItem
                    key={idx}
                    onClick={() =>
                      setJurisdictionState((prevState) => ({
                        ...prevState,
                        court: court,
                      }))
                    }
                  >
                    {court +"," +jurisdictionState.state}
                  </DropdownItem>
                )
              )}
            </DropdownMenu>
          </SelectDropDown>
        </div>

        <div>
          <button
            onClick={() => {
              navigate(`/document/${id}`, {
                state: { ...jurisdictionState, id },
              });
            }}
            className="btn btn-dark my-4"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectJurisdiction;
