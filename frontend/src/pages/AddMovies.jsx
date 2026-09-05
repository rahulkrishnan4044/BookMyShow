import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../assets/url";



function AddMovie() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [duration,setDuration] = useState("");
    const [language,setLanguage] = useState("");
    const [genre,setGenre] = useState("");
    const [release_date,setRelease_date] = useState("");
    const navigate=useNavigate()
    
    const addMovie=async(e)=>{
         e.preventDefault();
        if (!title||!description||!duration||!language||!genre||!release_date) {
        return console.log("Fill all column");
        
    }
        try{
            const token = localStorage.getItem("token")
            const response = await fetch(`${url}/api/movies`,
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body:JSON.stringify({
                        title:title,
                        description:description,
                        duration:duration,
                        language:language,
                        genre:genre,
                        release_date:release_date
                    })
                }
            )
        const data = await response.json();

        if (!response.ok) {
            console.log(data.message);
           return alert(data.message)
        }
        } catch(err){
           return console.log(err.message);
           
        }
        alert("Movie Added Successfully!!!.....")
        navigate("/BookMyShow/admin/movies")
    }
   

    return(

        <div className="moviescard">
            <h2>Movie Detials</h2>
            <form onSubmit={addMovie}>
            <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <input type="text" placeholder="Duration" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
            <input type="text" placeholder="Language" value={language} onChange={(e)=>setLanguage(e.target.value)}/>
            <input type="text" placeholder="Genre" value={genre} onChange={(e)=>setGenre(e.target.value)}/>
            <input type="date" placeholder="Relese Date" value={release_date} onChange={(e)=>setRelease_date(e.target.value)}/>
            <button type="submit">Submit</button>
            </form>
        </div>

    );
}
export default AddMovie;