const mongoose = require("mongoose");
require('dotenv').config({path:'./Config/.env'})

const  MONGO_URI=process.env.MONGO_URI
const connectDB = () => {
  mongoose.connect(MONGO_URI)
  console.log("database is connected")

}



module.exports = connectDB;
