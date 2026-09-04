const db = require("../config/db");

exports.getSeatAvailability=(show_id,callback)=>{
    const sql=`SELECT 
    seats.id,
    seats.screen_id,
    seats.seat_number,
    seats.seat_type,
    CASE
        WHEN EXISTS (
            SELECT 1
            FROM booking_seats bs
            JOIN bookings b 
                ON bs.booking_id = b.id
            WHERE bs.seat_id = seats.id
              AND b.show_id = ?
              AND b.status = 'confirmed'
        )
        THEN 'booked'
        ELSE 'available'
    END AS status
FROM seats
WHERE seats.screen_id = (
    SELECT screen_id
    FROM shows
    WHERE id = ?
)
ORDER BY seats.seat_number;`

db.query(sql,[show_id,show_id],callback)


}