import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import ShowSelection from "./pages/ShowSelection";
import SeatSelection from "./pages/SeatSelection";
import BookingCon from "./pages/BookingCon";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingHistory from "./pages/BookingHistory";

import AdminDashboard from "./pages/AdminDashbord";
import AdminMovies from "./pages/AdminMovies";
import AddMovie from "./pages/AddMovies";
import EditMovie from "./pages/EditMovie";
import AdminTheatre from "./pages/AdminTheatre";
import AddTheatre from "./pages/AddTheatre";
import AdminShow from "./pages/AdminShows";
import AddShow from "./pages/AddShows";

import Show from "./pages/Shows";
import About from "./pages/AboutUs";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return (
        <div className="app">

            <Navbar />

            <main className="main-content">
                <Routes>

                    <Route path="/BookMyShow" element={<Home />} />
                    <Route path="/BookMyShow/about" element={<About />} />
                    <Route path="/BookMyShow/shows" element={<Show />} />
                    <Route path="/BookMyShow/movies/:id" element={<MovieDetails />} />
                    <Route path="/BookMyShow/shows/:movie_id" element={<ShowSelection />} />
                    <Route path="/BookMyShow/seats/:show_id" element={<SeatSelection />} />
                    <Route path="/BookMyShow/booking-success" element={<BookingCon />} />
                    <Route path="/BookMyShow/register" element={<Register />} />
                    <Route path="/BookMyShow/login" element={<Login />} />
                    <Route path="/BookMyShow/booking-history" element={<BookingHistory />} />

                    {/* Admin */}
                    <Route path="/BookMyShow/admin" element={<AdminDashboard />} />
                    <Route path="/BookMyShow/admin/movies" element={<AdminMovies />} />
                    <Route path="/BookMyShow/admin/addmovie" element={<AddMovie />} />
                    <Route path="/BookMyShow/admin/editmovie/:id" element={<EditMovie />} />
                    <Route path="/BookMyShow/admin/theatres" element={<AdminTheatre />} />
                    <Route path="/BookMyShow/admin/addtheatre" element={<AddTheatre />} />
                    <Route path="/BookMyShow/admin/shows" element={<AdminShow />} />
                    <Route path="/BookMyShow/admin/addshow" element={<AddShow />} />

                </Routes>
            </main>

            <Footer />

        </div>
    );
}

export default App;
