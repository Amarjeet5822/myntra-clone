import Product from "../models/product.model.mjs";
import AppError from "../utils/AppError.mjs";

const getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50; // Default 50 products per request
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);

    if (products.length === 0) {
      return res.status(404).json({ message: "No Data Found" });
    }

    res.status(200).json(products);
  } catch (error) {
    next(new AppError(500, error.message || "Failed to fetch products"));
  }
};

const getSingleProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findOne({_id: productId });
    if(! product) {
      return next(new AppError(404, "No data Found"))
    }
    res.status(200).json(product);
  } catch (error) {
    next(new AppError(500, error.message || "Failed to fetch product"))
  }
};

export { getProducts, getSingleProduct };
