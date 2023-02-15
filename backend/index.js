import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
const dburl = "mongodb+srv://gurielamp:vDDOjbx7ydqPO86k@cluster0.z65phue.mongodb.net/?retryWrites=true&w=majority";

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(dburl ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// // Database
// const database = (module.exports = () => {
//   const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };
//   try {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(
//       "mongodb+srv://gurielamp:vDDOjbx7ydqPO86k@cluster0.z65phue.mongodb.net/?retryWrites=true&w=majority",
//       connectionParams
//     );
//     console.log("Database connected succesfully");
//   } catch (error) {
//     console.log(error);
//     console.log("Database connection failed");
//   }
// });

// database();

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });