const { getRounds } = require("bcrypt")
const seatsModel = require("../models/seatsModel")


const getSeats =(req,res)=>{
    const screen_id = Number(req.params.id)
    if (isNaN(screen_id)) {
        return res.status(400).json({
            message:"Not a NUmber"
        })
    }
    seatsModel.getSeatsByScreen(screen_id,(err,seats)=>{
        if (err) {
            return res.status(500).json({
                Message:err.message
            })
        }
        
        const layout = {}
        seats.forEach(seat => {
            const row = seat.seat_number.charAt(0);
            if (!layout[row]) {
                layout[row] = []
            }
            layout[row].push(seat)
          
        });
        res.json({
                screen_id,
                layout
            })

    })
}


module.exports = {
    getSeats,
}