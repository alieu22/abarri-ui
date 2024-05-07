import NavrBar from "../components/NavrBar";
import Footer from "../components/Footer";
import TextOverlay from "../utils/TextOverlay";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Locations() {
  return (
    <>
      <NavrBar></NavrBar>
      <TextOverlay
        text="Locations"
        image="/assets/images/locations-logo.png"
        color={{ color: "white" }}
      />
      <div className="container">
        <div className="card flex-row flex-wrap">
          <div className="card-header border-0 col-12 col-lg-6 ">
            <img
              src="/assets/images/location-img.png"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="card-block px-2 col-12 col-lg-6">
            <h2 className="card-title text-center">Services</h2>
            <p className="card-text">
              Welcome to our adult family home! With two cozy locations in
              Everett and Snohomish, we offer personalized care in a warm
              environment.
            </p>
            <p className="card-text">
              Whether you're in need of assisted living, memory care, or just a
              comforting retreat, our dedicated team is here for you. Come
              experience the comfort and convenience of our two welcoming homes!
            </p>
            <hr />
            <h5 className="card-title text-primary">
              Social & Recreational Activities
            </h5>
            <ul>
              <li>
                Organize social and recreational activities tailored to
                residents' interests and abilities
              </li>
              <li>Group outings and community involvement opportunities.</li>
              <li>
                Mental stimulation activites, such as games, puzzles, and
                crafts.
              </li>
            </ul>
            <h5 className="card-title text-primary">
              Housekeeping and Laundry Services
            </h5>
            <ul>
              <li>
                Housekeeping services including cleaning of resident rooms and
                common areas
              </li>
              <li>
                Laundry services for residents' personal clothing and linens
              </li>
            </ul>
            <h5 className="card-title text-primary">Safety and Security</h5>
            <ul>
              <li>
                24-hour supervision and monitoring to ensure residents' safety.
              </li>
              <li>Emergency response systems and procedures in place.</li>
              <li>
                Fall prevention measures and assistance with mobility to reduce
                the risk of accidents.
              </li>
            </ul>
            <h5 className="card-title text-primary">Transportation Services</h5>
            <ul>
              <li>
                Transportation arrangements for medical appointments, errands,
                and outings.
              </li>
              <li>
                Accessible transportation options for residents with mobility
                challenges.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2 text-center mt-4">
            <h1 className="text-dark">Our Locations</h1>
            <p className="text-left">
              Different services are provided at our locations with a focus on promoting independence, dignity, and overall well-being for the residents in the adult family home.
            </p>

            <p className="text-left">
              <strong className="text-danger">NOTE:</strong> We also provide{" "}
              <strong className="text-warning">Private Duty Nursing</strong> at some of our locations.
              These locations are:
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-6">
            <div className="card">
              <img
                className="img-fluid img-cover"
                src="/assets/images/location-1.png"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong className="text-dark">ADDRESS:</strong> 10317 Holly DR Everett, WA 98204
                </h5>
                <Link to="/locations/location1">
                  <Button variant="primary">Learn More</Button>
                </Link>{" "}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card">
              <img
                className="img-fluid img-cover"
                src="/assets/images/location-2.png"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong className="text-dark">ADDRESS:</strong> 2818 130th Pl SE, Everett WA, 98208
                </h5>
                <Link to="/locations/location2">
                  <Button variant="primary">Learn More</Button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5"></div>
      <Footer></Footer>
    </>
  );
}

export default Locations;
