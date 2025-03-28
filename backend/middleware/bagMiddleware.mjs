import Bag from "../models/bag.model.mjs";
import AppError from "../utils/AppError.mjs"

const bagMiddleware = async (req, res, next ) => {
  try {
    // console.log("req.body in bagMiddle" , req.body)
    const { product_id } = req.body || {};
    // console.log("reaching or not")
    const product = await Bag.findOne({product_id});
    if(product) {
      return res.status(409).json({message: "Product Already Added"})
    }
    next();
  } catch (error) {
    next(new AppError(500, error.message || "failed to add product"))
  }
}

export default bagMiddleware;