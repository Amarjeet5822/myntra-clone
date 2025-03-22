import React from "react";
import { NavLink, Route } from "react-router-dom";

function NavbarBag() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="flex flex-row">
          <NavLink to="/checkout">BAG</NavLink>
          <p className="px-2">-----------</p>
          <NavLink to="/checkout/address">ADDRESS</NavLink>
          <p className="px-2">-----------</p>
          <NavLink to="/checkout/address/payment">PAYMENT</NavLink>
        </div>

        <div>100% Secure</div>
    
    </nav>
  );
}

export default NavbarBag;
