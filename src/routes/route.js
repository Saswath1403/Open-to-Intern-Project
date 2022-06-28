const express = require("express")
const route = express.Router();
const collegeController = require("../controllers/collegeController");
const internController = require("../controllers/internController");

route.post("/functionup/colleges" , collegeController.createCollege)

module.exports = route
