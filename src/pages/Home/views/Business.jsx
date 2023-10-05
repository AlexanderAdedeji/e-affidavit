import { useState, useContext, useEffect } from "react";
import { BusinessAffidavit } from "../../../affidavit";

import { HomeContext } from "../context/Homecontext";
import TemplateCard from "../subComponent/TemplateCard";

const Business = () => {
  const { searchKeyWord, searchItemsArr } = useContext(HomeContext);
  const [affidavitList, setAffidavitList] = useState(BusinessAffidavit);
  const [filteredAffidavits, setFilteredAffidavit] =
    useState(BusinessAffidavit);

  useEffect(() => {
    const newList = searchItemsArr(searchKeyWord, affidavitList);
    setFilteredAffidavit(newList);
  }, [searchKeyWord]);
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

export default Business;
