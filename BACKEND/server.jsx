
// const express = require("express");
// const app = express();
// // const dbConfig = require("./config/dbConfig.jsx");

// // from dotenv
// require('dotenv').config()

// const port = process.env.PORT || 5000;

// // console.log(process.env.MONGO_URL)

// app.listen(port,()=> console.log(`Server Started at port ${port}`))



// import express from "express";
const express = require ("express");
// import bodyParser from "body-parser";
const bodyParser =require ("body-parser");
// import cors from "cors";
const cors = require ("cors");
// import student from "./models/student.js"
// import student1 from "./models/student1";
// import mongoose from "mongoose";
const mongoose = require ("mongoose");

const app = express();
app.use(cors())
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://morlabhaskar306:ZdG5JZtg8UTfugK0@bhaskar.smjwtfm.mongodb.net/HEALTH")
// mongoose.connect(process.env.MONGO_URL)
.then(()=> app.listen(5000))
.then(()=> app.listen(()=>console.log("server running")))
.then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err))