import { useState } from "react";
import { useNavigate } from "react-router-dom";



function AddShow() {
    const[movie_id,setMovie_id] = useState("")
    const[screen_id,setScreen_id] = useState("")
    const[show_date,setShow_date] = useState("")
    const[start_time,setStart_time] = useState("")
    const[end_time,setEnd_time] = useState("")

    const navigate = useNavigate()

    const ADDSHOW =async(e)=>{
        e.preventDefault()
        try{

            const token = localStorage.getItem("token");
            const res =await fetch("http://localhost:5000/api/shows",
                {
                    method:"POST",
                    headers:{
                        Authorization:`Bearer ${token}`,
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        movie_id,
                        screen_id,
                        show_date,
                        start_time,
                        end_time,
                    })
                }
            )
            const data = res.json();
            if (!res.ok) {
                return console.log(data.message);
            }



        }catch(error){
            console.log(error);
        }
        alert("Show Added Successfully!!!...")
        navigate("/admin/shows")
    }


    return(
        <div className="showsss">
            <h2>Show Detials</h2>
            <form onSubmit={ADDSHOW}>
            <input type="text" placeholder="Movie ID" value={movie_id}
             onChange={(e)=>setMovie_id(e.target.value)} />

            <input type="text" placeholder="Screen ID" value={screen_id} 
            onChange={(e)=>setScreen_id(e.target.value)} />

            <input type="date" placeholder="Show Date" value={show_date}
            onChange={(e)=>setShow_date(e.target.value)} />

            <input type="time" placeholder="Start Time" value={start_time} 
            onChange={(e)=>setStart_time(e.target.value)} />

            <input type="time" placeholder="End Time" value={end_time} 
            onChange={(e)=>setEnd_time(e.target.value)} />

            <button type="submit">Submit</button>
        </form>

        </div>

    );
}


export default AddShow;