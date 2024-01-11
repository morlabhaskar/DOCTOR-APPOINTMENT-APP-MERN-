
const express = require("express");
const app = express();
const dbConfig = require("../config/dbConfig.jsx");

// from dotenv
require('dotenv').config()

const port = process.env.PORT || 5000;

console.log(process.env.MONGO_URL)

app.listen(port,()=> console.log(`Server Started at port ${port}`))