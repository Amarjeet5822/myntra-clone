import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [number, setNubmer] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    // need logic
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
              value={number}
              className="px-2 outline-none "
              type="text"
              onChange={(e) => setNubmer(e.target.value)}
              placeholder = "Moble Number"
            />
            <div>
             {
              !number &&
            <span className="absolute text-red-600 top-2 right-[206px]">*</span>
             }
            </div>
          </div>
          <div className="w-full flex border-2 border-gray-400 hover:border-black mb-5 p-2 relative ">
           
            <input
              value={name}
              className="px-2 outline-none "
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder = "Enter Your Name"
            />
            <div>
             {
              !name &&
            <span className="absolute text-red-600 top-2 right-[234px]">*</span>
             }
            </div>
          </div>
          <div className="w-full mb-2">
            <p className="text-sm">
              By continuing, I agree to the{" "}
              <Link href="#" className="text-pink-400 font-bold">
                Terms of Use
              </Link>{" "}
              &{" "}
              <Link href="#" className="text-pink-400 font-bold">
                Privacy Policy
              </Link>
            </p>
          </div>

          <button 
          onClick={ handleLogin}
          className="bg-red-600 text-white border-none p-2 my-3 font-bold rounded cursor-pointer hover:bg-red-700">
            CONTINUE
          </button>
          <p className="text-sm mt-2">
            Have trouble logging in?{" "}
            <Link href="#" className="text-pink-400 font-bold">
              Get help
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
