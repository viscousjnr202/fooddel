const { food } = require("../Models/foodModel");
const multer = require("multer");
const fs = require('fs')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + file.originalname;
    return cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

const getAllFood = async (req, res) =>{
    try {
        const allFood = await food.find({})
        res.json({success: true, msg: allFood})
    } catch (error) {
      if(error){
        res.json({success: false, msg:'Failed to get all foods'})
      }
    }
}

const addFood = async (req, res) => {
   const newFood = new food({
     name: req.body.name,
     description: req.body.description,
     price: req.body.price,
     image: `${req.file.filename}`,
     category: req.body.category,
   })
  try {
    const food = await newFood.save()
    res.json({ secure: true, msg:food});
  } catch (error) {
    console.log(error);
    res.json({ secure: false, msg: "failed to upload" });
  }
}; 
const removeFood = async(req, res) =>{
  try {
     const singleFood = await food.findById(req.body.id)
     const {image} =  singleFood
     console.log(image)
     //deleting files fronm upload folder
     fs.unlink(`uploads/${image}`, ()=>{console.log('Image unable to delete')})
     //delete from database
     const deleteFood = await food.findByIdAndDelete(req.body.id)
     if(deleteFood){
      res.json({secure: true, msg:'Deleted Successfully'})
     }
  } catch (error) {
    
  }
}
module.exports = {
  upload,
  addFood,
  getAllFood,
  removeFood
};
