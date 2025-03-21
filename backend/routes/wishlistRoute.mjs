import express from "express";
import { addWishlist, deleteWishlist, getWishlist } from "../controllers/wishlistController.mjs";

const wishlist = express.Router();

wishlist.get("/", getWishlist );
wishlist.post("/", addWishlist)
wishlist.delete("/:productId", deleteWishlist)

export default wishlist;