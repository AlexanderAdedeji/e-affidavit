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
    <>
      <button
        className="btn btn-outline-dark  w-50"
        onClick={() => {
          payStack(user);
        }}
        // disabled={documentState.paymentBtnDisabled}
      >
        {btnLoader.submitBtn ? (
          <div class="spinner-border text-dark sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <> Submit</>
        )}
      </button>
    </>
  );
};

export default Payment;
