import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  Addresses,
  Bag,
  CheckoutAddress,
  CheckoutAddressPayment,
  Coupons,
  ErrorPage,
  Home,
  LoginPage,
  MenCasualShirts,
  MenFormalShirts,
  MenSweatShirts,
  MenTshirts,
  Orders,
  Overview,
  ProductDetails,
  ProductPage,
  Profile,
  SavedCards,
  Wishlist,
} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/product/:productId", element: <ProductDetails /> },
      { path: "/product/men-tshirts", element: <MenTshirts /> },
      { path: "/product/men-casual-shirts", element: <MenCasualShirts /> },
      { path: "/product/men-formal-shirts", element: <MenFormalShirts /> },
      { path: "/product/men-sweat-shirts", element: <MenSweatShirts /> },
      {
        path: "/bag",
        element: <Bag />,
        children: [
          { path: "address", element: <CheckoutAddress /> },
          { path: "payment", element: <CheckoutAddressPayment /> },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          { path: "overview", element: <Overview /> },
          { path: "orders", element: <Orders /> },
          { path: "coupons", element: <Coupons /> },
          { path: "saved-cards", element: <SavedCards /> },
          { path: "addresses", element: <Addresses /> },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
