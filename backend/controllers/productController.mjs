import Product from "../models/product.model.mjs";
import AppError from "../utils/AppError.mjs";

const getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 28; // Default 50 products per request
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);

    if (products.length === 0) {
      return res.status(404).json({ message: "No Data Found" });
    }
    console.log("total products : ",products.length)
    res.status(200).json(products);
  } catch (error) {
    next(new AppError(500, error.message || "Failed to fetch products"));
  }
};

const getProductById = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findOne({product_id: productId });
    if(! product) {
      return next(new AppError(404, "No data Found"))
    }
    res.status(200).json(product);
  } catch (error) {
    next(new AppError(500, error.message || "Failed to fetch product"))
  }
};

const getFilteredProducts = async (req, res) => {
  try {
    const { category, brand, color, price_gte, price_lte } = req.query;
    let filter = {};

    if (category) filter.category = category;
    if (brand) filter.brand = brand;
    if (color) filter.color = color;
    if (price_gte !== undefined && price_lte !== undefined) {
      filter.price = { $gte: Number(price_gte), $lte: Number(price_lte) };
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export { getProducts, getProductById, getFilteredProducts };
