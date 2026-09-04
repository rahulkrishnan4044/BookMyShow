const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
const registerUser = async(req,res)=>{
    const {name, email, password}=req.body
    if (!name ||!email||!password) {
        return res.status(400).json({
            message:"All column Must be filled"
        })
    }
    if (password.length<8) {
        return res.status(400).json({
            message:"Password mudt be 8 digit long"
        })
    }
    const hashedpassword =await bcrypt.hash(password,10)
    userModel.createUser(name,email,hashedpassword,(err,result)=>{
        if (err) {
            if (err.code ==="ER_DUP_ENTRY") {
                return res.status(500).json({
                message:"Email already Exits",
                
            })
            }
            return res.status(500).json({
                message:"Database Error",
                error:err.message
            })
        }
        res.status(201).json({
        message:"Validation Success",
        userId: result.insertId

    })

    })
   
}

const loginUser =(req,res)=>{
const {email,password} = req.body
     if (!email||!password) {
        return res.status(400).json({
            message:"All column Must be filled"
        })
    }
    userModel.findemail(email,async(err,users)=>{
        if (err) {
             return res.status(500).json({
                message:"Database Error",
                error:err.message
            })
        }
        if (users.length === 0 ) {
            return res.status(404).json({
                message:"Invalid email or password",
            })
        }
        const user =users[0];
        const iscorrectpassword = await bcrypt.compare(password,user.password)
        if (!iscorrectpassword) {
            return res.status(401).json({
                message:"Invalid Email or Password"
            })
        }
        const token = await jwt.sign({
            id : user.id,
            role:user.role
        },
        process.env.JWT_SECRET,{
            expiresIn:"1d"
        }
    );
        res.json({

            id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:token
        })
    })
}

module.exports= {
    registerUser,
    loginUser,
}