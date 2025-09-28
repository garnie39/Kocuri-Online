import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  specType: { type: String, required: true },
  type: { type: Array, required: true },
  bestseller: { type: Boolean, required: true },
  date: { type: Date, required: true, default: Date.now },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
