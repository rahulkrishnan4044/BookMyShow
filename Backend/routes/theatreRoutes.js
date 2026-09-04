const express = require("express");
const router = express.Router();


const theatreController = require("../controllers/theatreConterller");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/",theatreController.getTheatres)
router.post("/",authMiddleware,roleMiddleware("admin"),theatreController.addTheatres)


module.exports= router