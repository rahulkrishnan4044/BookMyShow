const db =require("../config/db");


exports.getSelectedSeats =(seat_ids,callback)=>{
    const sql ="select id, screen_id, seat_number, seat_type from seats where id in (?);"

    db.query(sql,[seat_ids],callback)

}