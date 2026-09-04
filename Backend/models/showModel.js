const db = require("../config/db");
const { addShow } = require("../controllers/showController");

const createShow = (show,callback)=>{
    const sql ="insert into shows (movie_id, screen_id, show_date, start_time, end_time)values(?,?,?,?,?);"
    const values =[
        show.movie_id,
        show.screen_id,
        show.show_date,
        show.start_time,
        show.end_time,
    ]
    db.query(sql,values,callback);
}

const getShows = (callback)=>{
    const sql =`select shows.id ,shows.movie_id,movies.title as Movie_title,
    shows.screen_id,screens.name as Screen_name,theatres.name as Theatre_name
    ,shows.show_date,shows.start_time,shows.end_time from shows
    join movies on shows.movie_id = movies.id 
    join screens on shows.screen_id = screens.id
    join theatres on screens.theatre_id = theatres.id 
    order by shows.Show_date , shows.start_time ;`
    db.query(sql,callback)
}


const checkMovIdScreenId =(movie_id,screen_id,callback)=>{
    const sql = `Select 
    movies.id as Movie_id , 
    screens.id as Screen_id from movies cross join
    screens where movies.id = ? and screens.id = ?; `
    db.query(sql,[movie_id,screen_id],callback)

}

const getShowsByMov = (id,callback)=>{
    const sql =`select shows.id ,shows.movie_id,movies.title as Movie_title,
    shows.screen_id,screens.name as Screen_name,theatres.name as Theatre_name
    ,shows.show_date,shows.start_time,shows.end_time from shows
    join movies on shows.movie_id = movies.id 
    join screens on shows.screen_id = screens.id
    join theatres on screens.theatre_id = theatres.id 
    where shows.movie_id = ?
    order by shows.Show_date , shows.start_time ;`
    db.query(sql,[id],callback)
}

module.exports={
    createShow,
    getShows,
    checkMovIdScreenId,
    getShowsByMov,
}