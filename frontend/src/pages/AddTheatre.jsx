import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../assets/url";



function AddTheatre() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    const addTheatre =async(e)=>{
        e.preventDefault()
        try{
            const token = localStorage.getItem("token")
            const response = await fetch(`${url}/api/theatre/`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify({
                    name:name,
                    location:location,
                })
                
            })
            const data  = await response.json();
            if (!response.ok) {
                return console.log(data.message);
            }
            alert("Theatre Added Successfully!..")

        }catch(err){
          return  console.log(err);
            
        }
        navigate("/admin/theatres")
}
return(
    <div className="Thearte">
    <h1>Theatre Form</h1>
    <form onSubmit={addTheatre}>
    <input type="text" placeholder = "Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder = "Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
    <button type="submit">Submit</button>
    </form>
    </div>

);

}

export default AddTheatre;