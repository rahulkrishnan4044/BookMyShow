const availabilityModel = require("../models/availabilityModel");


exports.getAvailableSeats = (req,res)=>{
    const show_id = Number(req.params.id)
    if (isNaN(show_id)) {
        return res.status(400).jsono({
            message:"Not a number "
        })
    }
    availabilityModel.getSeatAvailability(show_id,((err,seats)=>{
        if (err) {
            return res.status(500).json({
                err:err.message
            })
        }
        res.status(200).json({show_id,seats})
    }))
}