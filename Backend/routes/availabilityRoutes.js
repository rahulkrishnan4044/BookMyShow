const express = require("express");
const router = express.Router();


const availabilityController = require("../controllers/availadilityController");


router.get("/:id",availabilityController.getAvailableSeats)




module.exports = router