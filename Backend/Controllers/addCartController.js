const { default: mongoose } = require("mongoose");
const { user } = require("../Models/userModel");
const { response } = require("express");
const { food } = require("../Models/foodModel");

const addCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const { itemId } = req.body;
    const findUser = await user.findOne({_id: userId});
    console.log(findUser);
    if (findUser) {
      let cartItems = await findUser.cartItems;
      if (!cartItems[itemId]) {
        cartItems = {...cartItems, [itemId]: 1}
      } else {
        cartItems = {...cartItems, [itemId]: cartItems[itemId]+1}
      }
      await user.findByIdAndUpdate
      (userId, { cartItems });
      res.json({ success: true, msg: 
        "Cart updated successfully"});
    }
  } catch (error) {
    res.json({ success: false, msg: "Cart updated failed" });
    console.log(error);
  }
};

const removeCart = async (req, res) =>{
  try {
    const {userId} = req.body
    const {itemId} = req.body
    const findUser = await user.findOne({_id: userId})
    let cartItems = await findUser.cartItems
    if(findUser){
       if(cartItems[itemId]&& cartItems[itemId]>0){
        cartItems = {...cartItems, [itemId]: cartItems[itemId] -1}
       }
      const result = await user.findByIdAndUpdate(userId, {cartItems})
      res.json({success: true, result,msg: 'Cart Item deleted successfully'})
    }
  } catch (error) {
    console.log(error)
    res.json({success: false, msg:'Unable to delete'})
  }
}

const getCart = async(req, res) =>{
  try {
    const {userId} = req.body
    const response = await user.findOne({_id:userId})
    const cartItem = await response.cartItems
    if(cartItem){
      res.json({success:true, msg:cartItem})
    }
  } catch (error) {
    console.log(error)
    res.json({success:true, msg:'Failed to get cart items'})
  }
}

const listItems = async(req, res) =>{
  const {userId} = req.body
  const {cartItems} = req.body
  const newFoods = await food.find({})
  if(!userId) return
  const arrayFoods = await newFoods.map(item =>{
    if(cartItems[item._id]) return({
      id: item._id,
      image: item.image
    })
  })
  res.json({arrayFoods})
}
module.exports = {
  addCart,
  removeCart,
  getCart,
  listItems
};
