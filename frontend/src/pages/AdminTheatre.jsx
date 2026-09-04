import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function AdminTheatre() {
    const navigate = useNavigate();
    const [theatre,setTheatre] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/theatre")
        .then((res)=>res.json())
        .then((data)=>{setTheatre(data.theatre)
            console.log(data);
            
        })
    },[]) 
    if (!theatre) {
        return(
            <p>Loading..!</p>
        )
    }   
    

    return(
       <div className="admtheat">
         <h2>Avaliable Theatres</h2>
         <button onClick={()=>navigate("/admin/addtheatre")}>Add Theatre</button>
         {theatre.map((theat)=>(
            <div key={theat.id}>
                <h3>{theat.name}</h3>
                <p>{theat.location}</p>

            </div>
         ))}
       </div>

    );
}

export default AdminTheatre;