import { useState, useEffect } from "react";
import { fetchAttestedDocument } from "../../services/verifierService";

const VerifierHome = () => {
  const [documentVerified, setDocument] = useState({});
  const [search, setSearch] = useState("");

  const getDocument = async (searchData) => {
    console.log(search)
    try {
      const { data } = await fetchAttestedDocument(searchData);
      setDocument(data);
      console.log(data)
    } catch (errors) {
      console.log("hello word");
    }
  };



  useEffect(()=>{
    document.getElementById("verified-document").innerHTML=documentVerified.document
  },[documentVerified])

  return (
    <div>
      <input
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getDocument(search);
        }}
      >
        Search
      </button>

      <div id="verified-document">{document.document}</div>
    </div>
  );
};

export default VerifierHome;
