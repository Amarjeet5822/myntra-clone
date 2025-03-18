import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Product Name
  description: { type: String, required: true }, // Short Description
  price: { type: Number, required: true }, // Selling Price
  mrp: { type: Number, required: true }, // Original Price
  discount: { type: Number, required: true }, // Discount Percentage
  rating: { type: Number, default: 0 }, // e.g., 4.3
  totalRatings: { type: Number, default: 0 }, // Total number of ratings
  images: [{ type: String }], // Array of image URLs
  availableSizes: [
    {
      size: { type: String, enum: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"] },
      price: { type: Number },
      stock: { type: Number, default: 0 },
    }
  ],
  colors: [{ type: String, required: true }], // e.g., ["Black", "White", "Green"]
  material: { type: String }, // e.g., "100% Cotton"
  fit: { type: String }, // e.g., "Regular Fit"
  length: { type: String }, // e.g., "Regular"
  mainTrend: { type: String }, // e.g., "Nautical"
  neck: { type: String }, // e.g., "Henley Neck"
  occasion: { type: String }, // e.g., "Casual"
  careInstructions: { type: String }, // e.g., "Machine Wash"
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;
