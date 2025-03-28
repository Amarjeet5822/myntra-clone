import React, {  useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [isContinue, setIsContinue ] = useState(true);
  const navigate = useNavigate();
  const mobileRef = useRef(null);

  const handleInput = () => {
    const inp = mobileRef.current.value 
    if (inp && inp.length > 9) {
      setIsContinue(false);
    }else{
      setIsContinue(true)
    }
  }
  const handleLogin = () => {
    setIsContinue(true);
    let number = mobileRef.current.value;
    navigate("/login/otp-login", { state : { number }})
  }
  return (
    <div className="flex justify-center min-h-screen items-center w-full bg-[#fdeeec]">
      <div className="w-[450px] flex flex-col min-h-screen mt-8 bg-white">
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
            alt="coupon_myntra"
          />
        </div>
        <div className="p-9 flex flex-col">
          <div className="flex items-center gap-1 mb-5 text-gray-700 text-xl font-bold">
            <div>Login</div>
            <div className="text-base font-normal">or</div>
            <div>Signup</div>
          </div>
          <div className="w-full flex border-2 border-gray-400 hover:border-black mb-5 relative ">
            <span className="text-gray-700 border-r-2 border-gray-400 my-2 px-2"> +91</span>
            <input
              ref={mobileRef}
              className="px-2 outline-none "
              type="text"
              onChange={handleInput}
              maxLength={10}
              placeholder = "Moble Number"
            />
            <div>
             {
              !mobileRef &&
            <span className="absolute text-red-600 top-2 right-[206px]">*</span>
             }
            </div>
          </div>
          <div className="w-full mb-2">
            <p className="text-sm">
              By continuing, I agree to the{" "}
              <Link to="#" className="text-pink-400 font-bold">
                Terms of Use
              </Link>{" "}
              &{" "}
              <Link to="#" className="text-pink-400 font-bold">
                Privacy Policy
              </Link>
            </p>
          </div>

          <button 
          onClick={ handleLogin}
          disabled={isContinue}
          className={`${isContinue? "bg-gray-300" : "bg-red-600 hover:bg-red-700"} text-white border-none p-2 my-3 font-bold rounded cursor-pointer `}>
            CONTINUE
          </button>
          <p className="text-sm mt-2">
            Have trouble logging in?{" "}
            <Link to="#" className="text-pink-400 font-bold">
              Get help
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
