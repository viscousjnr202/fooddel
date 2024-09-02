const mongoose = require('mongoose')

const connectDB = async(url) =>{
    try {
       const connected =  await mongoose.connect(url)
       if(connected){
        console.log('Database connected successfully');
       } 
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connectDB
}