import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const QRDocumentSearchNavHeader = () => {
  return (
    <div>
      {" "}
      <div id="navbar-header" className="noprint">
        <aside className="navbar-left">
          <h4> E-AFFIDAVIT</h4>
        </aside>
        <aside className="navbar-right">
          <Link to="/commissionerHome" className="navlinks">
            <small>Home</small>
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default QRDocumentSearchNavHeader;
