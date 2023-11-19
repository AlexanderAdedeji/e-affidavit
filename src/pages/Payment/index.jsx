import { useState } from "react";
import PaystackPop from "@paystack/inline-js";

const Payment = ({ user, documentState, payForDocument, btnLoader }) => {
  const payStack = (data) => {
    console.log(data);
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_7bf9c10664ff322e36d94454c6d46dc4ba318cf1",
      amount: 2000,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
      onSuccess(transaction) {
        console.log(documentState);
        payForDocument(transaction.reference, documentState);
      },
    });
  };

  return (
    <div className="text-center">
      <button
        className="btn btn-outline-dark  w-50"
        type="button"
        onClick={() => {
          payStack(user);
        }}
        // disabled={documentState.paymentBtnDisabled}
      >
        {btnLoader ? (
          <div class="spinner-border text-white sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <span> Proceed To Checkout</span>
        )}
      </button>
    </div>
  );
};

export default Payment;
