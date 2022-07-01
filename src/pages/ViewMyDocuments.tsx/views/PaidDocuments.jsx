import React from "react";
import { useEffect, useState } from "react";
import PageLoader from "../../../component/Spinner/PageLoader";
import LossOfDocumentTemplate from "../../../DocumentsTemplates/LossOfDocuments/subComponent/LossOfDocumentTemplate";
import BigCardLoader from "../../../Loaders/BigCardLoader";
import { fetchDocument } from "../../../services/commissionerService";

const PaidDocuments = ({ id }) => {
  const [documentVariables, setDocumentVariables] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getDocument();
  }, []);

  const getDocument = async () => {
    setLoading(true);
    await fetchDocument(id)
      .then((res) => {
        console.log(res);
        setDocumentVariables(res.data);
        setLoading(false);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  return (
    <div>
      {loading ? (
        <PageLoader />
      ) : (
        <LossOfDocumentTemplate {...documentVariables} />
      )}
    </div>
  );
};

export default PaidDocuments;
