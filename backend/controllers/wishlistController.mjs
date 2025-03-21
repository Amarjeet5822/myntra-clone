import Wishlist from "../models/wishlist.model.mjs";
import AppError from "../utils/AppError.mjs";

export const getWishlist = async (req, res, next ) => {
  try {
    const { userId } = req.user;
    const products = await Wishlist.find({userId})
    res.status(200).json(products);
  } catch (error) {
    next(new AppError(500, error.message || "failed to get product"))
  }
}
export const addWishlist = async (req, res, next ) => {
  try {
    const product = new Wishlist({userId, ...req.body});
    await product.save();
    res.status(201).json({message: "Added To Wishlist"})
  } catch (error) {
    next(new AppError(500, error.message || "failed to add product"))
  }

}
export const deleteWishlist = async (req, res, next ) => {
  try {
    const { productId } = req.params;
    await Wishlist.findByIdAndDelete({ _id: productId });
    res.status(200).json({message: "Removed from Wishlist"})
  } catch (error) {
    next(new AppError(500, error.message || "failed to delete product"))
  }
}