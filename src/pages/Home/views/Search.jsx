import { useEffect, useState } from "react";
import TemplateCard from "../subComponent/TemplateCard";
import { PropertyAffidavit, personalAffidavit } from "../../../affidavit";
import { useContext } from "react";
import { HomeContext } from "../context/Homecontext";

const Search = () => {
  const { searchKeyWord, searchItemsArr } = useContext(HomeContext);
  const [affidavitList, setAffidavitList] = useState([
    ...PropertyAffidavit,
    ...personalAffidavit,
  ]);
  console.log(affidavitList)
  const [filteredAffidavits, setFilteredAffidavit] =
    useState([...PropertyAffidavit,...personalAffidavit]);

  useEffect(() => {
    console.log(affidavitList)
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

export default Search;
