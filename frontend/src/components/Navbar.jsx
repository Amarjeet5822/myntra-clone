import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/bag">Bag</Link></li>
      </ul>
    </nav>
  );
}
