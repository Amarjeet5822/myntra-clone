import { useState } from "react";
import { Link } from "react-router-dom";

const AccountNavSignin = () => {
  return (
    <div className="absolute top-6 z-50 right-[-120px] w-[270px] pl-5 py-2 bg-white border border-gray-300 rounded-md ">
      <p className="font-bold mb-1">Welcome</p>
      <p className=" mb-2 text-gray-500">To access account and manage orders</p>
      <Link
        className="inline-block px-5 py-2 text-pink-500 no-underline font-bold cursor-pointer border border-gray-200 hover:border-red-500"
        to="/login" 
      >
        LOGIN / SIGNUP
      </Link>

      <hr className="my-4 text-gray-200" />
      <ul className="list-none ">
        <Link to="/">
          <li className="p-account ">Orders</li>
        </Link>
        <li className="p-account ">Wishlist</li>
        <li className="p-account ">Gift Cards</li>
        <li className="p-account ">Contact Us</li>
        <li className="p-account">
          Myntra Insider{" "}
          <span className="bg-pink-500 text-white px-2 py-[2px] rounded text-xs ">
            New
          </span>
        </li>
        <hr className="my-4 text-gray-200" />
        <li className="p-account">Myntra Credit</li>
        <li className="p-account">Coupons</li>
        <li className="p-account">Saved Cards</li>
        <li className="p-account">Saved VPA</li>
        <li className="p-account">Saved Addresses</li>
      </ul>
    </div>
  );
};

export default AccountNavSignin;
