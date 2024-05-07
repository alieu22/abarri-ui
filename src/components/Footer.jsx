import { NavLink } from "react-router-dom";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const pages = ["Home", "About", "Locations", "Contact"];

  return (
    <footer
      className="text-center text-lg-start text-muted bg-primary"
    >
      <section className="pt-2 text-white">
        <div className="container text-center text-md-start">
          <div className="row mt-5">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Abarri Family Home
              </h6>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>

              {pages.map((page) => (
                <p key={page}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-warning-700 bg-warning footer-link footer-link-active"
                        : "nav-link text-reset"
                    }
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  >
                    {page}
                  </NavLink>
                </p>
              ))}
              {/* <p>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-warning-700 bg-warning footer-link footer-link-active"
                      : "nav-link text-reset"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </p> */}
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome /> 10317 Holly Dr, Everett WA, 98204
              </p>
              <p>
                <FaEnvelope /> fatou.jobe@abarriadultfamilyhome.com
              </p>
              <p>
                <FaPhone /> 206-554-9145
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4 footerCopyright text-white">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-reset fw-bold" href="https://mindsightmentors.org">
          MCG
        </a>
      </div>
    </footer>
  );
};

export default Footer;
