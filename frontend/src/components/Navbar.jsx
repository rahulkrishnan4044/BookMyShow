
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const isLogin = localStorage.getItem("IsLogin") === "true";

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("IsLogin");

        navigate("/BookMyShow/login");
    };

    return (
        <nav className="navbar">

            <h1>BookMyShow</h1>

            <div className="navbar-links">
                <Link to="/BookMyShow">Home</Link>
                <Link to="/BookMyShow/booking-history">Bookings</Link>
                <Link to="/BookMyShow/shows">Shows</Link>
                <Link to="/BookMyShow/about">About Us</Link>

                {isLogin ? (
                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <Link className="login-btn" to="/BookMyShow/login">
                        Login
                    </Link>
                )}
            </div>

        </nav>
    );
}

export default Navbar;
