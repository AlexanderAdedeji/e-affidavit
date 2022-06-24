import { useNavigate } from "react-router-dom";
import TemplateCard from "../subComponent/TemplateCard";

const Business = () => {
  const navigate = useNavigate();

  return (
    <div className="row">
      {["Car Insurance", "Land Affidavit", "House Affidavit", "Heirship"].map(
        (doc, idx) => (
          <div
            className="col-md-3 mb-5"
            onClick={() => {
          
              console.log(doc);
            }}
          >
            <TemplateCard name={doc} />
          </div>
        )
      )}
    </div>
  );
};

export default Business;
