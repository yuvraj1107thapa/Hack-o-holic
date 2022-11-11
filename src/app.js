const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const authorization = require("./middleware/auth");
const cookieParser = require("cookie-parser");
const app = express();
const cors= require("cors")
const User=require("./models/User")
const port = process.env.PORT || 5000;
app.use(express.static("images"));

require("dotenv").config();


app.set("jwtTokenSecret", process.env.JWT_SECRET);
app.use(cors());
require("./db/conn");
const { Console } = require("console");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Routes===========================================
var userRoutes = require("../routes/user");
app.use("/user", userRoutes);
  
if(process.env.NODE_ENV =="production"){
    app.use(express.static("client/build"));
}
app.listen(port, () => {
console.log(`server is running at port ${port}`);
});
  