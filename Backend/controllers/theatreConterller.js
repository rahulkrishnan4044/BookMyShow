const theatreModel = require("../models/theatreModel")

const getTheatres = (req,res)=>{
    theatreModel.getTheatres((err,theatre)=>{
        if (err) {
            return res.status(500).json({
                message:err.message
            })
        }
        res.status(200).json({theatre:theatre})
    })
}


const addTheatres =(req, res)=>{
    const{name,location} = req.body;
    if (!name || !location) {
        return res.status(400).json({
            message:"All column must be filled"
        })
    }
    theatreModel.addtheatre(name,location,(err,result)=>{
        if (err) {
            return res.status(500).json({
                message:err.message
            })
        }
        res.status(200).json({
            message:"Inserted Succcessfully",
            ID:result.insertId
        })
    })
}

module.exports ={
    getTheatres,
    addTheatres,
}