import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { login, signUp } from "../../../services/authService";
import { setUserSession } from "../../../helper/storage";

const SignUp = ({ setAuthState }) => {
  const navigate = useNavigate();
  const [signUpState, setSignUpState] = useState({
    signUpData: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
    btnLoader: false,
    isVerified: false,
  });

  const onChange = (value) => {
    if (value) {
      setSignUpState((prevState) => ({
        ...prevState,
        isVerified: true,
      }));
    }

    console.log("Captcha value:", value);
  };
  const userSignUp = useCallback(async (signUpDetails) => {
    setSignUpState((prevState) => ({
      ...prevState,
      btnLoader: true,
    }));
    try {
      const { data } = await signUp(signUpDetails);
      console.log(data);

      setUserSession(data);
      toast.success("You have been created Successfully");
      setSignUpState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
      navigate({
        pathname: "/my-documents",
      });
      // setAuthState((prevState) => ({
      //   ...prevState,
      //   newAccount: false,
      // }));
    } catch (errors) {
      setSignUpState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
      toast.error(errors.response.data.detail);
    }
  }, []);
  return (
    <div id="signUpAuth">
      <div className="animated bounceInDown">
        <div className="container-box">
          <span className="error animated tada" id="msg"></span>
          <form name="form1" className="box">
            <h4>
              User <span>Sign Up</span>
            </h4>
            <h5>Create your account.</h5>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              autocomplete="off"
              onChange={(e) => {
                setSignUpState((prevState) => ({
                  ...prevState,
                  signUpData: {
                    ...prevState.signUpData,
                    first_name: e.target.value,
                  },
                }));
              }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              autocomplete="off"
              onChange={(e) => {
                setSignUpState((prevState) => ({
                  ...prevState,
                  signUpData: {
                    ...prevState.signUpData,
                    last_name: e.target.value,
                  },
                }));
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="off"
              onChange={(e) => {
                setSignUpState((prevState) => ({
                  ...prevState,
                  signUpData: {
                    ...prevState.signUpData,
                    email: e.target.value,
                  },
                }));
              }}
            />
            <i className="typcn typcn-eye" id="eye"></i>
            <input
              type="password"
              name="password"
              placeholder="Passsword"
              id="pwd"
              autocomplete="off"
              onChange={(e) => {
                setSignUpState((prevState) => ({
                  ...prevState,
                  signUpData: {
                    ...prevState.signUpData,
                    password: e.target.value,
                  },
                }));
              }}
            />
            <div className="recaptcha-box">
              {/* <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onChange}
              /> */}
            </div>

            <button
              className="btn1"
              // disabled={!signUpState.isVerified}
              type="button"
              onClick={() => {
                userSignUp(signUpState.signUpData);
              }}
            >
              {signUpState.btnLoader ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <span>Sign Up</span>
              )}
            </button>
          </form>
          <span
            classNameName="dnthave text-light"
            onClick={() => {
              setAuthState((prevState) => ({
                ...prevState,
                newAccount: false,
              }));
            }}
          >
            Already have an account? Sign in
          </span>
        </div>
        {/* <div className="footer">
          <span>
            Made with <i className="fa fa-heart pulse"></i>
            <a href="https://www.google.de/maps/place/Augsburger+Puppenkiste/@48.360357,10.903245,17z/data=!3m1!4b1!4m2!3m1!1s0x479e98006610a511:0x73ac6b9f80c4048f">
              <a href="https://codepen.io/lordgamer2354">By Anees Khan</a>{" "}
            </a>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
