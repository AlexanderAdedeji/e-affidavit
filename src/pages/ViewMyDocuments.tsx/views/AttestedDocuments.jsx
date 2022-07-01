import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BigCardLoader from "../../../Loaders/BigCardLoader";
import { commisionerLogin } from "../../../services/commissionerService";
import { fetchAttestedDocument } from "../../../services/verifierService";

const AttestedDocuments = ({ id }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getDocument();
  }, []);

  const getDocument = async () => {
    setLoading(true);
    await fetchAttestedDocument(id)
      .then((res) => {
        console.log(res);
        setLoading(false);
        document.getElementById("attest-documents").innerHTML = res.data.document;
      
      })
      .catch((errors) => {
        setLoading(false);
      });
  };
  return (
    <div>
      {loading ? (
        <BigCardLoader />
      ) : (
        <div id="attest-documents">
        
        </div>
      )}
    </div>
  );
};

export default AttestedDocuments;
