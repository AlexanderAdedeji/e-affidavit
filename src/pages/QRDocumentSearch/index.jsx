import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DocumentLandingPage from "../../component/DocumentLandingPage";
import { fetchAttestedDocument } from "../../services/verifierService";
import { toast } from "react-toastify";
import NoFile from "../../component/NoFile";
import QRDocumentSearchNavHeader from "./subComponent/QRDocumentSearchNavHeader";

const QRDocumentSearch = () => {
  const { documentRef } = useParams();
  const [documentVerified, setDocument] = useState(null);
  const [verifierState, setVerifierState] = useState({
    btnLoader: false,
    noFile: false,
  });

  useEffect(() => {
    console.log(documentRef);
  }, []);

  const getDocument = async (searchData) => {
    setVerifierState((prevState) => ({
      ...prevState,
      btnLoader: true,
    }));
    try {
      const { data } = await fetchAttestedDocument(searchData);
      setDocument(data);
      setVerifierState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
      toast.success("Document Found");
    } catch (errors) {
      setVerifierState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
      toast.error("Document Not Found");
    }
  };

  useEffect(() => {
    if (documentVerified) {
      document.getElementById("verified-document").innerHTML =
        documentVerified.document;
    }
  }, [documentVerified]);

  return (
    <div>
      <QRDocumentSearchNavHeader />

      <div id="verified-document">
        {verifierState.noFile ? (
          <NoFile text="No Documents Found" />
        ) : (
          <DocumentLandingPage text="" />
        )}
      </div>
    </div>
  );
};

export default QRDocumentSearch;
