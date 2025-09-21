import logo from "./logo.png";
import searchIcon from "./search.png";
import profileIcon from "./profile.png";
import cartIcon from "./cart.png";
import menuIcon from "./menu.png";
import dropdownIcon from "./dropdown.png";
import heroImage from "./hero.jpg";
import notepads from "./notepads/notepads.jpg";
import notepadBrown from "./notepads/notepad-brown.jpg";
import notepadOrange from "./notepads/notepad-orange.jpg";
import notepadBlue from "./notepads/notepad-blue.jpg";
import notepadGreen from "./notepads/notepad-green.jpg";
import animalStickerSheet from "./animalstickersheet/animals.jpg";
import catStickerSheet from "./animalstickersheet/cat.jpg";
import capybaraStickerSheet from "./animalstickersheet/capybara.jpg";
import chickStickerSheet from "./animalstickersheet/chick.jpg";
import penguinStickerSheet from "./animalstickersheet/penguin.jpg";
import allFood from "./food/allfood.jpg";
import cake from "./food/cake.jpg";
import snack from "./food/snack.jpg";
import thaifood from "./food/thaifood.jpg";
import crossIcon from "./x.png";
import starIcon from "./star.png";
import starDullIcon from "./star_dull.png";
import binIcon from "./delete.png";
import cardIcon from "./credit-card.png";
import paypalIcon from "./paypal.png";

export const assets = {
  logo,
  searchIcon,
  cartIcon,
  profileIcon,
  menuIcon,
  dropdownIcon,
  heroImage,
  crossIcon,
  starIcon,
  starDullIcon,
  binIcon,
  cardIcon,
  paypalIcon,
};

export const products = [
  {
    _id: "1",
    name: "Notepad",
    description: "A notepad for all your notes",
    price: 6,
    image: [notepads, notepadBrown, notepadOrange, notepadBlue, notepadGreen],
    category: "Original",
    subCategory: "Stationery",
    specType: "Notepads",
    type: ["Brown", "Orange", "Blue", "Green"],
    imageType: {
      Brown: notepadBrown,
      Orange: notepadOrange,
      Blue: notepadBlue,
      Green: notepadGreen,
    },
    bestseller: true,
  },
  {
    _id: "2",
    name: "Animal Sticker Sheet",
    description: "Lovely animal stickers for your journal",
    price: 7,
    image: [
      animalStickerSheet,
      catStickerSheet,
      capybaraStickerSheet,
      chickStickerSheet,
      penguinStickerSheet,
    ],
    category: "Original",
    subCategory: "Stationery",
    specType: "StickerSheets",
    type: ["Cat", "Capybara", "Chick", "Penguin"],
    imageType: {
      Cat: catStickerSheet,
      Capybara: capybaraStickerSheet,
      Chick: chickStickerSheet,
      Penguin: penguinStickerSheet,
    },
    bestseller: true,
  },
  {
    _id: "3",
    name: "Yummy Sticker Sheet",
    description: "Food lover stickers for your journal",
    price: 7,
    image: [allFood, cake, snack, thaifood],
    category: "Original",
    subCategory: "Stationery",
    specType: "StickerSheets",
    type: ["Thai Food", "Cake", "Snack"],
    imageType: {
      "Thai Food": thaifood,
      Cake: cake,
      Snack: snack,
    },
    bestseller: true,
  },
];
