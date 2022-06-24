import { useNavigate } from "react-router-dom";
import TemplateCard from "../subComponent/TemplateCard";

const Property = () => {
  const navigate = useNavigate();

  return (
    <div className="row">
      {["Car Insurance", "Land Affidavit", "House Affidavit", "Heirship"].map(
        (doc, idx) => (
          <div className="col-md-3 mb-5">
            <TemplateCard name={doc} />
          </div>
        )
      )}
    </div>
  );
};

export default Property;
