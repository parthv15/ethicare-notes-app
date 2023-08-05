import { useState } from "react";
import LoginModel from "./LoginModel";
import SignUpModel from "./SignUpModel";
import LeftImgDiv from "./ImageDiv";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  function showSignUp() {
    setIsSignUp(!isSignUp);
  }

  const signUpPrompt = (
    <p className="text-sm font-normal text-[#060606]">
      Dont have an account?{" "}
      <span
        className="font-semibold underline underline-offset-2 cursor-pointer"
        onClick={showSignUp}
      >
        Sign up here
      </span>
    </p>
  );

  const loginPrompt = (
    <p className="text-sm font-normal text-[#060606]">
      Already have an account?{" "}
      <span
        className="font-semibold underline underline-offset-2 cursor-pointer"
        onClick={showSignUp}
      >
        Login here
      </span>
    </p>
  );

  return (
    <div className="w-full h-screen flex items-start">
      <LeftImgDiv />
      <div className="w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20 justify-between items-center">
        <h1 className="text-[#060606] font-semibold text-2xl">
          {" "}
          {/* Ethicare Financial Planner */}
        </h1>

        {isSignUp ? <SignUpModel /> : <LoginModel />}

        <div className="w-full items-center flex justify-center">
          {isSignUp ? loginPrompt : signUpPrompt}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
