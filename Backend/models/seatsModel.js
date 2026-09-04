const db = require("../config/db");
const { get } = require("../routes/authRoutes");

const getSeatsByScreen = (screen_id,callback)=>{
    const sql = `select screen_id,seat_number,seat_type from seats 
    where screen_id =?  
    order by seat_number asc ; `
    db.query(sql,[screen_id],callback)    
}



module.exports ={
    getSeatsByScreen,
}