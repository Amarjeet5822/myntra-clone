import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: { type: String, required: true }, 
  price: { type: Number, required: true }, 
  mrp: { type: Number, required: true }, 
  discount: { type: Number, required: true }, 
  rating: { type: Number, default: 0 }, 
  totalRatings: { type: Number, default: 0 }, 
  images: [{ type: String }], 
  availableSizes: [
    {
      size: { type: String, enum: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"] },
      price: { type: Number },
      stock: { type: Number, default: 0 },
    }
  ],
  colors: [{ type: String, required: true }],
  material: { type: String }, 
  fit: { type: String }, 
  length: { type: String }, 
  mainTrend: { type: String },
  neck: { type: String },
  occasion: { type: String }, 
  careInstructions: { type: String }, 
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;
