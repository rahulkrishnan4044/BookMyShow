import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../assets/url";



function AdminShow() {
    const navigate = useNavigate()

    const [shows,setShow] = useState([])
    useEffect(()=>{
        fetch(`${url}/api/shows/`)
        .then((res)=>res.json())
        .then((data)=>{setShow(data.shows)
        }
    )
    },[])

    return(
        <div className="admshow">
            <h1>Avaliable Shows </h1>
            <button onClick={()=>navigate("/admin/addshow")}>Add Show</button>
            {shows.map((show)=>(
                <div key={show.id}>
                    <h3>{show.Movie_title}</h3>
                    <p>{show.Theatre_name}</p>
                    <p>{show.Screen_name}</p>
                    <p>{show.show_date}</p>

                </div>
            ))}
        </div>
    );
}

export default AdminShow;