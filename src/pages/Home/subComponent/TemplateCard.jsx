import React from "react";
import Template from "../../../assets/images/affidavit.png";
import { useNavigate } from "react-router-dom";
const TemplateCard = ({affidavit}) => {
  const { name, id } = affidavit;

  const navigate = useNavigate();
  return (
    <div
      id="template-card"
      onClick={() => {
        navigate(`/selectJusrisdiction/${id + 1}`);
      }}
    >
      <img src={Template} alt="" className="img-fluid" />
      <p>{name}</p>
    </div>
  );
};

export default TemplateCard;
