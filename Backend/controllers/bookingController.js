const bookingModel = require("../models/bookingModel");

const getAllBookings =(req,res)=>{
    bookingModel.getAllBookings((err,bookings)=>{
        if (err) {
            return res.status(500).json({
                message:"Database Error"
            })
        }
        res.status(200).json({bookings})
    })
}
const getBookingId =(req,res)=>{
    const id = req.user.id
    if (isNaN(id)) {
        return res.json({
            message:"NAN"
        })
    }
    bookingModel.getBookingById(id,(err,booking)=>{
        if (err) {
            res.status(500).json({
                message:"Database Error"
            })
        }
        res.status(200).json({booking})
    })
}

const createBooking = (req, res) => {
    const user_id= req.user.id
    const { show_id, seat_ids } = req.body;

    if (!show_id || !user_id || !seat_ids || seat_ids.length === 0) {

        return res.status(400).json({
            message: `show_id${show_id}, user_id${user_id} and seat_ids${seat_ids} are required`
        });
    }

    bookingModel.checkBookedSeat(
        show_id,
        seat_ids,
        (err, bookedSeats) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error",
                    error: err
                });
            }

            if (bookedSeats.length > 0) {

                return res.status(409).json({
                    message: "Seat already booked",
                    booked_seats: bookedSeats.map(
                        seat => seat.seat_id
                    )
                });
            }

            bookingModel.getseats(
                seat_ids,
                (err, seats) => {

                    if (err) {
                        return res.status(500).json({
                            message: "Failed to get seats",
                            error: err
                        });
                    }

                    if (seats.length !== seat_ids.length) {

                        return res.status(400).json({
                            message: "Invalid seat ID"
                        });
                    }

                    let total = 0;

                    seats.forEach(seat => {

                        if (seat.seat_type === "premium") {
                            total += 200;
                        } else {
                            total += 150;
                        }

                    });

                    bookingModel.createBooking(
                        show_id,
                        user_id,
                        total,
                        (err, bookingResult) => {

                            if (err) {
                                return res.status(500).json({
                                    message: err.message,
                                    error: err
                                });
                            }

                            const bookingId =
                                bookingResult.insertId;

                            const values = seats.map(seat => [

                                bookingId,

                                seat.id,

                                seat.seat_type === "premium"
                                    ? 200
                                    : 150

                            ]);

                            bookingModel.addBookingSeats(
                                values,
                                (err) => {

                                    if (err) {
                                        return res.status(500).json({
                                            message:
                                                "Booking seats failed",
                                            error: err
                                        });
                                    }

                                    res.status(201).json({

                                        message:
                                            "Booking successful",

                                        booking_id:
                                            bookingId,

                                        total: total,

                                        seats: seat_ids
                                    });

                                }
                            );
                        }
                    );
                }
            );
        }
    );
};
const cancelBooking = (req, res) => {

    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).json({
            message:id
        })
    }
    
    
    bookingModel.cancelBooking(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database error",
                error: err
            });
        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: "Booking not found or already cancelled"
            });
        }

        res.json({
            message: "Booking cancelled successfully"
        });
    });
};

module.exports = {
    getAllBookings,
    getBookingId,
    createBooking,
    cancelBooking
}