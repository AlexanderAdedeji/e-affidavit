import { useCallback, useContext, useState } from "react";
import {
  attestDocument,
  fetchDocument,
} from "../../services/commissionerService";
// import TestDocument from "../Documents/subComponent/TestDocument";
import NavBarHeader from "./subComponent/NavHeader";
import { getUser } from "../../helper/storage";
import { toast } from "react-toastify";
import NoFile from "../../component/NoFile";
import { dateTimeFormatter } from "../../helper/dateTimeFormat";
import SelectDropDown from "../../component/SelectDropdown";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import LossOfDocumentTemplate from "../../DocumentsTemplates/LossOfDocuments/subComponent/LossOfDocumentTemplate";
import ChangeOfName from "../../DocumentsTemplates/ChangeOfName";
import { CommissionerContext } from "./hooks/CommissionerContext";
import DocumentLandingPage from "../../component/DocumentLandingPage";
import Swal from "sweetalert2";

const CommissionerHome = () => {
  const user = getUser();
  const [documentTemplate, setDocumentTemplate] = useState("");
  const { setWhoIsSigning, signature, setSignature, setStamp, stamp } =
    useContext(CommissionerContext);
  const [search, setSearch] = useState("");
  const [date] = useState(dateTimeFormatter());

  const [state, setState] = useState({
    searchResult: {},
    searchComplete: false,
    landing: true,
    btnLoader: false,
    saveBtnLoader: false,
  });

  const [actionsToShow, setActionsToShow] = useState({
    attestDocument: false,
    saveDocument: false,
    print: false,
  });

  const appendSignature = (userData) => {
    if (userData.signature === null || userData.signature === "") {
      console.log("here");
      // toast.error("Head to your profile to Upload Signature");

      Swal.fire(
        "Warning",
        "There is no signature on your profile,<br/> Please do head to your profile to upload your signture",
        "info"
      );
      return;
    }

    setSignature((prevState) => ({
      ...prevState,
      commissionerSignature: userData?.signature,
    }));
  };

  const appendStamp = (userData) => {
    if (userData.stamp === null || userData.stamp === "") {
      Swal.fire(
        "Warning",
        "There is no stamp on your profile,<br/> Please do head to your profile to upload your stamp",
        "info"
      );
      return;
    }

    setStamp(userData?.stamp);
  };

  const getDocument = useCallback(async (searchItem) => {
    setState((prevState) => ({
      ...prevState,
      btnLoader: true,
    }));

    await fetchDocument(searchItem)
      .then((res) => {
        console.log(res.data);
        setDocumentTemplate(res.data?.document_category);
        setState((prevState) => ({
          ...prevState,
          searchResult: res.data,
          searchComplete: true,
          landing: false,
          btnLoader: false,
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          btnLoader: false,
          landing: false,
          searchResult: {},
          searchComplete: false,
        }));
        toast.error("Document does not exist");
        console.log(error);
      });
    console.log(searchItem);
  }, []);

  const saveDocument = async () => {
    setState((prevState) => ({
      ...prevState,
      saveBtnLoader: true,
    }));
    const htmlData = document.getElementById("documents").innerHTML;
    const dataToSend = {
      document_ref: search,
      document: htmlData,
    };
    try {
      const { data } = attestDocument(dataToSend);
      setState((prevState) => ({
        ...prevState,
        saveBtnLoader: false,
      }));
      setActionsToShow((prevState) => ({
        ...prevState,
        saveDocument: false,
        print: true,
      }));
      Swal.fire("Good job!", "Document Saved Successfully", "success");
      toast.success("DocumentSaved Successfully");
      console.log(data);
    } catch (errors) {
      setState((prevState) => ({
        ...prevState,
        saveBtnLoader: false,
      }));
      console.log(errors);
    }
  };

  const commissionerSignHandler = async () => {
    setWhoIsSigning("COMMISSIONER");
  };

  const deponentSignHandler = async () => {
    setWhoIsSigning("DEPONENT");
  };

  return (
    <div className="commissioner-home">
      <NavBarHeader
        search={search}
        setSearch={setSearch}
        getDocument={getDocument}
        btnLoader={state.btnLoader}
      />

      {state.landing ? (
        <DocumentLandingPage text="" />
      ) : Object.keys(state.searchResult).length === 0 ? (
        <NoFile text="No Documents Found" />
      ) : (
        <div className="row doc-display">
          <div id="documents" className="col-md-9">
            {documentTemplate === "documentLoss" && (
              <LossOfDocumentTemplate
                {...state.searchResult}
                deponentSignature={signature.deponentSignature}
                commissionerSignature={signature.commissionerSignature}
                date={date}
                commissionerStamp={stamp}
              />
            )}
            {documentTemplate === "nameChange" && <ChangeOfName />}
          </div>
          <div className="col-md-3 noprint  mb-3">
            {!signature.deponentSignature && (
              <div className="text-center">
                <button
                  className="mx-3 btn btn-dark w-75"
                  disabled={false}
                  onClick={deponentSignHandler}
                >
                  Deponent Sign
                </button>
              </div>
            )}
            {signature.deponentSignature && !signature.commissionerSignature && (
              <div className="mt-3">
                <SelectDropDown>
                  <DropdownToggle color="" className="border px-3" caret>
                    <span className="pr-5">Commissioner Signature</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-container">
                    <DropdownItem onClick={commissionerSignHandler}>
                      Sign
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        appendSignature(user);
                      }}
                    >
                      Append Signature
                    </DropdownItem>
                  </DropdownMenu>
                </SelectDropDown>
              </div>
            )}

            {signature.commissionerSignature &&
              signature.deponentSignature &&
              !stamp && (
                <div className="text-center my-3">
                  <button
                    className="mr-3 btn btn-dark w-75"
                    onClick={() => {
                      appendStamp(user);
                    }}
                  >
                    Attest Stamp
                  </button>
                </div>
              )}

            {stamp && !actionsToShow.print && (
              <div className="text-center my-3">
                <button
                  className="mr-3 btn btn-dark w-75"
                  onClick={() => {
                    saveDocument();
                  }}
                >
                  {state.saveBtnLoader ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <span>Save Document</span>
                  )}
                </button>
              </div>
            )}

            {actionsToShow.print && (
              <div className="text-center my-3">
                <button
                  className="mr-3 btn btn-dark w-75"
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print Affidavit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionerHome;
