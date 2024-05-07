import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const pages = ['Home', 'About', 'Locations', 'Contact'];

  return (
    <nav className="navbar navbar-expand-lg bg-primary text-white">
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-warning" to="/">Abarri Adult Family</Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {pages.map((page) => (
              <li className="nav-item" key={page}>
                <NavLink 
                  className={({ isActive }) => isActive ? "nav-link text-warning-700 bg-warning p-2 footer-link footer-link-active" : "nav-link text-white"} 
                  to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}>
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
         
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
