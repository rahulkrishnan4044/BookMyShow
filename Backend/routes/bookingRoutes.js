const express = require ("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware")


router.get("/",authMiddleware,roleMiddleware("admin"),bookingController.getAllBookings)
router.get("/id",authMiddleware,bookingController.getBookingId)
router.post("/",authMiddleware,bookingController.createBooking)
router.put("/cancelbooking/:id",authMiddleware,bookingController.cancelBooking)



module.exports = router