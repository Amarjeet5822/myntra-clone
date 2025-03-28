import express from "express";
import { addWishlist, deleteWishlist, getWishlist } from "../controllers/wishlistController.mjs";
import { wishlistMiddleware } from "../middleware/wishlistMiddleware.mjs";

const wishlist = express.Router();

wishlist.get("/", getWishlist );
wishlist.post("/", wishlistMiddleware, addWishlist)
wishlist.delete("/:productId", deleteWishlist)

export default wishlist;