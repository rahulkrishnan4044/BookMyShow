const db =require("../config/db")

const getTheatres = (callback)=>{
    const sql = "select * from Theatres order by id desc ;"
    db.query(sql,callback);
}

const addtheatre =(name,location,callback)=>{
    const sql = "INSERT into theatres(name,location)values(?,?);"
    db.query(sql,[name,location],callback);
}


module.exports = {
    getTheatres,
    addtheatre,
}
