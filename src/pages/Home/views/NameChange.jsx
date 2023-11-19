import { useEffect, useState } from "react";
import { useContext } from "react";
import { HomeContext } from "../context/Homecontext";
import TemplateCard from "../subComponent/TemplateCard";
import { personalAffidavit } from "../../../affidavit";

const NameChange = () => {
  const { searchKeyWord, searchItemsArr } = useContext(HomeContext);

  const [affidavitList, setAffidavitList] = useState(personalAffidavit);

  console.log(affidavitList)
  const [filteredAffidavits, setFilteredAffidavits] =
    useState(personalAffidavit);

  useEffect(() => {
    const newList = searchItemsArr(searchKeyWord, affidavitList);
    setFilteredAffidavits(newList);
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

export default NameChange;
