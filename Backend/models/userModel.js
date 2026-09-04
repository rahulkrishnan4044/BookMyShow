const db = require("../config/db")

const createUser = (name,email,hashedpassword,callback)=>{
    const sql = "INSERT INTO users(name,email,password)value(?,?,?);"
    db.query(sql,[name,email,hashedpassword],callback)

}
const findemail = (email,callback)=>{
    const sql = "select id ,name, email, password, role from users where email = ?;"
    db.query(sql,[email],callback)

}

module.exports = {
    createUser,
    findemail,
}