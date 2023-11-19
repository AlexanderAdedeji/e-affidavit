import LandingDocumentImage from "../assets/images/landingDocumentImage.svg";

import React from "react";

const DocumentLandingPage = ({ text, button, btnText, btnAction }) => {
  return (
    <div id="no-file">
      <img src={LandingDocumentImage} alt="" width="300" />
      <p>{text}</p>
      {button && (
        <button className="btn btn-success" onClick={() => btnAction()}>
          {btnText}
        </button>
      )}
    </div>
  );
};

export default DocumentLandingPage;
