
// const express = require("express");
// const app = express();
// // const dbConfig = require("./config/dbConfig.jsx");

// // from dotenv
// require('dotenv').config()

// const port = process.env.PORT || 5000;

// // console.log(process.env.MONGO_URL)

// app.listen(port,()=> console.log(`Server Started at port ${port}`))



// import express from "express";
const express = require("express");
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");
// import cors from "cors";
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
const userRoute = require("./routes/userRoute.jsx")
const adminRoute = require("./routes/adminRoute.jsx")

app.use(cors())
app.use(bodyParser.json())

app.use('/api/user', userRoute);
app.use('/api/admin',adminRoute);

const mongoDB_url = 'mongodb+srv://morlabhaskar306:ZdG5JZtg8UTfugK0@bhaskar.smjwtfm.mongodb.net/HEALTH';
mongoose.connect(mongoDB_url).catch((error) => console.log(error))
    .then(() => app.listen(5000))
    .then(() => app.listen(() => console.log("server running")))
    .then(() => console.log("Connected to mongoDB"))
    .catch((error) => console.log(error))