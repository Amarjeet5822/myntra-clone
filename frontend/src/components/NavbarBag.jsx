import React from "react";
import { NavLink, Route } from "react-router-dom";

function NavbarBag() {
  return (
    <nav className="max-w-[2500px] mx-auto h-[80px] bg-white">
      <div className=" max-w-screen h-full flex justify-between itmes-center px-16">
        <div className="flex justify-center items-center">
          <NavLink to="/">
            <div className="w-[53px] h-[36px] bg-[url('https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png')] bg-[length:1404px_105px] leading-[80px] bg-[-462px_0px] bg-no-repeat cursor-pointer"></div>
          </NavLink>
        </div>
        <div className="flex flex-row  justify-center items-center ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#14cda8] text-xs tracking-[4px] border-b-[2px] cursor-pointer"
                : "no-underline text-xs tracking-[4px] cursor-pointer"
            }
            to="/bag" end
          >
            <p>BAG</p>
          </NavLink>
          <p >-----------</p>
          <NavLink className={({ isActive }) =>
              isActive
                ? "text-[#14cda8] text-xs tracking-[4px] border-b-[2px] cursor-pointer px-2"
                : "no-underline text-xs tracking-[4px] cursor-pointer px-2" 
            } to="/bag/address" end>ADDRESS</NavLink>
          <p>-----------</p>
          <NavLink  className={({ isActive }) =>
              isActive
                ? "text-[#14cda8] text-xs tracking-[4px] border-b-[2px] cursor-pointer px-2"
                : "no-underline text-xs tracking-[4px] cursor-pointer px-2"
            } to="/bag/payment" end>PAYMENT</NavLink>
        </div>
        <div className="flex justify-center  items-center">
        <img className="w-[26px] h-[28px] mr-[5px]" src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="secure" />
        <div className="flex justify-center items-center">
        <p className="tracking-[3px] text-xs">100% SECURE</p>

        </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBag;

