import React from "react";
import { useContext } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import HomeNavHeader from "../Home/subComponent/HomeNavHeader";

const DocumentDisplayContainer = () => {

  return (
    <div className="document-display-container">
      <HomeNavHeader />
      <div className="document-display-body">
        <Outlet />
      </div>
      <div>
        <div className="row">
          {/* <div className="col-md-6">
            <button>Save Document</button>
          </div>
          <div className="col-md-6">
            <button
              onClick={() =>
                navigate("/checkout", {
                  state: { savedDocumentId: "documentState.savedDocumentId" },
                })
              }
            >
              Checkout
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DocumentDisplayContainer;
