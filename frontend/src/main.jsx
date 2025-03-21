import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  Addresses,
  Bag,
  Coupons,
  ErrorPage,
  Home,
  Orders,
  Overview,
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
      { path: "/bag", element: <Bag /> },
      { path: "/wishlist", element: <Wishlist /> },
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
