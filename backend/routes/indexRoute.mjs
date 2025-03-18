import express from "express";
import userRoute from "./userRoute.mjs";
import productRoute from "./productRoute.mjs";

const routes = express.Router();

routes.use( "/api/auth", userRoute );
routes.use( "/api/product", productRoute );

export default routes