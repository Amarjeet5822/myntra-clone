import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  userId : { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true },
  product_id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  product_description: { type: String, required: true },
  rating: { type: Number, default: 0 },
  ratings_count: { type: Number, default: 0 },
  initial_price: { type: String, required: true },
  final_price: { type: String, required: true },
  discount: { type: Number, required: true },
  image: { type: String, required: true },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;