import { useState, useCallback } from "react";
import { getUser } from "../../helper/storage";
import { useNavigate, useLocation } from "react-router-dom";
import HomeNavHeader from "../Home/subComponent/HomeNavHeader";
import Payment from "../Payment";
import { toast } from "react-toastify";
import { payForDocumentAPI } from "../../services/documentService";
import { useContext } from "react";
import { DocumentDisplayContext } from "../DocumentsDisplayContainer/hooks/DocumentDisplayContext";

const CheckOut = () => {
  const user = getUser();
  const navigate = useNavigate();
  const [payment, setPayment] = useState(false);

  const { documentDetails } = useContext(DocumentDisplayContext);
  console.log(documentDetails);
  const [checkoutState, setCheckOutState] = useState({
    btnLoader: false,
  });

  const payForDocument = useCallback(async (refNo, docId) => {
    setCheckOutState((prevState) => ({
      ...prevState,
      btnLoader: true,
    }));
    const dataToSend = {
      transaction_id: refNo,
      user_id: user.id,
      saved_document_id: docId,
    };

    console.log(dataToSend);

    await payForDocumentAPI(dataToSend)
      .then((res) => {
        console.log(res);
        toast.success("Payment Successfully");
        setCheckOutState((prevState) => ({
          ...prevState,
          btnLoader: false,
        }));
        navigate("/paymentAcknowledgement", {
          state: {
            document: res.data,
          },
        });
      })
      .catch((errors) => {
        toast.errors("Something went wrong");
        console.log(errors);
      });
  }, []);
  return (
    <div id="checkout-container">
      <HomeNavHeader />

      <div className="checkout-details container">
        <div className="row">
          <div className="col-75">
            <div className="col-container">
              <form>
                <div className="row">
                  {/* <div className="col-50">
                    <h3>Billing Address</h3>
                    <label for="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder=""
                    />
                    <label for="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input type="text" id="email" name="email" placeholder="" />
                    <label for="adr">
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input type="text" id="adr" name="address" placeholder="" />
                    <label for="city">
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input type="text" id="city" name="city" placeholder="" />
                  </div> */}

                  <div className="col-50">
                    <h3>Payment</h3>
                    <div className="d-flex">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      onClick={() => {
                        setPayment(false);
                      }}
                    />
                    <label for="html" className="mt-2 ">Pay With Card</label>
                    <span className="mx-3"></span>
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                      onClick={() => {
                        setPayment(true);
                      }}
                    />
                    <label for="css" className="mt-2 mr-4">Pay With PayStack</label>
                    </div>
                 

                   
            

                    {!payment && (
                      <>
                        <div className="icon-container">
                          <i
                            className="fa fa-cc-visa"
                            style={{ color: "navy" }}
                          ></i>
                          <i
                            className="fa fa-cc-amex"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ color: "red" }}
                          ></i>
                          <i
                            className="fa fa-cc-discover"
                            style={{ color: "orange" }}
                          ></i>
                        </div>
                        <label for="cname">Name on Card</label>
                        <input
                          type="text"
                          id="cname"
                          name="cardname"
                          placeholder=""
                        />

                        <div className="row">
                          <div className="col-50">
                            <label for="ccnum">Credit card number</label>
                            <input
                              type="text"
                              id="ccnum"
                              name="cardnumber"
                              placeholder=""
                            />
                          </div>
                          <div className="col-50">
                            <label for="expmonth">Exp Month</label>
                            <input
                              type="text"
                              id="expmonth"
                              name="expmonth"
                              placeholder="September"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-50">
                            <label for="expyear">Exp Year</label>
                            <input
                              type="text"
                              id="expyear"
                              name="expyear"
                              placeholder="2018"
                            />
                          </div>
                          <div className="col-50">
                            <label for="cvv">CVV</label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              placeholder="352"
                            />
                          </div>
                        </div>
                      
                        <label>
                  <input type="checkbox" checked="checked" name="sameadr" />{" "}
                  Shipping address same as billing
                </label>
                      
                      
                      </>
                    )}
                  </div>
                </div>


                <Payment
                  user={user}
                  btnLoader={checkoutState.btnLoader}
                  documentState={documentDetails.documentRef}
                  payForDocument={payForDocument}
                  amount ={documentDetails.price}
                />
              </form>
            </div>
          </div>

          <div className="col-25">
            <div className="col-container">
              <h4>
                Cart
                <span className="price" style={{ color: "black" }}>
                  <i className="fa fa-shopping-cart"></i>
                  <b>1</b>
                </span>
              </h4>
              <p>
                <span>{documentDetails.document_name}</span>{" "}
                <span className="price">#{documentDetails.price}</span>
              </p>
              <p>{documentDetails.documentRef}</p>

              <hr />
              <p>
                Total{" "}
                <span className="price" style={{ color: "black" }}>
                  <b>#{documentDetails.price}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CheckOut;
