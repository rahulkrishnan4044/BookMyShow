import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="Admindash">
      <h1>Admin Dashboard</h1>

      <button onClick={() => navigate("/BookMyShow/admin/movies")}>
        Manage Movies
      </button>

      <button onClick={() => navigate("/BookMyShow/admin/theatres")}>
        Manage Theatres
      </button>

      <button onClick={() => navigate("/BookMyShow/admin/shows")}>
        Manage Shows
      </button>

      
    </div>
  );
}

export default AdminDashboard;