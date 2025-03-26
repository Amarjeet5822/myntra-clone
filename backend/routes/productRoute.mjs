import express from "express";
import { getProducts, getProductById, getFilteredProducts } from "../controllers/productController.mjs";

const productRoute = express.Router();
//
productRoute.get("/", getProducts )
productRoute.get("/", getFilteredProducts)
productRoute.get("/:productId", getProductById )

export default productRoute;