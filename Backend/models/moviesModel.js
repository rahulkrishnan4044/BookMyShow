const db =require("../config/db")

const getMovies = (callback) => {
    const sql = `
        SELECT * 
        FROM movies`;
    db.query(sql,callback);
};

const createMovies = (movie,callback)=>{
    const sql = "Insert into movies (title,description,duration,language,genre,release_date,poster,image)values(?,?,?,?,?,?,?,?);"
    const values =[
        movie.title,
        movie.description,
        movie.duration,
        movie.language,
        movie.genre,
        movie.release_date,
        movie.poster,
        movie.image,

    ]
    db.query(sql,values,callback)
}

const getMovieById =(id,callback)=>{
    const sql = "Select * from movies where id = ?"
    db.query(sql,[id],callback);
}

const updateMovie = (movie,callback)=>{

    const sql = "Update  movies set title=?,description=?,duration = ?,language = ?,genre = ?,release_date = ?, poster =?, image=? where id = ?;"

     const values =[
        movie.title,
        movie.description,
        movie.duration,
        movie.language,
        movie.genre,
        movie.release_date,
        movie.poster,
        movie.image,
        movie.id,
    ]
    db.query(sql,values,callback)
} 

const deleteMovie = (id,callback)=>{
    const sql = "delete from movies where id = ?;"
    db.query(sql,id,callback)
}

const searchBytitle=(title,callback)=>{
    const sql = `select * from movies where title like ?`
    db.query(sql,[`%${title}%`],callback)
}
const searchBygenre=(genre,callback)=>{
    const sql = `select * from movies where genre like ?`
    db.query(sql,[`%${genre}%`],callback)
}
const searchBylanguage=(lang,callback)=>{
    const sql = `select * from movies where language like ?`
    db.query(sql,[`%${lang}%`],callback)
}


module.exports = {
    getMovies,
    createMovies,
    getMovieById,
    updateMovie,
    searchBytitle,
    deleteMovie,
    searchBygenre,
    searchBylanguage,
}