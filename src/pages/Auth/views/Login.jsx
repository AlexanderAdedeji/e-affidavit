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
    <div className="auth">
      <div id="particles-js"></div>
      <div class="animated bounceInDown">
        <div class="container-box">
          <span class="error animated tada" id="msg"></span>
          <form name="form1" class="box">
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
            <i class="typcn typcn-eye" id="eye"></i>
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
              <small class="rmb">Remember me</small>
            </label>
            <a href="#" class="forgetpass">
              Forget Password?
            </a>

            <div className="recaptcha-box">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onChange}
              />
            </div>

            <button
              class="btn1"
              type="button"
              disabled={!loginState.isVerified}
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
          <a
            href="#"
            class="dnthave"
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
        <div class="footer">
          <span>
            {/* Made with <i class="fa fa-heart pulse"></i>
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

// <div class="auth text-center">
//   <main class="form-signin  m-auto">
//     <form>
//       <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

//       <div class="form-floating">
//         <input
//           type="email"
//           placeholder="Email"
//           required=""
//           class="form-control"
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
//       <div class="form-floating">
//         <input
//           type="password"
//           name="pswd"
//           class="form-control"
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

//       <div class="checkbox mb-3">
//         <label>
//           <input type="checkbox" value="remember-me" /> Remember me
//         </label>
//       </div>
//       <button
//         class="w-100 btn btn-lg btn-primary"
//         type="button"
//         onClick={() => {
//           userLogin(loginState.loginData);
//         }}
//       >
//         {loginState.btnLoader ? (
//           <div class="spinner-border text-light" role="status">
//             <span class="visually-hidden">Loading...</span>
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
//           className="text-primary new-account"
//         >
//           Create One
//         </span>
//       </p>
//       <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
//     </form>
//   </main>
// </div>;
