import { Outlet, useLocation } from "react-router-dom";
import {
  FooterBank,
  FooterPage,
  HomeFooter,
  Navbar,
  NavbarBag,
} from "./components/index";

function App() {
  const location = useLocation();
  return (
    <>
      <div className=" sticky top-0 z-50 bg-white w-full">
        {location.pathname !== "/bag" &&
        location.pathname !== "/bag/address" &&
        location.pathname !== "/bag/payment" ? (
          <Navbar />
        ) : (
          <NavbarBag />
        )}
      </div>
      <div className="max-w-[2500px] mx-auto bg-gray-50">
        <main className="max-w-full mx-auto bg-gray-50">
          <Outlet />
        </main>
        <div className="max-w-full bg-gray-100 mx-auto">
          {location.pathname !== "/bag" &&
          location.pathname !== "/login" &&
          location.pathname !== "/bag/address" &&
          location.pathname !== "/bag/payment" ? (
            <FooterPage />
          ) : location.pathname === "/login" ? <div>{ "" }</div> :  (
            <FooterBank />
          )}

          <div className="max-w-full bg-gray-100 mx-auto">
            {location.pathname === "/" && <HomeFooter />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
