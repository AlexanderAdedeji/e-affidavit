import React from "react";
import Template from "../../../assets/images/affidavit.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { DocumentDisplayContext } from "../../DocumentsDisplayContainer/hooks/DocumentDisplayContext";

// const DislayDetails = ({ name, price }) => {
//   return (
//     <div id="document-display-details">
//       <p className="name">{name}</p>
//       <p className="price">{price}</p>
//     </div>
//   );
// };

const TemplateCard = ({ affidavit }) => {
  const { updateDocumentRef, documentDetails } = useContext(
    DocumentDisplayContext
  );
  console.log({ documentDetails });
  const navigate = useNavigate();
  const { name, id, route, price } = affidavit;

  const documentTitle = `<div id="document-display-details">
  <p id="name">${name}</p>
  <p id="price"> ₦${price}</p>
  </div>`;

  const showDocmentDetails = () => {
    Swal.fire({
      title: documentTitle,
      confirmButtonText: "Ok",
      text: "Click OK to continue.",
      imageUrl: Template,
      imageWidth: 350,
      imageHeight: 400,
      imageAlt: "Custom image",
    }).then((result) => {
      if (result.isConfirmed) {
        updateDocumentRef({ name: name, price: price });
        navigate(`/selectJusrisdiction/${"documentLoss"}`);
      }
    });
  };

  return (
    <div id="template-card" onClick={showDocmentDetails}>
      <img src={Template} alt="" className="img-fluid" />
      <p>{name}</p>
    </div>
  );
};

export default TemplateCard;
