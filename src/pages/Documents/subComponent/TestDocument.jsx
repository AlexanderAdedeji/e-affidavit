import { useState } from "react";
import { dateTimeFormatter } from "../../../helper/dateTimeFormat";

const TestDocument = ({
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
  signature,
  qr_code,
  id,
  date,
  docType,
  commissionerSignature,
  issuer,
  issuerAddress,
  image,
}) => {
  let wow = new Date();
  return (
    <div className="container text-document">

      <div>

      {qr_code && (
        <div className="qr-code">
          <img src={`data:image/png;base64, ${qr_code}`} alt="" width="150" />
          <p>{id}</p>
        </div>
      )}

      <div>
        <img src={image} width={100} alt="affidavit-pic"/>
      </div>
      </div>

      <u>
        <h3>
          <span className="primary">
            THE {court === "" ? "{{Court}}" : court.toUpperCase()} OF{" "}
            {state === "" ? "{{State}}" : state.toUpperCase()} STATE
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
            AFFIDAVIT OF LOSS OF POLICY DOCUMENT NO.{" "}
            {docNo === "" ? "{{Document No}}" : docNo.toUpperCase()}
          </span>
        </h3>
      </u>
      <p>
        <span className="tertiary">
          I, {first_name === "" ? "{{First Name}}" : first_name.toUpperCase()}{" "}
          {middle_name === "" ? "{{Middle Name}}" : middle_name.toUpperCase()}{" "}
          {last_name === "" ? "{{Last Name}}" : last_name.toUpperCase()},
        </span>
        <span className="higher">
          &nbsp; {gender === "" ? "{{Gender}}" : gender},&nbsp;
          {religion === "" ? "{{Religion}}" : religion}, and{" "}
          {nationality === "" ? "{{Nationality}}" : nationality},Citizen of{" "}
          {address === "" ? " {{Address}} " : address} State do hereby declare
          as follows:
        </span>
      </p>
      <p className="normal size">
        1. &nbsp;&nbsp;That I am the above named person
      </p>
      <p className="normal size">
        2. &nbsp;&nbsp;That I am the lawful owner of the insurance policy with
        policy No. {docNo === "" ? "{{Document No}}" : docNo.toUpperCase()}{" "}
        issued to me by {issuer === "" ? " {{Issuer: }} " : issuer} of{" "}
        {issuerAddress === "" ? " {{Issuer Address: }} " : issuerAddress}
      </p>
      <p className="normal size">
        3. &nbsp;&nbsp;That I entered{" "}
        {docType === "" ? "{{Document No}}" : docType.toUpperCase()} with{" "}
        {issuer === "" ? " {{Issuer: }} " : issuer} with Policy No.{" "}
        {docNo === "" ? "{{Document No}}" : docNo.toUpperCase()}
      </p>
      <p className="normal size">
        4. &nbsp;&nbsp;That the said{" "}
        {docType === "" ? "{{Document No}}" : docType} Policy got lost in
        transit and all efforts made to trace it proved abortive, hence this
        affidavit.
      </p>
      <p className="normal size">
        5. &nbsp;&nbsp;That this affidavit is now needed for record and official
        purposes.
      </p>
      <p className="normal size">
        6. &nbsp;&nbsp;That I depose this affidavit in good faith and in
        accordance with the Oaths Law of {state === "" ? "{{State}}" : state}{" "}
        State 2004.
      </p>
      <div className="auth1">
        {signature ? (
          <img src={`data:image/png;base64, ${signature}`} alt="" width="150" />
        ) : (
          <input type="text" name="name" id="name" />
        )}
        <p>DESPODENT</p>
      </div>
      <br />
      <br />
      <p>
        Sworn to at the {court === "" ? "{{Court}}" : court}
        Registry, {city === "" ? "{{City}}" : city}
      </p>
      <p>
        This{" "}
        <input
          type="text"
          name="name"
          id="name"
          value={date ? date.formatedDay : ""}
        />{" "}
        day of{" "}
        <input
          type="text"
          name="name"
          id="name"
          value={date ? date.formatedMonth : ""}
        />
        {wow.getFullYear()}
      </p>

      <div className="text-center ">
        {commissionerSignature && (
          <img
            src={`data:image/png;base64, ${commissionerSignature}`}
            alt=""
            width="150"
          />
        )}
      </div>
      <h3>
        <span className="primary mb-4 pb-4">
          BEFORE ME
          <br />
          <br />
          COMMISSIONER FOR OATHS
        </span>
      </h3>
    </div>
  );
};

export default TestDocument;
