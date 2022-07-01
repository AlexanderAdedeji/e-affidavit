import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../../helper/storage";

const PaymentAcknowledgement = () => {
  const user = getUser();
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)






  

  return (
    <div className="payment-acknowledgement row">
      <div className="col-md-8">
        <h4>
          {" "}
          Dear {location.state.document.first_name}{" "}
          {location.state.document.last_name}{" "}
        </h4>
        <p>
          Your Payment was successful and has been acknowledge. Your Document
          code is{" "}
          <span className="text-bold text-danger">
            {location.state.document.id}
          </span>
        </p>
      </div>

      <div className="col-md-4">
        <div>
          <img
            src={`data:image/png;base64, ${location.state.document.qr_code}`}
            alt=""
            width="150"
          />
          <p>{location.state.document.id}</p>
        </div>
      </div>

      <div className="noprint">
        <u>
          <h6>Note</h6>
        </u>
        <p>
          Click on the button below to print this page, you will need it to
          print your document.
        </p>

        <button
          className="btn btn-dark noprint mx-4"
          onClick={() => {
            window.print();
          }}
        >
          Print Page
        </button>

        <button
          className="btn btn-dark noprint"
          onClick={() => {
            navigate("/my-documents");
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PaymentAcknowledgement;
