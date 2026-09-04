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

                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shows" element={<Show />} />

                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path="/shows/:movie_id" element={<ShowSelection />} />
                    <Route path="/seats/:show_id" element={<SeatSelection />} />

                    <Route path="/booking-success" element={<BookingCon />} />

                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/booking-history" element={<BookingHistory />} />

                    {/* Admin */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/movies" element={<AdminMovies />} />
                    <Route path="/admin/addmovie" element={<AddMovie />} />
                    <Route path="/admin/editmovie/:id" element={<EditMovie />} />

                    <Route path="/admin/theatres" element={<AdminTheatre />} />
                    <Route path="/admin/addtheatre" element={<AddTheatre />} />

                    <Route path="/admin/shows" element={<AdminShow />} />
                    <Route path="/admin/addshow" element={<AddShow />} />

                </Routes>
            </main>

            <Footer />

        </div>
    );
}

export default App;
