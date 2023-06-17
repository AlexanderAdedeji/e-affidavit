import { useEffect } from "react";
import { useState, createContext } from "react";

export const CommissionerContext = createContext({
  signature: {},
  stamp: "",
  setSignature: () => {},
  StartSign: () => {},
  setStamp: () => {},
});

var imgWidth;
var imgHeight;

// DQITMJPLHZ

export const CommissionerProvider = ({ children }) => {
  const [signature, setSignature] = useState({
    commissionerSignature: "",
    deponentSignature: "",
  });
  const [stamp, setStamp] = useState("");
  const [whoIsSigning, setWhoIsSigning] = useState("");

  useEffect(() => {
    document.removeEventListener("SignResponse", console.log("done"), false);
    console.log({ whoIsSigning });
    if (whoIsSigning) {
      StartSign();
    }
  }, [whoIsSigning]);

  const StartSign = () => {
    console.log("startSignIn");
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

    document.removeEventListener("SignResponse", console.log("done"), false);
    document.addEventListener("SignResponse", SignResponse, false);
    document.removeEventListener("SignResponse", console.log("done"), false);

    var messageData = JSON.stringify(message);
    var element = document.createElement("MyExtensionDataElement");
    element.setAttribute("messageAttribute", messageData);
    document.documentElement.appendChild(element);
    var evt = document.createEvent("Events");
    evt.initEvent("SignStartEvent", true, false);
    element.dispatchEvent(evt);
  };
  const SignResponse = (event) => {
    var str = event.target.getAttribute("msgAttribute");
    var obj = JSON.parse(str);
    SetValues(obj);
  };

  function SetValues(objResponse) {
    debugger;
    console.log({ whoIsSigning }, "values");
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
        setSignature((prevState) => ({
          ...prevState,
          deponentSignature: obj.imageData,
        }));
      }
    }
  }

  const value = { signature, setWhoIsSigning, setSignature, setStamp, stamp };
  return (
    <CommissionerContext.Provider value={value}>
      {children}
    </CommissionerContext.Provider>
  );
};
