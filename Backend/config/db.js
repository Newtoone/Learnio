const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/Learn/');
        console.log('Database connected');
    }
    catch(error){
        console.log('Database connection failed due to: '+error);
    }
}

module.exports = connectDB;