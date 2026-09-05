import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { url } from "../assets/url";

function SeatSelection() {
    const navigate = useNavigate();
    const { show_id } = useParams();

    const [selectedSeats,setSelectedSeats] = useState([]);
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        api.get(`/availseats/${show_id}`)
            .then((res) => {
                setSeats(res.data.seats);
                console.log("API response:", res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [show_id]);

    if (seats.length === 0) {
        return <h4>Loading...!</h4>;
    }
    const selseat = (seat_id)=>{
        if (selectedSeats.includes(seat_id)) {
            setSelectedSeats(selectedSeats.filter((id)=> id !== seat_id))
            
        }
        else{
            setSelectedSeats([...selectedSeats,seat_id])
            
        }
    }

    const handlebooking =async()=>{
        try{
            const token = localStorage.getItem("token")
            const responce = await fetch(`${url}/api/booking`,
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization:`Bearer ${token}`
                    },
                    body: JSON.stringify({
                        show_id:show_id,
                        seat_ids:selectedSeats
                    })
                }
            )
            const data = await responce.json();
            if (!responce.ok) {
                alert(data.message)
                return
            }
            alert("Booking sucessfull")
            navigate(`/booking-success`,{state:data})

        }
        catch(error){
            console.log(error);
            
        }
    }

    return (
        <div className="seats">
            <h1>Select Seats</h1>

            {seats.map((seat) => (
                <button key={seat.id}
                 onClick={()=>selseat(seat.id)}
                className={selectedSeats.includes(seat.id) ? "selected" : ""}
                disabled = {seat.status == "booked"}
                >
                    <p>{seat.seat_number}</p>
                    <p>{seat.seat_type}</p>
                </button>
            ))}
            <h3>Selected seats :{selectedSeats.length}</h3>
            <button onClick={()=>handlebooking()}
            
            disabled={selectedSeats.length===0}
            >Book Now</button>
        </div>
    );

}

export default SeatSelection;