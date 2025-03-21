import Bag from "../models/bag.model.mjs";
import AppError from "../utils/AppError.mjs";

export const getProductBag = async (req, res, next ) => {
  try {
    const { userId } = req.user;
    const products = await Bag.find({userId})
    res.status(200).json(products);
  } catch (error) {
    next(new AppError(500, error.message || "Failed to get products"));
  }
}
export const addProductBag = async (req, res, next ) => {
  try {
    const product = new Bag({userId, ...req.body});
    await product.save();
    res.status(201).json({message: "Added To Bag"})
  } catch (error) {
    next(new AppError(500, error.message || "failed to add product"))
  }
}
export const deleteProductBag = async (req, res, next ) => {
  try {
    const { productId } = req.params;
    await Bag.findByIdAndDelete({ _id: productId });
    res.status(200).json({message: "Removed from Bag"})
  } catch (error) {
    next(new AppError(500, error.message || "failed to delete product"))
  }
}