import { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { useLocation } from "react-router-dom";

const Payment = ({ user, documentState, payForDocument, btnLoader, amount }) => {
  console.log({documentState})
  const location = useLocation()

  console.log(location)
  const payStack = (amount) => {
    
    console.log(user);
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_7bf9c10664ff322e36d94454c6d46dc4ba318cf1",
      amount: amount*100, 
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      onSuccess(transaction) {
        console.log(documentState);
        payForDocument(transaction.reference, documentState);
      },
    });
  };

  return (
    <div className="text-center">
      <button
        className="btn btn-outline-dark w-50"
        type="button"
        onClick={() => {
          payStack(amount);
        }}
        // disabled={documentState.paymentBtnDisabled}
      >
        {btnLoader ? (
          <div className="spinner-border text-white sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <span> Proceed To Checkout</span>
        )}
      </button>
    </div>
  );
};

export default Payment;
