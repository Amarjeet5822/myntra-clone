import Bag from "../models/bag.model.mjs";
import AppError from "../utils/AppError.mjs";

const getProductBag = async (req, res, next) => {
  try {
    const { userId } = req.user || {};
    const products = await Bag.find({ userId });
    res.status(200).json(products);
  } catch (error) {
    next(new AppError(500, error.message || "Failed to get products"));
  }
};
const addProductBag = async (req, res, next) => {
  const { userId } = req.user;
  // console.log("userId :", userId);
  // console.log("addProductBag, req.body: ", req.body);
  try {
    // console.log("db bag before save")
    const product = new Bag({ userId, ...req.body });
    await product.save();
    // console.log("db bag after save")
    res.status(201).json({ message: "Added To Bag" });
  } catch (error) {
    // console.log("error not save in db throw error: ", error)
    next(new AppError(500, error.message || "failed to add product"));
  }
};
const deleteProductBag = async (req, res, next) => {
  try {
    const { productId } = req.params;
    await Bag.findByIdAndDelete(productId);
    res.status(200).json({ message: "Removed from Bag" });
  } catch (error) {
    next(new AppError(500, error.message || "failed to delete product"));
  }
};

export { deleteProductBag, addProductBag, getProductBag };
