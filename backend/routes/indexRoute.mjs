import express from "express";
import userRoute from "./userRoute.mjs";
import productRoute from "./productRoute.mjs";
import bagRoute from "./bagRoute.mjs";
import wishlistRoute from "./wishlistRoute.mjs"
const routes = express.Router();

// auth - login logout
// http://localhost:8082?page=1&limit=50 - get 50 products each call
routes.use( "/api/auth", userRoute );
routes.use( "/api/product", productRoute );
routes.use("api/bag", bagRoute );
routes.use("/api/wishlist", wishlistRoute  );

export default routes