const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;

connection.on("connected",()=>{
    console.log("MongoDB is Connected!");
});

connection.on("err",(err)=>{
    console.log("Error in MongoDB Connection",err);
});

module.exports = mongoose;