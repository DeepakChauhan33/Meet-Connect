const express = require('express');

const router = express.Router();


// Import controllers
const { register, } = require('../controller/authController');

router.post("/register", register);
console.log("userRoutes loaded");




module.exports = router;
