
import { getMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard"
import { useState,useEffect } from "react";
function Home() {
const [movies,setMovies] = useState([])
  useEffect(()=>{
    getMovies()
      .then(data=>{setMovies(data)})
      .catch(error=>console.log(error))
  },[])
    return(
        <>
        
        <div className="movie-container">{movies.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))
        }
        </div>
       </>
    )
}

export default Home;