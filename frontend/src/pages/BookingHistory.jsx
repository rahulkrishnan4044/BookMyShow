import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingHistory() {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        
        const getBooking = async () => {
            const token = localStorage.getItem("token");

            try {
                const response = await fetch(
                    "http://localhost:5000/api/booking/id",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    console.log(data.message);
                    return;
                }

                console.log(data);
                setBookings(data.booking);

            } catch (error) {
                console.log(error);
            }
        };

        getBooking();
    }, []); 

const cancelBooking = async(id)=>{
    try{
         
        const token = localStorage.getItem("token");
        
            const response =  await fetch(`http://localhost:5000/api/booking/cancelbooking/${id}`,
                {
                    method:"PUT",
                    headers:{Authorization:`Bearer ${token}`}
                }
            )
            const data = await response.json();
             if (!response.ok) {
                return alert(data.message);
             }
             alert("Booking Cancelled Successfully!!!...")
              window.location.reload();
             console.log(data);
             
    }catch(error){
        console.log(error);
        
    }


}

    return (
        <div className="BookingHistory">
            <h1>Booking History</h1>

            {bookings.length === 0 ? (
                <p>No history</p>
            ) : (
                bookings.map((booking) => (
                    <div key={booking.booking_id}>
                        <span>Booking ID: {booking.booking_id}</span>
                        <h3>  {booking.Movie}</h3>
                        <p>Status: {booking.status}</p>
                        <p>Total: ₹{booking.total}</p>
                        <button onClick={()=>cancelBooking(booking.booking_id)}
                            disabled={booking.status ==="cancelled"}
                            >Cancel</button>
                    </div>
                ))
            )}
            <button onClick={()=>navigate("/")}>Home</button>
        </div>
    );
}

export default BookingHistory;
