import {useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
function App() {


useEffect(()=>{
   document.title = "E-Affidavit";
},[])
 


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/updateProfile" element={<Profile />} />
          <Route path="/document/:id" element={<Documents />} />
          <Route path="/selectJusrisdiction/:id" element={<Jurisdiction />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/commissionerLogin" element={<CommissionerSignIn />} />
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/commissionerHome" element={<CommissionerHome />} />
          <Route path="/verifierHome" element={<VerifierHome />} />
          <Route
            path="/paymentAcknowledgement"
            element={<PaymentAcknowledgement />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

// AffidavitDocument

export default App;
