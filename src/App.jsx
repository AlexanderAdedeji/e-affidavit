import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Documents from "./pages/Documents";
import Payment from "./pages/Payment";

import "./assets/styles/main.scss";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CommissionerSignIn from "./pages/CommisionerSignIn";
import CommissionerHome from "./pages/CommissionerHome";
import PaymentAcknowledgement from "./pages/PaymentAcknowledgement";
import Jurisdiction from "./pages/Jurisdiction";
import LandingPage from "./pages/LandingPage";
import AffidavitDocument from "./pages/AffideavitDocument";
import CheckOut from "./pages/Checkout";
import VerifierHome from "./pages/VerifierHome";
import DocumentDisplayContainer from "./pages/DocumentsDisplayContainer";
import LossOfDocuments from "./DocumentsTemplates/LossOfDocuments";
import ChangeOfName from "./DocumentsTemplates/ChangeOfName";
import VerifierSignIn from "./pages/verifierSignIn";
import QRDocumentSearch from "./pages/QRDocumentSearch";
import MyDocuments from "./pages/MyDocuments";

function App() {
  useEffect(() => {
    document.title = "E-Affidavit";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/auth" element={<Auth />} />
        <Route path="/my-documents" element={<MyDocuments />} />
        <Route path="/home" element={<Home />} />
        <Route path="/updateProfile" element={<Profile />} />
        {/* <Route path="/document/:id" element={<Documents />} /> */}

        <Route path="/document/" element={<DocumentDisplayContainer />}>
          <Route path="nameChange" element={<ChangeOfName />} />
          <Route path="documentLoss" element={<LossOfDocuments />} />
        </Route>

        <Route path="/selectJusrisdiction/:id" element={<Jurisdiction />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/commissionerLogin" element={<CommissionerSignIn />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/commissionerHome" element={<CommissionerHome />} />
        <Route path="/verifierHome" element={<VerifierHome />} />
        <Route path="/verifierLogin" element={<VerifierSignIn />} />
        <Route
          path="/qr-searchDocument/:documentRef"
          element={<QRDocumentSearch />}
        />
        <Route
          path="/paymentAcknowledgement"
          element={<PaymentAcknowledgement />}
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
