import Wishlist from "../models/wishlist.model.mjs";
import AppError from "../utils/AppError.mjs"

export const wishlistMiddleware = async (req, res, next ) => {
  try {
    const { product_id } = req.body || {};
    const product = await Wishlist.findOne({product_id});
    if(product) {
      return res.status(409).json({message: "Product Already Added"})
    }
    next();
  } catch (error) {
    next(new AppError(500, error.message || "failed to add product"))
  }
}