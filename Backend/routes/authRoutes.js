const express = require("express")
const router  = express.Router();


const authController = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")
const testAdmin =require("../controllers/adminController")


router.post("/register",authController.registerUser)
router.post("/login",authController.loginUser)
router.get("/admin-test",authMiddleware,roleMiddleware(["admin"]),testAdmin)


module.exports= router