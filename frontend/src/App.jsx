import { Outlet, useLocation } from "react-router-dom";
import FooterPage from "./components/FooterPage";
import Navbar from "./components/Navbar";
import NavbarBag from "./components/NavbarBag";

function App() {
  const location = useLocation();
  return (
    <>
      <div>
        {location.pathname!=="/bag" ? <Navbar /> : <NavbarBag /> }
      </div>
      <div className="max-w-[2500px] mx-auto bg-gray-50">
        <main >
          <Outlet />
        </main>
        <div className="max-w-full bg-gray-100 mx-auto">
          {location.pathname!=="/bag" ? <FooterPage /> : <div>Bank footer</div>}
        </div>
      </div>
    </>
  );
}

export default App;
