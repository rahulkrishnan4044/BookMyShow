const moviesModel = require("../models/moviesModel")

const getAllMovies = (req, res) => {
    
    moviesModel.getMovies((err, movies) => {
        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        return res.status(200).json(movies);
    });
};
const createMovies = (req,res)=>{
    const{title,description,duration,language,genre,release_date} = req.body;
    if (!title||!description||!duration||!language||!genre||!release_date) {
        return res.status(400).json({
            message:"All column must be filled"
        })
    }
    moviesModel.createMovies({title,description,duration,language,genre,release_date},(err,result)=>{
        if (err) {
            return res.status(400).json({
                message:"Database Error ",
                error:err.message
            })
        }
        res.status(200).json({
            message:"Movie Added !!",
            title:title,
            description:description,
            duration:duration,
            language:language,
            genre:genre,
            release_date:release_date
        })
    })

}


const getMovieById =(req,res)=>{
    const id =req.params.id
    if (isNaN(id)) {
        return res.json({
            message:"NAN"
        })
    }
    moviesModel.getMovieById(id,(err,movie)=>{
        if (err) {
            return res.status(400).json({message:err.message})
        }
        if (movie.length == 0) {
             return res.status(400).json({message:"Movie not found"})
        }
        res.status(200).json({movie:movie[0]})
    })
}


const updateMovie =(req,res)=>{
    const {id} = req.body.id
    
    const{title,description,duration,language,genre,release_date} = req.body;
    if (!title||!description||!duration||!language||!genre||!release_date) {
        return res.status(400).json({
            message:"All column must be filled"
        })
    }
    if (isNaN(id)) {
         return res.status(400).json({
            message:id
        })
    }
    moviesModel.getMovieById(id,(err,movie)=>{
        if (err) {
            return res.status(400).json({message:err.message})
        }
        if (movie.length == 0) {
             return res.status(400).json({message:"Movie not found"})
        }

    
    
    moviesModel.updateMovie({title,description,duration,language,genre,release_date,id},(err,result)=>{
        if (err) {
            return res.status(400).json({
                message:"Database Error ",
                error:err.message
            })
        }
        res.status(200).json({
            message:"Movie Updated  !!",
            title:title,
            description:description,
            duration:duration,
            language:language,
            genre:genre,
            release_date:release_date
        })
    })
    })
}

const deletemovie=(req,res)=>{
    const id =Number(req.body.id)
    if (isNaN(id)) {
         return res.status(400).json({
            message:"Invalid id"
        })
    }
    moviesModel.getMovieById(id,(err,movie)=>{
        if (err) {
            return res.status(400).json({message:err.message})
        }
        if (movie.length == 0) {
             return res.status(400).json({message:"Movie not found"})
        }
    moviesModel.deleteMovie(id,(err,result)=>{
        if (err) {
            return res.status(400).json({message:err.message})
        }
        res.json({
            message:"Movie Deleted !!",
            title:movie.title
        })
    })

    })
}
const searchMovie=(req,res)=>{
    const title = req.query.title;
    
    moviesModel.searchBytitle(title,((err,movies)=>{
        if (err) {
            return res.status(500).json({
                message:err.message,
               
            })
        }
        res.status(200).json(movies)
    }))
}
const searchMoviegenre=(req,res)=>{
    const {genre }= req.query;
    
    moviesModel.searchBygenre(genre,((err,movies)=>{
        if (err) {
            return res.status(500).json({
                message:err.message,
               
            })
        }
        res.status(200).json(movies)
    }))
}
const searchMovielang=(req,res)=>{
    const {lang }= req.query;
    
    moviesModel.searchBylanguage(lang,((err,movies)=>{
        if (err) {
            return res.status(500).json({
                message:err.message,
               
            })
        }
        res.status(200).json(movies)
    }))
}

module.exports = {
    getAllMovies,
    createMovies,
    getMovieById,
    updateMovie,
    deletemovie,
    searchMovie,
    searchMoviegenre,
    searchMovielang,
}