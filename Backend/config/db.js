const mysql = require("mysql2");

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
})
db.connect((err,conn)=>{
    if (err) {
       return console.log("Database failed to connect",err.message);
        
    }
    console.log("My Sql Database Connected !!");
    
})
module.exports = db