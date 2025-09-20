import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                // onClick={() => setImage(item)} // change image on click
                onMouseEnter={() => setImage(item)} // change image on hover
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <img src={assets.starDullIcon} alt="" className="w-3 5" />
            {/* rating items -> {[...Array(5)].map((_, i) => (
              <img
              key={i}
              src={i < productData.rating ? assets.starIcon : assets.starDullIcon}
              alt=""
              className="w-3 5"
              />
            ))} */}
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Design</p>
            <div className="flex gap-2">
              {productData.type.map((item, index) => (
                <button
                  onClick={() => setType(item)}
                  className={`border py-2 bg-gray px-4 ${
                    item === type ? "bg-[#76878E] text-white" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, type)}
            className="bg-[#76878E] text-white px-8 py-3 text-sm active:bg-[#FFA851]"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p></p>
          </div>
        </div>
      </div>
      {/* Description & review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Kocuri Offical Online website are live for everyone to enjoy our
            product.
          </p>
          <p></p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        specType={productData.specType}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
