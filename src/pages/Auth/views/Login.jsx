import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../../../helper/storage";
import { login } from "../../../services/authService";
import ReCAPTCHA from "react-google-recaptcha";

const Login = ({ setAuthState }) => {
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
    console.log(loginDetails);
    try {
      const { data } = await login(loginDetails);
      toast.success("You have been created Successfully");
      console.log(data);
      setUserSession(data);
      setLoginState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
      navigate({
        pathname: "/home",
      });
    } catch (errors) {
      setLoginState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
      toast.error(errors.response.data.detail);
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
    <div classNameName="auth">
      <div id="particles-js"></div>
      <div className="animated bounceInDown">
        <div className="container-box">
          <span className="error animated tada" id="msg"></span>
          <form name="form1" className="box">
            <h4>
              User <span>Login</span>
            </h4>
            <h5>Sign in to your account.</h5>
            <input
              type="email"
              required
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
            <i className="typcn typcn-eye" id="eye"></i>
            <input
              type="password"
              name="password"
              placeholder="Passsword"
              required
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
              <small className="rmb">Remember me</small>
            </label>
            <a href="#" className="forgetpass">
              Forget Password?
            </a>

            <div classNameName="recaptcha-box">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onChange}
              />
            </div>

            <button
              className="btn1"
              type="button"
              disabled={!loginState.isVerified}
              onClick={() => {
                userLogin(loginState.loginData);
              }}
            >
              {loginState.btnLoader ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>Sign in</>
              )}
            </button>
          </form>
          <a
            href="#"
            className="dnthave"
            onClick={() => {
              setAuthState((prevState) => ({
                ...prevState,
                newAccount: true,
              }));
            }}
          >
            Don’t have an account? <span></span>Sign up
          </a>
        </div>
        <div className="footer">
          <span>
            {/* Made with <i className="fa fa-heart pulse"></i>
            <a href="https://www.google.de/maps/place/Augsburger+Puppenkiste/@48.360357,10.903245,17z/data=!3m1!4b1!4m2!3m1!1s0x479e98006610a511:0x73ac6b9f80c4048f">
              <a href="https://codepen.io/lordgamer2354">By Anees Khan</a>{" "}
            </a> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

// <div className="auth text-center">
//   <main className="form-signin  m-auto">
//     <form>
//       <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//       <div className="form-floating">
//         <input
//           type="email"
//           placeholder="Email"
//           required=""
//           className="form-control"
//           onChange={(e) => {
//             setLoginState((prevState) => ({
//               ...prevState,
//               loginData: {
//                 ...prevState.loginData,
//                 email: e.target.value,
//               },
//             }));
//           }}
//         />
//         <label for="floatingInput">Email address</label>
//       </div>
//       <div className="form-floating">
//         <input
//           type="password"
//           name="pswd"
//           className="form-control"
//           placeholder="Password"
//           required=""
//           onChange={(e) => {
//             setLoginState((prevState) => ({
//               ...prevState,
//               loginData: {
//                 ...prevState.loginData,
//                 password: e.target.value,
//               },
//             }));
//           }}
//         />
//         <label for="floatingPassword">Password</label>
//       </div>

//       <div className="checkbox mb-3">
//         <label>
//           <input type="checkbox" value="remember-me" /> Remember me
//         </label>
//       </div>
//       <button
//         className="w-100 btn btn-lg btn-primary"
//         type="button"
//         onClick={() => {
//           userLogin(loginState.loginData);
//         }}
//       >
//         {loginState.btnLoader ? (
//           <div className="spinner-border text-light" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         ) : (
//           <>Sign in</>
//         )}
//       </button>
//       <p>
//         Don't have an account,{" "}
//         <span
//           onClick={() => {
//             setAuthState((prevState) => ({
//               ...prevState,
//               newAccount: true,
//             }));
//           }}
//           classNameName="text-primary new-account"
//         >
//           Create One
//         </span>
//       </p>
//       <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
//     </form>
//   </main>
// </div>;
