


const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connectMongoDB = require("./config/db");


const app = express();
connectMongoDB();

// Middleware
app.use(cors());
app.use(express.json());



// Helath
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to meetConnect API"
  })
})



// Server
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
})