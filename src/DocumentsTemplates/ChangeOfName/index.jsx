import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ChangeOfNameTemplate from "./subComponent/ChangeOfNameTemplate";
import ChangeOfTemplateFields from "./subComponent/ChangeOfTemplateFields";

const ChangeOfName = () => {
  const location = useLocation();
  console.log(location);

  const [documentVariables, setDocumentVariables] = useState({
    deponentImage:"",
    
  });

  return (
    <div className="documents">
      <div className="row">
        <div className="col-md-8">
          <ChangeOfNameTemplate />
        </div>

        <div className="col-md-4">
          <ChangeOfTemplateFields />
        </div>
      </div>
    </div>
  );
};

export default ChangeOfName;
