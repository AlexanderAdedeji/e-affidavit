import {useState, useCallback} from "react";
import { getUser } from "../../helper/storage";
import {useNavigate,useLocation} from "react-router-dom"
import HomeNavHeader from "../Home/subComponent/HomeNavHeader";
import Payment from "../Payment";
import { toast } from "react-toastify"; 
import { payForDocumentAPI } from "../../services/documentService";


const CheckOut = () => {
    const user = getUser()
    const navigate = useNavigate()
    const {state} = useLocation()
    console.log(state.savedDocumentId)
    const [checkoutState, setCheckOutState]= useState({
        btnLoader:false
    })

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
    <div className="checkout-container">
      <HomeNavHeader />

      <div className="checkout-details">
        <div>
        <Payment
                user={user}
                btnLoader={checkoutState.btnLoader}
                documentState={state.savedDocumentId}
                payForDocument={payForDocument}
              />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
