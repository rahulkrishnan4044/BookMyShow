const db = require("../config/db")

exports.getAllBookings =(callback)=>{
    const sql =`
    select 
    b.id as Booking_id,
    u.id as user_id,
    u.name as user,
    m.title as Movie,
    s.seat_number as Seat_number,
    bs.price as Price  ,
    b.total as total,
    b.status as status,
    b.booking_date
    from bookings b
    join users u on b.user_id = u.id
    join booking_seats bs on b.id = booking_id
    join seats s on bs.seat_id = s.id
    join shows sh on b.show_id = sh.id
    join movies m on sh.movie_id  = m.id;`;

    db.query(sql,callback);
}

exports.getBookingById =(id,callback)=>{
    const sql =`
    SELECT
            b.id AS booking_id,
            u.name AS user,
            u.email AS email,
            sh.id AS show_id,
            m.title AS Movie,
            GROUP_CONCAT(s.seat_number) AS seat_numbers,
            b.total AS total,
            b.status AS status,
            b.booking_date
        FROM bookings b
        JOIN users u ON b.user_id = u.id
        JOIN booking_seats bs ON b.id = bs.booking_id
        JOIN seats s ON bs.seat_id = s.id
        JOIN shows sh ON b.show_id = sh.id
        JOIN movies m ON sh.movie_id = m.id
         WHERE u.id = ? 
        GROUP BY
            b.id,
            u.name,
            u.email,
            sh.id,
            m.title,
            b.total,
            b.status,
            b.booking_date
    `;

    db.query(sql,[id],callback);
} 


exports.checkBookedSeat =(show_id,seat_ids,callback)=>{
        const sql =`select seat_id from
        booking_seats bs join bookings b on bs.booking_id = b.id
        where b.show_id = ? and b.status ='confirmed'
        and bs.seat_id in (?);`
        db.query(sql,[show_id,seat_ids],callback);
}

exports.getseats = (seat_ids,callback)=>{
    const sql =`select id,seat_type from seats where id in (?);`
    db.query(sql,[seat_ids],callback);
}

exports.createBooking = (show_id,user_id,total,callback)=>{
    const sql = `Insert into bookings (show_id,user_id,total)values(?,?,?);`
    db.query(sql,[show_id,user_id,total],callback);
}

exports.addBookingSeats = (values,callback)=>{
    const sql = `insert into booking_seats (booking_id,seat_id,price)values ?;`
    db.query(sql,[values],callback);
}

exports.cancelBooking =(id, callback)=>{
    const sql = `Update bookings set status = 'cancelled' where id = ?;`
    db.query(sql,[id],callback);
}