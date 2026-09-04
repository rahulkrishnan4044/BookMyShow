const express = require("express")
const router = express.Router();


const roleMiddleware = require("../middleware/roleMiddleware")
const moviesController = require("../controllers/moviesController");
const authMiddleware = require("../middleware/authMiddleware");


router.get("/",moviesController.getAllMovies)
router.post("/",authMiddleware,roleMiddleware("admin"),moviesController.createMovies)
router.get("/search/title",moviesController.searchMovie)
router.get("/search/genre",moviesController.searchMoviegenre)
router.get("/search/lang",moviesController.searchMovielang)
router.get("/:id",moviesController.getMovieById)
router.put("/",authMiddleware,roleMiddleware("admin"),moviesController.updateMovie)
router.delete("/",authMiddleware,roleMiddleware("admin"),moviesController.deletemovie)

module.exports = router; 