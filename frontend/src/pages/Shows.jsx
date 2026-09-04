
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Show() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/shows/")
            .then((res) => res.json())
            .then((data) => {
                setShows(data.shows);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="ShowMovies">
            <h1>Available Shows</h1>

            {shows.map((show) => (
                <div key={show.id}>
                    <Link to={`/movies/${show.movie_id}`}>
                        <h3>{show.Movie_title}</h3>
                        <p>{show.Theatre_name}</p>
                        <p>{show.Screen_name}</p>
                        <p>{show.show_date}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Show;

