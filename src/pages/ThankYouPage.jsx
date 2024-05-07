import React from "react";
import NavBar from "../components/NavrBar";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaReply } from "react-icons/fa";

function ThankYouPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <div className="row d-flex align-items-center text-center">
          <div className="col-12 col-lg-12 my-5">
            <h2>
              Thank you for contacting us we will get back to you as soon as
              possible!{" "}
            </h2>
            <img src="src/assets/images/Thanks.png" />
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 d-flex justify-content-end ">
            <Link to={"/"}>
              {" "}
              <Button variant="primary">Back {" "} <FaReply /></Button>
              
            </Link>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ThankYouPage;
