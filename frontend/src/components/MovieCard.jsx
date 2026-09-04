import "./Moviecard.css";
import {Link, useNavigate} from "react-router-dom"
function MovieCard({movie}){
    const navigate = useNavigate();
return(
<Link to={`/movies/${movie.id}`}>
        <div className="movie-card">
            <img
            src={movie.poster}
            alt={movie.title}
            className="movie-poster"/>
       
        <h2>{movie.title}</h2>
        <p>Genre : {movie.genre}</p>
        <p>Duration : {movie.duration}</p>
       
        <button >View Detials</button>
    </div>
</Link>
)

}
export default MovieCard;