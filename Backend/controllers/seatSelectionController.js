const seatSelectionModel = require("../models/seatSelectionModel")

exports.selectSeats = (req,res)=>{
   const {seat_ids } = req.body;
   if (!seat_ids || seat_ids.length ===0) {
    return res.status(400).json({
        message:"Please Select atleast one Seat"
    })
   }
   seatSelectionModel.getSelectedSeats(seat_ids,((err,seats)=>{
    if (err) {
        return res.status(500).json({
            message:err.message
        })
    }
    if (seat_ids.length !== seats.length) {
        return res.status(400).json({
            message:"Invalid Seats"
        })
    }
    let total = 0 ;
    
    seats.forEach(seat => {
        if (seat.seat_type ==="premium") {
            total+=200
        }
        else{
            total+=150
        }
    });
    res.status(200).json({
        message :"seats sellected Successfully",
        seats:seats,
        total:total
    })


   }
))

}