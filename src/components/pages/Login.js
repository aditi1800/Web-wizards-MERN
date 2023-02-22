import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Login = () => {
  const [isSignin, setSignin] = useState(true);
  //   const clickHandler = () => {
  //     setSignin(!isSignin);
  //   };
  const clickHandler = () => {
    setSignin(true);
  };
  return (
    <>
      <div className="form-container-login">
        <div className="slide-controls1">
          <button className="btn loginbtn" onClick={() => setSignin(true)}>
            Login
          </button>
          <button className="btn signupbtn" onClick={() => setSignin(false)}>
            Signup
          </button>
        </div>
        <div className="inner">
          {isSignin ? <Signin /> : <Signup clickHandler={clickHandler} />}
        </div>
      </div>
    </>
  );
};

export default Login;
