


const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');


const connectMongoDB = require("./config/db");


const app = express();
connectMongoDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log("Request:", req.method, req.url);
//   next();
// });



// Routes
const userRoute = require("./routes/userRoutes");



// Helath
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to meetConnect API"
  })
})




// Auth Routes
app.use('/user', userRoute);








// Server
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
})