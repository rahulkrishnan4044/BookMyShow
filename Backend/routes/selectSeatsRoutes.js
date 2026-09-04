const express = require("express");
const router = express.Router();


const seatSelectController = require("../controllers/seatSelectionController");


router.get("/", seatSelectController.selectSeats)


module.exports = router