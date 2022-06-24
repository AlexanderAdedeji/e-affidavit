
import TemplateCard from "../subComponent/TemplateCard";

const NameChange = () => {


  return (
    <div className="row">
      {[
        "Loss Of Document",
        "Name Change",
        "Date of Birth",
        "Date of Wedding",
        "State Of Origin",
        "Identity Theft",
        "Financial Affidavit",
        "Affidavit of Consent",
        "Affidavit of Surety/Bail",
        "Affidavit of Good Conduct",
        "Affidavit of Loss Of Document",
        "Affidavit of Relationship",
        "Affidavit of Loss of Phone/Sim Pack",
      ].map((doc, idx) => (
        <div className="col-md-3 mb-5" key={idx}>
          <TemplateCard name={doc} id={idx} />
        </div>
      ))}
    </div>
  );
};

export default NameChange;
