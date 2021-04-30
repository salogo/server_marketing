//const express = require("express");
// we can use import with -r esm npm install esm
// "start": "nodemon -r esm server.js"
import express from "express";
// import router from "./routes/auth";     replaced with fs....
import { readdirSync } from "fs";

const app = express();

// route middleware
// fs file system to read all the files from the folder and apply them as a middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)))
// app.use("/api",router)      replaced with fs...



app.listen(8000, () => console.log(`Server is running on port 8000`));