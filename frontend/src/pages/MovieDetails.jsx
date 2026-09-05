import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../services/movieService";
import { useState,useEffect } from "react";


function MovieDetails() {
    const{id} = useParams();
    const navigate = useNavigate();
    const [movie,setMovies] = useState()
      useEffect(()=>{
        getMovieById(id)
          .then(data=>setMovies(data.movie))
          .catch(error=>console.log(error))
      },[id])
     if (!movie) {
        return <h2>Loading...</h2>;
    }

    return(
        <div className="movie-details">
            <h1>Movie details</h1>
            <img
            src={movie.image}
            alt={movie.title}
            className="movie-poster"/>
            <h2>{movie.title}</h2>
            <p>Genre : {movie.genre}</p>
            <p>Duration : {movie.duration}</p>
            <p>Language : {movie.language}</p>
            <p>Release date : {movie.release_date}</p>
            <p>Description : {movie.description}</p>
            <button onClick={()=>navigate(`/BookMyShow/shows/${movie.id}`)}>Book Now</button>
        </div>
    )
}
export default MovieDetails;