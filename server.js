//const express = require("express");
// we can use import with -r esm npm install esm
// "start": "nodemon -r esm server.js"
import express from "express";
import router from "./routes/auth";

const app = express();

// route middleware
app.use("/api",router)



app.listen(8000, () => console.log(`Server is running on port 8000`));