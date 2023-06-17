import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DocumentLandingPage from "../../component/DocumentLandingPage";
import { fetchAttestedDocument } from "../../services/verifierService";
import { toast } from "react-toastify";
import NoFile from "../../component/NoFile";
import QRDocumentSearchNavHeader from "./subComponent/QRDocumentSearchNavHeader";
import DocumentLoader from "../../component/Spinner/DocumentLoader";

const QRDocumentSearch = () => {
  const { documentRef } = useParams();
  const [documentVerified, setDocument] = useState(null);
  const [verifierState, setVerifierState] = useState({
    loading: true,
    noFile: false,
  });

  useEffect(() => {
    getDocument(documentRef);
  }, [documentRef]);

  const getDocument = async (searchData) => {
    setVerifierState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    try {
      const { data } = await fetchAttestedDocument(searchData);
      setDocument(data);
      setVerifierState((prevState) => ({
        ...prevState,
        loading: false,
      }));
      toast.success("Document Found");
    } catch (errors) {
      setVerifierState((prevState) => ({
        ...prevState,
        loading: false,
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

      <div id="verified-document" className="mt-3">
        {verifierState.loading ? <DocumentLoader /> : <NoFile />}
      </div>
    </div>
  );
};

export default QRDocumentSearch;
