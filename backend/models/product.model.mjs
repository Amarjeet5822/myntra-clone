import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  url: { type: String, required: true },
  product_id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  product_description: { type: String, required: true },
  rating: { type: Number, default: 0 },
  ratings_count: { type: Number, default: 0 },
  initial_price: { type: String, required: true },
  discount: { type: Number, required: true },
  final_price: { type: String, required: true },
  currency: { type: String, default: "INR" },
  images: { type: [String], required: true },
  delivery_options: { type: [String], required: true },
  product_details: {
    description: { type: String, required: true },
    material_and_care: { type: String, required: true },
    size_and_fit: { type: String, required: true },
  },
  product_specifications: [
    {
      specification_name: { type: String, required: true },
      specification_value: { type: String, required: true },
    },
  ],
  sizes: [
    {
      size: { type: String, required: true },
      value: { type: String, required: true },
      value_name: { type: String, required: true },
    },
  ],
  best_offer: {
    applicable_on: { type: String, required: true },
    best_price: { type: String, required: true },
    coupon_code: { type: String, required: true },
    coupon_discount: { type: String, required: true },
  },
  more_offers: [
    {
      offer_name: { type: String, required: true },
      offer_value: { type: String, required: true },
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;