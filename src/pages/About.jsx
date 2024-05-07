import Footer from "../components/Footer";
import NavrBar from "../components/NavrBar";
import TextOverlay from "../utils/TextOverlay";

function About() {
  return (
    <>
      <NavrBar></NavrBar>
      <TextOverlay
        text="About Us"
        image="assets/images/care.png"
        color={{ color: "white" }}
      />
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-lg-6">
            <h2 className="text-dark">Personal Care Services</h2>
            <ul>
              <li>Assistance with activites of daily living (ADLs) </li>
              <li>
                Medication managment and assistance with medication
                administration
              </li>
              <li>
                Mobility assistance, including help with transferring and
                positioning
              </li>
            </ul>

            <h5>Emotional and Psychological Support</h5>
            <ul>
              <li>
                Emotional support and companionship from caregivers and fellow
                residents.{" "}
              </li>
              <li>
                {" "}
                Individualized attention to emotional needs and coping
                strategies.
              </li>
              <li>Access to counseling or therapy services as needed.</li>
            </ul>

            <h5>Safety and Security</h5>
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
          </div>

          <div className="col-12 col-lg-6">
            <img
              className="img-fluid img-cover"
              src="/assets/images/house.png"
            />
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <div className="col-12 col-lg-6">
            <h2 className="text-dark">Health Care Services</h2>

            <ul>
              <li>
                Assistance with activities of daily living (ADLs) such as
                bathing
              </li>
              <li>
                Medication management assistance with medication administration
              </li>
              <li>
                Mobility assistance, including help with transferring and
                positioning
              </li>
            </ul>

            <h5>Nutritional Support</h5>

            <ul>
              <li>
                {" "}
                Meal planning and preparation based on individual dietary needs
                and preferences.
              </li>
              <li>Assistance with feeding if needed.</li>
              <li>Snacks and hydration support throughout the day.</li>
            </ul>

            <h5>Family Support and Communication</h5>

            <ul>
              <li>
                Regular communication with families regarding residents'
                well-being and care plans.
              </li>
              <li>
                Family involvement in care planning and decision-making
                processes.
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-6">
            <img
              className="img-fluid img-cover"
              src="/assets/images/help.png"
            />
          </div>
        </div>
        <hr />

        <div className="row mb-3 ">
          <div className="col-12 col-lg-6 my-1">
            <img
              className="img-fluid img-cover"
              src="/assets/images/big-house.png"
            />
          </div>

          <div className="col-12 col-lg-6 my-1">
            <img
              className="img-fluid img-cover"
              src="/assets/images/help.png"
            />
          </div>
        </div>
        <hr />
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
