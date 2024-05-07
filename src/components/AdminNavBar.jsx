import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function AdminNavBar() {
const navigate = useNavigate();
    const handlelogout =  (event) => {
      event.preventDefault();
      localStorage.removeItem("access-token");
      navigate("/");
    }
    

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary"
    >
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-white">
            Abarri Adult Family
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div className="ms-auto d-none d-lg-block">
            <NavLink onClick={handlelogout} className="text-white">Logout</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
