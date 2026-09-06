const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
app.use(express.json())
app.use(cors())


const authRoutes = require("./routes/authRoutes")
const moviesRoutes = require("./routes/moviesRoutes")
const theatreRoutes = require("./routes/theatreRoutes")
const screensRoutes  = require("./routes/screensRoutes")
const showRoutes  = require("./routes/showRoutes")
const seatRoutes = require("./routes/seatRoutes")
const bookingsRoutes = require("./routes/bookingRoutes")
const availabilityRoutes  = require("./routes/availabilityRoutes")
const seatSelectionRoutes = require("./routes/selectSeatsRoutes")

app.use("/api/auth",authRoutes)
app.use("/api/movies",moviesRoutes)
app.use("/api/theatre",theatreRoutes)
app.use("/api/screens",screensRoutes)
app.use("/api/shows",showRoutes)
app.use("/api/seats",seatRoutes)
app.use("/api/booking",bookingsRoutes)
app.use("/api/availseats",availabilityRoutes)
app.use("/api/selectseat",seatSelectionRoutes)


const PORT = process.env.PORT  || 5000;
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);
})