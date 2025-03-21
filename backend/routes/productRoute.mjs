import express from "express";
import { getProducts, getSingleProduct } from "../controllers/productController.mjs";

const productRoute = express.Router();

productRoute.get("/", getProducts )
productRoute.get("/:productId", getSingleProduct )

export default productRoute;