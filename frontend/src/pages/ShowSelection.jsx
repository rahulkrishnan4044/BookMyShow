import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function ShowSelection() {
    const {movie_id} = useParams();
    
    
    const navigate = useNavigate();
    const [shows,setShows] = useState([])
    useEffect (()=> {
        api.get(`/shows/${movie_id}`)
        .then((res)=>{setShows(res.data.shows)
            console.log(res.data);
            
        })
        .catch((err)=>{console.log(err);
        })
    },[movie_id]);
    if (!shows) {
        return(<p>Loading...</p>)
    }
    return(
        <>
        <h1>Select Showtime</h1>
        <div className="show-time">
            {shows.map((show)=>(
                <div key ={show.id}>
                    <h3>{show.Theatre_name}</h3>
                    <p>{show.Screen_name}</p>
                    <p>{show.show_date} - ({show.start_time}  -  {show.end_time})</p>
                    <button onClick={()=>navigate(`/seats/${show.id}`)}>Select Seats</button>
                </div>
            ))}
        </div>

        </>
    );
}

export default ShowSelection;