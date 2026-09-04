const screensModel = require("../models/screensModel")

const getScreens = (req,res)=>{
const theatre_id = Number(req.params.id);
    screensModel.getScreensByTheatre(theatre_id,(err,screens)=>{
        if (err) {
            return res.status(500).json({
                message:err.message
            })
        }
        res.status(200).json({screens})
    })
}

const addScreens =(req,res)=>{
    const {theatre_id,name} = req.body
    screensModel.addScreens(theatre_id,name,(err,result)=>{
        if (err) {
            return res.status(500).json({
                message:err.message
            })
        }
        res.status(200).json({
            message:"Inserted Successfully",
            insertedid:result.insertId
        })
    })
}


module.exports = {
    getScreens,
    addScreens,
}