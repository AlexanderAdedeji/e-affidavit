import { useState, useEffect } from "react";
import DocumentLandingPage from "../../component/DocumentLandingPage";
import { fetchAttestedDocument } from "../../services/verifierService";
import VerifierNavHeader from "./subComponent/VerifierNavHeader";
import { toast } from "react-toastify";
import NoFile from "../../component/NoFile";

const VerifierHome = () => {
  const [documentVerified, setDocument] = useState(null);
  const [search, setSearch] = useState("");
  const [verifierState, setVerifierState] = useState({
    btnLoader: false,
    noFile: false,
  });
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
      <VerifierNavHeader
        getDocument={getDocument}
        setSearch={setSearch}
        search={search}
        btnLoader={verifierState.btnLoader}
      />

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

export default VerifierHome;
