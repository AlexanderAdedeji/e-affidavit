import NoFileImg from "../assets/images/noFile.svg";

import React from "react";

const NoFile = ({ text, button, btnText, btnAction }) => {
  return (
    <div id="no-file">
      <img src={NoFileImg} alt="" width="200" />
      <p>{text}</p>
      {button && (
        <button className="btn btn-success" onClick={() => btnAction()}>
          {btnText}
        </button>
      )}
    </div>
  );
};

export default NoFile;
