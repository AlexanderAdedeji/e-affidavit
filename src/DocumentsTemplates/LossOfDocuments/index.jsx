import { useContext, useState, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../helper/storage";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { DocumentDisplayContext } from "../../pages/DocumentsDisplayContainer/hooks/DocumentDisplayContext";
import { saveDocumentsAPI } from "../../services/documentService";
import LossOfDocumentFields from "./subComponent/LossOfDocumentFields";
import LossOfDocumentTemplate from "./subComponent/LossOfDocumentTemplate";

const LossOfDocuments = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();
  const user = getUser();

  const [btnLoader, setBtnLoader] = useState(false);

  const { saveDocumentAlert, checkoutNavigate, documentDetails } = useContext(
    DocumentDisplayContext
  );
  const [documentVariables, setDocumentVariables] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    address: "",
    gender: "",
    religion: "",
    nationality: "",
    state: location.state.state,
    court: location.state.court,
    city: location.state.jurisdiction,
    docNo: "",
    docType: "",
    deponentImage: "",
    issuer: "",
    issuerAddress: "",
  });

  const convert2base64 = (e) => {
    
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setDocumentVariables((prevState) => ({
        ...prevState,
        deponentImage: reader.result.toString(),
      }));
    };
    reader.readAsDataURL(file);
  };

  const saveDocuments = async (data) => {
    // setBtnLoader(true);
    const dataToSend = {
      user_id: user.id,
      document_category_id: location.state.id,
      first_name: data.first_name,
      last_name: data.last_name,
      middle_name: data.middle_name,
      address: data.address,
      gender: data.gender,
      religion: data.religion,
      nationality: data.nationality,
      state: data.state,
      court: data.court,
      city: data.city,
      docNo: data.docNo,
      docType: data.docType,
      deponentImage: data.deponentImage,
      issuer: data.issuer,
      issuerAddress: data.issuerAddress,
      price: documentDetails.price,
    };
    return await saveDocumentsAPI(dataToSend);
  };
  const onDocumentSaveHandler = () =>
    saveDocumentAlert(() => saveDocuments(documentVariables));
  return (
    <div className="documents">
      <div className="row">
        <div className="col-md-8">
          <LossOfDocumentTemplate {...documentVariables} />
        </div>

        <div className="col-md-4">
          <LossOfDocumentFields
            {...documentVariables}
            setDocumentVariables={setDocumentVariables}
            convert2base64={convert2base64}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center ">
          <button onClick={onDocumentSaveHandler} className="btn btn-dark w-50">
            {" "}
            {btnLoader ? (
              <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              <span>Save Document</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LossOfDocuments;
