import { useState } from "react";


import Login from "./views/Login";
import SignUp from "./views/SignUp";

const Auth = () => {
  const [authState, setAuthState] = useState({
    newAccount: false,
  });

  return (
    <div className="auth">
      {authState.newAccount ? (
        <SignUp setAuthState={setAuthState} />
      ) : (
        <Login setAuthState={setAuthState} />
      )}
    </div>
  );
};

export default Auth;
