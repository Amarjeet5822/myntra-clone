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
      <div className="max-w-6xl mx-auto">
        <main className="max-w-6xl ">
          <Outlet />
        </main>
        <div className="max-w-6xl ">
          {location.pathname!=="/bag" ? <FooterPage /> : <div>Bank footer</div>}
        </div>
      </div>
    </>
  );
}

export default App;
