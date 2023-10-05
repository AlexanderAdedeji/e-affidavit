import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landingPage img js-fullheight">
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h1 className="heading-section">E-Affidavit</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h3 className="mb-4 text-center">
                  Create Your Affidavit Document With ease
                </h3>

                {/* <p className="w-100 text-center">
                  and pay almost nothing!!!!!.
                </p> */}
                <div className="social d-flex text-center">
                  <a
                    className="px-2 py-2 mr-md-1 rounded redirect-a"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    onClick={() => {
                      navigate("/auth");
                    }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{
        position:"absolute",
        right:"30px",
        bottom:"10px"
      }}>
        <iframe
          src="https://webchat.botframework.com/embed/alex-restaurant-kb-bot?s=yI2pod5nu8s._Mrg51WFXWgHDWGlp9LUo0uDAfsA2zXEfm4n1EHZmz0"
 
          style={{minWidth:"300px", width:"100%", minHeight:"300px"}}
        ></iframe>
      </div>
    </div>
  );
};

export default LandingPage;
