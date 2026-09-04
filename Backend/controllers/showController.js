const showModel = require("../models/showModel");


const addShow =(req,res)=>{
    const {movie_id,screen_id,show_date,start_time,end_time} = req.body;
    if (!movie_id || !screen_id ||!show_date ||!start_time|| !end_time) {
        return res.status(400).json({
            message:"Fill all columns"
        })
    }
    showModel.checkMovIdScreenId(movie_id,screen_id,(err,result)=>{
        if (err) {
            return res.status(500).json({
                message:err.message
            })
        }
        if (result.length ==0) {
            return res.status(400).json({
                message:"Not found"
            })
        }
    
    showModel.createShow({movie_id,screen_id,show_date,start_time,end_time},(err,shows)=>{
        if (err) {
            return res.status(500).json({
                message:err.message
            })
        }
        res.status(200).json({shows})
    })
    })
}

const getShows =(req, res)=>{
    showModel.getShows((err,shows)=>{
         if (err) {
            return res.status(500).json({
                message:err.message
            })
        }
        res.status(200).json({
            shows
        }) 
    })
}
const getShowsById =(req, res)=>{
    const id = Number(req.params.id)
    showModel.getShowsByMov(id,(err,shows)=>{
         if (err) {
            return res.status(500).json({
                message:err.message
            })
        }
        res.status(200).json({
            shows
        }) 
    })
}

module.exports ={
    addShow,
    getShows,
    getShowsById,
}