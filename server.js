//const express = require("express");
import express from "express";//import with -r esm npm install esm{"start": "nodemon -r esm server.js"}
import { readdirSync } from "fs";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// middlewares
app.use(morgan("dev"));


// route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)))



const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));