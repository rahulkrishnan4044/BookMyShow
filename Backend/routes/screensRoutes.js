const express = require("express")
const router = express.Router();

const screensController = require("../controllers/screensController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/:id",screensController.getScreens)
router.post("/",authMiddleware,roleMiddleware("admin"),screensController.addScreens)


module.exports = router