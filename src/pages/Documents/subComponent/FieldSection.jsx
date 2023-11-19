import React from "react";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SelectDropDown from "../../../component/SelectDropdown";

const FieldSection = ({
  setDocumentVariables,
  gender,
  religion,
  convert2base64,
}) => {
  return (
    <div className="field-section mt-4">
      <div className="mb-3 form-field">
        <label htmlFor="fileupload" className="form-label">
          Upload Image
        </label>
        <input
        id="fileupload"
          type="file"
          className="plain-input form-control"
          onChange={(e) => {convert2base64(e); console.log(e.target.value)}}
        />
      </div>
      <div className="mb-3 form-field">
        <label htmlFor="doc-no" className="form-label">
          Document Type
        </label>
        <input
          type="text"
          className="plain-input form-control"
          id="doc-no"
          placeholder="Document Type"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              docType: e.target.value,
            }));
          }}
        />
      </div>
      <div className="mb-3 form-field">
        <label htmlFor="doc-no" className="form-label">
          Document N0
        </label>
        <input
          type="text"
          className="plain-input form-control"
          id="doc-no"
          placeholder="Document N0"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              docNo: e.target.value,
            }));
          }}
        />
      </div>
      <div className="mb-3 form-field">
        <label htmlFor="doc-no" className="form-label">
          Issuer
        </label>
        <input
          type="text"
          className="plain-input form-control"
          id="doc-no"
          placeholder="Issuer"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              issuer: e.target.value,
            }));
          }}
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          issuer Address
        </label>
        <textarea
          placeholder="Enter Address"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              issuerAddress: e.target.value,
            }));
          }}
        />
      </div>

      <div className="mb-3 form-field">
        <label htmlFor="first-Name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="plain-input form-control"
          id="first-Name"
          placeholder="First Name"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              first_name: e.target.value,
            }));
          }}
        />
      </div>
      <div className="mb-3 form-field">
        <label htmlFor="image-title" className="form-label">
          Middle Name
        </label>
        <input
          type="text"
          className="plain-input form-control"
          id="Policy-Name"
          placeholder="Middle Name"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              middle_name: e.target.value,
            }));
          }}
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Last Name
        </label>
        <input
          placeholder="Last Name"
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              last_name: e.target.value,
            }));
          }}
        />
      </div>

      <div className="mb-3 form-field">
        <label htmlFor="city" className="form-label">
          Gender
        </label>

        <SelectDropDown>
          <DropdownToggle
            color="transparent"
            className="border px-3 dropdown-toggle "
            caret
          >
            <span className="pr-5 dropdown-toggle-text">
              {gender === "" ? " Select Gender" : gender}
            </span>
          </DropdownToggle>
          <DropdownMenu className="dropdown-container">
            {["Male", "Female"].map((genderType, idx) => (
              <DropdownItem
                key={idx}
                onClick={() =>
                  setDocumentVariables((prevState) => ({
                    ...prevState,
                    gender: genderType,
                  }))
                }
              >
                {genderType}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </SelectDropDown>
      </div>

      <div className="mb-3 form-field">
        <label htmlFor="city" className="form-label">
          Religion
        </label>

        <SelectDropDown>
          <DropdownToggle
            color="transparent"
            className="border px-3 dropdown-toggle "
            caret
          >
            <span className="pr-5 dropdown-toggle-text">
              {religion === "" ? " Select Religion" : religion}
            </span>
          </DropdownToggle>
          <DropdownMenu className="dropdown-container">
            {["Muslim", "Christain"].map((religionType, idx) => (
              <DropdownItem
                key={idx}
                className="dropdown-item"
                onClick={() =>
                  setDocumentVariables((prevState) => ({
                    ...prevState,
                    religion: religionType,
                  }))
                }
              >
                {religionType}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </SelectDropDown>
      </div>
      {/* <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Religion
        </label>
        <input
          type="text"
          placeholder="Religion"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              religion: e.target.value,
            }));
          }}
        />
      </div> */}

      <div className="mb-3 form-field">
        <label htmlFor="nationality" className="form-label">
          Nationality
        </label>
        <input
          type="text"
          className="plain-input form-control"
          id="nationality"
          placeholder="Nationality"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              nationality: e.target.value,
            }));
          }}
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Address
        </label>
        <textarea
          placeholder="Enter Address"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setDocumentVariables((prevState) => ({
              ...prevState,
              address: e.target.value,
            }));
          }}
        />
      </div>
    </div>
  );
};

export default FieldSection;
