import express from "express";
import { addProductBag, deleteProductBag, getProductBag } from "../controllers/bagController.mjs";
import bagMiddleware from "../middleware/bagMiddleware.mjs";

const bagRoute = express.Router();

bagRoute.get("/", getProductBag)
bagRoute.post("/", bagMiddleware, addProductBag)
bagRoute.delete("/:productId", deleteProductBag)
export default bagRoute;