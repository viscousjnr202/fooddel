const express = require("express");
const {
  addCart,
  removeCart,
  getCart,
  listItems,
} = require("../Controllers/addCartController");
const { addCartMiddleware } = require("../Middleware/addCartMiddleware");
const addCartRoute = express.Router();

addCartRoute.post("/addcart", addCartMiddleware, addCart);
addCartRoute.post("/removecart", addCartMiddleware, removeCart);
addCartRoute.post("/getcart", addCartMiddleware, getCart);
addCartRoute.post("/displaycart", addCartMiddleware, listItems);

module.exports = { addCartRoute };
