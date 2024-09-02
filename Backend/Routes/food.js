const express = require("express");
const {
  upload,
  addFood,
  getAllFood,
  removeFood,
} = require("../Controllers/foodController");
const foodRoute = express.Router();

foodRoute.get("/", getAllFood);

foodRoute.post("/add", upload.single("image"), addFood);
foodRoute.post("/remove", removeFood);
module.exports = {
  foodRoute,
};
