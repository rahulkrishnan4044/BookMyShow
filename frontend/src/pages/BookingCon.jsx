import { useLocation, useNavigate } from "react-router-dom"


function BookingCon() {
    
    const {state} = useLocation();
    const navigate = useNavigate();



    return(
    <div className="BookingSucess">
        <h1>Booking Confirmed</h1>
        <h2>Booking Successful</h2>
        <p>Booking ID :<strong>{state?.booking_id}</strong></p>
        <p>Total : ${state?.total}</p>
        <p>seat number : {state?.seats.join(", ")}</p>
        <p>Thanking you for booking your tickets</p>
        <button onClick={()=>navigate("/BookMyShow")}>Home</button>
        <button onClick={()=>navigate("/BookMyShow/booking-history")}>Go to Booking History</button>
        </div>
    )
}

export default BookingCon