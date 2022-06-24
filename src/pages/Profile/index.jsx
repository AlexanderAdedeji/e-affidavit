import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { getUser, setUserSession } from "../../helper/storage";
import {
  uploadProfilePicture,
  signatureUpload,
} from "../../services/profileService";
import NavBarHeader from "../CommissionerHome/subComponent/NavHeader";

import "./profile.css";

const Profile = () => {
  const user = getUser();
  const [signature, setSignature] = useState("");
  const [signatureBtn, setSignatureBtn] = useState(false);
  console.log(user);
  const [profilePic, setProfilePic] = useState([]);

  // const uploadImage = useCallback(async (image) => {
  //   const fd = new FormData();
  //   fd.append("image", image, image.phot_name);
  //   await uploadProfilePicture(fd)
  //     .then((res) => {
  //       toast.success(res?.data.message);
  //       // getNamesOfImagesToBeUploaded();
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //       }
  //       if (!error.response) {
  //       }
  //     });
  // }, []);

  var imgWidth;
  var imgHeight;
  const StartSign = () => {
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

    document.addEventListener("SignResponse", SignResponse, false);
    var messageData = JSON.stringify(message);
    var element = document.createElement("MyExtensionDataElement");
    element.setAttribute("messageAttribute", messageData);
    document.documentElement.appendChild(element);
    var evt = document.createEvent("Events");
    evt.initEvent("SignStartEvent", true, false);
    element.dispatchEvent(evt);
  };
  const SignResponse = (event) => {
    console.log("despodent");
    var str = event.target.getAttribute("msgAttribute");
    var obj = JSON.parse(str);
    console.log();
    SetValues(obj);
  };
  function SetValues(objResponse) {
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
        setSignature(obj.imageData);
        // setSignature((prevState) => ({
        //   ...prevState,
        //   base64: obj.imageData,
        // }));
      }
    }
  }

  const updateSignature = useCallback(async (signatureString) => {
    setSignatureBtn(true);
    const dataToSend = {
      id: user.id,
      signature: signatureString,
    };
    console.log(dataToSend);
    await signatureUpload(dataToSend)
      .then((res) => {
        setUserSession(res.data);
        toast.success("Signature Uploaded Successfully");
        setSignatureBtn(false);
      })
      .catch((errors) => {
        console.log(errors);
        toast.error("Something went wrong");
        setSignatureBtn(false);
      });
  }, []);


  return (
    <div className="profile">
      <NavBarHeader profile={true} />
      <div className="container-xl px-4 mt-4">
        {/* <!-- Account page navigation--> */}
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            {/* <!-- Profile picture card--> */}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                {/* <!-- Profile picture image--> */}
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                  // width="50"
                  height="50"
                />
                {/* <!-- Profile picture help block--> */}
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                {/* <!-- Profile picture upload button--> */}

                <input
                  type="file"
                  className="btn "
                  accept="image/png, image/jpeg"
                  onChange={(e) => {
                    console.log(e);
                    setProfilePic(e.target.value);
                  }}
                />
                <button className="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
            <div className="card mt-4 mb-xl-0">
              <div className="card-header">Add Signature</div>
              <div className="card-body text-center">
                <div className="small font-italic text-muted mb-4">
                  {/* <!-- Profile picture upload button--> */}

                  {signature ? (
                    <img
                      src={`data:image/png;base64, ${signature}`}
                      alt=""
                      width="150"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    signature ? updateSignature(signature) : StartSign();
                  }}
                >
                  {" "}
                  {signatureBtn ? (
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <span> {signature ? "Upload Signature" : "Sign"} </span>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            {/* <!-- Account details card--> */}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  {/* <!-- Form Group (username)--> */}
                  <div className="mb-3">
                    <label className="small mb-1" for="inputUsername">
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="text"
                      placeholder="Enter your Email"
                    />
                  </div>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                      />
                    </div>
                    {/* <!-- Form Group (last name)--> */}
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  {/* <!-- Form Row        --> */}
                  <div className="row gx-3 mb-3">
                    {/* <!-- Form Group (organization name)--> */}
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputOrgName">
                        Middle Name
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your middle name"
                      />
                    </div>
                    {/* <!-- Form Group (location)--> */}
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3">
                    {/* <!-- Form Group (birthday)--> */}
                    <div className="col-md-12">
                      <label className="small mb-1" for="inputBirthday">
                        Address
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    {/* <!-- Form Group (birthday)--> */}

                    {/* <div className="col-md-12">
                      <label className="small mb-1" for="inputBirthday">
                        Upload SIgnature
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="file"
                        name="birthday"
                        placeholder="Enter your birthday"
                      />
                    </div> */}
                  </div>
                  {/* <!-- Save changes button--> */}
                  <button className="btn btn-primary" type="button">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;