import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [specType, setSpecType] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSpecType = (e) => {
    if (specType.includes(e.target.value)) {
      setSpecType((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSpecType((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (specType.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        specType.includes(item.specType)
      );
    }
    setFilteredProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = filteredProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, specType, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilters ? "rotate-180" : ""}`}
            src={assets.dropdownIcon}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border boeder-[#76878E] pl-5 py-3 ,mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-[#76878E]">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Original"}
                onChange={toggleCategory}
              />{" "}
              Original
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Fanart"}
                onChange={toggleCategory}
              />{" "}
              Fanart
            </p>
          </div>
        </div>
        {/* Type Filter */}
        <div
          className={`border boeder-[#76878E] pl-5 py-3 ,mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-[#76878E]">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Stationery"}
                onChange={toggleSubCategory}
              />{" "}
              Stationery
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"ArtPrint"}
                onChange={toggleSubCategory}
              />{" "}
              Art Print
            </p>
          </div>
        </div>
        {/* Spec Filter */}
        <div
          className={`border boeder-[#76878E] pl-5 py-3 ,mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SPEC</p>
          <div className="flex flex-col gap-2 text-sm font-light text-[#76878E]">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Keychains"}
                onChange={toggleSpecType}
              />{" "}
              Keychains
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Charms"}
                onChange={toggleSpecType}
              />{" "}
              Charms
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"StickerSheets"}
                onChange={toggleSpecType}
              />{" "}
              Sticker Sheets
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"SticerSet"}
                onChange={toggleSpecType}
              />{" "}
              Sticker Set
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bookmarks"}
                onChange={toggleSpecType}
              />{" "}
              Bookmarks
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Notepads"}
                onChange={toggleSpecType}
              />{" "}
              Notepads
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Postcards"}
                onChange={toggleSpecType}
              />{" "}
              Postcards
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"DiyPostcard"}
                onChange={toggleSpecType}
              />{" "}
              DIY Postcards
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"A4Prints"}
                onChange={toggleSpecType}
              />{" "}
              A4 Art Prints
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-[#76878E] text-sm px-2"
          >
            <option value="relabent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to Hight</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}

        <div className="grid grid-cols-3 md:grid-cols-3 lg:gap-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
