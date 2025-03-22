import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <ul className="space-y-2">
          <li><NavLink to="overview" className="block p-2 hover:bg-gray-200">Overview</NavLink></li>
          <li><NavLink to="orders" className="block p-2 hover:bg-gray-200">Orders & Returns</NavLink></li>
          <li><NavLink to="coupons" className="block p-2 hover:bg-gray-200">Coupons</NavLink></li>
          <li><NavLink to="saved-cards" className="block p-2 hover:bg-gray-200">Saved Cards</NavLink></li>
          <li><NavLink to="addresses" className="block p-2 hover:bg-gray-200">Addresses</NavLink></li>
        </ul>
      </div>

      {/* Right-Side Content (Dynamic Content) */}
      <div className="w-3/4 p-6">
        <Outlet />  {/* Nested Routes Render Here */}
      </div>
    </div>
  );
}
