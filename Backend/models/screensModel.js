const db = require("../config/db")



const getScreensByTheatre = (theatre_id,callback)=>{
    const sql = "select * from screens where theatre_id = ? ;"
    db.query(sql,[theatre_id],callback)
}

const addScreens = (theatre_id,name,callback)=>{
    const sql = "Insert into screens (theatre_id,name)values(?,?);"
    db.query(sql,[theatre_id,name],callback)
}


module.exports = {
    getScreensByTheatre,
    addScreens,
}