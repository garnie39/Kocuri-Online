import React, { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "AUD $";
  const delivery_fee = 5;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, type) => {
    if (!type) {
      toast.error("Please select the design you want to add to cart.");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][type]) {
        cartData[itemId][type] += 1;
      } else {
        cartData[itemId][type] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][type] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, type, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][type] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      if (itemInfo) {
        for (const item in cartItems[items]) {
          try {
            if (cartItems[items][item] > 0) {
              totalAmount += itemInfo.price * cartItems[items][item];
            }
          } catch (error) {
            console.error("Error calculating cart amount:", error);
          }
        }
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
