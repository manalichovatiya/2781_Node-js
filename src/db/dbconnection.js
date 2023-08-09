const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongoose
    .connect(config.mongoose.url , config.mongoose.options)
    .then((data)=>{console.log("DB connection successfuly!")})
    .catch((error)=>{console.log("Error:",error)})
};

module.exports = { connectDB };