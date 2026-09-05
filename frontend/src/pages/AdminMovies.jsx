import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../assets/url";

function AdminMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${url}/api/movies`)
      .then((res) => res.json())
      .then((data) => {setMovies(data);})
      .catch((error) => console.log(error));
  }, []);
  
const navigate=useNavigate();

const Delmovie = async(id)=>{

  try {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:5000/api/movies",{
      method:"DELETE",
      headers:{
        Authorization:`Bearer ${token}`,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:id,
      })

    })
    const data = await response.json();
    if (!response.ok) {
      console.log(data.message);
      
    }
    alert("Movie Removed Successfully!..")
  }catch(err){
    console.log(err);
  }
  window.location.reload();
}
  return (
    <div className="admov">
      <h1>Manage Movies</h1>
      <button onClick={()=>navigate("/BookMyShow/admin/addmovie")}>Add Movie</button>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <button onClick={()=>navigate(`/BookMyShow/admin/editmovie/${movie.id}`)}>Edit</button>
          <button onClick={()=>Delmovie(movie.id)} >Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminMovies;
