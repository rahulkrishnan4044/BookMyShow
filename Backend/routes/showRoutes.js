const express = require("express")
const router = express.Router();

const showsController = require("../controllers/showController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/",authMiddleware,roleMiddleware("admin"),showsController.addShow)
router.get("/",showsController.getShows)
router.get("/:id",showsController.getShowsById)

module.exports = router