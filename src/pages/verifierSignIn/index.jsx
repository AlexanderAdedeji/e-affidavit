import { useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../../helper/storage";
import { verifierLogin } from "../../services/verifierService";

const VerifierSignIn = () => {
  let navigate = useNavigate();

  const [loginState, setLoginState] = useState({
    loginData: {
      email: "",
      password: "",
    },
    btnLoader: false,
    isVerified: false,
  });

  const userLogin = useCallback(async (loginDetails) => {
    setLoginState((prevState) => ({
      ...prevState,
      btnLoader: true,
    }));
    try {
      const { data } = await verifierLogin(loginDetails);
    
      console.log(data);
      setUserSession(data);
      navigate({
        pathname: "/commissionerHome",
      });
      setLoginState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
    } catch (errors) {
      toast.error(errors.response.data.detail);
      setLoginState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
    }
  }, []);

  const onChange = (value) => {
    if (value) {
      setLoginState((prevState) => ({
        ...prevState,
        isVerified: true,
      }));
    }

    console.log("Captcha value:", value);
  };

  return (
    <div className="auth">
      <div id="particles-js"></div>
      <div class="animated bounceInDown">
        <div class="container-box">
          <span class="error animated tada" id="msg"></span>
          <form name="form1" class="box">
            <h4 className="">
              Welcome <span>Verifier!</span>
            </h4>
            <h5>Sign in to your account.</h5>
            <input
              type="text"
              name="email"
              placeholder="Email"
              autocomplete="off"
              onChange={(e) => {
                setLoginState((prevState) => ({
                  ...prevState,
                  loginData: {
                    ...prevState.loginData,
                    email: e.target.value,
                  },
                }));
              }}
            />
            <i class="typcn typcn-eye" id="eye"></i>
            <input
              type="password"
              name="password"
              placeholder="Passsword"
              id="pwd"
              autocomplete="off"
              onChange={(e) => {
                setLoginState((prevState) => ({
                  ...prevState,
                  loginData: {
                    ...prevState.loginData,
                    password: e.target.value,
                  },
                }));
              }}
            />
            <label>
              <input type="checkbox" />
              <span></span>
              <small class="rmb">Remember me</small>
            </label>
            <a href="#" class="forgetpass">
              Forget Password?
            </a>
            <div className="recaptcha-box my-3">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onChange}
              />
            </div>
            <button
              disabled={!loginState.isVerified}
              class="btn1"
              type="button"
              onClick={() => {
                userLogin(loginState.loginData);
              }}
            >
              {loginState.btnLoader ? (
                <div class="spinner-border text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>Sign in</>
              )}
            </button>
          </form>
          <a href="#" class="dnthave">
            {/* Don’t have an account? Sign up */}
          </a>
        </div>
        <div class="footer">
          <span>
            {/*    Made with <i class="fa fa-heart pulse"></i>
            <a href="https://www.google.de/maps/place/Augsburger+Puppenkiste/@48.360357,10.903245,17z/data=!3m1!4b1!4m2!3m1!1s0x479e98006610a511:0x73ac6b9f80c4048f">
              <a href="https://codepen.io/lordgamer2354">By Anees Khan</a>{" "}
            </a> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifierSignIn;
