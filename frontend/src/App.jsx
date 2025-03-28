import { Outlet, useLocation } from "react-router-dom";
import {
  FooterBank,
  FooterPage,
  HomeFooter,
  Navbar,
  NavbarBag,
} from "./components/index";
import { ToastContainer, Zoom } from "react-toastify";
import { useMemo } from "react";

function App() {
  const location = useLocation();

  const isBagPage = useMemo(() => {
    return ["/bag", "/bag/address", "/bag/payment"].includes(location.pathname);
  }, [location.pathname]);
  
  return (
    <>
      <div className="sticky top-0 z-50 bg-white w-full">
        {isBagPage ? <NavbarBag /> : <Navbar />}
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
          ) : location.pathname === "/login" ? (
            <div>{""}</div>
          ) : (
            <FooterBank />
          )}

          <div className="max-w-full bg-gray-100 mx-auto">
            {location.pathname === "/" && <HomeFooter />}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </>
  );
}

export default App;
