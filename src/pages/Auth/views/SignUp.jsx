import { findAllByDisplayValue } from "@testing-library/react";
import {useNavigate} from "react-router-dom"
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { login, signUp } from "../../../services/authService";

const SignUp = ({ setAuthState }) => {
  const navigate = useNavigate()
  const [signUpState, setSignUpState] = useState({
    signUpData: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
    btnLoader: false,
  });

  const userSignUp = useCallback(async (signUpDetails) => {
    setSignUpState((prevState) => ({
      ...prevState,
      btnLoader: true,
    }));
    try {
      const { data } = await signUp(signUpDetails);
      console.log(data);

      toast.success("You have been created Successfully");
      setSignUpState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
            navigate({
              pathname: "/home",
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
      <div id="particles-js"></div>
      <div class="animated bounceInDown">
        <div class="container-box">
          <span class="error animated tada" id="msg"></span>
          <form name="form1" class="box">
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
              type="text"
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
            <i class="typcn typcn-eye" id="eye"></i>
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


            <button
              class="btn1"
              type="button"
              onClick={() => {
                userSignUp(signUpState.signUpData);
              }}
            >
              {signUpState.btnLoader ? (
                <div class="spinner-border text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>Sign Up</>
              )}
            </button>
          </form>
          <span
            className="dnthave text-light"
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
        {/* <div class="footer">
          <span>
            Made with <i class="fa fa-heart pulse"></i>
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
