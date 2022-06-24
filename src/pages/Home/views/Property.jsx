import { useEffect, useState } from "react";
import TemplateCard from "../subComponent/TemplateCard";
import { PropertyAffidavit } from "../../../affidavit";
import { useContext } from "react";
import { HomeContext } from "../context/Homecontext";

const Property = () => {
  const {searchKeyWord, searchItemsArr} = useContext(HomeContext);
  const [affidavitList, setAffidavitList] = useState(PropertyAffidavit);
  const [filteredAffidavits, setFilteredAffidavit] = useState(PropertyAffidavit);

  useEffect(() => {
    const newList = searchItemsArr(searchKeyWord, affidavitList);
    setFilteredAffidavit(newList);
  },[searchKeyWord]);
  return (
    <div className="row">
      {filteredAffidavits.map((affidavit) => (
        <div className="col-md-3 mb-5" key={affidavit.id}>
          <TemplateCard affidavit={affidavit} />
        </div>
      ))}
    </div>
  );
};

export default Property;
