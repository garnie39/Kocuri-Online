import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for adding product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      specType,
      type,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (img) => img !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (img) => {
        let result = await cloudinary.uploader.upload(img.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      specType,
      type: JSON.parse(type),
      bestseller: bestseller === "true" ? true : false,
      images: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();
    console.log(imagesUrl);
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for listing product
const listProduct = async (req, res) => {};

// function for removing product
const removeProduct = async (req, res) => {};

// function for single product info
const singleProduct = async (req, res) => {};

export { addProduct, listProduct, removeProduct, singleProduct };
