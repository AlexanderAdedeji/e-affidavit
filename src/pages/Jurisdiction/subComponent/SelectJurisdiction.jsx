import {  useNavigate,Link } from "react-router-dom";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SelectDropDown from "../../../component/SelectDropdown";
import Back from "../../../assets/images/back.svg"

const SelectJurisdiction = ({
  id,
  jurisdictionState,
  setJurisdictionState,
}) => {

  const navigate =useNavigate()
  return (
    <div className="select-jurisdiction">
      <div className="go-back" onClick={()=>navigate("/home")}>

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
              {["Lagos", "Ondo", "Osun", "Imo", "Delta"].map((state, idx) => (
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
              {["Ikeja", "Agege", "Ogba", "Lekki", "Ikoyi"].map((city, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() =>
                    setJurisdictionState((prevState) => ({
                      ...prevState,
                      jurisdiction: city,
                    }))
                  }
                >
                  {city}
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
              {["Magistrate Court", "High Court", "Supreme Court"].map(
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
                    {court}
                  </DropdownItem>
                )
              )}
            </DropdownMenu>
          </SelectDropDown>
        </div>

        <div>
          <button
            onClick={() => {
              navigate(`/document/${id}`, { state: jurisdictionState });
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
