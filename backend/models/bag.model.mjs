import mongoose from "mongoose";

const bagSchema = new mongoose.Schema({
  userId : { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true, unique: true },
  url: { type: String, required: true },
  product_id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  product_description: { type: String, required: true },
  rating: { type: Number, default: 0 },
  ratings_count: { type: Number, default: 0 },
  initial_price: { type: String, required: true },
  discount: { type: Number, required: true },
  final_price: { type: String, required: true },
  sizes: [
    {
      size: { type: String, required: true },
      value: { type: String, required: true },
      value_name: { type: String, required: true },
    },
  ],
});

const Bag = mongoose.model("Bag", bagSchema);

export default Bag;