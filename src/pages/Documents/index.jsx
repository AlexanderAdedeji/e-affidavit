import { useState, useCallback } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import TestDocument from "./subComponent/TestDocument";
import { getUser } from "../../helper/storage";
import Payment from "../Payment/";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  saveDocumentsAPI,
  payForDocumentAPI,
} from "../../services/documentService";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FieldSection from "./subComponent/FieldSection";
import HomeNavHeader from "../Home/subComponent/HomeNavHeader";

const Documents = () => {
  const user = getUser();
  let { id } = useParams();

  let navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const [documentState, setDocumentState] = useState({
    saveBtnLoader: false,
    paymentBtnDisabled: true,
    savedDocumentId: "",
    saveDocumentDetails: {},
  });

  const [btnLoader, setBtnLoader] = useState({
    saveBtn: false,
    submitBtn: false,
  });
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

    issuer: "",
    issuerAddress: "",
  });

  const saveDocument = async () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        saveDocuments(documentVariables);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const saveDocuments = useCallback(async (data) => {
    setBtnLoader((prevState) => ({
      ...prevState,
      saveBtn: true,
    }));
    const dataToSend = {
      user_id: user.id,
      document_category_id: id,
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

      issuer: data.issuer,
      issuerAddress: data.issuerAddress,
    };
    await saveDocumentsAPI(dataToSend)
      .then((res) => {
        console.log(res);
        toast.success("Document Saved Successfully");
        Swal.fire("Saved!", "", "success");
        setDocumentState((prevState) => ({
          ...prevState,
          paymentBtnDisabled: false,
          savedDocumentId: res.data.id,
        }));
        setBtnLoader((prevState) => ({
          ...prevState,
          saveBtn: false,
        }));
      })
      .catch((erors) => {
        toast.error("Something Went Wrong");
        setBtnLoader((prevState) => ({
          ...prevState,
          saveBtn: false,
        }));
      });
  }, []);

  return (
    <div className="documents ">
      <HomeNavHeader />
      <div className="row">
        <div className="col-md-8">
          <TestDocument {...documentVariables} />
          <div className="row">
            <div className="col-md-6 text-center">
              <button
                className="btn btn-dark w-50"
                onClick={() => {
                  saveDocument();
                }}
              >
                {btnLoader.saveBtn ? (
                  <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <span>Save</span>
                )}
              </button>
            </div>
            <div className="col-md-6">
              <button
                onClick={() =>
                  navigate("/checkout", {
                    state: { savedDocumentId: documentState.savedDocumentId },
                  })
                }
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <FieldSection
            {...documentVariables}
            setDocumentVariables={setDocumentVariables}
          />
        </div>
      </div>
    </div>
  );
};

export default Documents;
