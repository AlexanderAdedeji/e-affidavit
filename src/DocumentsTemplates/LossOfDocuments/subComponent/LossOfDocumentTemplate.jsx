import React from "react";
import TestStamp from "../../../assets/images/testStamp.png";

const LossOfDocumentTemplate = ({
  first_name,
  last_name,
  middle_name,
  address,
  gender,
  religion,
  nationality,
  state,
  court,
  city,
  docNo,
  deponentSignature,
  qr_code,
  id,
  date,
  docType,
  commissionerSignature,
  issuer,
  issuerAddress,
  deponentImage,
  commissionerStamp,
}) => {
  let wow = new Date();

  console.log(commissionerSignature);
  return (
    <div>
      <div className="container affidavit-document">
        <div className="qr-profile-image-container d-flex">
          {qr_code && (
            <div className="qr-code">
              <img
                src={`data:image/png;base64, ${qr_code}`}
                alt=""
                width="120"
              />
              <p>{id}</p>
            </div>
          )}

          {deponentImage && (
            <div className="deponent-image ms-auto">
              <img src={deponentImage} width={100} alt="affidavit-pic" />
            </div>
          )}
        </div>
        <div className="document-content">
          <u>
            <h3>
              <span className="primary">
                THE {court === "" ? "{{Court}}" : court.toUpperCase()} OF{" "}
                {state === "" ? "{{State}}" : state.toUpperCase()}{" "}
                {state.toLowerCase() === "federal capital territory"
                  ? ""
                  : "STATE"}
                <br />
                IN THE {city === "" ? "{{City}}" : city.toUpperCase()} JUDICIAL
                DIVISION
                <br />
                HOLDEN AT {city === "" ? "{{City}}" : city.toUpperCase()}
              </span>
            </h3>
          </u>

          <u>
            <h3>
              <span className="secondary">
                AFFIDAVIT OF LOSS OF{" "}
                {docType === "" ? "{{Document}}" : docType.toUpperCase()},
                DOCUMENT NO.{" "}
                {docNo === "" ? "{{Document No}}" : docNo.toUpperCase()}
              </span>
            </h3>
          </u>

          <p>
            <span className="tertiary">
              I,{" "}
              {first_name === "" ? "{{First Name}}" : first_name.toUpperCase()}{" "}
              {middle_name === ""
                ? "{{Middle Name}}"
                : middle_name.toUpperCase()}{" "}
              {last_name === "" ? "{{Last Name}}" : last_name.toUpperCase()},
            </span>
            <span className="higher">
              &nbsp; {gender === "" ? "{{Gender}}" : gender},&nbsp;
              {religion === "" ? "{{Religion}}" : religion}, and{" "}
              {nationality === "" ? "{{Nationality}}" : nationality}, Citizen of{" "}
              {address === "" ? "{{Address}}" : address} State do hereby declare
              as follows:
            </span>
          </p>

          <p className="normal size">
            1. &nbsp;&nbsp;That I am the above named person.
          </p>

          <p className="normal size">
            2. &nbsp;&nbsp;That I am the lawful owner of the{" "}
            {docType === "" ? "{{Document}}" : docType.toUpperCase()} with
            document No.{" "}
            {docNo === "" ? "{{Document No}}" : docNo.toUpperCase()} issued to
            me by {issuer === "" ? "{{Issuer}}" : issuer} of{" "}
            {issuerAddress === "" ? "{{Issuer Address}}" : issuerAddress}.
          </p>

          <p className="normal size">
            3. &nbsp;&nbsp;That I entered{" "}
            {docType === "" ? "{{Document Type}}" : docType.toUpperCase()} with{" "}
            {issuer === "" ? "{{Issuer}}" : issuer} with Document No.{" "}
            {docNo === "" ? "{{Document No}}" : docNo.toUpperCase()}.
          </p>

          <p className="normal size">
            4. &nbsp;&nbsp;That the said{" "}
            {docType === "" ? "{{Document Type}}" : docType} got lost in transit
            and all efforts made to trace it proved abortive, hence this
            affidavit
          </p>
          <p className="normal size">
            5. &nbsp;&nbsp;That this affidavit is now needed for record and
            official purposes.
          </p>
          <p className="normal size">
            6. &nbsp;&nbsp;That I depose this affidavit in good faith and in
            accordance with the Oaths Law of{" "}
            {state === "" ? "{{State}}" : state}{" "}
            {state.toLowerCase() === "federal capital territory" ? "" : "STATE"}{" "}
            2024.
          </p>
        </div>

        <div className="deponent-signature-container">
          <p className="deponent-image-box">
            {deponentSignature && (
              <img
                src={`data:image/png;base64, ${deponentSignature}`}
                alt=""
                width="150"
              />
            )}
          </p>
          <p className="deponent-signature-text">DESPODENT</p>
        </div>
        <div className="sworn-date-container">
          <p className="sworn-location">
            {`Sworn to at the ${court === "" ? "{{Court}}" : court} Registry, ${
              city === "" ? "{{City}}" : city
            }`}
          </p>

          <div className="date-container">
            <span>
              This{" "}
              <input
                type="text"
                disabled
                name="name"
                className="date-input"
                value={date ? date.formatedDay : ""}
              />{" "}
              day of{" "}
              <input
                type="text"
                disabled
                name="name"
                className="date-input"
                value={date ? date.formatedMonth : ""}
              />
              {wow.getFullYear()}
            </span>
          </div>
        </div>

        <div className="commissioner-of-oats-section">
          <h3 className="heading-text ">BEFORE ME</h3>

          {commissionerSignature && (
            <img
              src={`data:image/png;base64, ${commissionerSignature}`}
              alt=""
              width="150"
            />
          )}
          {commissionerStamp && (
            <img src={commissionerStamp} className="stampImage" alt="" />
          )}

          <h3 className="heading-text"> COMMISSIONER FOR OATHS</h3>
        </div>
      </div>
    </div>
  );
};

export default LossOfDocumentTemplate;
