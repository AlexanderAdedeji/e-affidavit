import { useCallback, useState } from "react";
import {
  attestDocument,
  fetchDocument,
} from "../../services/commissionerService";
import TestDocument from "../Documents/subComponent/TestDocument";
import NavBarHeader from "./subComponent/NavHeader";
import { getUser } from "../../helper/storage";
import { toast } from "react-toastify";
import NoFile from "../../component/NoFile";
import { dateTimeFormatter } from "../../helper/dateTimeFormat";
import SelectDropDown from "../../component/SelectDropdown";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

const CommissionerHome = () => {
  const user = getUser();
  console.log(user);
  const [search, setSearch] = useState("");
  const [date] = useState(dateTimeFormatter());

  const [state, setState] = useState({
    searchResult: {},
    searchComplete: false,
    btnLoader: false,
  });

  const appendSignature = (userData) => {
    console.log(user);
    if (userData.signature === null || userData.signature === "") {
      console.log("here");
      toast.error("Head to your profile to Upload Signature");
      return;
    }
    console.log(userData);
    setSignature((prevState) => ({
      ...prevState,
      commissionerSignature: userData?.signature,
    }));
  };

  const [signature, setSignature] = useState({
    base64: "",
    img: "",
    commissionerSignature: "",
  });

  var imgWidth;
  var imgHeight;
  const StartSign = (who) => {
    console.log(who);
    var isInstalled = document.documentElement.getAttribute(
      "SigPlusExtLiteExtension-installed"
    );
    if (!isInstalled) {
      alert(
        "SigPlusExtLite extension is either not installed or disabled. Please install or enable extension."
      );
      return;
    }

    var message = {
      firstName: "",
      lastName: "",
      eMail: "",
      location: "",
      imageFormat: 1,
      imageX: imgWidth,
      imageY: imgHeight,
      imageTransparency: false,
      imageScaling: false,
      maxUpScalePercent: 0.0,
      rawDataFormat: "ENC",
      minSigPoints: 25,
    };

    document.addEventListener(
      "SignResponse",
      (event) => SignResponse(event, who),
      false
    );

    var messageData = JSON.stringify(message);
    var element = document.createElement("MyExtensionDataElement");
    element.setAttribute("messageAttribute", messageData);
    document.documentElement.appendChild(element);
    var evt = document.createEvent("Events");
    evt.initEvent("SignStartEvent", true, false);
    element.dispatchEvent(evt);
  };
  const SignResponse = (event, who) => {
    console.log(who);
    var str = event.target.getAttribute("msgAttribute");
    var obj = JSON.parse(str);
    console.log(who === "deponent" ? "d" : "c");

    SetValues(obj, who);
  };

  function SetValues(objResponse, who) {
    var obj = null;
    if (typeof objResponse === "string") {
      obj = JSON.parse(objResponse);
    } else {
      obj = JSON.parse(JSON.stringify(objResponse));
    }
    if (
      obj.errorMsg != null &&
      obj.errorMsg !== "" &&
      obj.errorMsg !== "undefined"
    ) {
      alert(obj.errorMsg);
    } else {
      if (obj.isSigned) {
        if (who === "deponent") {
          setSignature((prevState) => ({
            ...prevState,
            base64: obj.imageData,
          }));
        }

        if (who === "commissioner") {
          setSignature((prevState) => ({
            ...prevState,
            commissionerSignature: obj.imageData,
          }));
        }
      }
    }
  }

  const getDocument = useCallback(async (searchItem) => {
    setState((prevState) => ({
      ...prevState,
      btnLoader: true,
    }));

    await fetchDocument(searchItem)
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          searchResult: res.data,
          searchComplete: true,
          btnLoader: false,
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          btnLoader: false,
          searchResult: {},
          searchComplete: false,
        }));
        toast.error("Document does not exist");
        console.log(error);
      });
    console.log(searchItem);
  }, []);

  const saveDocument = async () => {
    const htmlData = document.getElementById("documents").innerHTML;
    const dataToSend = {
      document_ref: search,
      document: htmlData,
    };
    try {
      const { data } = attestDocument(dataToSend);
      console.log(data);
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div className="commissioner-home">
      <NavBarHeader
        search={search}
        setSearch={setSearch}
        getDocument={getDocument}
        btnLoader={state.btnLoader}
      />

      {Object.keys(state.searchResult).length === 0 ? (
        <NoFile text="No Documents Found" />
      ) : (
        <div className="row doc-display">
          <div id="documents" className="col-md-9">
            <TestDocument
              {...state.searchResult}
              signature={signature.base64}
              commissionerSignature={signature.commissionerSignature}
              date={date}
            />
          </div>
          <div className="col-md-3 noprint  mb-3">
            {/* {!signature.base64 && ( */}
            <div className="text-center">
              <button
                className="mx-3 btn btn-dark w-75"
                disabled={false}
                onClick={() => {
                  StartSign("deponent");
                }}
              >
                Deponent Sign
              </button>
            </div>
            {/* )} */}
            {signature.base64 && (
              <div className="mt-3">
                <SelectDropDown>
                  <DropdownToggle color="" className="border px-3" caret>
                    <span className="pr-5">Commissioner Signature</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-container">
                    <DropdownItem
                      onClick={() => {
                        StartSign("commissioner");
                      }}
                    >
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

            <div className="text-center my-3">
              <button
                className="mr-3 btn btn-dark w-75"
                disabled={!signature.base64 || !signature.commissionerSignature}
                onClick={() => {
                  saveDocument();
                }}
              >
                Save Document
              </button>
            </div>

            {signature.commissionerSignature && (
              <div className="text-center my-3">
                <button
                  className="mr-3 btn btn-dark w-75"
                  disabled={
                    !signature.base64 || !signature.commissionerSignature
                  }
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
