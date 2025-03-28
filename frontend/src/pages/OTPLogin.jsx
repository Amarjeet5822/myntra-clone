import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../features/authSlice";

function OTPLogin() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContinue, setIsContinue] = useState(true);
  const [name, setName] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const userNumber = location.state;

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Keep only last digit
    setOtp(newOtp);

    // Move to the next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await dispatch(
        loginUser({ number: userNumber.number, name })
      ).unwrap();
      setIsContinue(true);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  useEffect(() => {
    if (otp.join("").length === 4) {
      setTimeout(() => {
        setIsSubmitting(true);
        setIsContinue(false);
      }, 1500);
    }
  }, [otp]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
        <div className="flex justify-center gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-3">Check your phone for OTP.</p>
      </div>
      <div>
        {isSubmitting && (
          <div className="bg-white p-4 w-[450px] flex justify-between items-center rounded-lg">
            <div className="w-full  border-2 border-gray-400 hover:border-black   relative rouneded-lg ">
              <input
                value={name}
                className="px-2 py-2 outline-none "
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
              <div>
                {!name && (
                  <span className="absolute text-red-600 top-2 right-[185px]">
                    *
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <button
                onClick={handleLogin}
                disabled={isContinue}
                className={`${
                  isContinue ? "bg-gray-300" : "bg-red-400"
                } text-white border-none p-2 my-3 font-bold rounded cursor-pointer hover:bg-red-600`}
              >
                CONTINUE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OTPLogin;
