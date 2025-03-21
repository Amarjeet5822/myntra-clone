import express from "express";
import { addProductBag, deleteProductBag, getProductBag } from "../controllers/bagController.mjs";

const bagRoute = express.Router();

bagRoute.get("/", getProductBag)
bagRoute.post("/", addProductBag)
bagRoute.delete("/:productId", deleteProductBag)
export default bagRoute;